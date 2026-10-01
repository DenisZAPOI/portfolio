"use client";

import { createContext, useContext, useEffect, useSyncExternalStore } from "react";
import { uiTexts, type UiTexts } from "./ui";

export type Locale = "fr" | "en";
export const locales: Locale[] = ["fr", "en"];

/** Un texte écrit dans chaque langue du site. */
export type Localized = Record<Locale, string>;

const STORAGE_KEY = "portfolio-locale";
const DEFAULT_LOCALE: Locale = "fr";

// La langue choisie est sauvegardée dans le localStorage, donc en dehors de React.
// React la lit avec useSyncExternalStore, qui a besoin de trois choses :
//   - comment lire la valeur actuelle         → readSavedLocale
//   - comment être prévenu quand elle change  → subscribeToLocale
//   - quoi afficher sur le serveur, qui n'a pas de localStorage → DEFAULT_LOCALE

let savedLocale: Locale | null = null;
const listeners = new Set<() => void>();

function readSavedLocale(): Locale {
  if (savedLocale) {
    return savedLocale;
  }
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    savedLocale = stored === "fr" || stored === "en" ? stored : DEFAULT_LOCALE;
  } catch {
    // localStorage bloqué (navigation privée, cookies refusés…).
    savedLocale = DEFAULT_LOCALE;
  }
  return savedLocale;
}

function saveLocale(locale: Locale) {
  savedLocale = locale;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Le choix ne sera simplement pas mémorisé.
  }
  listeners.forEach((notify) => notify());
}

function subscribeToLocale(notify: () => void) {
  listeners.add(notify);
  return () => listeners.delete(notify);
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Textes de l'interface dans la langue courante (voir ui.ts). */
  ui: UiTexts;
  /** Choisit la version d'un texte `{ fr, en }` dans la langue courante. */
  translate: (text: Localized) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeToLocale, readSavedLocale, () => DEFAULT_LOCALE);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value: LocaleContextValue = {
    locale,
    setLocale: saveLocale,
    ui: uiTexts[locale],
    translate: (text) => text[locale],
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale doit être utilisé dans <LocaleProvider>");
  }
  return context;
}
