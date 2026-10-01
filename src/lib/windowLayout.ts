export type Point = { x: number; y: number };

/**
 * Taille de l'écran en pixels, et taille d'un `rem` en pixels : toute l'interface est en `rem`
 * et grandit avec l'écran (voir `html { font-size }` dans globals.css).
 */
export type Screen = { width: number; height: number; rem: number };

export const MOBILE_QUERY = "(max-width: 639px)";

// Tailles en rem (1 rem = 16 px sur un écran de portable, jusqu'à 22 px sur un grand écran).
export const WINDOW_WIDTH_REM = 30;
/** Fenêtres chargées en texte (projets, compétences, tableau). */
export const WIDE_WINDOW_WIDTH_REM = 42;
/** Hauteur de la barre des tâches (`h-13` dans Taskbar). */
const TASKBAR_HEIGHT_REM = 3.25;
/** Partie de la barre de titre qui reste toujours visible, pour pouvoir rattraper la fenêtre. */
const GRAB_MARGIN_REM = 5;

export function cascadePosition(index: number, windowWidth: number, screen: Screen): Point {
  const { rem } = screen;
  return {
    x: Math.max(rem, Math.min((12 + index * 2.5) * rem, screen.width - windowWidth - 1.25 * rem)),
    y: Math.max(rem, Math.min((3.75 + index * 1.875) * rem, screen.height - (TASKBAR_HEIGHT_REM + 19) * rem)),
  };
}

/** Fenêtre centrée horizontalement, un peu sous le haut de l'écran (lisezmoi.txt). */
export function centeredPosition(windowWidth: number, screen: Screen): Point {
  const { rem } = screen;
  return {
    x: Math.max(rem, Math.round((screen.width - windowWidth) / 2)),
    y: Math.max(rem, Math.min(5.5 * rem, screen.height - (TASKBAR_HEIGHT_REM + 19) * rem)),
  };
}

/** Garde toujours un bout de la barre de titre visible, pour pouvoir rattraper la fenêtre. */
export function clampWindowPosition(pos: Point, windowWidth: number, screen: Screen): Point {
  const { rem } = screen;
  return {
    x: Math.max(GRAB_MARGIN_REM * rem - windowWidth, Math.min(pos.x, screen.width - GRAB_MARGIN_REM * rem)),
    y: Math.max(0, Math.min(pos.y, screen.height - (TASKBAR_HEIGHT_REM + 2.5) * rem)),
  };
}
