import type { AcId } from "@/data/competences";
import type { Localized } from "@/i18n/locale";

/** Un AC du référentiel mobilisé dans le projet, avec l'argumentaire de Denis. */
export type MobilizedAc = {
  id: AcId;
  argument: Localized;
};

export type Repository = {
  name: string;
  url: string;
};

export type Project = {
  title: Localized;
  description?: Localized;
  period?: Localized;
  tags: string[];
  /** Traces : dépôts GitHub du projet. */
  repositories: Repository[];
  /**
   * Seul endroit où l'on relie un projet aux AC : la vue par compétence et le tableau croisé
   * sont calculés à partir de cette liste.
   */
  acs: MobilizedAc[];
};

// Source : docs/tableau-sae-competences.md, validé par Denis le 2026-10-01.
export const projects: Project[] = [
  {
    title: { fr: "Terraria S2.01", en: "Terraria S2.01" },
    description: {
      fr: "Un court projet de jeu-vidéo qui avait pour but d'être un 'Terraria-like'. Le jeu propose un gameplay basé sur le minage de ressources afin de créer des outils/armes pour arriver à bout de différents types d'ennemis sur une carte déroulante. Java + JavaFX (avec SceneBuilder). Avec Edin DUPUIS, Jean-Christophe LAY et Luc CAI",
      en: "A short video game project which aimed at resembling a 'Terraria-like'. The game offers a gameplay based around mining ressources in order to create tools/weapons which will help defeat various type of enemies placed on a scrolling map. Java + JavaFX(with SceneBuilder). Built with Edin DUPUIS, Jean-Christophe LAY and Luc CAI",
    },
    period: { fr: "mai – septembre 2025", en: "May – September 2025" },
    tags: ["Java", "JavaFX", "SceneBuilder"],
    repositories: [{ name: "TerrariaSAE", url: "https://github.com/DaichiDen/TerrariaSAE" }],
    acs: [
      // C1 — Réaliser
      {
        id: "C1-N1-AC1",
        argument: {
          fr: "Implémenter des conceptions simples telles qu'une simulation réduite et simplifiée de la gravité pour toute entité.",
          en: "Implementing simple designs such as a reduced, simplified gravity simulation for every entity.",
        },
      },
      {
        id: "C1-N1-AC2",
        argument: {
          fr: "Élaborer des conceptions simples grâce à du brainstorming en groupe.",
          en: "Coming up with simple designs through group brainstorming.",
        },
      },
      {
        id: "C1-N1-AC4",
        argument: {
          fr: "Développer des interfaces utilisateurs à travers JavaFX et SceneBuilder.",
          en: "Building user interfaces with JavaFX and SceneBuilder.",
        },
      },
      {
        id: "C1-N2-AC3",
        argument: {
          fr: "Adoption de bonnes pratiques de programmation à travers l'usage du paradigme POO ainsi que les Design Patterns.",
          en: "Adopting good programming practices through the object-oriented paradigm (OOP) and Design Patterns.",
        },
      },
      {
        id: "C1-N2-AC4",
        argument: {
          fr: "Vérification de la qualité de l'application à travers des jeux de tests unitaires mais surtout à travers des tests humains.",
          en: "Checking the quality of the application with unit test suites, but above all with human testing.",
        },
      },
      {
        id: "C1-N3-AC2",
        argument: {
          fr: "Évolution de l'application en S3 à travers l'identification des mauvaises pratiques de programmation présentes pour ensuite faire de la refonte grâce aux Design Patterns, l'encapsulation ou autre.",
          en: "Evolving the application in the third semester (S3) by identifying the bad programming practices in the code, then refactoring it with Design Patterns, encapsulation and so on.",
        },
      },
      // C2 — Optimiser
      {
        id: "C2-N1-AC2",
        argument: {
          fr: "Comparaison entre DFS/BFS et A* pour gérer les déplacements d'entités indépendantes.",
          en: "Comparing DFS/BFS with A* to handle the movement of independent entities.",
        },
      },
      {
        id: "C2-N1-AC3",
        argument: {
          fr: "Mise en œuvre d'outils mathématiques comme les vecteurs pour gérer la physique pour les déplacements ou bien l'usage d'une Matrice 2D pour représenter la carte du jeu.",
          en: "Applying mathematical tools such as vectors to handle the physics of movement, or using a 2D matrix to represent the game map.",
        },
      },
      {
        id: "C2-N2-AC1",
        argument: {
          fr: "Usage de structures de données adaptées au besoin, par exemple, l'usage de HashMaps pour lier l'identifiant d'un item à une image.",
          en: "Using data structures suited to the need, for example HashMaps to link an item's identifier to an image.",
        },
      },
      {
        id: "C2-N2-AC2",
        argument: {
          fr: "Création d'une IA très basique pour gérer les comportements d'entités ennemies (si le joueur est dans un certain rayon de vision alors l'entité va effectuer une certaine action etc.).",
          en: "Building a very basic AI to drive the behavior of enemy entities (if the player is within a certain sight radius, the entity performs a given action, and so on).",
        },
      },
      {
        id: "C2-N3-AC1",
        argument: {
          fr: "Anticipation de l'occupation mémoire nécessaire pour la gestion de posage de blocs v1, on parcourait toute la matrice pour voir si là où le joueur a cliqué était libre. Puis la v2 parcourait 3x3 autour du joueur car on avait anticipé que ça serait très coûteux en mémoire.",
          en: "Anticipating the memory needed to handle block placement: in v1, we scanned the whole matrix to check whether the spot the player clicked on was free. Then v2 only scanned a 3x3 area around the player, because we had anticipated that the first approach would be very memory-hungry.",
        },
      },
      {
        id: "C2-N3-AC3",
        argument: {
          fr: "Choix de la bibliothèque JavaFX pour la réalisation de l'interface graphique du jeu.",
          en: "Choosing the JavaFX library to build the game's graphical interface.",
        },
      },
      // C6 — Collaborer
      {
        id: "C6-N1-AC3",
        argument: {
          fr: "Répartition des rôles dans une équipe de quatre : chacun développe ses fonctionnalités sur sa propre branche (craft, barre de vie, projectiles, switch d'items…), et j'intègre ces branches dans develop (la grande majorité des merges du dépôt).",
          en: "Splitting roles within a team of four: everyone builds their features on their own branch (crafting, health bar, projectiles, item switching…), and I merge those branches into develop (the vast majority of merges in the repository).",
        },
      },
      {
        id: "C6-N1-AC4",
        argument: {
          fr: "Travail en équipe organisé en sprints validés au fur et à mesure (« Sprint 3 validé »), avec une revue de code commune pour retirer les attributs inutiles avant le rendu.",
          en: "Teamwork organized in sprints approved one after another (“Sprint 3 validé”, i.e. “Sprint 3 approved”), with a joint code review to remove unused attributes before submission.",
        },
      },
      {
        id: "C6-N2-AC4",
        argument: {
          fr: "Rendre compte de notre travail à travers la documentation utilisateur rendue avec le jeu.",
          en: "Reporting on our work through the user documentation submitted with the game.",
        },
      },
    ],
  },
  {
    title: { fr: "Buvette PHP S3.02 Web", en: "PHP snack bar app S3.02 Web" },
    description: {
      fr: "Application de gestion de buvette associative. Le but était de remplacer le fonctionnement de buvette passant par un carton avec des points. Le site propose un module client : page où un membre d'une telle association peut voir les boissons/nourriture qu'elle propose. Le site propose également un module barman : le barman est notifié de la présence d'une nouvelle commande et peut confirmer quand elle est prête. Enfin, elle possède aussi un module gestionnaire : le gérant de l'association peut voir des informations relatives au stock. Il peut aussi passer commande pour remplir les stocks",
      en: ""
    },
    period: { fr: "décembre 2025 – janvier 2026", en: "December 2025 – January 2026" },
    tags: ["PHP", "PDO", "Bootstrap"],
    repositories: [
      { name: "SAE_DEV_DUPUIS_ZAPOI_CAI", url: "https://github.com/DenisZAPOI/SAE_DEV_DUPUIS_ZAPOI_CAI" },
    ],
    acs: [
      // C1 — Réaliser
      {
        id: "C1-N1-AC1",
        argument: {
          fr: "Implémentation des différentes fonctionnalités de l'application comme la gestion des comptes utilisateurs, les achats, les ventes et les stocks.",
          en: "Implementing the application's various features, such as user account management, purchases, sales and stock.",
        },
      },
      {
        id: "C1-N1-AC2",
        argument: {
          fr: "Conception de la base de données et réalisation des différents parcours utilisateurs ainsi que persona pour comprendre à qui s'adresse chaque fonctionnalité.",
          en: "Designing the database and mapping out the various user journeys, along with personas to understand who each feature is for.",
        },
      },
      {
        id: "C1-N1-AC4",
        argument: {
          fr: "Création des interfaces adaptées aux différents utilisateurs (client, barman et administrateur).",
          en: "Creating interfaces tailored to each type of user (customer, bartender and administrator).",
        },
      },
      {
        id: "C1-N2-AC1",
        argument: {
          fr: "Traduction des besoins de l'association en fonctionnalités à travers les personas, user stories, parcours utilisateurs.",
          en: "Translating the association's needs into features through personas, user stories and user journeys.",
        },
      },
      {
        id: "C1-N2-AC2",
        argument: {
          fr: "Conception d'une interface simple et ergonomique, compatible sur mobile également.",
          en: "Designing a simple, user-friendly interface that also works on mobile.",
        },
      },
      {
        id: "C1-N2-AC3",
        argument: {
          fr: "Mise en place de bonnes pratiques de développement avec une séparation des rôles, des fonctionnalités et des différentes parties de l'application (structure MVC).",
          en: "Setting up good development practices by separating the roles, the features and the different parts of the application (MVC structure).",
        },
      },
      {
        id: "C1-N2-AC4",
        argument: {
          fr: "Vérification du bon fonctionnement de l'application à travers des tests dans le navigateur.",
          en: "Making sure the application works properly by testing it in the browser.",
        },
      },
      // C2 — Optimiser
      {
        id: "C2-N1-AC1",
        argument: {
          fr: "Analyse et découpage de la prise de commande en étapes simples : vérifier que le stock suffit (la quantité maximale qu'un client peut commander dépend du stock), vérifier que le solde du client suffit, déduire les produits du stock, puis transférer le prix à la trésorerie de l'association.",
          en: "Analyzing the ordering process and breaking it down into simple steps: check there is enough stock (the maximum quantity a customer can order depends on the stock), check the customer's balance is high enough, deduct the products from the stock, then transfer the price to the association's treasury.",
        },
      },
      {
        id: "C2-N2-AC3",
        argument: {
          fr: "Sécurisation des données et du code : requêtes préparées (PDO) contre les injections SQL, mots de passe hachés (password_hash / password_verify), jeton CSRF sur les formulaires, htmlspecialchars contre les failles XSS, vérification du type des fichiers déposés (image pour le logo d'une association, PDF pour les documents légaux).",
          en: "Securing data and code: prepared statements (PDO) against SQL injection, hashed passwords (password_hash / password_verify), CSRF tokens on forms, htmlspecialchars against XSS, and checking the type of uploaded files (an image for an association's logo, a PDF for legal documents).",
        },
      },
      // C6 — Collaborer
      {
        id: "C6-N1-AC3",
        argument: {
          fr: "Répartition du travail par module entre les trois membres (par exemple pour moi : connexion, solde, prise de commande, passage à Bootstrap, jeton CSRF ; pour les autres : récapitulatif de la journée, historique, réapprovisionnement, stock, staff), chacun sur sa branche, avec moi à l'intégration des branches.",
          en: "Splitting the work by module among the three members (for me, for example: login, balance, ordering, the switch to Bootstrap, CSRF tokens; for the others: daily summary, history, restocking, stock, staff), each on their own branch, with me in charge of merging the branches.",
        },
      },
      {
        id: "C6-N2-AC3",
        argument: {
          fr: "Mobiliser les compétences interpersonnelles pour tenir les sprints en équipe et résoudre ensemble les conflits de fusion lors des changements de la base de données qui touchaient le code de tout le monde.",
          en: "Drawing on interpersonal skills to keep up with the sprints as a team and to resolve merge conflicts together whenever database changes affected everyone's code.",
        },
      },
    ],
  },
  {
    title: { fr: "Visite facile S4.A.01", en: "Visite facile S4.A.01" },
    description: {
      fr: "Application de recueil des visiteurs de l'IUT (portes ouvertes, salons) : formulaire d'inscription, liste filtrée, fiche visiteur, statistiques, export CSV, mode administrateur. Front React + TypeScript (Vite), back Flask (Python) + MongoDB, avec Isidore MEILLEUR et Edin DUPUIS.",
      en: "An app for recording visitors to the IUT (the university institute of technology where I study) at open days and education fairs: sign-up form, filtered list, visitor records, statistics, CSV export and an administrator mode. React + TypeScript front end (Vite), Flask (Python) back end + MongoDB, built with Isidore MEILLEUR and Edin DUPUIS.",
    },
    period: { fr: "février – avril 2026", en: "February – April 2026" },
    tags: ["React", "TypeScript", "Vite", "Flask", "Python", "MongoDB", "Pydantic", "Zod", "Chart.js"],
    repositories: [
      { name: "Visite-facile_BACK", url: "https://github.com/DenisZAPOI/S4A_2026_Visite-facile_BACK" },
      { name: "Visite-facile_FRONT", url: "https://github.com/DenisZAPOI/S4A_2026_Visite-facile_FRONT" },
    ],
    acs: [
      // C1 — Réaliser
      {
        id: "C1-N2-AC1",
        argument: {
          fr: "Traduction des exigences en spécifications : formulaire d'inscription avec tous les champs utiles à l'IUT (bac, spécialités, filière, département visité, immersion, réorientation, situation particulière…), avec des règles métier (les spécialités ne sont demandées que pour un bac général, et la spécialité 1 ne peut pas être la même que la spécialité 2).",
          en: "Translating requirements into specifications: a sign-up form with every field the IUT needs (baccalauréat — the French high-school diploma —, specialty subjects, track, department visited, immersion day, change of study path, special circumstances…), with business rules (specialty subjects are only asked for a general baccalauréat, and specialty 1 cannot be the same as specialty 2).",
        },
      },
      {
        id: "C1-N2-AC2",
        argument: {
          fr: "Ergonomie de l'interface : formulaire découpé en accordéons pour éviter la surcharge visuelle, couleurs de l'IUT, filtres et pagination de la liste des visiteurs, mode sombre mémorisé dans le navigateur.",
          en: "Interface usability: the form is split into accordions to avoid visual overload, the IUT's colors, filters and pagination on the visitor list, and a dark mode remembered by the browser.",
        },
      },
      {
        id: "C1-N2-AC3",
        argument: {
          fr: "Bonnes pratiques de conception : back organisé en couches (contrôleur, service, accès aux données, DTO), DTO de modification séparée de la DTO de création car l'administrateur ne doit pas pouvoir tout modifier, code au format PEP 8, travail en branches avec pull requests, requirements.txt pour réinstaller les dépendances.",
          en: "Good design practices: a layered back end (controller, service, data access, DTOs), an update DTO kept separate from the creation DTO because the administrator must not be able to edit everything, code following PEP 8, work in branches with pull requests, and a requirements.txt to reinstall the dependencies.",
        },
      },
      {
        id: "C1-N2-AC4",
        argument: {
          fr: "Vérification de l'application : méthode qui insère 20 visiteurs fictifs pour tester les filtres, les statistiques et l'export, ce qui a aussi permis de corriger un bug (la modification ne vérifiait pas que le visiteur existait).",
          en: "Testing the application: a method that inserts 20 fake visitors to test the filters, statistics and export, which also helped fix a bug (the update didn't check that the visitor existed).",
        },
      },
      {
        id: "C1-N3-AC1",
        argument: {
          fr: "Choix d'une architecture adaptée : front et back séparés dans deux dépôts qui communiquent par une API REST, et base NoSQL MongoDB pour des fiches visiteurs dont beaucoup de champs sont facultatifs.",
          en: "Choosing a suitable architecture: front end and back end split into two repositories that communicate through a REST API, and a NoSQL MongoDB database for visitor records where many fields are optional.",
        },
      },
      // C2 — Optimiser
      {
        id: "C2-N2-AC3",
        argument: {
          fr: "Sécurisation des données : mot de passe administrateur de 12 caractères minimum (vérifié avec Zod), ancien mot de passe demandé pour le changer en cas de vol de session, envoi en POST et non en GET pour que le mot de passe ne soit pas visible dans l'URL, et validation de toutes les données reçues par des DTO Pydantic dont les champs sont définis à l'avance.",
          en: "Securing data: an administrator password of at least 12 characters (checked with Zod), the old password required to change it in case the session is stolen, sending it via POST rather than GET so the password never shows up in the URL, and validating all incoming data with Pydantic DTOs whose fields are defined in advance.",
        },
      },
      {
        id: "C2-N2-AC4",
        argument: {
          fr: "Prise en compte de l'impact sociétal : les visiteurs sont souvent des lycéens, donc respect du RGPD avec une fenêtre de consentement avant l'inscription, une page de politique de confidentialité et un document RGPD.",
          en: "Taking the societal impact into account: visitors are often high-school students, so we complied with the GDPR (RGPD in French) with a consent dialog before sign-up, a privacy policy page and a GDPR document.",
        },
      },
      {
        id: "C2-N3-AC1",
        argument: {
          fr: "Anticipation du volume de données : la liste des visiteurs est paginée côté serveur (on ne charge que 5 visiteurs par page) et ne récupère que les champs affichés, le détail complet n'est chargé qu'à l'ouverture de la fiche.",
          en: "Anticipating data volume: the visitor list is paginated on the server (only 5 visitors are loaded per page) and only fetches the fields it displays; the full details are loaded only when a record is opened.",
        },
      },
      {
        id: "C2-N3-AC3",
        argument: {
          fr: "Choix de bibliothèques dédiées : Chart.js pour les statistiques en barres et en camembert, Pydantic côté back et Zod côté front pour valider les données.",
          en: "Choosing dedicated libraries: Chart.js for bar and pie chart statistics, Pydantic on the back end and Zod on the front end to validate data.",
        },
      },
      // C6 — Collaborer
      {
        id: "C6-N2-AC2",
        argument: {
          fr: "Démarche d'équipe proche de l'entreprise : une branche par fonctionnalité ou élément du backlog, fusion par pull request relue et acceptée par un autre membre, develop fusionnée sur main seulement quand on a une version fonctionnelle.",
          en: "A team workflow close to how companies work: one branch per feature or backlog item, merged through a pull request reviewed and approved by another member, and develop merged into main only once we had a working version.",
        },
      },
      {
        id: "C6-N2-AC3",
        argument: {
          fr: "Mobiliser les compétences interpersonnelles pour se répartir un front et un back à trois et se mettre d'accord sur les routes de l'API (par exemple renommer une route pour que le front fonctionne).",
          en: "Drawing on interpersonal skills to split a front end and a back end among the three of us and agree on the API routes (for example, renaming a route so the front end would work).",
        },
      },
      {
        id: "C6-N2-AC4",
        argument: {
          fr: "Rendre compte de son activité : messages de commit qui annoncent l'état du travail (DONE, WIP, FIX, REFACTOR) et ce qu'il reste à faire pour les autres, .env.example et requirements.txt pour que l'équipe installe le projet, documentation utilisateur rendue avec l'application.",
          en: "Reporting on my work: commit messages that state where the work stands (DONE, WIP, FIX, REFACTOR) and what's left for the others, a .env.example and a requirements.txt so the team can install the project, and user documentation submitted with the application.",
        },
      },
    ],
  },
  {
    title: { fr: "Ce portfolio", en: "This portfolio" },
    description: {
      fr: "Site perso façon bureau rétro, Next.js et Tailwind.",
      en: "Retro desktop-style personal site, Next.js and Tailwind.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind"],
    repositories: [{ name: "portfolio", url: "https://github.com/DenisZAPOI/portfolio" }],
    acs: [],
  },
];
