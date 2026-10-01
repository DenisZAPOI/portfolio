import type { Localized } from "@/i18n/locale";

// PLACEHOLDER — à remplacer par tes vraies informations.
export const profile = {
  name: "Denis Zapoi",
  tagline: {
    fr: "Étudiant en BUT Informatique — développeur web",
    en: "Computer Science student (BUT) — web developer",
  } satisfies Localized,
  bio: {
    fr: "Étudiant en BUT Informatique, curieux de tout ce qui touche au dev web et aux jeux vidéo. En dehors du code, j'aime le jeu vidéo, la musique et bricoler des petits projets perso.",
    en: "Computer Science student (BUT), curious about everything web development and video games. Outside of code, I enjoy gaming, music and tinkering with small side projects.",
  } satisfies Localized,
  email: "prenom.nom@mail.com",
  github: "https://github.com/DenisZAPOI",
  linkedin: "https://www.linkedin.com/in/prenom",
  cv: "/cv.pdf",
};
