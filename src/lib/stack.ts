import { getCollection } from "astro:content";

// Stack technique, lue depuis src/content/stack.yaml : technos désactivées (actif: false) retirées,
// catégories vidées masquées.

export interface StackItem {
	logoSrc: ImageMetadata;
	name: string;
	url: string;
	// Logo sombre, illisible sur le fond de la page : on l'inverse en CSS (filter: invert(1))
	invert?: boolean;
}

export interface StackCategory {
	id: string;
	title: string;
	// Libellé du bouton de filtre et titre sur l'accueil, plus court que le titre quand celui-ci est long
	shortTitle: string;
	// Couleur du point lumineux (filtre et en-tête de carte)
	color: string;
	items: StackItem[];
}

// L'identifiant d'une entrée est sa position dans le fichier : on rétablit l'ordre du fichier
const entries = (await getCollection("stack")).sort(
	(a, b) => Number(a.id) - Number(b.id),
);

const categories = entries
	.map(({ data }) => ({
		...data,
		technos: data.technos.filter(({ actif }) => actif),
	}))
	.filter(({ technos }) => technos.length > 0);

const toItem = ({ logo, nom, url, inverser }: (typeof categories)[number]["technos"][number]): StackItem => ({
	logoSrc: logo,
	name: nom,
	url,
	invert: inverser,
});

// Catégories de la page Stack, dans l'ordre d'affichage
export const stackCategories: StackCategory[] = categories.map(
	({ id, titre, titreCourt, couleur, technos }) => ({
		id,
		title: titre,
		shortTitle: titreCourt,
		color: couleur,
		items: technos.map(toItem),
	}),
);

// Sélection de l'accueil : les technos marquées accueil: true, sous le titre court de leur catégorie
export const stackHighlights: { title: string; items: StackItem[] }[] = categories
	.map(({ titreCourt, technos }) => ({
		title: titreCourt,
		items: technos.filter(({ accueil }) => accueil).map(toItem),
	}))
	.filter(({ items }) => items.length > 0);
