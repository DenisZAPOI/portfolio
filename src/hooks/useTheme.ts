"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY } from "@/lib/theme";

export type Theme = "dark" | "light";
export const themes: Theme[] = ["dark", "light"];

const DEFAULT_THEME: Theme = "dark";

// Même principe que la langue (voir i18n/locale.tsx) : le thème est sauvegardé dans le
// localStorage et lu par React avec useSyncExternalStore. Il s'applique avec l'attribut
// `data-theme` de <html>, qui change les couleurs définies dans globals.css. Au chargement,
// un script dans <head> (layout.tsx) pose cet attribut avant l'affichage, pour éviter un flash.

let savedTheme: Theme | null = null;
const listeners = new Set<() => void>();

function readSavedTheme(): Theme {
  if (savedTheme) {
    return savedTheme;
  }
  try {
    savedTheme = localStorage.getItem(THEME_STORAGE_KEY) === "light" ? "light" : DEFAULT_THEME;
  } catch {
    // localStorage bloqué (navigation privée, cookies refusés…).
    savedTheme = DEFAULT_THEME;
  }
  return savedTheme;
}

function saveTheme(theme: Theme) {
  savedTheme = theme;
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Le choix ne sera simplement pas mémorisé.
  }
  listeners.forEach((notify) => notify());
}

function subscribeToTheme(notify: () => void) {
  listeners.add(notify);
  return () => listeners.delete(notify);
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribeToTheme, readSavedTheme, () => DEFAULT_THEME);
  return { theme, setTheme: saveTheme };
}
