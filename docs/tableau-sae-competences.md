# Tableau SAÉ × compétences

Suite du document de Denis (`Document sans titre.pdf`, octobre 2026). Notation de Denis :
`niveau.AC`, par exemple `2.3` = niveau 2, AC 3 de la compétence de la colonne.

- Les lignes « (Denis) » sont son texte recopié tel quel, orthographe corrigée (corrections listées
  en bas). Les autres ont été proposées par Claude d'après le code et l'historique Git des dépôts.
- **Tout le tableau a été validé par Denis le 2026-10-01.** Il est reporté dans
  `src/data/projects.ts`, qui fait désormais foi : c'est là qu'on modifie un argumentaire.
- Colonne « Compétence 3 » = **C6 Collaborer** (3e compétence évaluée en 3e année du parcours A,
  confirmé par Denis).

Dépôts :
- Terraria : https://github.com/DaichiDen/TerrariaSAE (mai → septembre 2025)
- Buvette PHP « À-LADÉBAUCHE » : https://github.com/DenisZAPOI/SAE_DEV_DUPUIS_ZAPOI_CAI (décembre 2025 → janvier 2026)
- Visite facile : https://github.com/DenisZAPOI/S4A_2026_Visite-facile_BACK et
  https://github.com/DenisZAPOI/S4A_2026_Visite-facile_FRONT (février → avril 2026)

---

## SAÉ Terraria

### Compétence 1 — Réaliser (Denis)

- 1.1 -> Implémenter des conceptions simples telles qu'une simulation réduite et simplifiée de la
  gravité pour toute entité.
- 1.2 -> Élaborer des conceptions simples grâce à du brainstorming en groupe.
- 1.4 -> Développer des interfaces utilisateurs à travers JavaFX et SceneBuilder.
- 2.3 -> Adoption de bonnes pratiques de programmation à travers l'usage du paradigme POO ainsi que
  les Design Patterns.
- 2.4 -> Vérification de la qualité de l'application à travers des jeux de tests unitaires mais
  surtout à travers des tests humains.
- 3.2 -> Évolution de l'application en S3 à travers l'identification des mauvaises pratiques de
  programmation présentes pour ensuite faire de la refonte grâce aux Design Patterns,
  l'encapsulation ou autre.

### Compétence 2 — Optimiser (Denis)

- 1.2 -> Comparaison entre DFS/BFS et A* pour gérer les déplacements d'entités indépendantes.
- 1.3 -> Mise en œuvre d'outils mathématiques comme les vecteurs pour gérer la physique pour les
  déplacements ou bien l'usage d'une Matrice 2D pour représenter la carte du jeu.
- 2.1 -> Usage de structures de données adaptées au besoin, par exemple, l'usage de HashMaps pour
  lier l'identifiant d'un item à une image.
