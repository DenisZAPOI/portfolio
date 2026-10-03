# Plan de conformité du portfolio

Ce document résume les consignes, l'écart avec le site et le plan décidé avec Denis le 2026-10-01.
Référentiel détaillé : [referentiel-parcours-A.md](referentiel-parcours-A.md).

## Règle d'or

**Tout le contenu vient de Denis** : projets, SAÉ, lien SAÉ ↔ compétences/AC, argumentaires,
traces, bilans réflexifs. Claude ne crée aucun contenu. Il structure, code, relit l'orthographe
(sans changer la formulation) et traduit en anglais (niveau C1, en gardant le ton de Denis).
Seule exception : les intitulés officiels des compétences et des AC, recopiés du référentiel.

## Sources

- **Consignes** : `C:\Users\daich\Downloads\portfolioC.pdf`, diaporama d'Aurélien Bossard, IUT de
  Montreuil, 12 pages. Titré « 3ème Année – Parcours C » : ses pages 3 à 8 détaillent les
  compétences du parcours C (C4, C5, C6). **Denis est en parcours A** : on applique la même
  démarche aux compétences du parcours A.
- **Référentiel** : `C:\Users\daich\Downloads\info_referentiel_informatique_v34abc.pdf`, 226 pages.
- Pour relire un PDF : `pdftoppm` n'est pas installé sur la machine, donc on extrait le texte avec
  `pypdf` (`python -m pip install --target <dossier temporaire> pypdf`, puis `PdfReader`).

## Ce qu'exigent les consignes

1. **Double lecture** (diapo 11) :
   - *par les compétences* : les compétences et les projets dans lesquels elles ont été mises en
     œuvre ou acquises ;
   - *par les projets* : les projets et les compétences qu'ils ont mobilisées.
2. **Montrer et prouver** (diapo 10) : montrer les compétences acquises et apporter la preuve de leur
   acquisition, avec des éléments de preuve *argumentés et sélectionnés* (fiche P6.A.01).
3. **Posture réflexive** (diapo 2) : distanciation critique, trajectoire individuelle, au prisme du
   référentiel et du parcours suivi.
4. **S'appuyer sur les SAÉ.**
5. **Compétences « pratiques »** (diapo 9) : regrouper la maîtrise des outils dans les compétences ;
   refondre les compétences pour qu'elles correspondent aux besoins ; garder un niveau d'abstraction
   suffisant.
6. **Travail attendu** (diapo 12) : lister les projets, lister les compétences mobilisées, réaliser
   un tableau croisé, proposer une maquette de site.

## Décisions de Denis

