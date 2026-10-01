"use client";

import { useSyncExternalStore } from "react";
import { MOBILE_QUERY } from "@/lib/windowLayout";

function subscribe(onChange: () => void) {
  const query = window.matchMedia(MOBILE_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function readIsMobile() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

/**
 * Vrai sur un écran de téléphone. Côté serveur, on ne connaît pas l'écran : on répond `true`,
 * ce qui masque les fenêtres ouvertes au démarrage jusqu'à ce que le navigateur prenne le relais.
 */
export function useIsMobileScreen() {
  return useSyncExternalStore(subscribe, readIsMobile, () => true);
}
