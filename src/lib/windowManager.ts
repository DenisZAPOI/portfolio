import type { AppId } from "@/config/apps";

/** Une fenêtre ouverte. Dans la liste des fenêtres, la dernière est au premier plan. */
export type OpenWindow = { id: AppId; minimized: boolean };

function removeId(windows: OpenWindow[], id: AppId) {
  return windows.filter((w) => w.id !== id);
}

export function getActiveWindow(windows: OpenWindow[]): AppId | null {
  const topVisibleWindow = windows.findLast((w) => !w.minimized);
  return topVisibleWindow?.id ?? null;
}

export function openWindow(windows: OpenWindow[], id: AppId) {
  return [...removeId(windows, id), { id, minimized: false }];
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

/** Comme sur Windows : un clic sur la fenêtre active la réduit, sinon il la ramène devant. */
export function clickTaskbarItem(windows: OpenWindow[], id: AppId) {
  if (getActiveWindow(windows) === id) {
    return minimizeWindow(windows, id);
  }
  return openWindow(windows, id);
}
