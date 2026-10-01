"use client";

import {
  BriefcaseIcon,
  CharacterIcon,
  EnvelopeIcon,
  FloppyDiskIcon,
  MedalIcon,
  MonitorIcon,
  SpreadsheetIcon,
} from "@/components/pixel-icons";
import type { AppContentProps } from "@/config/apps";
import { readmeWelcome } from "@/data/desktop";
import { useLocale } from "@/i18n/locale";
import { ScrollArea, SectionTitle } from "./shared";

// Apps présentées dans le mode d'emploi, dans l'ordre de lecture conseillé. Les icônes sont
// importées directement (et non lues dans `apps`) pour éviter un import circulaire avec config/apps.
const GUIDED_APPS = [
  { id: "projects", Icon: FloppyDiskIcon },
  { id: "competences", Icon: MedalIcon },
  { id: "tableau", Icon: SpreadsheetIcon },
  { id: "experience", Icon: BriefcaseIcon },
  { id: "technologies", Icon: MonitorIcon },
  { id: "about", Icon: CharacterIcon },
  { id: "contact", Icon: EnvelopeIcon },
] as const;

export function ReadmeApp({ openApp }: AppContentProps) {
  const { ui, translate } = useLocale();

  return (
    <ScrollArea>
      {readmeWelcome.map((paragraph) => (
        <p key={paragraph.fr} className="mb-3">
          {translate(paragraph)}
        </p>
      ))}

      <SectionTitle>{ui.readme.guide}</SectionTitle>
      <ul className="mt-2">
        {GUIDED_APPS.map(({ id, Icon }) => {
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => openApp(id)}
                className="-mx-2 flex w-[calc(100%+1rem)] items-start gap-3 px-2 py-1.5 text-left hover:bg-surface-2 focus-visible:bg-surface-2 focus-visible:outline-none"
              >
                <Icon className="mt-0.5 size-5 shrink-0" />
                <span>
                  <span className="font-mono text-xs text-text">{ui.apps[id].file}</span>
                  <span className="block text-xs">{ui.readme.apps[id]}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </ScrollArea>
  );
}
