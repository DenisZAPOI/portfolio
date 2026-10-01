import type { Localized } from "@/i18n/locale";

export type Experience = {
  role: Localized;
  company: string;
  period: Localized;
  description: Localized;
};

// PLACEHOLDER — à remplacer par tes vraies expériences.
export const experiences: Experience[] = [
  {
    role: { fr: "Développeur stagiaire", en: "Software developer intern" },
    company: "Entreprise X",
    period: { fr: "12 semaines", en: "12 weeks" },
    description: {
      fr: "Développement d'un module interne en équipe agile (Scrum), stack Node/React.",
      en: "Built an internal module in an agile (Scrum) team, Node/React stack.",
    },
  },
  {
    role: { fr: "Alternant support technique", en: "Technical support apprentice" },
    company: "Entreprise Y",
    period: { fr: "1 an", en: "1 year" },
    description: {
      fr: "Maintenance d'applications internes, rédaction de documentation technique.",
      en: "Maintained internal applications and wrote technical documentation.",
    },
  },
];