| Question | Décision |
|---|---|
| Parcours | **A** : Réalisation d'applications |
| Niveaux montrés | **SAÉ des 3 années** : on montre la progression N1 → N2 → N3 (en 3e année : C1, C2, C6) |
| `skills.exe` (outils avec barres en %) | Devient une app à part, hors démarche compétences (nom retenu : voir plus bas) |
| Traces / preuves | **Lien vers le dépôt GitHub** du projet, et peut-être (pas encore sûr) une **vidéo de démo** courte |
| Tableau SAÉ ↔ AC | **Validé** tel quel le 2026-10-01 (y compris les propositions de Claude) |
| Projets affichés | Terraria, Buvette PHP, Visite facile + « Ce portfolio » (sans AC pour l'instant). Placeholders supprimés |
| Stage POP Solutions | **Pas un projet** de la double lecture : il reste seulement dans `experience.exe` |
| Nom de l'app outils | **Technologies** (`technologies.exe`, `tech.exe` en anglais) |
| Compétences affichées | **C1, C2 et C6** seulement (évaluées en 3e année) ; AC non prouvés affichés grisés |
| Mise en page projets / compétences | 1 page = 1 projet ou 1 compétence, fenêtres larges, onglets, argumentaires repliés |
| Tableau croisé | **Projets × AC** (pas projets × compétences) |
| Remplissage du bureau | `lisezmoi.txt` au chargement, visionneuse de captures, post-it, corbeille avec easter egg |

## Écart avec le site (mis à jour le 2026-10-04)

| Exigence | État | Reste à faire |
|---|---|---|
| Lecture par compétences | ✅ `competences.exe` (C1, C2, C6, projets qui prouvent chaque AC) | Bilan réflexif |
| Lecture par projets | ✅ `projets.exe` (code SAÉ, description, AC mobilisés + argumentaires) | Semestre (TODO) |
| Preuves | ✅ lien GitHub par projet | Vidéos de démo ? Captures (visionneuse) |
| Réflexivité | ❌ aucune | Bilan par compétence, rédigé par Denis |
| Tableau croisé | ✅ `tableau.exe` (projets × AC) | — |

Réutilisés tels quels : le bureau, la pagination, `experience.exe`, `perso.exe`, `contact.exe`.
Le stage POP Solutions reste seulement dans `experience.exe` (décision de Denis, voir plus haut).

## Plan

### Étape 1 — Données (une seule source de vérité)

- `src/data/competences.ts` : C1 à C6 avec leurs niveaux et AC, textes du référentiel, ids
  `C1-N3-AC2` (voir notation dans le référentiel).
- `src/data/projects.ts` enrichi, pour chaque projet/SAÉ : code SAÉ, semestre, contexte, rôle,
  lien GitHub, vidéo (optionnelle), et pour chaque AC mobilisé : id de l'AC + argumentaire `{ fr, en }`.
  En place : code SAÉ (`saeCode`), description (liste de paragraphes), période, tags, dépôts,
  AC + argumentaires. Pas encore : semestre (TODO), contexte, rôle, vidéo.
- **Le lien projet → AC n'est saisi qu'une fois, côté projet.** La vue par compétence et le tableau
  croisé sont calculés à partir de là, donc toujours cohérents.
- Les outils restent des tags de projet. Une compétence affiche les outils des projets qui la
  prouvent (« regrouper les outils dans les compétences »).

### Étape 2 — Vues (métaphore du bureau)

- **App compétences** : une compétence par page → niveaux, AC, projets qui prouvent chaque AC
  (cliquables), bilan réflexif.
- **`projets.exe`** : AC mobilisés avec argumentaire, lien GitHub, vidéo éventuelle. Clic sur un AC
  → ouvre l'app compétences sur la bonne compétence. Cette navigation croisée = la double lecture.
- **`tableau.exe`** (nouvelle) : tableau croisé projets × AC, cases cliquables.
- **`skills.exe` → « Outils » / « Technologies »** : la liste actuelle avec barres.

### Étape 3 — Réflexivité

Par compétence, un bilan écrit par Denis (avant / appris / difficultés / progression). Claude fournit
seulement la structure, la relecture et la traduction.

### Étape 4 — Ordre de travail

1. ✅ Document de Denis « quelle compétence/AC du référentiel a été mobilisée dans quelle SAÉ » :
   [tableau-sae-competences.md](tableau-sae-competences.md), validé.
2. ✅ Données : `src/data/competences.ts` (C1 à C6, 54 AC) + nouveau format de `src/data/projects.ts`
   (période, tags, dépôts, AC avec argumentaire).
3. ✅ Refonte de `projets.exe` (1 projet par page, AC regroupés par compétence avec argumentaire)
   et nouvelle app `competences.exe` (C1, C2, C6 seulement, 1 par page ; AC non prouvés grisés ;
   sous chaque AC, les projets qui le prouvent). Navigation croisée : clic sur un AC → la
   compétence, clic sur un projet → le projet. La page de chaque fenêtre est gardée par le
   gestionnaire de fenêtres (`open(id, page, ac)`). Puis allègement : fenêtres larges, onglets
   (par compétence dans projets, par niveau dans compétences), argumentaires repliés ; la
   navigation croisée ouvre le bon onglet et met l'AC en évidence.
4. ✅ `tableau.exe` (`matrix.exe` en anglais) : tableau croisé projets × AC, un onglet par
   compétence (C1, C2, C6), cases cliquables vers l'argumentaire, codes d'AC vers la compétence.
5. ✅ `skills.exe` renommé en `technologies.exe` (`tech.exe` en anglais).
6. **Prochaine étape** : traces et bilans au fur et à mesure.

Hors plan, fait aussi le 2026-10-01 : déploiement sur Vercel, remplissage du bureau
(`lisezmoi.txt`, post-it, visionneuse, corbeille, icônes sur deux colonnes).
Le 2026-10-04 : descriptions de Terraria et de la Buvette PHP (texte de Denis, traduites), codes SAÉ
affichés à côté de la période dans `projets.exe`, fond d'écran temporaire.

## Points encore ouverts

- Vidéos de démo : oui ou non, et hébergement (fichier dans `public/` ou plateforme externe) ?
- Bilans réflexifs : où les afficher (dans `competences.exe` ?) et sous quelle forme (avant / appris /
  difficultés / progression ?).
- « Ce portfolio » n'a **pas d'AC** (décision de Denis) : il reste dans `projets.exe` sans
  compétences mobilisées.

## TODO (plus tard, non bloquant)

- [x] Code SAÉ de chaque projet (`saeCode` dans `src/data/projects.ts`) — fourni par Denis.
- [ ] Semestre de chaque projet — fourni par Denis.
- [x] Description de Terraria — écrite par Denis.
- [x] Description de la Buvette PHP — écrite par Denis.
- [x] Post-it : texte de Denis en place (`src/data/desktop.ts`).
- [ ] Contenu du bureau dans `src/data/desktop.ts` (fourni par Denis) : texte d'accueil de
  lisezmoi.txt, captures des projets avec légende (`public/screenshots/`), fichiers « supprimés »
  de la corbeille (nom + une phrase).
- [ ] Fond d'écran définitif (`public/` + `src/config/wallpaper.ts`) : un fond temporaire est en place.
