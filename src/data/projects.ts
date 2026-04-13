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
import shopJO from "../assets/project-shopjo.webp";
import myPortfolio from "../assets/project-portfolio.webp";
import tableauMission from "../assets/project-tableaumission.webp";
import SioDash from "../assets/project-siodash.webp";
import SuperviseurDossiers from "../assets/project-superviseurdossiers.webp";
import logoFlask from "../assets/stacks/flask.webp";
import logoJinja from "../assets/stacks/jinja.webp"

export interface ProjectItem {
	project: {
		title: string;
		url: string;
		thumbnail: typeof myPortfolio;
		items: {
			name: string;
			logoSrc: typeof logoAstro;
			colorName: string;
		}[];
	}[];
}

export const MyProjects: ProjectItem = {
	project: [
		{
			title: "Superviseur Dossiers",
			url: "https://github.com/Pierddev/SuperviseurDossiers",
			thumbnail: SuperviseurDossiers,
			items: [
				{
					name: "Python",
					logoSrc: logoPython,
					colorName: "python",
				},
				{
					name: "MySQL",
					logoSrc: logoMysql,
					colorName: "pycharm",
				},
				{
					name: "GitHub",
					logoSrc: logoGithub,
					colorName: "github",
				},
			],
		},
		{
			title: "SioDash",
			url: "https://siodash.fr/",
			thumbnail: SioDash,
			items: [
				{
					name: "Flask",
					logoSrc: logoFlask,
					colorName: "django",
				},
				{
					name: "Jinja",
					logoSrc: logoJinja,
					colorName: "figma",
				},
				{
					name: "Vercel",
					logoSrc: logoVercel,
					colorName: "github",
				},
				{
					name: "PostgreSQL",
					logoSrc: logoPostgresql,
					colorName: "tailwindcss",
				},
			],
		},
		{
			title: "Mon Portfolio",
			url: "https://github.com/Pierddev/astro-myportfolio",
			thumbnail: myPortfolio,
			items: [
				{
					name: "Astro",
					logoSrc: logoAstro,
					colorName: "astro",
				},
				{
					name: "GitHub",
					logoSrc: logoGithub,
					colorName: "github",
				},
				{
					name: "TailwindCSS",
					logoSrc: logoTailwindcss,
					colorName: "tailwindcss",
				},
				{
					name: "Figma",
					logoSrc: logoFigma,
					colorName: "figma",
				},
			],
		},
		{
			title: "Billetterie JO 2024 - Studi",
			url: "https://github.com/Pierddev/studi-billetterie-jo2024",
			thumbnail: shopJO,
			items: [
				{
					name: "Django",
					logoSrc: logoDjango,
					colorName: "django",
				},
				{
					name: "Python",
					logoSrc: logoPython,
					colorName: "python",
				},
				{
					name: "PyCharm",
					logoSrc: logoPycharm,
					colorName: "pycharm",
				},
				{
					name: "Trello",
					logoSrc: logoTrello,
					colorName: "trello",
				},
			],
		},
	],
};