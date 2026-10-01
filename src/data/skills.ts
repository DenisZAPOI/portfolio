import type { Localized } from "@/i18n/locale";

export type Skill = {
  name: Localized;
  level: number;
};

export const skills: Skill[] = [
  // Langages
  { name: { fr: "JavaScript / TypeScript", en: "JavaScript / TypeScript" }, level: 50 },
  { name: { fr: "Java (POO)", en: "Java (OOP)" }, level: 60 },
  { name: { fr: "Python", en: "Python" }, level: 50 },

  // Frameworks et librairies
  { name: { fr: "React / Node.js", en: "React / Node.js" }, level: 70 },
  { name: { fr: "Flask + PyDantic + SQLAlchemy", en: "Flask + PyDantic + SQLAlchemy" }, level: 50 },

  // Bases de données
  { name: { fr: "SQL & bases de données", en: "SQL & databases" }, level: 70 },
  { name: { fr: "MongoDB", en: "MongoDB" }, level: 50 },

  // Outils et environnement
  { name: { fr: "Git+Github", en: "Git+Github" }, level: 80 },
  { name: { fr: "Docker & CI/CD", en: "Docker & CI/CD" }, level: 60 },
  { name: { fr: "Linux/UNIX", en: "Linux/UNIX" }, level: 50 },
];
