"use client";

import { useEffect, useRef } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Découpe une liste en pages. La page courante est gardée par le gestionnaire de fenêtres
 * (`page`, `onPageChange`), pour qu'une autre fenêtre puisse l'ouvrir sur une page précise.
 * `active` indique si la fenêtre est au premier plan : seules les flèches ← → de la fenêtre
 * active changent de page.
 */
export function usePagination(
  itemCount: number,
  pageSize: number,
  active: boolean,
  requestedPage: number,
  onPageChange: (page: number) => void,
) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pageCount = Math.max(1, Math.ceil(itemCount / pageSize));
  const page = clamp(requestedPage, 1, pageCount);

  function goToPreviousPage() {
    onPageChange(clamp(page - 1, 1, pageCount));
  }

  function goToNextPage() {
    onPageChange(clamp(page + 1, 1, pageCount));
  }

  // Revient en haut de la zone de contenu à chaque changement de page.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [page]);

  useEffect(() => {
    if (!active) {
      return;
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") {
        onPageChange(clamp(page - 1, 1, pageCount));
      } else if (e.key === "ArrowRight") {
        onPageChange(clamp(page + 1, 1, pageCount));
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active, page, pageCount, onPageChange]);

  return {
    page,
    pageCount,
    firstIndex: (page - 1) * pageSize,
    lastIndex: page * pageSize,
    isFirstPage: page === 1,
    isLastPage: page === pageCount,
    goToPreviousPage,
    goToNextPage,
    scrollRef,
  };
}
