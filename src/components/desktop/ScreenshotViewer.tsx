"use client";

import Image from "next/image";
import { useState } from "react";
import { arrowButtonClass } from "@/components/apps/PaginationBar";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/pixel-icons";
import type { AppId } from "@/config/apps";
import { screenshots } from "@/data/desktop";
import { useLocale } from "@/i18n/locale";
import { findProjectPageByTitle } from "@/lib/competences";

/** Widget posé sur le bureau : fait défiler les captures des projets, un clic ouvre le projet. */
export function ScreenshotViewer({ openApp }: { openApp: (id: AppId, page?: number) => void }) {
  const { ui, translate } = useLocale();
  const [index, setIndex] = useState(0);

  if (screenshots.length === 0) {
    return null;
  }

  const screenshot = screenshots[index];
  const projectPage = findProjectPageByTitle(screenshot.projectTitle);
  const fileName = screenshot.src.split("/").at(-1);

  function showPrevious() {
    setIndex((current) => (current - 1 + screenshots.length) % screenshots.length);
  }

  function showNext() {
    setIndex((current) => (current + 1) % screenshots.length);
  }

  return (
    <section className="border-2 border-line-strong bg-surface shadow-[4px_4px_0_var(--color-ink)]">
      <h2 className="truncate bg-surface-2 px-3 py-1.5 font-mono text-label-lg text-body">
        {ui.viewer.title} — {fileName}
      </h2>
      <button
        type="button"
        onClick={() => projectPage !== null && openApp("projects", projectPage)}
        title={ui.competences.openProject}
        className="relative block aspect-video w-full border-y-2 border-ink bg-ink"
      >
        <Image src={screenshot.src} alt={translate(screenshot.caption)} fill sizes="288px" className="object-cover" />
      </button>
      <div className="flex items-center gap-2 px-2 py-1.5">
        <button type="button" onClick={showPrevious} aria-label={ui.viewer.previous} className={arrowButtonClass}>
          <ArrowLeftIcon className="size-4" />
        </button>
        <p aria-live="polite" className="flex-1 truncate text-center text-xs">
          {translate(screenshot.caption)}
          <span className="ml-1.5 font-mono text-muted">
            {index + 1}/{screenshots.length}
          </span>
        </p>
        <button type="button" onClick={showNext} aria-label={ui.viewer.next} className={arrowButtonClass}>
          <ArrowRightIcon className="size-4" />
        </button>
      </div>
    </section>
  );
}
