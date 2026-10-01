export type Point = { x: number; y: number };
export type Size = { width: number; height: number };

export const TASKBAR_HEIGHT = 52;
export const MOBILE_QUERY = "(max-width: 639px)";

const WINDOW_WIDTH = 460;
const GRAB_MARGIN = 80;

export function cascadePosition(index: number, viewport: Size): Point {
  return {
    x: Math.max(16, Math.min(140 + index * 40, viewport.width - WINDOW_WIDTH - 20)),
    y: Math.max(16, Math.min(60 + index * 30, viewport.height - TASKBAR_HEIGHT - 300)),
  };
}

/** Garde toujours un bout de la barre de titre visible, pour pouvoir rattraper la fenêtre. */
export function clampWindowPosition(pos: Point, windowWidth: number, viewport: Size): Point {
  return {
    x: Math.max(GRAB_MARGIN - windowWidth, Math.min(pos.x, viewport.width - GRAB_MARGIN)),
    y: Math.max(0, Math.min(pos.y, viewport.height - TASKBAR_HEIGHT - 40)),
  };
}
