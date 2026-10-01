"use client";

import { useSyncExternalStore } from "react";

function now() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
}

/** Heure au format HH:MM ; `null` côté serveur, qui ne connaît pas l'heure du visiteur. */
export function useClock() {
  return useSyncExternalStore(subscribe, now, () => null);
}
