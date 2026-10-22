import logoVSC from "../assets/stacks/vsc.webp";
import logoFigma from "../assets/stacks/figma.webp";
import logoGithub from "../assets/stacks/github.webp";
import logoHerd from "../assets/stacks/herd.webp";
import logoWireshark from "../assets/stacks/wireshark.webp";
import logoPycharm from "../assets/stacks/pycharm.webp";
import LogoPhpstorm from "../assets/stacks/phpstorm.webp";
import logoPhotoshop from "../assets/stacks/photoshop.webp";
import logoNotion from "../assets/stacks/notion.webp";
import logoVercel from "../assets/stacks/vercel.webp";
import logoTrello from "../assets/stacks/trello.webp";
import logoPhp from "../assets/stacks/php.webp";
import logoMysql from "../assets/stacks/mysql.webp";
import logoLaravel from "../assets/stacks/laravel.webp";
import logoAstro from "../assets/stacks/astro.webp";
import logoPython from "../assets/stacks/python.webp";
import logoJavascript from "../assets/stacks/javascript.webp";
import logoHtml from "../assets/stacks/html.webp";
import logoCss from "../assets/stacks/css.webp";
import logoTailwindcss from "../assets/stacks/tailwindcss.webp";
import logoDjango from "../assets/stacks/django.webp";
import logoTypescript from "../assets/stacks/typescript.webp";
import logoJson from "../assets/stacks/json.webp";
import logoAlpinejs from "../assets/stacks/alpinejs.webp";
import logoVirtualbox from "../assets/stacks/virtualbox.webp";
import logoPowershell from "../assets/stacks/powershell.webp";
import logoDocker from "../assets/stacks/docker.webp";
import logoPostgresql from "../assets/stacks/postgresql.webp";
import logoMongodb from "../assets/stacks/mongodb.webp";
import logoSynology from "../assets/stacks/synology.webp";
import logoSqlite from "../assets/stacks/sqlite.webp";
import logoVMware from "../assets/stacks/vmware.webp";
import logoFlask from "../assets/stacks/flask.webp";
import logoJinja from "../assets/stacks/jinja.webp"

export interface StackItem {
	logoSrc: typeof logoVSC;
	name: string;
	url: string;
	// Logo sombre, illisible sur le fond de la page : on l'inverse en CSS (filter: invert(1))
	invert?: boolean;
}

export interface StackCategory {
	id: string;
	title: string;
	// Libellé du bouton de filtre, plus court que le titre quand celui-ci est long
	shortTitle: string;
	// Couleur du point lumineux (filtre et en-tête de carte)
	color: string;
	items: StackItem[];
}

export const stackLangages: StackItem[] = [
	{
		logoSrc: logoPhp,
		name: "PHP",
		url: "https://www.php.net/",
	},
	{
		logoSrc: logoLaravel,
		name: "Laravel",
		url: "https://laravel.com/",
	},
	{
		logoSrc: logoAstro,
		name: "Astro",
		url: "https://astro.build/",
	},
	{
		logoSrc: logoPython,
		name: "Python",
		url: "https://www.python.org/",
	},
	{
		logoSrc: logoJavascript,
		name: "JavaScript",
		url: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
	},
	{
		logoSrc: logoHtml,
		name: "HTML",
		url: "https://developer.mozilla.org/fr/docs/Web/HTML",
	},
	{
		logoSrc: logoCss,
		name: "CSS",
		url: "https://developer.mozilla.org/fr/docs/Web/CSS",
	},
	{
		logoSrc: logoTailwindcss,
		name: "TailwindCSS",
		url: "https://tailwindcss.com/",
	},
	{
		logoSrc: logoDjango,
		name: "Django",
		url: "https://www.djangoproject.com/",
	},
	{
		logoSrc: logoTypescript,
		name: "TypeScript",
		url: "https://www.typescriptlang.org/",
	},
	{
		logoSrc: logoJson,
		name: "JSON",
		url: "https://www.json.org/json-fr.html",
	},
	{
		logoSrc: logoAlpinejs,
		name: "AlpineJS",
		url: "https://alpinejs.dev/",
	},
	{
		logoSrc: logoPowershell,
		name: "PowerShell",
		url: "https://learn.microsoft.com/fr-fr/powershell/scripting/overview?view=powershell-7.5",
	},
	{
		logoSrc: logoFlask,
		name: "Flask",
		url: "https://flask.palletsprojects.com/en/stable/",
	},
	{
		logoSrc: logoJinja,
		name: "Jinja",
		url: "https://jinja.palletsprojects.com/en/stable/",
	},
];

