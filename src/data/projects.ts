import logoFigma from "../assets/stacks/figma.webp";
import logoGithub from "../assets/stacks/github.webp";
import logoPycharm from "../assets/stacks/pycharm.webp";
import logoVercel from "../assets/stacks/vercel.webp";
import logoTrello from "../assets/stacks/trello.webp";
import logoMysql from "../assets/stacks/mysql.webp";
import logoAstro from "../assets/stacks/astro.webp";
import logoPython from "../assets/stacks/python.webp";
import logoTailwindcss from "../assets/stacks/tailwindcss.webp";
import logoDjango from "../assets/stacks/django.webp";
import logoPostgresql from "../assets/stacks/postgresql.webp";
import logoFlask from "../assets/stacks/flask.webp";
import logoJinja from "../assets/stacks/jinja.webp";
import shopJO from "../assets/project-shopjo.webp";
import myPortfolio from "../assets/project-portfolio.webp";
import SioDash from "../assets/project-siodash.webp";
import SuperviseurDossiers from "../assets/project-superviseurdossiers.webp";

// Une techno affichée en badge (TechBadge) sous la description du projet
export interface ProjectTech {
	name: string;
	logoSrc: ImageMetadata;
	colorName: string;
	invert?: boolean;
}

// linkType : "live" pour un site en ligne (« En ligne », « Voir le site »),
// "source" pour un dépôt GitHub (« Code source », « Voir sur GitHub »).
// domain : nom de domaine affiché sur l'accueil, pour un projet en ligne.
// featured : projet mis en avant (badge « À la une »).
export interface Project {
	title: string;
	description: string;
	url: string;
	linkType: "live" | "source";
	domain?: string;
	featured?: boolean;
	thumbnail: ImageMetadata;
	items: ProjectTech[];
}

export const projects: Project[] = [
	{
		title: "SioDash",
		description:
			"Une plateforme centralisée pour les étudiants en BTS SIO permettant de suivre leurs missions, compétences et parcours professionnel.",
		url: "https://siodash.fr/",
		linkType: "live",
		domain: "siodash.fr",
		featured: true,
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
				invert: true,
			},
			{
				name: "PostgreSQL",
				logoSrc: logoPostgresql,
				colorName: "tailwindcss",
			},
		],
	},
	{
		title: "Superviseur Dossiers",
		description:
			"Un agent Python pour Windows Server qui suit la taille des dossiers, garde l’historique en base et alerte sur Microsoft Teams en cas de changement important.",
		url: "https://github.com/Pierddev/SuperviseurDossiers",
		linkType: "source",
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
		title: "Mon Portfolio",
		description:
			"Le site que vous visitez : un portfolio maquetté sur Figma puis développé avec Astro et Tailwind CSS pour présenter mon parcours et mes projets.",
		url: "https://github.com/Pierddev/astro-myportfolio",
		linkType: "source",
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
		title: "Billetterie JO 2024 — Studi",
		description:
			"Une boutique en ligne de billets pour les JO de Paris 2024, avec compte client, panier, paiement simulé et billet nominatif à QR code. Projet d’examen Studi.",
		url: "https://github.com/Pierddev/studi-billetterie-jo2024",
		linkType: "source",
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
];
