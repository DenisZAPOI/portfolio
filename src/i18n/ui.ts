const fr = {
  apps: {
    experience: { label: "Expérience", file: "experience.exe" },
    projects: { label: "Projets", file: "projets.exe" },
    skills: { label: "Compétences", file: "competences.exe" },
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
  projects: { view: "Voir le projet" },
  languageToggle: "Changer de langue",
};

export type UiTexts = typeof fr;

const en: UiTexts = {
  apps: {
    experience: { label: "Experience", file: "experience.exe" },
    projects: { label: "Projects", file: "projects.exe" },
    skills: { label: "Skills", file: "skills.exe" },
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
  projects: { view: "View project" },
  languageToggle: "Change language",
};

export const uiTexts = { fr, en };
