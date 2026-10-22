# Pierre Duault — Portfolio

[![Site en ligne](https://img.shields.io/badge/Site-pierre--duault.fr-0ea5e9?style=flat-square&logo=astro&logoColor=white)](https://pierre-duault.fr)
[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?style=flat-square&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

> Portfolio personnel de **Pierre Duault**, développeur web full stack & administrateur systèmes, basé à Rennes.
>
> Découvrez mes projets, mon parcours, ma stack technique et contactez-moi pour vos besoins en développement web.

---

## Apercu

### Accueil
![Accueil](.github/screenshots/home.png)

### Projets
![Projets](.github/screenshots/projects.png)

### Stack
![Stack](.github/screenshots/stack.png)

### A propos
![A propos](.github/screenshots/about.png)

### Contact
![Contact](.github/screenshots/contact.png)

---

## Fonctionnalites

- **Page d'accueil** — Presentation, carte de profil, projet mis en avant, apercu de la stack et section contact
- **Projets** — Galerie de projets personnels et professionnels avec fiches detaillees
- **Stack** — Inventaire complet des technologies, outils et environnements maitrises, avec filtres par categorie
- **A propos** — Valeurs, chiffres cles, experiences professionnelles en timeline repliable et formations
- **Contact** — Section de l'accueil (`/#contact`) : formulaire Formspree avec confirmation dans la page ; l'ancienne URL `/contact` y redirige
- **Pages legales** — Mentions legales, politique de confidentialite et CGU
- **SEO optimise** — Meta tags, Open Graph, Twitter Cards, sitemap
- **Design responsive** — Interface adaptee mobile, tablette et desktop (Tailwind CSS)

---

## Stack technique

| Categorie | Technologie |
|-----------|-------------|
| Framework | [Astro](https://astro.build) v7 |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 |
| Langage | TypeScript |
| Deploiement | [Vercel](https://vercel.com) |
| Domaine | [pierre-duault.fr](https://pierre-duault.fr) |

---

## Structure du projet

```text
/
├── public/               # Assets statiques (favicon, image Open Graph, scripts)
├── src/
│   ├── assets/           # Images et logos (projets, stack, entreprises)
│   ├── components/       # Composants Astro reutilisables
│   │   ├── icons/        # Icones SVG custom
│   │   ├── Card*.astro   # Cartes (projet, experience, formation, stack)
│   │   ├── navbar.astro
│   │   ├── footer.astro
│   │   └── ContactForm.astro
│   ├── data/             # Donnees statiques (experiences, formations, projets, stack)
│   ├── layouts/
│   │   └── Layout.astro  # Layout principal (SEO, meta, nav, footer)
│   ├── pages/            # Routes du site
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   ├── stack.astro
│   │   ├── about.astro
│   │   └── legal, privacy, terms.astro  # Pages legales
│   └── styles/
│       ├── global.css
│       └── tailwind.config.js
├── astro.config.mjs      # Config Astro (sitemap, redirection /contact)
└── package.json
```

---

## Commandes

Toutes les commandes s'executent depuis la racine du projet :

| Commande            | Action                                      |
| :------------------ | :------------------------------------------ |
| `npm install`       | Installe les dependances                    |
| `npm run dev`       | Lance le serveur de dev (`localhost:4321`)  |
| `npm run build`     | Build le site de production (`./dist/`)     |
| `npm run preview`   | Preview du build en local                   |
| `npm run astro ...` | Commandes CLI Astro (`add`, `check`, etc.)  |

---

## Deploiement

Le site est automatiquement deploye sur **Vercel** a chaque push sur la branche principale.

URL de production : [https://pierre-duault.fr](https://pierre-duault.fr)

---

## Auteur

**Pierre Duault** — Developpeur web full stack & administrateur systèmes

- Site : [pierre-duault.fr](https://pierre-duault.fr)
- Studio : Pi-Code Studio