export const stackOutils: StackItem[] = [
	{
		logoSrc: logoVSC,
		name: "Visual Studio Code",
		url: "https://code.visualstudio.com/",
	},
	{
		logoSrc: logoFigma,
		name: "Figma",
		url: "https://www.figma.com/fr-fr/",
	},
	{
		logoSrc: logoGithub,
		name: "GitHub",
		url: "https://github.com/",
	},
	{
		logoSrc: logoHerd,
		name: "Herd",
		url: "https://herd.laravel.com/",
	},
	{
		logoSrc: logoPycharm,
		name: "PyCharm",
		url: "https://www.jetbrains.com/pycharm/",
	},
	{
		logoSrc: LogoPhpstorm,
		name: "PhpStorm",
		url: "https://www.jetbrains.com/phpstorm/",
	},
	{
		logoSrc: logoPhotoshop,
		name: "Photoshop",
		url: "https://www.adobe.com/fr/products/photoshop.html",
	},
	{
		logoSrc: logoNotion,
		name: "Notion",
		url: "https://www.notion.com/fr",
	},
	{
		logoSrc: logoVercel,
		name: "Vercel",
		url: "https://vercel.com/",
		invert: true,
	},
	{
		logoSrc: logoTrello,
		name: "Trello",
		url: "https://trello.com/fr",
	},
];

export const stackBDD: StackItem[] = [
	{
		logoSrc: logoMysql,
		name: "MySQL",
		url: "https://www.mysql.com/fr/",
	},
	{
		logoSrc: logoSqlite,
		name: "SQLite",
		url: "https://www.sqlite.org/",
	},
	{
		logoSrc: logoSynology,
		name: "Synology",
		url: "https://www.synology.com/fr-fr",
		invert: true,
	},
	{
		logoSrc: logoPostgresql,
		name: "PostgreSQL",
		url: "https://www.postgresql.org/",
	},
	{
		logoSrc: logoMongodb,
		name: "MongoDB",
		url: "https://www.mongodb.com/",
	},
	{
		logoSrc: logoDocker,
		name: "Docker",
		url: "https://www.docker.com/",
	},
];

export const stackCyber: StackItem[] = [
	{
		logoSrc: logoWireshark,
		name: "Wireshark",
		url: "https://www.wireshark.org/",
	},
	{
		logoSrc: logoVirtualbox,
		name: "VirtualBox",
		url: "https://www.virtualbox.org/",
	},
	{
		logoSrc: logoVMware,
		name: "VMware",
		url: "https://vmware.com/",
	},
];

// Catégories de la page Stack, dans l'ordre d'affichage. Les listes ci-dessus restent
// exportées séparément : l'accueil n'en affiche qu'une sélection.
export const stackCategories: StackCategory[] = [
	{
		id: "languages",
		title: "Langages & Frameworks",
		shortTitle: "Langages & Frameworks",
		color: "#8ab4f8",
		items: stackLangages,
	},
	{
		id: "tools",
		title: "Outils de développement",
		shortTitle: "Outils",
		color: "#b39ddb",
		items: stackOutils,
	},
	{
		id: "databases",
		title: "Base de données & Serveurs",
		shortTitle: "BDD & Serveurs",
		color: "#6ee7b7",
		items: stackBDD,
	},
	{
		id: "security",
		title: "Cybersécurité & Réseau",
		shortTitle: "Cybersécurité & Réseau",
		color: "#f0abfc",
		items: stackCyber,
	},
];

// Sélection de l'accueil : quelques technos par catégorie, retrouvées par leur nom.
// Un nom introuvable fait échouer le build plutôt que d'afficher une puce vide.
function pick(items: StackItem[], names: string[]): StackItem[] {
	return names.map((name) => {
		const item = items.find((candidate) => candidate.name === name);
		if (!item) throw new Error(`Techno introuvable dans la stack : ${name}`);
		return item;
	});
}

export const stackHighlights: { title: string; items: StackItem[] }[] = [
	{
		title: "Langages & Frameworks",
		items: pick(stackLangages, ["PHP", "Laravel", "Astro", "Python", "JavaScript"]),
	},
	{
		title: "Base de données & Serveurs",
		items: pick(stackBDD, ["MySQL", "PostgreSQL", "Docker"]),
	},
	{
		title: "Cybersécurité & Réseau",
		items: pick(stackCyber, ["Wireshark", "VMware"]),
	},
	{
		title: "Outils",
		items: pick(stackOutils, ["Figma", "GitHub", "PyCharm"]),
	},
];
