"use client";

import { useRef } from "react";
import { apps, type AppId } from "@/config/apps";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useLocale } from "@/i18n/locale";
import { Clock } from "./Clock";
import { StartMenu } from "./StartMenu";

type Props = {
  openIds: AppId[];
  activeId: AppId | null;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onTaskbarItemClick: (id: AppId) => void;
  onOpenApp: (id: AppId) => void;
};

const START_MENU_ID = "start-menu";

export function Taskbar({
  openIds,
  activeId,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  onTaskbarItemClick,
  onOpenApp,
}: Props) {
  const { ui, locale, setLocale } = useLocale();
  const taskbarRef = useRef<HTMLDivElement>(null);
  useClickOutside(taskbarRef, menuOpen, onCloseMenu);

  return (
    <div ref={taskbarRef}>
      {menuOpen && <StartMenu id={START_MENU_ID} onOpenApp={onOpenApp} onClose={onCloseMenu} />}
      <nav className="absolute inset-x-0 bottom-0 z-20 flex h-13 items-center gap-2.5 border-t-2 border-line-strong bg-surface px-2.5">
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls={START_MENU_ID}
          onClick={onToggleMenu}
          className="flex h-9 shrink-0 items-center gap-2 border-2 border-ink bg-green px-3.5 font-display text-[0.8125rem] font-semibold text-ink shadow-[2px_2px_0_var(--color-green-dark)] hover:brightness-110 active:translate-y-px active:shadow-none"
        >
          ▲ {ui.start.button}
        </button>

        <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto">
          {apps
            .filter(({ id }) => openIds.includes(id))
            .map(({ id, Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => onTaskbarItemClick(id)}
                aria-pressed={activeId === id}
                className={`flex h-8.5 shrink-0 items-center gap-2 border-2 px-3 text-[0.78125rem] ${
                  activeId === id
                    ? "border-magenta bg-purple text-on-accent"
                    : "border-line bg-surface-2 text-body hover:text-text"
                }`}
              >
                <Icon className="size-4" />
                <span className="max-sm:hidden">{ui.apps[id].file}</span>
              </button>
            ))}
        </div>

        <button
          type="button"
          onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
          aria-label={ui.languageToggle}
          title={ui.languageToggle}
          className="shrink-0 border-2 border-line px-2 py-1 font-mono text-xs uppercase text-body hover:border-magenta hover:text-text"
        >
          {locale}
        </button>
        <div className="shrink-0 pr-1.5">
          <Clock />
        </div>
      </nav>
    </div>
  );
}
