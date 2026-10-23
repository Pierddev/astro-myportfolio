// npm run logos : récupère le logo des technos de src/content/stack.yaml qui n'en ont pas encore.
//
// Pour chaque techno sans « logo: », le script cherche le logo par son nom (ou par « icone: »
// s'il est renseigné) dans devicon (logos officiels en couleurs), sinon dans Simple Icons
// (silhouette dans la couleur de la marque). Il enregistre le SVG dans src/assets/stacks/,
// puis écrit « logo: » dans le YAML, et « inverser: true » si le logo est trop sombre pour le
// fond du site. Le reste du fichier (commentaires, ordre) n'est pas modifié.
// Relancer le script est sans risque : les technos qui ont déjà un logo sont ignorées.

import { readFile, writeFile } from "node:fs/promises";
import { load } from "js-yaml";
import sharp from "sharp";

const STACK_FILE = new URL("../src/content/stack.yaml", import.meta.url);
const LOGOS_DIR = new URL("../src/assets/stacks/", import.meta.url);
const LOGO_PATH = (file) => `../assets/stacks/${file}`;

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest";
const SIMPLE_ICONS = "https://cdn.jsdelivr.net/npm/simple-icons@latest";

// Variantes devicon, par ordre de préférence : le logo seul, sans le nom de la marque
const DEVICON_VARIANTS = ["original", "plain"];

// En dessous de cette luminosité moyenne (0 = noir, 1 = blanc), un logo gris ou noir est inversé
const DARK_LUMINANCE = 0.2;

// « Visual Studio Code » → « visualstudiocode », « Node.js » → « nodejs »
const normalize = (name) =>
	name
		.normalize("NFD")
		.toLowerCase()
		.replace(/[^a-z0-9]/g, "");

// Variantes tolérées en plus du nom exact : sans numéro de version (html5 → html) et sans le
// suffixe « js » (nuxtjs → nuxt)
const loose = (name) => normalize(name).replace(/\d+$/, "").replace(/js$/, "");

async function fetchOk(url, as) {
	const response = await fetch(url);
	if (!response.ok) throw new Error(`${url} : HTTP ${response.status}`);
	return as === "json" ? response.json() : response.text();
}

// --- Lecture du YAML ------------------------------------------------------------------------

// Repère, ligne par ligne, chaque techno (« - nom: ... ») et les lignes de son bloc, pour pouvoir
// y insérer « logo: » sans réécrire le fichier.
function findTechnos(lines) {
	const technos = [];
	lines.forEach((line, index) => {
		const match = line.match(/^(\s*)- nom:\s*(.+?)\s*$/);
		if (!match) return;

		const indent = match[1].length;
		let end = index + 1;
		while (end < lines.length) {
			const next = lines[end];
			const nextIndent = next.search(/\S/);
			if (nextIndent !== -1 && nextIndent <= indent) break;
			end++;
		}

		const block = lines.slice(index, end);
		const field = (key) => {
			const found = block.find((l) => l.trim().startsWith(`${key}:`));
			return found === undefined ? undefined : String(load(found.trim().slice(key.length + 1)) ?? "");
		};

		technos.push({
			nom: String(load(match[2])),
			line: index,
			end,
			fieldIndent: " ".repeat(indent + 2),
			logo: field("logo"),
			icone: field("icone"),
			inverser: field("inverser"),
		});
	});
	return technos;
}

// --- Recherche du logo ----------------------------------------------------------------------

function findLogo({ nom, icone }, devicon, simpleIcons) {
	// icone : nom exact dans devicon, éventuellement suivi d'une variante (« astro-plain »),
	// ou slug exact dans Simple Icons. Quand les deux sources ont le même nom, devicon l'emporte :
	// le préfixe « simple-icons: » (ou « devicon: ») impose la source.
	if (icone) {
		const [, prefix, name] = icone.match(/^(?:(devicon|simple-icons):)?(.+)$/);
		if (prefix !== "simple-icons") {
			const dev = devicon.find((icon) => icon.name === name);
			if (dev) return { source: "devicon", icon: dev };
			for (const icon of devicon) {
				const variant = name.slice(icon.name.length + 1);
				if (name.startsWith(`${icon.name}-`) && icon.versions.svg.includes(variant)) {
					return { source: "devicon", icon, variant };
				}
			}
		}
		if (prefix !== "devicon") {
			const simple = simpleIcons.find((icon) => icon.slug === name);
			if (simple) return { source: "simple-icons", icon: simple };
		}
		return { candidates: suggestions(name, devicon, simpleIcons) };
	}

	const sources = [
		{ source: "devicon", icons: devicon, names: (icon) => [icon.name, ...(icon.altnames ?? [])], id: (icon) => icon.name },
		{ source: "simple-icons", icons: simpleIcons, names: (icon) => [icon.title, icon.slug, ...(icon.aliases?.aka ?? [])], id: (icon) => icon.slug },
	];

	// devicon d'abord (logo en couleurs), puis Simple Icons ; dans chacun, nom exact puis variantes
	// tolérées. Plusieurs logos pour un même nom : on ne devine pas, on liste les candidats.
	for (const { source, icons, names, id } of sources) {
		for (const compare of [normalize, loose]) {
			const key = compare(nom);
			const matches = icons.filter((icon) => names(icon).some((name) => compare(name) === key));
			if (matches.length === 1) return { source, icon: matches[0] };
			if (matches.length > 1) return { candidates: matches.map(id) };
		}
	}
	return { candidates: suggestions(nom, devicon, simpleIcons) };
}

