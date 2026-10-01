import type { Localized } from "@/i18n/locale";

// Contenu du bureau, à fournir par Denis. Tant qu'une liste est vide (ou `null`), l'élément
// correspondant ne s'affiche pas (la corbeille affiche « vide »).

/** Une capture d'écran de projet pour la visionneuse (image à déposer dans `public/screenshots/`). */
export type Screenshot = {
  /** Chemin servi par le site, ex. "/screenshots/terraria.png". */
  src: string;
  /** Titre français du projet (`projects[].title.fr`) : un clic sur l'image ouvre ce projet. */
  projectTitle: string;
  caption: Localized;
};

/** Un « fichier supprimé » de la corbeille (easter egg). */
export type TrashFile = {
  name: string;
  description: Localized;
};

/** Texte d'accueil de lisezmoi.txt. Un élément = un paragraphe. */
export const readmeWelcome: Localized[] = [];

/** Post-it, à droite du bureau. */
export type StickyNoteContent = {
  /** Un élément = un paragraphe. */
  paragraphs: Localized[];
  /** Dernière ligne, cliquable : ouvre contact.exe. */
  contactLink?: Localized;
};

// «   » = espace insécable : « BUT 3 – Informatique » ne doit pas être coupé en fin de ligne.
export const stickyNote: StickyNoteContent | null = {
  paragraphs: [
    {
      fr: "Développeur Web en BUT 3 – Informatique à la recherche d'un stage d'une durée de 12 à 16 semaines",
      en: "Web developer in the third year of a BUT in Computer Science (a French bachelor's degree), looking for a 12 to 16-week internship",
    },
  ],
  contactLink: { fr: "Contactez-moi !", en: "Get in touch!" },
};

export const screenshots: Screenshot[] = [];

export const trashFiles: TrashFile[] = [];
