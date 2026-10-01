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
      <nav className="absolute inset-x-0 bottom-0 z-20 flex h-13 items-center gap-2.5 border-t border-line bg-[rgb(23_13_40/0.9)] px-2.5 backdrop-blur-md">
        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls={START_MENU_ID}
          onClick={onToggleMenu}
          className="flex h-9 shrink-0 items-center gap-2 rounded-lg bg-linear-to-br from-green to-green-dark px-3.5 font-display text-[13px] font-semibold text-ink shadow-[0_4px_10px_-3px_rgb(0_0_0/0.5)] hover:brightness-110"
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
                className={`flex h-[34px] shrink-0 items-center gap-2 rounded-md border px-3 text-[12.5px] ${
                  activeId === id
                    ? "border-purple bg-purple/25 text-text"
                    : "border-line bg-surface-2 text-muted hover:text-text"
                }`}
              >
                <Icon className="size-3.5" />
                <span className="max-sm:hidden">{ui.apps[id].file}</span>
              </button>
            ))}
        </div>

        <button
          type="button"
          onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
          aria-label={ui.languageToggle}
          title={ui.languageToggle}
          className="shrink-0 rounded border border-line px-2 py-1 font-mono text-xs uppercase text-muted hover:border-purple hover:text-text"
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
