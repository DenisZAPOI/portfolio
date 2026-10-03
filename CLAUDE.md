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

## Où en est le projet (2026-10-04)

- Bureau fonctionnel : fenêtres, drag, réduction, Échap, menu démarrer, FR/EN, mobile, pagination.
- Contenu réel : `perso.exe` (bio), `experience.exe` (stage POP Solutions + entrée verrouillée),
  `technologies.exe` (outils regroupés par thème), CV dans `public/cv.pdf`, liens de contact.
- Double lecture en place : `projets.exe` (AC mobilisés + argumentaires) ↔ `competences.exe`
  (C1, C2, C6, projets qui prouvent chaque AC), avec navigation croisée.
- Conformité aux consignes en cours : tableau SAÉ ↔ AC validé, données en place
  (`src/data/competences.ts`, `src/data/projects.ts` : Terraria S2.01, Buvette PHP S3.02 Web,
  Visite facile S4.A.01, « Ce portfolio »), avec une description pour chaque projet.
- Tableau croisé projets × AC : `tableau.exe`.
- Bureau rempli : `lisezmoi.txt` ouvert au chargement, post-it en pixel art (texte de Denis),
  visionneuse de captures (en attente des captures), corbeille (en attente de l'easter egg),
  icônes sur deux colonnes.
- Site en ligne sur Vercel. Fond d'écran temporaire (`public/wallpaper.png`).
- **Prochaine étape** : bilans réflexifs par compétence et traces (vidéos ?) — « Étape 3 —
  Réflexivité » et point 6 de l'ordre de travail du plan. Contenu en attente : voir le TODO du plan.

## Règles de contenu

- **Tout le contenu vient de Denis.** Ne rien inventer : projets, SAÉ, liens SAÉ ↔ AC,
  argumentaires, preuves, bilans. Seule exception : les intitulés officiels du référentiel.
- Textes de Denis : corriger **uniquement** l'orthographe et la ponctuation, **sans changer sa
  formulation ni ses mots**. Lister chaque correction dans la réponse. Signaler sans les appliquer
  les remarques de style (phrases sans verbe, répétitions…).
- Traduction anglaise : Denis est niveau C1, donc anglais avancé et naturel qui garde son ton.
  Expliquer les sigles français pour un lecteur étranger (BUT, SNT…).
- Les textes longs sont découpés en paragraphes : listes de `{ fr, en }` (voir `profile.bio`,
  `experiences[].description`, `projects[].description`).

## Méthode de travail

- Pour chaque point imprécis sur la façon dont le site doit être fait, **poser la question avant
  d'agir**.
- **Lisibilité avant abstraction** : ce n'est pas une librairie. Pas de génériques, de reducers ni
  de hooks configurables quand du code spécifique et explicite suffit. Des noms complets
  (`translate`, pas `l`).
- **Git** : Denis travaille seul, sans PR. Travail en cours sur la branche **`develop`** (depuis le
  2026-10-03) ; `main` est la version en ligne. Commit et push **uniquement quand il le demande**. Messages de commit en français, clairs, structurés
  par thème. Ne pas committer `.claude/` (config locale du serveur de dev).
- Avant de rendre la main : `npm run lint`, `npx tsc --noEmit`, `npm run build`, puis test dans le
  navigateur (`npm run dev`, http://localhost:3000).
- Pièges connus :
  - en dev, le logo « N » de Next.js recouvre le bouton « menu » (il n'existe pas en production) ;
  - le linter React 19 interdit `setState` directement dans un `useEffect` (on utilise
    `useSyncExternalStore`) et la lecture d'un objet contenant une ref pendant le rendu
    (déstructurer le résultat de `usePagination`) ;
  - une icône pixel art ajoutée ou modifiée ne s'affiche pas tant que `npm run icons` n'a pas été
    lancé ;
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
- **Thèmes** : sombre (par défaut, palette Endesga 32) et « Normal » (clair, couleurs de Windows 2000 :
  bureau bleu, fenêtres grises, barre de titre bleu marine), au choix dans le menu démarrer. Le
  thème clair redéfinit les mêmes variables sous `[data-theme="light"]` dans `globals.css` : les
  classes ne changent pas. Texte sur une couleur d'accent : `text-on-accent` (toujours blanc).
  Choix mémorisé dans le navigateur (`useTheme`), appliqué avant l'affichage par un script dans
  `<head>` (`layout.tsx`, clé dans `src/lib/theme.ts`).
- **Typographies** : Space Grotesk (titres/UI), IBM Plex Mono (labels techniques), Inter (corps),
  Press Start 2P (horloge), Gochi Hand (texte du post-it, écrit à la main).
- **Style pixel** : icônes pixel art servies en PNG et agrandies sans flou (16×16 pour les icônes d'apps, objets rétro
  OS sans tuile de fond ; 30×30 pour le post-it, 10×9 pour la punaise), barres de titre en aplat,
  bords nets sans arrondi, ombres dures, aucun dégradé ni flou.
- **Tailles fluides** : toute l'interface est en `rem` et grandit avec l'écran. La taille de base
  (`html { font-size }` dans `globals.css`) va de 16 px (portable, mobile) à ~18 px en 1920×1080 et
  ~21 px en 2560×1440 (22 px au plus, `min(vw, vh)` pour les écrans larges mais bas). **Ne pas écrire
  de tailles en `px`** (sauf ombres dures et valeurs `max-sm:`) : utiliser l'échelle Tailwind, les
  tokens `text-label` / `text-label-lg`, ou des `rem`. Fenêtres : 30 rem, 42 rem si `wide`,
  contenu limité à 70 % de l'écran et jamais sous la barre des tâches.
- **Fond d'écran** : image fournie par Denis (`public/` + `src/config/wallpaper.ts`). Un fond
  temporaire est en place (`public/wallpaper.png`), en attendant le définitif.
- **Mobile** : la grille d'icônes reste, un tap ouvre la fenêtre en plein écran, pas de drag.
  Pas de widgets à droite, et `lisezmoi.txt` ne s'ouvre pas tout seul.
- **Icônes du bureau** : deux colonnes fixées dans `desktopColumns` (`src/config/apps.ts`) :
  Lisez-moi, Perso, Technologies, Contact | Expérience, Projets, Compétences, Tableau. Sur mobile,
  les colonnes sont mises bout à bout. La corbeille est à part, en bas à droite.
- **Menu démarrer** : bouton « Menu » ; liste des fenêtres (dans l'ordre de `apps`, sans la
  corbeille), liens rapides (CV, GitHub, LinkedIn), choix de langue et de thème.
- **Pagination** : Expérience, Projets et Compétences 1 par page, Technologies 5 (Tableau : pas de
  pagination, des onglets). Barre d'état toujours visible en bas de la fenêtre, boutons flèche en
  relief Windows 95, flèches ← → du clavier sur la fenêtre active, retour en haut du contenu à chaque
  changement de page.
- **Projets, compétences, tableau** : fenêtres larges (640 px). Dans `projets.exe`, le code SAÉ
  (`saeCode`, « SAÉ S2.01 ») est affiché en mono à côté de la période. Dans `projets.exe`, un onglet par
  compétence et des argumentaires repliés (`<details>`, flèche dans un bouton en relief) ; dans
  `competences.exe`, un onglet par niveau, description repliée, AC non prouvés grisés ; dans
  `tableau.exe`, un onglet par compétence, AC en lignes, projets en colonnes. La navigation croisée
  ouvre le bon onglet et met en évidence l'AC visé (`focusedAc`) ; `navigationCount` la rejoue même
  si l'on reclique sur le même lien.
- **Remplissage du bureau** : `lisezmoi.txt` ouvert au chargement, centré (masqué sur mobile :
  `openedAtStartup` + `useIsMobileScreen`), avec le texte d'accueil de Denis et un mode d'emploi
  cliquable ; à droite (grand écran seulement) une visionneuse de captures de projets et un post-it
  en pixel art (texte en Gochi Hand, « Contactez-moi ! » ouvre contact.exe) ; corbeille en bas à
  droite (`corner: true`, hors grille et menu démarrer) avec un easter egg de Denis.
  Tout leur contenu est dans `src/data/desktop.ts` ; une liste vide (ou `null`) masque l'élément,
  la corbeille vide affiche « La corbeille est vide. ».
- **Expérience verrouillée** : `locked: true` → grisée, avec cadenas et « NULL » en mono.

## Organisation du code

Séparation en couches : logique pure → hooks → rendu.
- `src/lib/` : logique pure en TypeScript, sans React (une fonction par action sur les fenêtres,
  calculs de position, lecture croisée projets ↔ AC dans `competences.ts`).
- `src/hooks/` : branchent la logique sur React (`useWindowManager`, `useWindowDrag`,
  `useClickOutside`, `useClock`, `usePagination`, `useIsMobileScreen`, `useTheme`).
- `src/config/apps.ts` : liste des applications (id, icône, contenu, options `wide`, `centered`,
  `corner`) et disposition des icônes (`desktopColumns`). Le contenu reçoit `AppContentProps` :
  `active` (fenêtre au premier plan), `page` et `onPageChange` (la page est gardée par le
  gestionnaire de fenêtres), `focusedAc` et `navigationCount` (AC visé par la navigation croisée),
  `openApp(id, page?, ac?)`. Les fenêtres ouvertes au chargement sont dans `startupWindows`
  (`src/lib/windowManager.ts`).
- `src/config/wallpaper.ts` : chemin du fond d'écran (`null` = fond uni).
- `scripts/pixel-art.mjs` : **source** des icônes pixel art, dessinées en texte (une lettre = une
  couleur). Après une modification : `npm run icons` (`scripts/generate-icons.mjs`) régénère les PNG
  de `public/icons/`, à committer. `src/components/pixel-icons.tsx` : un composant `<img>` par icône
  (`next/image` `unoptimized`, `image-rendering: pixelated`). Ne pas revenir à des SVG pixel par pixel
  (illisible dans l'inspecteur).
- `src/components/desktop/` : bureau, fenêtres, barre des tâches, menu démarrer, horloge, widgets
  (`ScreenshotViewer`, `StickyNote`).
- `src/components/apps/` : contenu de chaque fenêtre, un fichier par app. `shared.tsx` contient
  `ScrollArea`, `Row`, `Title`, `Caption`, `SectionTitle`, `Tag`, `Tabs` (onglets Windows 95),
  `DisclosureArrow`. `PaginationBar.tsx` est la barre de pagination (et exporte `arrowButtonClass`).
- `src/data/` : contenu du portfolio, chaque texte en `{ fr, en }`. `competences.ts` : référentiel
  (54 AC, intitulés officiels) ; `projects.ts` : projets (titre, code SAÉ à part dans `saeCode`,
  description) et AC mobilisés avec argumentaires (seul endroit où l'on relie un projet aux AC) ; `technologies.ts`, `experiences.ts`, `profile.ts` ;
  `desktop.ts` : contenu du bureau (accueil, post-it, captures dans `public/screenshots/`, fichiers
  de la corbeille).
- `src/i18n/` : langue courante (`useLocale` → `ui`, `translate`) et textes de l'interface (`ui.ts`).
- `docs/` : documentation du projet (plan de conformité, extrait du référentiel, tableau SAÉ × AC
  validé — `src/data/projects.ts` fait foi pour les argumentaires).

## Historique des maquettes

- Brouillon « landing page » dev/terminal : https://claude.ai/artifact/UHFz1BKRiei5EvJTLHZqbH
- Brouillon « bureau rétro » (direction retenue) : https://claude.ai/artifact/PsmoptVGNCHQ4UHuGzrBsd
