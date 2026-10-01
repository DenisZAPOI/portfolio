import type { AppId } from "@/config/apps";
import type { AcId } from "@/data/competences";

/**
 * Une fenêtre ouverte, avec la page affichée par sa pagination.
 * - `focusedAc` : AC visé par la navigation croisée (la fenêtre ouvre le bon onglet et le met en
 *   évidence).
 * - `navigationCount` : augmente à chaque navigation croisée vers cette fenêtre. Le contenu s'en
 *   sert comme clé, pour rouvrir le bon onglet même si l'on clique deux fois sur le même lien.
 * Dans la liste des fenêtres, la dernière est au premier plan.
 */
export type OpenWindow = {
  id: AppId;
  minimized: boolean;
  page: number;
  focusedAc?: AcId;
  navigationCount: number;
};

function removeId(windows: OpenWindow[], id: AppId) {
  return windows.filter((w) => w.id !== id);
}

export function getActiveWindow(windows: OpenWindow[]): AppId | null {
  const topVisibleWindow = windows.findLast((w) => !w.minimized);
  return topVisibleWindow?.id ?? null;
}

/** Sans `page`, une fenêtre déjà ouverte garde ce qu'elle affichait. */
export function openWindow(windows: OpenWindow[], id: AppId, page?: number, focusedAc?: AcId) {
  const current = windows.find((w) => w.id === id);
  const navigationCount = current?.navigationCount ?? 0;
  const opened: OpenWindow =
    page === undefined
      ? { id, minimized: false, page: current?.page ?? 1, focusedAc: current?.focusedAc, navigationCount }
      : { id, minimized: false, page, focusedAc, navigationCount: navigationCount + 1 };
  return [...removeId(windows, id), opened];
}

export function focusWindow(windows: OpenWindow[], id: AppId) {
  const alreadyOnTop = windows.at(-1)?.id === id;
  if (alreadyOnTop) {
    return windows;
  }
  return openWindow(windows, id);
}

export function closeWindow(windows: OpenWindow[], id: AppId) {
  return removeId(windows, id);
}

export function minimizeWindow(windows: OpenWindow[], id: AppId) {
  return windows.map((w) => (w.id === id ? { ...w, minimized: true } : w));
}

/** Changer de page à la main oublie l'AC visé par la navigation croisée. */
export function changePage(windows: OpenWindow[], id: AppId, page: number) {
  return windows.map((w) => (w.id === id ? { ...w, page, focusedAc: undefined } : w));
}

/** Comme sur Windows : un clic sur la fenêtre active la réduit, sinon il la ramène devant. */
export function clickTaskbarItem(windows: OpenWindow[], id: AppId) {
  if (getActiveWindow(windows) === id) {
    return minimizeWindow(windows, id);
  }
  return openWindow(windows, id);
}