// Noms proches, pour aider à renseigner « icone: »
function suggestions(name, devicon, simpleIcons) {
	const key = loose(name);
	const all = [...devicon.map((icon) => icon.name), ...simpleIcons.map((icon) => icon.slug)];
	return [...new Set(all.filter((candidate) => key && (loose(candidate).includes(key) || key.includes(loose(candidate)))))]
		.filter((candidate) => loose(candidate).length > 1)
		.slice(0, 8);
}

async function downloadSvg({ source, icon, variant: chosen }) {
	if (source === "devicon") {
		const variant = chosen ?? DEVICON_VARIANTS.find((v) => icon.versions.svg.includes(v)) ?? icon.versions.svg[0];
		const svg = await fetchOk(`${DEVICON}/icons/${icon.name}/${icon.name}-${variant}.svg`);
		return { file: `${icon.name}.svg`, svg };
	}
	// Simple Icons fournit des silhouettes sans couleur : on applique celle de la marque
	const svg = await fetchOk(`${SIMPLE_ICONS}/icons/${icon.slug}.svg`);
	return { file: `${icon.slug}.svg`, svg: svg.replace("<svg ", `<svg fill="#${icon.hex}" `) };
}

// Luminosité moyenne (pondérée par l'opacité) et saturation moyenne des pixels visibles du logo
async function measure(svg) {
	const { data } = await sharp(Buffer.from(svg), { density: 144 })
		.resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.ensureAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true });

	let weight = 0;
	let luminance = 0;
	let chroma = 0;
	for (let i = 0; i < data.length; i += 4) {
		const [r, g, b] = [data[i], data[i + 1], data[i + 2]].map((v) => v / 255);
		const alpha = data[i + 3] / 255;
		weight += alpha;
		luminance += alpha * (0.2126 * r + 0.7152 * g + 0.0722 * b);
		chroma += alpha * (Math.max(r, g, b) - Math.min(r, g, b));
	}
	return { luminance: luminance / weight, chroma: chroma / weight };
}

// --- Programme ------------------------------------------------------------------------------

const text = await readFile(STACK_FILE, "utf-8");
const eol = text.includes("\r\n") ? "\r\n" : "\n";
const lines = text.split(/\r?\n/);
const technos = findTechnos(lines);

// Garde-fou : la lecture ligne par ligne doit retrouver toutes les technos du YAML
const expected = load(text).flatMap((category) => category.technos.map((techno) => techno.nom));
if (expected.length !== technos.length) {
	throw new Error(`stack.yaml : ${expected.length} technos attendues, ${technos.length} repérées. Vérifier l'indentation.`);
}

const missing = technos.filter((techno) => !techno.logo);
if (missing.length === 0) {
	console.log("Toutes les technos ont déjà un logo.");
	process.exit(0);
}

console.log(`${missing.length} logo(s) à récupérer…`);
const [devicon, simpleIconsData] = await Promise.all([
	fetchOk(`${DEVICON}/devicon.json`, "json"),
	fetchOk(`${SIMPLE_ICONS}/data/simple-icons.json`, "json"),
]);
const simpleIcons = Array.isArray(simpleIconsData) ? simpleIconsData : simpleIconsData.icons;

const failures = [];
const warnings = [];
const inserts = [];

for (const techno of missing) {
	const found = findLogo(techno, devicon, simpleIcons);
	if (!found.icon) {
		failures.push({ techno, candidates: found.candidates });
		continue;
	}

	const { file, svg } = await downloadSvg(found);
	await writeFile(new URL(file, LOGOS_DIR), svg);

	const { luminance, chroma } = await measure(svg);
	const dark = luminance < DARK_LUMINANCE;
	// Inverser un logo coloré changerait sa couleur (rouge → cyan) : seuls les logos gris ou noirs le sont
	const invert = dark && chroma < 0.15 && techno.inverser === undefined;
	if (dark && !invert && techno.inverser === undefined) warnings.push(`${techno.nom} : logo sombre et coloré, peu lisible sur le fond du site`);

	const added = [`${techno.fieldIndent}logo: ${LOGO_PATH(file)}`];
	if (invert) added.push(`${techno.fieldIndent}inverser: true`);
	// Insertion après la ligne « url: » si elle existe, sinon juste après « nom: »
	const urlLine = lines.slice(techno.line, techno.end).findIndex((l) => l.trim().startsWith("url:"));
	inserts.push({ at: techno.line + (urlLine === -1 ? 1 : urlLine + 1), added });

	console.log(`  ✓ ${techno.nom} → ${file} (${found.source}${invert ? ", inversé" : ""})`);
}

// Insertions du bas vers le haut, pour ne pas décaler les lignes restantes
for (const { at, added } of inserts.sort((a, b) => b.at - a.at)) lines.splice(at, 0, ...added);
await writeFile(STACK_FILE, lines.join(eol));

for (const warning of warnings) console.warn(`  ! ${warning}`);

if (failures.length > 0) {
	console.error(`\n${failures.length} logo(s) introuvable(s) :`);
	for (const { techno, candidates } of failures) {
		const hint = candidates.length > 0 ? `essayer « icone: ${candidates[0]} » (proches : ${candidates.join(", ")})` : "aucun logo proche : déposer le fichier à la main et renseigner « logo: »";
		console.error(`  ✗ ${techno.nom}${techno.icone ? ` (icone: ${techno.icone})` : ""} : ${hint}`);
	}
	process.exit(1);
}
