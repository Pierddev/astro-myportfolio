import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { defineCollection } from "astro:content";
import type { Loader } from "astro/loaders";
import { z } from "astro/zod";
import { load } from "js-yaml";

// Contenu éditable du site : chaque fichier YAML de src/content/ est une liste, dans l'ordre d'affichage.
// Le mode d'emploi (ajouter, désactiver, mettre en avant) est dans le README.

// Charge une liste YAML : chaque élément devient une entrée, identifiée par sa position dans le fichier
// (à partir de 1, pour qu'un message d'erreur « experiences → 4 » désigne bien la 4ᵉ entrée).
// Le loader file() d'Astro se contente de loguer une erreur de syntaxe et laisse la collection vide :
// celui-ci fait échouer le build, pour ne jamais publier une page vidée par une faute de frappe.
function yamlList(fileName: string): Loader {
	return {
		name: "yaml-list",
		load: async ({ config, store, parseData, logger, watcher }) => {
			const filePath = fileURLToPath(new URL(fileName, config.root));

			async function sync() {
				const items = load(await readFile(filePath, "utf-8"), { filename: fileName });
				if (!Array.isArray(items) || items.length === 0) {
					throw new Error(`${fileName} doit contenir une liste non vide (lignes commençant par « - »).`);
				}

				store.clear();
				for (const [index, item] of items.entries()) {
					const id = String(index + 1);
					// filePath : les chemins des logos (image()) sont résolus depuis le fichier YAML
					const data = await parseData({ id, data: item, filePath });
					store.set({ id, data, filePath: fileName });
				}
			}

			await sync();
			watcher?.add(filePath);
			watcher?.on("change", (changedPath) => {
				if (changedPath !== filePath) return;
				sync().catch((error: Error) => logger.error(error.message));
			});
		},
	};
}

// Mois au format AAAA-MM. YAML le lit comme du texte : « 2025-09 » reste « 2025-09 ».
const month = z
	.string()
	.regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Date attendue au format AAAA-MM, par exemple 2025-09");

// Pas de fin = en cours ; la fin, si elle existe, ne peut pas précéder le début
const period = { debut: month, fin: month.optional() };
const validPeriod = ({ debut, fin }: { debut: string; fin?: string }) => !fin || fin >= debut;
const invalidPeriod = { message: "La date de fin précède la date de début", path: ["fin"] };

const stack = defineCollection({
	loader: yamlList("src/content/stack.yaml"),
	schema: ({ image }) =>
		z.object({
			id: z.string(),
			titre: z.string(),
			titreCourt: z.string(),
			couleur: z.string().regex(/^#[0-9a-f]{6}$/i, "Couleur attendue au format #rrggbb"),
			technos: z.array(
				z
					.object({
						nom: z.string(),
						url: z.url(),
						// Absent tant que « npm run logos » n'est pas passé (voir scripts/logos.mjs)
						logo: image().optional(),
						// Indication pour npm run logos quand le nom ne suffit pas à trouver le logo
						icone: z.string().optional(),
						inverser: z.boolean().default(false),
						accueil: z.boolean().default(false),
						actif: z.boolean().default(true),
					})
					.transform(({ logo, ...techno }, ctx) => {
						if (!logo) {
							ctx.addIssue({
								code: "custom",
								message: `Logo manquant pour ${techno.nom} : lancer « npm run logos »`,
								path: ["logo"],
							});
							return z.NEVER;
						}
						return { ...techno, logo };
					}),
			),
		}),
});

const experiences = defineCollection({
	loader: yamlList("src/content/experiences.yaml"),
	schema: ({ image }) =>
		z
			.object({
				...period,
				poste: z.string(),
				entreprise: z.string(),
				lieu: z.string(),
				logo: image(),
				logoAlt: z.string(),
				missions: z.array(z.object({ titre: z.string(), description: z.string() })),
				actif: z.boolean().default(true),
			})
			.refine(validPeriod, invalidPeriod),
});

const formations = defineCollection({
	loader: yamlList("src/content/formations.yaml"),
	schema: z
		.object({
			...period,
			formation: z.string(),
			ecole: z.string(),
			lieu: z.string(),
			actif: z.boolean().default(true),
		})
		.refine(validPeriod, invalidPeriod),
});

export const collections = { stack, experiences, formations };
