import { getCollection } from "astro:content";

// Parcours de la page À propos, lu depuis src/content/experiences.yaml et formations.yaml :
// entrées désactivées (actif: false) retirées, tri par date de début (la plus récente en premier),
// libellé de dates et état « en cours » calculés à partir de debut / fin (format AAAA-MM).

export interface Mission {
	title: string;
	description: string;
}

// id : identifiant unique, sert à relier le bouton « Voir les missions » à sa liste (aria-controls).
// isCurrent : expérience en cours (pastille verte et badge « En cours » dans la timeline).
export interface Experience {
	id: string;
	isCurrent: boolean;
	date: string;
	poste: string;
	entreprise: string;
	lieu: string;
	logoSrc: ImageMetadata;
	logoAlt: string;
	missions: Mission[];
}

// isCurrent : formation en cours, mise en avant (fond bleuté et badge « En cours »)
export interface Formation {
	isCurrent: boolean;
	date: string;
	formation: string;
	ecole: string;
	lieu: string;
}

interface Period {
	debut: string;
	fin?: string;
}

// Mois du build, au format AAAA-MM : le site est statique, l'état « en cours » est figé au déploiement
const currentMonth = new Date().toISOString().slice(0, 7);

// « 2025-09 » → « SEPT. 2025 », avec les abréviations françaises standard
const monthName = new Intl.DateTimeFormat("fr-FR", { month: "short", timeZone: "UTC" });
function formatMonth(month: string): string {
	const [year, index] = month.split("-").map(Number);
	return `${monthName.format(new Date(Date.UTC(year, index - 1))).toUpperCase()} ${year}`;
}

// En cours : pas de fin, ou une fin qui n'est pas encore passée. Les dates AAAA-MM se comparent comme du texte.
const isCurrent = ({ fin }: Period) => !fin || fin >= currentMonth;

const formatPeriod = ({ debut, fin }: Period) =>
	`${formatMonth(debut)} – ${fin ? formatMonth(fin) : "AUJOURD’HUI"}`;

// À début égal, l'ordre du fichier (l'identifiant d'une entrée est sa position) départage
const byMostRecent = (a: { id: string; data: Period }, b: { id: string; data: Period }) =>
	b.data.debut.localeCompare(a.data.debut) || Number(a.id) - Number(b.id);

export const experiences: Experience[] = (await getCollection("experiences"))
	.filter(({ data }) => data.actif)
	.sort(byMostRecent)
	.map(({ id, data }) => ({
		id,
		isCurrent: isCurrent(data),
		date: formatPeriod(data),
		poste: data.poste,
		entreprise: data.entreprise,
		lieu: data.lieu,
		logoSrc: data.logo,
		logoAlt: data.logoAlt,
		missions: data.missions.map(({ titre, description }) => ({ title: titre, description })),
	}));

export const formations: Formation[] = (await getCollection("formations"))
	.filter(({ data }) => data.actif)
	.sort(byMostRecent)
	.map(({ data }) => ({
		isCurrent: isCurrent(data),
		date: formatPeriod(data),
		formation: data.formation,
		ecole: data.ecole,
		lieu: data.lieu,
	}));
