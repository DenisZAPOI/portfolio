"use client";

import { useEffect, useRef, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Découpe une liste en pages. `active` indique si la fenêtre est au premier plan :
 * seules les flèches ← → de la fenêtre active changent de page.
 */
export function usePagination(itemCount: number, pageSize: number, active: boolean) {
  const [page, setPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pageCount = Math.max(1, Math.ceil(itemCount / pageSize));

  function goToPreviousPage() {
    setPage((current) => clamp(current - 1, 1, pageCount));
  }

  function goToNextPage() {
    setPage((current) => clamp(current + 1, 1, pageCount));
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
        setPage((current) => clamp(current - 1, 1, pageCount));
      } else if (e.key === "ArrowRight") {
        setPage((current) => clamp(current + 1, 1, pageCount));
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active, pageCount]);

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
