const fr = {
  apps: {
    experience: { label: "Expérience", file: "experience.exe" },
    projects: { label: "Projets", file: "projets.exe" },
    competences: { label: "Compétences", file: "competences.exe" },
    technologies: { label: "Technologies", file: "technologies.exe" },
    about: { label: "Perso", file: "perso.exe" },
    contact: { label: "Contact", file: "contact.exe" },
  },
  window: { minimize: "Réduire", close: "Fermer" },
  start: {
    button: "menu",
    apps: "Applications",
    links: "Liens rapides",
    language: "Langue",
    cv: "Mon CV",
  },
  contact: { email: "E-mail", github: "GitHub", linkedin: "LinkedIn" },
  projects: {
    view: "Voir le projet",
    competences: "Compétences mobilisées",
    openCompetence: "Voir cette compétence",
  },
  competences: {
    level: "Niveau",
    about: "À propos de cette compétence",
    technologies: "Technologies utilisées",
    notProven: "Pas encore prouvé par un projet",
    openProject: "Voir ce projet",
  },
  pagination: { page: "Page", previous: "Page précédente", next: "Page suivante" },
  languageToggle: "Changer de langue",
};

export type UiTexts = typeof fr;

const en: UiTexts = {
  apps: {
    experience: { label: "Experience", file: "experience.exe" },
    projects: { label: "Projects", file: "projects.exe" },
    competences: { label: "Skills", file: "skills.exe" },
    technologies: { label: "Technologies", file: "tech.exe" },
    about: { label: "About", file: "about.exe" },
    contact: { label: "Contact", file: "contact.exe" },
  },
  window: { minimize: "Minimize", close: "Close" },
  start: {
    button: "menu",
    apps: "Applications",
    links: "Quick links",
    language: "Language",
    cv: "My resume",
  },
  contact: { email: "Email", github: "GitHub", linkedin: "LinkedIn" },
  projects: {
    view: "View project",
    competences: "Skills demonstrated",
    openCompetence: "View this skill",
  },
  competences: {
    level: "Level",
    about: "About this skill",
    technologies: "Technologies used",
    notProven: "Not yet backed by a project",
    openProject: "View this project",
  },
  pagination: { page: "Page", previous: "Previous page", next: "Next page" },
  languageToggle: "Change language",
};

export const uiTexts = { fr, en };
