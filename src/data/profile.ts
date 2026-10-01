import type { Localized } from "@/i18n/locale";

// PLACEHOLDER — à remplacer par tes vraies informations.
export const profile = {
  name: "Denis ZAPOI",
  tagline: {
    fr: "Étudiant en BUT Informatique — Parcours A : Développement d'applications",
    en: "Computer Science student (BUT) — Track A: Application Development",
  } satisfies Localized,
  bio: [
    {
      fr: "J'ai 20 ans et je suis étudiant en BUT - Informatique (3ème année). Si je suis arrivé en BUT - Informatique, ce n'est pas par hasard, depuis l'achat de mon premier ordinateur portable à mes 10 ans, je suis devenu passionné par les ordinateurs.",
      en: "I'm 20 and a third-year Computer Science student in a BUT, France's three-year technological bachelor's degree. Ending up in Computer Science was no accident: ever since I got my first laptop at the age of 10, I've been hooked on computers.",
    },
    {
      fr: "Ce qui, au début, était surtout une passion liée aux jeux vidéo est très vite devenu une passion pour le numérique, l'informatique de façon globale. Le vrai déclic a été en seconde lors des cours de SNT où l'on interrogeait une API météo qui nous renvoyait du JSON.",
      en: "What started out as a passion mostly fueled by video games quickly grew into a fascination with all things digital, and with computing as a whole. The real turning point came in tenth grade, during my SNT classes (Digital Sciences and Technology), when we queried a weather API that sent JSON back to us.",
    },
    {
      fr: "En dehors du code, je suis passionné par la musique, tout particulièrement par de vieux groupes comme les Red Hot Chili Peppers, Dire Straits, Pearl Jam et bien d'autres. Ce qui m'a amené à acheter ma première guitare.",
      en: "Outside of code, I'm passionate about music, especially older bands like the Red Hot Chili Peppers, Dire Straits, Pearl Jam and plenty of others, which is what led me to pick up my first guitar.",
    },
  ] satisfies Localized[],
  email: "deniszapoi.pro@gmail.com",
  github: "https://github.com/DenisZAPOI" ,
  linkedin: "https://www.linkedin.com/in/denis-zapoi/",
  cv: "/cv.pdf",
};