- 2.2 -> Création d'une IA très basique pour gérer les comportements d'entités ennemies (si le
  joueur est dans un certain rayon de vision alors l'entité va effectuer une certaine action etc.).
- 3.1 -> Anticipation de l'occupation mémoire nécessaire pour la gestion de posage de blocs v1, on
  parcourait toute la matrice pour voir si là où le joueur a cliqué était libre. Puis la v2
  parcourait 3x3 autour du joueur car on avait anticipé que ça serait très coûteux en mémoire.
- 3.3 -> Choix de la bibliothèque JavaFX pour la réalisation de l'interface graphique du jeu.

### Compétence 6 — Collaborer

- 1.3 -> Répartition des rôles dans une équipe de quatre : chacun développe ses fonctionnalités
  sur sa propre branche (craft, barre de vie, projectiles, switch d'items…), et j'intègre ces
  branches dans `develop` (la grande majorité des merges du dépôt).
- 1.4 -> Travail en équipe organisé en sprints validés au fur et à mesure (« Sprint 3 validé »),
  avec une revue de code commune pour retirer les attributs inutiles avant le rendu.
- 2.4 -> Rendre compte de notre travail à travers la documentation utilisateur rendue avec le
  jeu.

---

## SAÉ Buvette PHP

### Compétence 1 — Réaliser (Denis)

- 1.1 -> Implémentation des différentes fonctionnalités de l'application comme la gestion des
  comptes utilisateurs, les achats, les ventes et les stocks.
- 1.2 -> Conception de la base de données et réalisation des différents parcours utilisateurs ainsi
  que persona pour comprendre à qui s'adresse chaque fonctionnalité.
- 1.4 -> Création des interfaces adaptées aux différents utilisateurs (client, barman et
  administrateur).
- 2.1 -> Traduction des besoins de l'association en fonctionnalités à travers les personas, user
  stories, parcours utilisateurs.
- 2.2 -> Conception d'une interface simple et ergonomique, compatible sur mobile également.
- 2.3 -> Mise en place de bonnes pratiques de développement avec une séparation des rôles, des
  fonctionnalités et des différentes parties de l'application (structure MVC).
- 2.4 -> Vérification du bon fonctionnement de l'application à travers des tests dans le
  navigateur.

### Compétence 2 — Optimiser

- 1.1 -> Analyse et découpage de la prise de commande en étapes simples : vérifier que le stock
  suffit (la quantité maximale qu'un client peut commander dépend du stock), vérifier que le solde
  du client suffit, déduire les produits du stock, puis transférer le prix à la trésorerie de
  l'association.
- 2.3 -> Sécurisation des données et du code : requêtes préparées (PDO) contre les injections SQL,
  mots de passe hachés (`password_hash` / `password_verify`), jeton CSRF sur les formulaires,
  `htmlspecialchars` contre les failles XSS, vérification du type des fichiers déposés (image pour
  le logo d'une association, PDF pour les documents légaux).

### Compétence 6 — Collaborer

- 1.3 -> Répartition du travail par module entre les trois membres (par exemple pour moi :
  connexion, solde, prise de commande, passage à Bootstrap, jeton CSRF ; pour les autres :
  récapitulatif de la journée, historique, réapprovisionnement, stock, staff), chacun sur sa
  branche, avec moi à l'intégration des branches.
- 2.3 -> Mobiliser les compétences interpersonnelles pour tenir les sprints en équipe et résoudre
  ensemble les conflits de fusion lors des changements de la base de données qui touchaient le code
  de tout le monde.

> Piste sans AC précis : le changement de nom de l'application pour éviter un problème de droits
> d'auteur et le dépôt des documents légaux des associations illustrent « en veillant au respect des
> contraintes juridiques », qui est dans la description de C6 mais pas dans ses AC. Peut servir dans
> le bilan réflexif plutôt que dans le tableau.

---

## SAÉ Visite facile (S4)

Application de recueil des visiteurs de l'IUT (portes ouvertes, salons) : formulaire d'inscription,
liste filtrée, fiche visiteur, statistiques, export CSV, mode administrateur. Front React +
TypeScript (Vite), back Flask (Python) + MongoDB, avec Isidore MEILLEUR et Edin DUPUIS.

### Compétence 1 — Réaliser

- 2.1 -> Traduction des exigences en spécifications : formulaire d'inscription avec tous les
  champs utiles à l'IUT (bac, spécialités, filière, département visité, immersion, réorientation,
  situation particulière…), avec des règles métier (les spécialités ne sont demandées que pour un
  bac général, et la spécialité 1 ne peut pas être la même que la spécialité 2).
- 2.2 -> Ergonomie de l'interface : formulaire découpé en accordéons pour éviter la surcharge
  visuelle, couleurs de l'IUT, filtres et pagination de la liste des visiteurs, mode sombre mémorisé
  dans le navigateur.
- 2.3 -> Bonnes pratiques de conception : back organisé en couches (contrôleur, service, accès aux
  données, DTO), DTO de modification séparée de la DTO de création car l'administrateur ne doit pas
  pouvoir tout modifier, code au format PEP 8, travail en branches avec pull requests,
  `requirements.txt` pour réinstaller les dépendances.
- 2.4 -> Vérification de l'application : méthode qui insère 20 visiteurs fictifs pour tester les
  filtres, les statistiques et l'export, ce qui a aussi permis de corriger un bug (la modification
  ne vérifiait pas que le visiteur existait).
- 3.1 -> Choix d'une architecture adaptée : front et back séparés dans deux dépôts qui
  communiquent par une API REST, et base NoSQL MongoDB pour des fiches visiteurs dont beaucoup de
  champs sont facultatifs.

### Compétence 2 — Optimiser

- 2.3 -> Sécurisation des données : mot de passe administrateur de 12 caractères minimum (vérifié
  avec Zod), ancien mot de passe demandé pour le changer en cas de vol de session, envoi en POST et
  non en GET pour que le mot de passe ne soit pas visible dans l'URL, et validation de toutes les
  données reçues par des DTO Pydantic dont les champs sont définis à l'avance.
- 2.4 -> Prise en compte de l'impact sociétal : les visiteurs sont souvent des lycéens, donc
  respect du RGPD avec une fenêtre de consentement avant l'inscription, une page de politique de
  confidentialité et un document RGPD.
- 3.1 -> Anticipation du volume de données : la liste des visiteurs est paginée côté serveur (on ne
  charge que 5 visiteurs par page) et ne récupère que les champs affichés, le détail complet n'est
  chargé qu'à l'ouverture de la fiche.
- 3.3 -> Choix de bibliothèques dédiées : Chart.js pour les statistiques en barres et en
  camembert, Pydantic côté back et Zod côté front pour valider les données.

### Compétence 6 — Collaborer

- 2.2 -> Démarche d'équipe proche de l'entreprise : une branche par fonctionnalité ou élément du
  backlog, fusion par pull request relue et acceptée par un autre membre, `develop` fusionnée sur
  `main` seulement quand on a une version fonctionnelle.
- 2.3 -> Mobiliser les compétences interpersonnelles pour se répartir un front et un back à trois
  et se mettre d'accord sur les routes de l'API (par exemple renommer une route pour que le front
  fonctionne).
- 2.4 -> Rendre compte de son activité : messages de commit qui annoncent l'état du travail (DONE,
  WIP, FIX, REFACTOR) et ce qu'il reste à faire pour les autres, `.env.example` et `requirements.txt`
  pour que l'équipe installe le projet, documentation utilisateur rendue avec l'application.

---

## Corrections d'orthographe et de ponctuation (texte de Denis)

| Ligne | Avant | Après |
|---|---|---|
| Terraria C1 1.1 | `pour toute entité .` | `pour toute entité.` |
| Terraria C1 3.2 | `Evolution` | `Évolution` |
| Terraria C1 3.2 | `grâce au Design Patterns` | `grâce aux Design Patterns` |
| Terraria C2 1.3 | `Mise en oeuvre` | `Mise en œuvre` |
| Terraria C2 2.1 | `au besoin , par exemple ,` | `au besoin, par exemple,` |
| Terraria C2 2.2 | `etc…)` | `etc.)` |
| Terraria C2 3.1 | `blocs v1 , on` | `blocs v1, on` |
| Terraria C2 3.1 | `si la où` | `si là où` |
| Terraria C2 3.1 | `que ca serait` | `que ça serait` |
| Buvette C1 2.3 | `l'application(structure MVC)` | `l'application (structure MVC)` |
| Partout | apostrophes `’` | `'` (sans effet à l'écran, cohérent avec le site) |

Points ajoutés en fin de ligne quand ils manquaient.

## Remarques de style (non appliquées)

- **Terraria C2 3.1** : la v1 qui parcourt toute la matrice est surtout un problème de **temps
  d'exécution** plutôt que d'occupation mémoire (la matrice existe dans les deux cas). « posage » n'est
  pas dans le dictionnaire : « pose de blocs ».
- **Terraria C1 2.3** : « ainsi que les Design Patterns » → « ainsi que des Design Patterns » se lit
  mieux. Citer lesquels (Observer avec les `Obs*` du contrôleur ? Singleton ?) rendrait la preuve plus
  forte.
- **Buvette C1 2.2** : « compatible sur mobile » → « compatible avec le mobile ».
- **Buvette C1 1.2** : « ainsi que persona » → « ainsi que des personas ».
- Lignes nominales sans verbe conjugué (« Adoption de… », « Vérification de… ») : c'est cohérent
  d'une ligne à l'autre, donc à garder si c'est voulu.
