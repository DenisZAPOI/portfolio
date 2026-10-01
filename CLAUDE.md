@AGENTS.md

# Portfolio BUT Informatique — Denis ZAPOI

Portfolio de 3e année de BUT Informatique, **parcours A** (Réalisation d'applications),
IUT de Montreuil. Site façon **bureau d'OS rétro** (inspiré de warframedle.com) : des icônes
ouvrent des fenêtres déplaçables, avec une barre des tâches et un menu démarrer.

## Documents à lire pour reprendre le travail

- **[docs/plan-conformite-portfolio.md](docs/plan-conformite-portfolio.md)** : consignes du
  portfolio, décisions de Denis, écart avec le site, **plan en cours et prochaine étape**.
- **[docs/referentiel-parcours-A.md](docs/referentiel-parcours-A.md)** : compétences C1 à C6,
  niveaux et AC recopiés du référentiel, notation `C1-N3-AC2`, liste des SAÉ, fiche portfolio.

## Où en est le projet (2026-10-01)

- Bureau fonctionnel : fenêtres, drag, réduction, Échap, menu démarrer, FR/EN, mobile, pagination.
- Contenu réel : `perso.exe` (bio), `experience.exe` (stage POP Solutions + entrée verrouillée),
  `technologies.exe` (outils regroupés par thème), CV dans `public/cv.pdf`, liens de contact.
- Double lecture en place : `projets.exe` (AC mobilisés + argumentaires) ↔ `competences.exe`
  (C1, C2, C6, projets qui prouvent chaque AC), avec navigation croisée.
- Conformité aux consignes en cours : tableau SAÉ ↔ AC validé, données en place
  (`src/data/competences.ts`, `src/data/projects.ts` : Terraria, Buvette PHP, Visite facile,
  « Ce portfolio »).
- Tableau croisé projets × AC : `tableau.exe`.
- **Prochaine étape** : traces (vidéos ?) et bilans réflexifs par compétence (étapes 3 et 6 du plan).

## Règles de contenu

- **Tout le contenu vient de Denis.** Ne rien inventer : projets, SAÉ, liens SAÉ ↔ AC,
  argumentaires, preuves, bilans. Seule exception : les intitulés officiels du référentiel.
- Textes de Denis : corriger **uniquement** l'orthographe et la ponctuation, **sans changer sa
  formulation ni ses mots**. Lister chaque correction dans la réponse. Signaler sans les appliquer
  les remarques de style (phrases sans verbe, répétitions…).
- Traduction anglaise : Denis est niveau C1, donc anglais avancé et naturel qui garde son ton.
  Expliquer les sigles français pour un lecteur étranger (BUT, SNT…).
- Les textes longs sont découpés en paragraphes : listes de `{ fr, en }` (voir `profile.bio`,
  `experiences[].description`).

## Méthode de travail

- Pour chaque point imprécis sur la façon dont le site doit être fait, **poser la question avant
  d'agir**.
- **Lisibilité avant abstraction** : ce n'est pas une librairie. Pas de génériques, de reducers ni
  de hooks configurables quand du code spécifique et explicite suffit. Des noms complets
  (`translate`, pas `l`).
- **Git** : Denis travaille seul, donc commit et push **directement sur `main`**, sans branche ni
  PR, mais **uniquement quand il le demande**. Messages de commit en français, clairs, structurés
  par thème. Ne pas committer `.claude/` (config locale du serveur de dev).
- Avant de rendre la main : `npm run lint`, `npx tsc --noEmit`, `npm run build`, puis test dans le
  navigateur (`npm run dev`, http://localhost:3000).
- Pièges connus :
  - en dev, le logo « N » de Next.js recouvre le bouton « menu » (il n'existe pas en production) ;
  - le linter React 19 interdit `setState` directement dans un `useEffect` (on utilise
    `useSyncExternalStore`) et la lecture d'un objet contenant une ref pendant le rendu
    (déstructurer le résultat de `usePagination`) ;
  - Windows masque les extensions : un fichier peut s'appeler `cv.pdf.pdf`. Les fichiers servis
    par le site doivent être dans `public/`.

## Décisions de design

- **Stack** : Next.js 16 (App Router, TypeScript, `src/`) + Tailwind CSS 4. Déployé sur **Vercel**
  (depuis le 2026-10-01) : chaque push sur `main` redéploie le site automatiquement.
- **Dépôt** : public, https://github.com/DenisZAPOI/portfolio
- **Langues** : français et anglais via un bouton de bascule côté client (une seule URL, choix
  mémorisé dans le navigateur). Français par défaut. Bouton FR/EN dans la barre des tâches, à côté
  de l'horloge.
- **Palette** : Endesga 32 (https://lospec.com/palette-list/endesga-32), choisie pour sortir du
  look lavande/menthe « IA » après comparaison avec Sentry, IMO Health, Phantom et Railway. Les
  tokens sont dans `src/app/globals.css`.
- **Typographies** : Space Grotesk (titres/UI), IBM Plex Mono (labels techniques), Inter (corps),
  Press Start 2P (horloge).
- **Style pixel** : icônes pixel art 16×16 dessinées en SVG (objets rétro OS, sans tuile de fond),
  barres de titre en aplat, bords nets sans arrondi, ombres dures, aucun dégradé ni flou.
- **Fond d'écran** : image fournie par Denis plus tard (`public/` + `src/config/wallpaper.ts`),
  fond uni en attendant.
- **Mobile** : la grille d'icônes reste, un tap ouvre la fenêtre en plein écran, pas de drag.
- **Menu démarrer** : liste des fenêtres, liens rapides (CV, GitHub, LinkedIn), choix de langue.
- **Pagination** : Expérience, Projets et Compétences 1 par page, Technologies 5. Barre d'état toujours visible
  en bas de la fenêtre, boutons flèche en relief Windows 95, flèches ← → du clavier sur la fenêtre
  active, retour en haut du contenu à chaque changement de page.
- **Projets et compétences** : fenêtres larges (640 px). Dans `projets.exe`, un onglet par
  compétence et des argumentaires repliés (`<details>`) ; dans `competences.exe`, un onglet par
  niveau, description repliée, AC non prouvés grisés. La navigation croisée ouvre le bon onglet et
  met en évidence l'AC visé (`focusedAc`).
- **Expérience verrouillée** : `locked: true` → grisée, avec cadenas et « NULL » en mono.

## Organisation du code

Séparation en couches : logique pure → hooks → rendu.
- `src/lib/` : logique pure en TypeScript, sans React (une fonction par action sur les fenêtres,
  calculs de position, lecture croisée projets ↔ AC dans `competences.ts`).
- `src/hooks/` : branchent la logique sur React (`useWindowManager`, `useWindowDrag`,
  `useClickOutside`, `useClock`, `usePagination`).
- `src/config/apps.ts` : liste des applications du bureau (id, icône, contenu). Le contenu reçoit
  `AppContentProps` : `active` (fenêtre au premier plan), `page` et `onPageChange` (la page est
  gardée par le gestionnaire de fenêtres), `openApp(id, page?)` pour la navigation croisée.
- `src/config/wallpaper.ts` : chemin du fond d'écran (`null` = fond uni).
- `src/components/pixel-icons.tsx` : icônes pixel art dessinées en texte (une lettre = une couleur).
- `src/components/desktop/` : bureau, fenêtres, barre des tâches, menu démarrer, horloge.
- `src/components/apps/` : contenu de chaque fenêtre, un fichier par app. `shared.tsx` contient
  `ScrollArea`, `Row`, `Title`, `Caption`, `SectionTitle`, `Tag`, `Tabs` (onglets Windows 95), `DisclosureArrow`. `PaginationBar.tsx` est la barre de pagination.
- `src/data/` : contenu du portfolio, chaque texte en `{ fr, en }`.
- `src/i18n/` : langue courante (`useLocale` → `ui`, `translate`) et textes de l'interface (`ui.ts`).
- `docs/` : documentation du projet (plan de conformité, extrait du référentiel).

## Historique des maquettes

- Brouillon « landing page » dev/terminal : https://claude.ai/artifact/UHFz1BKRiei5EvJTLHZqbH
- Brouillon « bureau rétro » (direction retenue) : https://claude.ai/artifact/PsmoptVGNCHQ4UHuGzrBsd
