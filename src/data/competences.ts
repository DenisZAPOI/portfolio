import type { Localized } from "@/i18n/locale";

/** Notation du projet (pas celle du référentiel) : `C1-N3-AC2` = compétence 1, niveau 3, AC 2. */
export type AcId = `C${1 | 2 | 3 | 4 | 5 | 6}-N${1 | 2 | 3}-AC${1 | 2 | 3 | 4}`;

export type Ac = {
  id: AcId;
  title: Localized;
};

export type Level = {
  number: 1 | 2 | 3;
  title: Localized;
  acs: Ac[];
};

export type Competence = {
  id: "C1" | "C2" | "C3" | "C4" | "C5" | "C6";
  title: Localized;
  description: Localized;
  /** Composantes essentielles (« en respectant… », « en appliquant… »). */
  components: Localized[];
  levels: Level[];
};

// Textes français recopiés mot pour mot du référentiel (voir docs/referentiel-parcours-A.md).
// Niveaux suivis en parcours A : N1 à N3 pour C1, C2 et C6 ; N1 et N2 pour C3, C4 et C5.
export const competences: Competence[] = [
  {
    id: "C1",
    title: { fr: "Réaliser un développement d'application", en: "Develop an application" },
    description: {
      fr: "Développer — c'est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.",
      en: "Develop — that is, design, code, test and integrate — an IT solution for a client.",
    },
    components: [
      { fr: "en respectant les besoins décrits par le client", en: "by meeting the needs described by the client" },
      { fr: "en appliquant les principes algorithmiques", en: "by applying algorithmic principles" },
      { fr: "en veillant à la qualité du code et à sa documentation", en: "by ensuring code quality and documentation" },
      { fr: "en choisissant les ressources techniques appropriées", en: "by choosing the appropriate technical resources" },
    ],
    levels: [
      {
        number: 1,
        title: { fr: "Développer des applications informatiques simples", en: "Develop simple software applications" },
        acs: [
          { id: "C1-N1-AC1", title: { fr: "Implémenter des conceptions simples", en: "Implement simple designs" } },
          { id: "C1-N1-AC2", title: { fr: "Élaborer des conceptions simples", en: "Draw up simple designs" } },
          {
            id: "C1-N1-AC3",
            title: {
              fr: "Faire des essais et évaluer leurs résultats en regard des spécifications",
              en: "Run trials and assess their results against the specifications",
            },
          },
          { id: "C1-N1-AC4", title: { fr: "Développer des interfaces utilisateurs", en: "Develop user interfaces" } },
        ],
      },
      {
        number: 2,
        title: {
          fr: "Partir des exigences et aller jusqu'à une application complète",
          en: "Go from requirements to a complete application",
        },
        acs: [
          {
            id: "C1-N2-AC1",
            title: {
              fr: "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
              en: "Draw up and implement functional and non-functional specifications from the requirements",
            },
          },
          {
            id: "C1-N2-AC2",
            title: {
              fr: "Appliquer des principes d'accessibilité et d'ergonomie",
              en: "Apply accessibility and usability principles",
            },
          },
          {
            id: "C1-N2-AC3",
            title: {
              fr: "Adopter de bonnes pratiques de conception et de programmation",
              en: "Adopt good design and programming practices",
            },
          },
          {
            id: "C1-N2-AC4",
            title: {
              fr: "Vérifier et valider la qualité de l'application par les tests",
              en: "Verify and validate application quality through testing",
            },
          },
        ],
      },
      {
        number: 3,
        title: {
          fr: "Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)",
          en: "Adapt applications across a range of platforms (embedded, web, mobile, IoT…)",
        },
        acs: [
          {
            id: "C1-N3-AC1",
            title: { fr: "Choisir et implémenter les architectures adaptées", en: "Choose and implement suitable architectures" },
          },
          { id: "C1-N3-AC2", title: { fr: "Faire évoluer une application existante", en: "Evolve an existing application" } },
          {
            id: "C1-N3-AC3",
            title: {
              fr: "Intégrer des solutions dans un environnement de production",
              en: "Integrate solutions into a production environment",
            },
          },
        ],
      },
    ],
  },
  {
    id: "C2",
    title: { fr: "Optimiser des applications", en: "Optimize applications" },
    description: {
      fr: "Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources…",
      en: "Deliver software applications optimized for specific criteria: execution time, precision, resource consumption…",
    },
    components: [
      { fr: "en formalisant et modélisant des situations complexes", en: "by formalizing and modeling complex situations" },
      {
        fr: "en recensant les algorithmes et les structures de données usuels",
        en: "by surveying common algorithms and data structures",
      },
      { fr: "en s'appuyant sur des schémas de raisonnement", en: "by relying on reasoning patterns" },
      { fr: "en justifiant les choix et validant les résultats", en: "by justifying choices and validating results" },
    ],
    levels: [
      {
        number: 1,
        title: { fr: "Appréhender et construire des algorithmes", en: "Understand and build algorithms" },
        acs: [
          {
            id: "C2-N1-AC1",
            title: {
              fr: "Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données…)",
              en: "Analyze a problem methodically (breaking it down into simple algorithmic elements, data structures…)",
            },
          },
          {
            id: "C2-N1-AC2",
            title: {
              fr: "Comparer des algorithmes pour des problèmes classiques (tris simples, recherche…)",
              en: "Compare algorithms for classic problems (simple sorts, search…)",
            },
          },
          {
            id: "C2-N1-AC3",
            title: {
              fr: "Formaliser et mettre en œuvre des outils mathématiques pour l'informatique",
              en: "Formalize and apply mathematical tools for computer science",
            },
          },
        ],
      },
      {
        number: 2,
        title: {
          fr: "Sélectionner les algorithmes adéquats pour répondre à un problème donné",
          en: "Select the right algorithms for a given problem",
        },
        acs: [
          {
            id: "C2-N2-AC1",
            title: {
              fr: "Choisir des structures de données complexes adaptées au problème",
              en: "Choose complex data structures suited to the problem",
            },
          },
          {
            id: "C2-N2-AC2",
            title: {
              fr: "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle…)",
              en: "Use suitable algorithmic techniques for complex problems (e.g. operations research, tree-based methods, global optimization, artificial intelligence…)",
            },
          },
          {
            id: "C2-N2-AC3",
            title: {
              fr: "Comprendre les enjeux et moyens de sécurisation des données et du code",
              en: "Understand the stakes and means of securing data and code",
            },
          },
          {
            id: "C2-N2-AC4",
            title: {
              fr: "Évaluer l'impact environnemental et sociétal des solutions proposées",
              en: "Assess the environmental and societal impact of the proposed solutions",
            },
          },
        ],
      },
      {
        number: 3,
        title: { fr: "Analyser et optimiser des applications", en: "Analyze and optimize applications" },
        acs: [
          {
            id: "C2-N3-AC1",
            title: {
              fr: "Anticiper les résultats de diverses métriques (temps d'exécution, occupation mémoire…)",
              en: "Anticipate the results of various metrics (execution time, memory usage…)",
            },
          },
          {
            id: "C2-N3-AC2",
            title: {
              fr: "Profiler, analyser et justifier le comportement d'un code existant",
              en: "Profile, analyze and justify the behavior of existing code",
            },
          },
          {
            id: "C2-N3-AC3",
            title: {
              fr: "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel…)",
              en: "Choose and use libraries and methods dedicated to the application domain (imaging, immersion, artificial intelligence, video games, parallelism, symbolic computation…)",
            },
          },
        ],
      },
    ],
  },
  {
    id: "C3",
    title: {
      fr: "Administrer des systèmes informatiques communicants complexes",
      en: "Administer complex communicating computer systems",
    },
    description: {
      fr: "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation.",
      en: "Install, configure, provide and keep in working order infrastructures, services and networks, and optimize an organization's IT system.",
    },
    components: [
      { fr: "en sécurisant le système d'information", en: "by securing the information system" },
      {
        fr: "en appliquant les normes en vigueur et les bonnes pratiques architecturales et de sécurité",
        en: "by applying current standards and good architectural and security practices",
      },
      { fr: "en offrant une qualité de service optimale", en: "by providing optimal quality of service" },
      { fr: "en assurant la continuité d'activité", en: "by ensuring business continuity" },
    ],
    levels: [
      {
        number: 1,
        title: { fr: "Installer et configurer un poste de travail", en: "Install and configure a workstation" },
        acs: [
          {
            id: "C3-N1-AC1",
            title: {
              fr: "Identifier les différents composants (matériels et logiciels) d'un système numérique",
              en: "Identify the various components (hardware and software) of a digital system",
            },
          },
          {
            id: "C3-N1-AC2",
            title: {
              fr: "Utiliser les fonctionnalités de base d'un système multitâches / multiutilisateurs",
              en: "Use the basic features of a multitasking / multi-user system",
            },
          },
          {
            id: "C3-N1-AC3",
            title: {
              fr: "Installer et configurer un système d'exploitation et des outils de développement",
              en: "Install and configure an operating system and development tools",
            },
          },
          {
            id: "C3-N1-AC4",
            title: {
              fr: "Configurer un poste de travail dans un réseau d'entreprise",
              en: "Configure a workstation within a corporate network",
            },
          },
        ],
      },
      {
        number: 2,
        title: {
          fr: "Déployer des services dans une architecture réseau",
          en: "Deploy services within a network architecture",
        },
        acs: [
          {
            id: "C3-N2-AC1",
            title: {
              fr: "Concevoir et développer des applications communicantes",
              en: "Design and develop communicating applications",
            },
          },
          {
            id: "C3-N2-AC2",
            title: {
              fr: "Utiliser des serveurs et des services réseaux virtualisés",
              en: "Use virtualized servers and network services",
            },
          },
          {
            id: "C3-N2-AC3",
            title: { fr: "Sécuriser les services et données d'un système", en: "Secure a system's services and data" },
          },
        ],
      },
    ],
  },
  {
    id: "C4",
    title: { fr: "Gérer des données de l'information", en: "Manage information data" },
    description: {
      fr: "Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise.",
      en: "Design, manage, administer and use the company's data, and make all the information available for sound business management.",
    },
    components: [
      {
        fr: "en respectant les réglementations sur le respect de la vie privée et la protection des données personnelles",
        en: "by complying with regulations on privacy and personal data protection",
      },
      {
        fr: "en respectant les enjeux économiques, sociétaux et écologiques de l'utilisation du stockage de données, ainsi que les différentes infrastructures (data centers, cloud, etc.)",
        en: "by respecting the economic, societal and ecological stakes of data storage, as well as the various infrastructures (data centers, cloud, etc.)",
      },
      { fr: "en s'appuyant sur des bases mathématiques", en: "by relying on mathematical foundations" },
      { fr: "en assurant la cohérence et la qualité", en: "by ensuring consistency and quality" },
    ],
    levels: [
      {
        number: 1,
        title: {
          fr: "Concevoir et mettre en place une base de données à partir d'un cahier des charges client",
          en: "Design and set up a database from a client's specifications",
        },
        acs: [
          {
            id: "C4-N1-AC1",
            title: {
              fr: "Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)",
              en: "Update and query a relational database (through direct queries or through an application)",
            },
          },
          { id: "C4-N1-AC2", title: { fr: "Visualiser des données", en: "Visualize data" } },
          {
            id: "C4-N1-AC3",
            title: {
              fr: "Concevoir une base de données relationnelle à partir d'un cahier des charges",
              en: "Design a relational database from a set of specifications",
            },
          },
        ],
      },
      {
        number: 2,
        title: {
          fr: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité",
          en: "Optimize a database, interact with an application and implement security",
        },
        acs: [
          {
            id: "C4-N2-AC1",
            title: { fr: "Optimiser les modèles de données de l'entreprise", en: "Optimize the company's data models" },
          },
          {
            id: "C4-N2-AC2",
            title: {
              fr: "Assurer la confidentialité des données (intégrité et sécurité)",
              en: "Ensure data confidentiality (integrity and security)",
            },
          },
          {
            id: "C4-N2-AC3",
            title: {
              fr: "Organiser la restitution de données à travers la programmation et la visualisation",
              en: "Organize data reporting through programming and visualization",
            },
          },
          { id: "C4-N2-AC4", title: { fr: "Manipuler des données hétérogènes", en: "Handle heterogeneous data" } },
        ],
      },
    ],
  },
  {
    id: "C5",
    title: { fr: "Conduire un projet", en: "Lead a project" },
    description: {
      fr: "Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.",
      en: "Meet users' needs with regard to the client's value chain, and organize and steer an IT project using traditional or agile methods.",
    },
    components: [
      {
        fr: "en communiquant efficacement avec les différents acteurs d'un projet",
        en: "by communicating effectively with the various project stakeholders",
      },
      {
        fr: "en respectant les règles juridiques et les normes en vigueur",
        en: "by complying with legal rules and current standards",
      },
      {
        fr: "en sensibilisant à une gestion éthique, responsable, durable et interculturelle",
        en: "by raising awareness of ethical, responsible, sustainable and intercultural management",
      },
      {
        fr: "en adoptant une démarche proactive, créative et critique",
        en: "by adopting a proactive, creative and critical approach",
      },
    ],
    levels: [
      {
        number: 1,
        title: {
          fr: "Identifier les besoins métiers des clients et des utilisateurs",
          en: "Identify the business needs of clients and users",
        },
        acs: [
          {
            id: "C5-N1-AC1",
            title: {
              fr: "Appréhender les besoins du client et de l'utilisateur",
              en: "Understand the needs of the client and the user",
            },
          },
          {
            id: "C5-N1-AC2",
            title: { fr: "Mettre en place les outils de gestion de projet", en: "Set up project management tools" },
          },
          {
            id: "C5-N1-AC3",
            title: {
              fr: "Identifier les acteurs et les différentes phases d'un cycle de développement",
              en: "Identify the stakeholders and the different phases of a development cycle",
            },
          },
        ],
      },
      {
        number: 2,
        title: {
          fr: "Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs",
          en: "Apply a project monitoring approach based on the business needs of clients and users",
        },
        acs: [
          {
            id: "C5-N2-AC1",
            title: {
              fr: "Identifier les processus présents dans une organisation en vue d'améliorer les systèmes d'information",
              en: "Identify the processes within an organization in order to improve its information systems",
            },
          },
          {
            id: "C5-N2-AC2",
            title: {
              fr: "Formaliser les besoins du client et de l'utilisateur",
              en: "Formalize the needs of the client and the user",
            },
          },
          {
            id: "C5-N2-AC3",
            title: {
              fr: "Identifier les critères de faisabilité d'un projet informatique",
              en: "Identify the feasibility criteria of an IT project",
            },
          },
          {
            id: "C5-N2-AC4",
            title: {
              fr: "Définir et mettre en œuvre une démarche de suivi de projet",
              en: "Define and implement a project monitoring approach",
            },
          },
        ],
      },
    ],
  },
  {
    id: "C6",
    title: { fr: "Collaborer au sein d'une équipe informatique", en: "Collaborate within an IT team" },
    description: {
      fr: "Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.",
      en: "Acquire, develop and use the skills needed to work effectively in an IT team.",
    },
    components: [
      {
        fr: "en inscrivant sa démarche au sein d'une équipe pluridisciplinaire",
        en: "by placing one's approach within a multidisciplinary team",
      },
      {
        fr: "en accompagnant la mise en œuvre des évolutions informatiques",
        en: "by supporting the implementation of IT changes",
      },
      { fr: "en veillant au respect des contraintes juridiques", en: "by ensuring compliance with legal constraints" },
      {
        fr: "en développant une communication efficace et collaborative",
        en: "by developing effective, collaborative communication",
      },
    ],
    levels: [
      {
        number: 1,
        title: {
          fr: "Identifier ses aptitudes pour travailler dans une équipe",
          en: "Identify one's own aptitudes for working in a team",
        },
        acs: [
          { id: "C6-N1-AC1", title: { fr: "Appréhender l'écosystème numérique", en: "Understand the digital ecosystem" } },
          {
            id: "C6-N1-AC2",
            title: {
              fr: "Découvrir les aptitudes requises selon les différents secteurs informatiques",
              en: "Discover the aptitudes required in the various IT sectors",
            },
          },
          {
            id: "C6-N1-AC3",
            title: {
              fr: "Identifier les statuts, les fonctions et les rôles de chaque membre d'une équipe pluridisciplinaire",
              en: "Identify the status, functions and roles of each member of a multidisciplinary team",
            },
          },
          {
            id: "C6-N1-AC4",
            title: {
              fr: "Acquérir les compétences interpersonnelles pour travailler en équipe",
              en: "Acquire the interpersonal skills to work in a team",
            },
          },
        ],
      },
      {
        number: 2,
        title: {
          fr: "Situer son rôle et ses missions au sein d'une équipe informatique",
          en: "Understand one's role and missions within an IT team",
        },
        acs: [
          {
            id: "C6-N2-AC1",
            title: {
              fr: "Comprendre la diversité, la structure et la dimension de l'informatique dans une organisation (ESN, DSI, …)",
              en: "Understand the diversity, structure and scope of IT within an organization (IT services companies, IT departments, …)",
            },
          },
          {
            id: "C6-N2-AC2",
            title: {
              fr: "Appliquer une démarche pour intégrer une équipe informatique au sein d'une organisation",
              en: "Apply an approach to join an IT team within an organization",
            },
          },
          {
            id: "C6-N2-AC3",
            title: {
              fr: "Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique",
              en: "Draw on interpersonal skills to join an IT team",
            },
          },
          {
            id: "C6-N2-AC4",
            title: { fr: "Rendre compte de son activité professionnelle", en: "Report on one's professional activity" },
          },
        ],
      },
      {
        number: 3,
        title: { fr: "Manager une équipe informatique", en: "Manage an IT team" },
        acs: [
          {
            id: "C6-N3-AC1",
            title: { fr: "Organiser et partager une veille numérique", en: "Organize and share technology watch" },
          },
          {
            id: "C6-N3-AC2",
            title: {
              fr: "Identifier les enjeux de l'économie de l'innovation numérique",
              en: "Identify the stakes of the digital innovation economy",
            },
          },
          {
            id: "C6-N3-AC3",
            title: {
              fr: "Guider la conduite du changement informatique au sein d'une organisation",
              en: "Guide IT change management within an organization",
            },
          },
          {
            id: "C6-N3-AC4",
            title: {
              fr: "Accompagner le management de projet informatique",
              en: "Support IT project management",
            },
          },
        ],
      },
    ],
  },
];

/** Compétences évaluées en 3e année du parcours A : les seules affichées dans competences.exe. */
export const evaluatedCompetenceIds: Competence["id"][] = ["C1", "C2", "C6"];
