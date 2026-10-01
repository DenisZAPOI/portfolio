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
- **Langues** : français + anglais (switch de langue).

## Méthode de travail
- Pour chaque point imprécis sur la façon dont le site doit être fait, poser la
  question avant d'agir.
