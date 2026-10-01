"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@/components/pixel-icons";
import { useLocale } from "@/i18n/locale";

type Props = {
  page: number;
  pageCount: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

// Bouton en relief façon Windows 95 : bord clair en haut à gauche, sombre en bas à droite,
// inversé quand on appuie dessus.
const arrowButtonClass =
  "flex size-7 items-center justify-center border-2 border-t-line-strong border-l-line-strong border-r-ink border-b-ink bg-surface-2 enabled:active:border-t-ink enabled:active:border-l-ink enabled:active:border-r-line-strong enabled:active:border-b-line-strong disabled:opacity-40";

export function PaginationBar({ page, pageCount, isFirstPage, isLastPage, onPrevious, onNext }: Props) {
  const { ui } = useLocale();

  return (
    <div className="flex items-center justify-between gap-3 border-t-2 border-line-strong bg-surface px-2 py-1.5">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirstPage}
        aria-label={ui.pagination.previous}
        className={arrowButtonClass}
      >
        <ArrowLeftIcon className="size-4" />
      </button>

      <p
        aria-live="polite"
        className="flex-1 border-2 border-t-ink border-l-ink border-r-line-strong border-b-line-strong px-2 py-0.5 text-center font-mono text-xs"
      >
        {ui.pagination.page} {page} / {pageCount}
      </p>

      <button
        type="button"
        onClick={onNext}
        disabled={isLastPage}
        aria-label={ui.pagination.next}
        className={arrowButtonClass}
      >
        <ArrowRightIcon className="size-4" />
      </button>
    </div>
  );
}
