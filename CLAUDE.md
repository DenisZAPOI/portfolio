@AGENTS.md

# Portfolio BUT Informatique — Récap projet

## Contexte
Portfolio de fin de BUT Informatique. Identité visuelle inspirée d'une référence
vert/violet (IMO Health), adaptée en univers "dev". Deuxième direction validée :
bureau façon OS rétro (inspiré de warframedle.com) avec icônes cliquables ouvrant
des fenêtres.

## Stack recommandée
- **Next.js (React) + Tailwind CSS** — option la plus valorisante pour un profil dev,
  pages dynamiques possibles (projets, blog technique).
- **Astro** — alternative plus légère si le site reste surtout vitrine (statique,
  rapide, composants ponctuels en React/Vue).
- **Déploiement** : Vercel ou Netlify, CI/CD auto sur push GitHub.
- **Contenu projets** : pas de CMS nécessaire, un `projects.json` ou des fichiers
  `.mdx` suffisent.
- Code source public sur GitHub avec README soigné (valorisant pour le jury).

## Identité visuelle (tokens)
- **Couleurs**
  - `--bg1 #1a0d2e`, `--bg2 #0f0819` (fond dégradé violet foncé)
  - `--purple #9163f2` / `--purple-dark #5a35a8`
  - `--green #28d999` / `--green-dark #159066`
  - `--text #f4f1fb`, `--muted #ab9fca`, `--line #3a2559`
- **Typographies**
  - Titres / UI : `Space Grotesk`
  - Labels techniques / mono : `IBM Plex Mono`
  - Corps de texte : `Inter`
  - Touche rétro (horloge, accents) : `Press Start 2P`
- **Principe** : identité "dev" plutôt que corporate — terminal, logs git, icônes
  d'app façon bureau — pas de cartes SaaS génériques.

## Itérations produites

### 1. Brouillon "landing page" (dev/terminal)
Page one-page classique : nav, hero avec mock de terminal (`git log`, build),
bandeau technos, liste de projets façon log, footer.
→ Artifact : https://claude.ai/artifact/UHFz1BKRiei5EvJTLHZqbH

### 2. Brouillon "bureau rétro" (validé, direction actuelle)
Bureau interactif : 5 icônes cliquables (Expérience, Projets, Compétences, Perso,
Contact), fenêtres ouvrables/fermables/déplaçables (drag), barre des tâches avec
horloge en temps réel et items actifs.
→ Artifact : https://claude.ai/artifact/PsmoptVGNCHQ4UHuGzrBsd

## À faire / points ouverts
- Remplacer tout le contenu placeholder (expériences, projets, compétences, bio,
  coordonnées réelles).
- Ajouter un vrai wallpaper/illustration de fond si besoin de plus d'ambiance.
- Prévoir une version mobile simplifiée (le drag de fenêtres ne fonctionne pas au
  tactile — envisager clic direct → contenu plein écran sur mobile).

## Décisions prises
- **Stack** : Next.js 16 (App Router, TypeScript, `src/`) + Tailwind CSS 4.
- **Dépôt** : public, https://github.com/DenisZAPOI/portfolio
- **Langues** : français + anglais via un simple bouton de bascule côté client
  (une seule URL, choix mémorisé dans le navigateur). Français par défaut. Le
  bouton FR/EN est dans la barre des tâches, à côté de l'horloge.
- **Mobile** : la grille d'icônes reste, un tap ouvre la fenêtre en plein écran,
  pas de drag.
- **Palette** : Endesga 32 (palette pixel art de Lospec,
  https://lospec.com/palette-list/endesga-32), choisie pour sortir du look
  lavande/menthe « IA ». Interface, icônes et fond partagent ces couleurs.
- **Style pixel** : icônes pixel art dessinées en SVG (objets rétro OS, sans
  tuile de fond), barres de titre en aplat, bords nets sans arrondi, ombres
  dures (pas de flou ni de dégradé).
- **Fond d'écran** : image fournie par Denis (à déposer dans `public/`), fond
  uni en attendant.
- **Menu démarrer** : le bouton « menu » ouvre un panneau listant toutes les
  fenêtres, des liens rapides (CV, GitHub, LinkedIn) et le choix de langue.
- **Pagination** : Expérience 1 par page, Projets 3 par page, Compétences 5
  par page. Une expérience `locked: true` s'affiche grisée avec un cadenas. Barre d'état en
  bas de la fenêtre, toujours visible (même avec une seule page), boutons
  flèche en relief Windows 95, flèches ← → du clavier sur la fenêtre active,
  retour en haut du contenu à chaque changement de page.
- **Contenu** : placeholder d'abord, dans des fichiers de données faciles à
  remplir.

## Organisation du code
Séparation en couches : logique pure → hooks → rendu.
- `src/lib/` : logique pure en TypeScript, sans React (une fonction par action
  sur les fenêtres, calculs de position).
- `src/hooks/` : branchent la logique sur React (`useWindowManager`,
  `useWindowDrag`, `useClickOutside`, `useClock`).
- `src/config/apps.ts` : liste des applications du bureau (id, icône, contenu).
- `src/config/wallpaper.ts` : chemin du fond d'écran (`null` = fond uni).
- `src/components/pixel-icons.tsx` : icônes pixel art 16×16, dessinées en texte
  (une lettre = une couleur Endesga 32).
- `src/components/desktop/` : rendu du bureau, fenêtres, barre des tâches, menu.
- `src/components/apps/` : contenu de chaque fenêtre, un fichier par app.
- `src/data/` : contenu du portfolio, chaque texte en `{ fr, en }`.
- `src/i18n/` : langue courante (`useLocale`) et textes de l'interface (`ui.ts`).

## Méthode de travail
- Pour chaque point imprécis sur la façon dont le site doit être fait, poser la
  question avant d'agir.
- Lisibilité avant abstraction : ce n'est pas une librairie. Pas de génériques,
  de reducers ou de hooks configurables quand du code spécifique et explicite
  suffit. Des noms complets (`translate`, pas `l`).
