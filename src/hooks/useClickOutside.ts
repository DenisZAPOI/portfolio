"use client";

import { useEffect, type RefObject } from "react";

/** Appelle `onClickOutside` quand on clique en dehors de l'élément `ref`, tant que `enabled` est vrai. */
export function useClickOutside(ref: RefObject<HTMLElement | null>, enabled: boolean, onClickOutside: () => void) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    function handlePointerDown(e: PointerEvent) {
      const clickedInside = ref.current?.contains(e.target as Node);
      if (!clickedInside) {
        onClickOutside();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [ref, enabled, onClickOutside]);
}
