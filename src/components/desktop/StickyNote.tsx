"use client";

import { PushpinIcon, StickyNoteIcon } from "@/components/pixel-icons";
import type { AppId } from "@/config/apps";
import { stickyNote } from "@/data/desktop";
import { useLocale } from "@/i18n/locale";

/**
 * Post-it punaisé sur le bureau, avec un mot de Denis. Le papier et la punaise sont dessinés
 * en pixel art (voir pixel-icons.tsx) ; le texte est posé par-dessus, dans la zone de papier
 * (sous la bande adhésive, au-dessus du coin plié).
 */
export function StickyNote({ openApp }: { openApp: (id: AppId) => void }) {
  const { translate } = useLocale();

  if (!stickyNote) {
    return null;
  }

  return (
    <figure className="relative ml-auto w-60 pt-3.5">
      <PushpinIcon className="absolute top-0 left-1/2 z-10 h-9 w-10 -translate-x-1/2" />
      <div className="relative">
        <StickyNoteIcon className="block w-full drop-shadow-[4px_4px_0_var(--color-ink)]" />
        <div className="absolute inset-x-[10%] top-[15%] font-hand text-[17px] leading-tight text-ink">
          {stickyNote.paragraphs.map((paragraph) => (
            <p key={paragraph.fr} className="mb-2.5">
              {translate(paragraph)}
            </p>
          ))}
          {stickyNote.contactLink && (
            <button
              type="button"
              onClick={() => openApp("contact")}
              className="underline decoration-wavy decoration-1 underline-offset-4 hover:text-magenta focus-visible:text-magenta focus-visible:outline-none"
            >
              {translate(stickyNote.contactLink)}
            </button>
          )}
        </div>
      </div>
    </figure>
  );
}
