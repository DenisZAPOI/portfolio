import type { Localized } from "@/i18n/locale";

export type Experience = {
  role: Localized;
  company?: string;
  period?: Localized;
  /** Un élément = un paragraphe. */
  description: Localized[];
  /** Expérience pas encore débloquée : affichée grisée avec un cadenas. */
  locked?: boolean;
};

export const experiences: Experience[] = [
  {
    role: { fr: "Développeur stagiaire", en: "Software developer intern" },
    company: "POP Solutions",
    period: { fr: "8 semaines", en: "8 weeks" },
    description: [
      {
        fr: "Dans le cadre de ma deuxième année de BUT Informatique à l'IUT de Montreuil, j'ai effectué un stage de huit semaines en entreprise, du 27 avril au 19 juin 2026. Ce stage est une étape obligatoire du cursus, à la fois pour valider l'année et pour découvrir l'environnement professionnel du monde informatique.",
        en: "As part of the second year of my BUT in Computer Science at the IUT de Montreuil, I completed an eight-week internship from April 27 to June 19, 2026. This internship is a mandatory step in the program, both to validate the year and to discover the professional side of the IT world.",
      },
      {
        fr: "Pour donner du contexte, durant ce stage j'ai travaillé sur une application web nommée Explorez.eu qui est une marketplace qui met en relation des artisans qui proposent des journées d'immersion, des visites, etc. à des clients. Lors de mon arrivée, le site était en production et était déjà fonctionnel.",
        en: "To give some context, during this internship I worked on a web application called Explorez.eu, a marketplace that connects artisans offering immersion days, visits and the like with customers. When I arrived, the site was already live in production and fully functional.",
      },
      {
        fr: "Lors de ce stage j'ai eu l'occasion d'aussi bien faire du Frontend que du Backend. Les tâches quant à elles ont été diverses. Par exemple, l'implémentation d'une nouvelle fonctionnalité comme l'autocomplétion d'une adresse à l'aide de l'API Google. Ou bien la refonte d'un composant jugé trop peu intuitif.",
        en: "Throughout the internship, I got the chance to work on both the Frontend and the Backend. The tasks themselves were quite varied: for instance, implementing a new feature such as address autocompletion using the Google API, or overhauling a component that was deemed not intuitive enough.",
      },
      {
        fr: "Durant ce stage j'ai utilisé la méthode Agile à travers des entretiens de 15 minutes chaque jour avec mon maître de stage.",
        en: "During this internship, I followed the Agile methodology through 15-minute daily check-ins with my internship supervisor.",
      },
    ],
  },
  {
    role: { fr: "Contenu pas encore débloqué", en: "This content hasn't been unlocked yet" },
    description: [{ fr: "NULL", en: "NULL" }],
    locked: true,
  },
];
