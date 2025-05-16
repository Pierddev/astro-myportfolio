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

export interface StackItem {
	logoSrc: typeof logoVSC;
	name: string;
	url: string;
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
];

export const stackOutils = [
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
	},
	{
		logoSrc: logoTrello,
		name: "Trello",
		url: "https://trello.com/fr",
	},
];

export const stackBDD = [
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

export const stackCyber = [
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
];
