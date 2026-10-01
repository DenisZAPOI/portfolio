import type { Localized } from "@/i18n/locale";

export type Skill = {
  name: Localized;
  level: number;
};

// PLACEHOLDER — à remplacer par tes vraies compétences.
export const skills: Skill[] = [
  { name: { fr: "JavaScript / TypeScript", en: "JavaScript / TypeScript" }, level: 82 },
  { name: { fr: "SQL & bases de données", en: "SQL & databases" }, level: 74 },
  { name: { fr: "React / Node.js", en: "React / Node.js" }, level: 70 },
  { name: { fr: "Docker & CI/CD", en: "Docker & CI/CD" }, level: 58 },
];
