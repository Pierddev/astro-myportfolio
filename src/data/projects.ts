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
import shopJO from "../assets/project-shopjo.webp"
import myPortfolio from "../assets/project-portfolio.webp"

export interface ProjectItem {
	title: string;
	url: string;
    thumbnail: typeof myPortfolio;
	items: {
		logoSrc: typeof logoAstro;
		name: string;
		colorName: string;
	}[];
}

export const ProjectMyPortfolio: ProjectItem = {
	title: "Billetterie JO 2024 - Studi",
	url: "https://github.com/Pierddev/studi-billetterie-jo2024",
    thumbnail: myPortfolio,
	items: [
		{
			logoSrc: logoAstro,
			name: "Astro",
			colorName: "astro",
		},
		{
			logoSrc: logoGithub,
			name: "GitHub",
			colorName: "github",
		},
		{
			logoSrc: logoTailwindcss,
			name: "TailwindCSS",
			colorName: "tailwindcss",
		},
		{
			logoSrc: logoFigma,
			name: "Figma",
			colorName: "figma",
		}
	]
};

export const ProjectShopJO2024: ProjectItem = {
	title: "Mon Portfolio",
	url: "https://github.com/Pierddev/astro-myportfolio",
    thumbnail: shopJO,
	items: [
		{
			logoSrc: logoDjango,
			name: "Django",
			colorName: "django",
		},
		{
			logoSrc: logoPython,
			name: "Python",
			colorName: "python",
		},
		{
			logoSrc: logoPycharm,
			name: "PyCharm",
			colorName: "pycharm",
		},
		{
			logoSrc: logoTrello,
			name: "Trello",
			colorName: "trello",
		},
	],
};
