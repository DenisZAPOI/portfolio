import type { Localized } from "@/i18n/locale";

export type Project = {
  title: Localized;
  description: Localized;
  tags: string[];
  url?: string;
};

// PLACEHOLDER — à remplacer par tes vrais projets.
export const projects: Project[] = [
  {
    title: { fr: "Gestion de stock — SAE 3.02", en: "Inventory management — SAE 3.02" },
    description: {
      fr: "Appli web full-stack, suivi d'inventaire en temps réel.",
      en: "Full-stack web app with real-time inventory tracking.",
    },
    tags: ["React", "SQL"],
  },
  {
    title: { fr: "API météo open-data", en: "Open-data weather API" },
    description: {
      fr: "API REST sur données publiques, documentation Swagger.",
      en: "REST API over public data, documented with Swagger.",
    },
    tags: ["Node", "Docker"],
  },
  {
    title: { fr: "Ce portfolio", en: "This portfolio" },
    description: {
      fr: "Site perso façon bureau rétro, Next.js et Tailwind.",
      en: "Retro desktop-style personal site, Next.js and Tailwind.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind"],
    url: "https://github.com/DenisZAPOI/portfolio",
  },
];
