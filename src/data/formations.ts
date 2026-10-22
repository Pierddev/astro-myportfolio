// isCurrent : formation en cours, mise en avant (fond bleuté et badge « En cours »)
export interface Formation {
  isCurrent: boolean;
  date: string;
  formation: string;
  ecole: string;
  lieu: string;
}

export const formations: Formation[] = [
  {
    isCurrent: true,
    date: "SEPT. 2025 – SEPT. 2027",
    formation: "BTS SIO, Option SLAM",
    ecole: "MDS (My Digital School)",
    lieu: "Rennes (35)",
  },
  {
    isCurrent: false,
    date: "SEPT. 2023 – AOÛT 2024",
    formation: "Bachelor Développeur Full Stack",
    ecole: "Studi",
    lieu: "Distanciel",
  },
  {
    isCurrent: false,
    date: "SEPT. 2021 – SEPT. 2023",
    formation: "Master Achats",
    ecole: "ESLI",
    lieu: "Redon (35)",
  },
  {
    isCurrent: false,
    date: "SEPT. 2020 – SEPT. 2021",
    formation: "Licence logistique",
    ecole: "ESLI",
    lieu: "Redon (35)",
  },
  {
    isCurrent: false,
    date: "SEPT. 2017 – MARS 2020",
    formation: "Licence droit, économie & gestion",
    ecole: "Université Bretagne Sud",
    lieu: "Vannes (56)",
  },
  {
    isCurrent: false,
    date: "SEPT. 2014 – SEPT. 2017",
    formation: "BAC Economique & Social",
    ecole: "Lycée Joseph Loth",
    lieu: "Pontivy (56)",
  },
];