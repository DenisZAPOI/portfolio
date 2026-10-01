"use client";

import { useRef, useState } from "react";
import {
  cascadePosition,
  centeredPosition,
  clampWindowPosition,
  MOBILE_QUERY,
  type Point,
  type Screen,
} from "@/lib/windowLayout";

function getScreen(): Screen {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    rem: parseFloat(getComputedStyle(document.documentElement).fontSize),
  };
}

/** Déplace une fenêtre en la tirant par sa barre de titre (désactivé sur mobile). */
export function useWindowDrag(cascadeIndex: number, windowWidthRem: number, centered: boolean) {
  const windowRef = useRef<HTMLDivElement>(null);
  const grabOffset = useRef<Point | null>(null);
  const [position, setPosition] = useState(() => {
    const screen = getScreen();
    const windowWidth = windowWidthRem * screen.rem;
    return centered
      ? centeredPosition(windowWidth, screen)
      : cascadePosition(cascadeIndex, windowWidth, screen);
  });

  function startDrag(e: React.PointerEvent<HTMLElement>) {
    const clickedAButton = (e.target as HTMLElement).closest("button") !== null;
    const isMobile = window.matchMedia(MOBILE_QUERY).matches;
    if (clickedAButton || isMobile) {
      return;
    }
    grabOffset.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function moveDrag(e: React.PointerEvent<HTMLElement>) {
    if (!grabOffset.current || !windowRef.current) {
      return;
    }
    const wanted = { x: e.clientX - grabOffset.current.x, y: e.clientY - grabOffset.current.y };
    setPosition(clampWindowPosition(wanted, windowRef.current.offsetWidth, getScreen()));
  }

  function stopDrag() {
    grabOffset.current = null;
  }

  return { windowRef, position, startDrag, moveDrag, stopDrag };
}
