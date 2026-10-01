"use client";

import { useEffect, useState } from "react";
import { apps } from "@/config/apps";
import { useWindowManager } from "@/hooks/useWindowManager";
import { useLocale } from "@/i18n/locale";
import { Taskbar } from "./Taskbar";
import { Window } from "./Window";

export function Desktop() {
  const { ui } = useLocale();
  const windows = useWindowManager();
  const [menuOpen, setMenuOpen] = useState(false);

  // Échap ferme d'abord le menu démarrer, puis la fenêtre au premier plan.
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Escape") {
        return;
      }
      if (menuOpen) {
        setMenuOpen(false);
      } else if (windows.activeId) {
        windows.close(windows.activeId);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, windows]);

  return (
    <main className="relative h-dvh overflow-hidden pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <div className="wallpaper-grid pointer-events-none absolute inset-0" aria-hidden />

      <ul className="absolute top-7 left-6 z-[1] grid grid-cols-[repeat(auto-fill,84px)] gap-[22px] max-sm:top-4.5 max-sm:right-3.5 max-sm:left-3.5 max-sm:grid-cols-[repeat(auto-fill,72px)] max-sm:gap-3.5">
        {apps.map(({ id, Icon, accent }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => windows.open(id)}
              className="flex w-[84px] flex-col items-center rounded-lg px-1 py-2 hover:bg-white/6 focus-visible:bg-white/10 focus-visible:outline-none max-sm:w-[72px]"
            >
              <span
                className={`mb-2 flex size-[52px] items-center justify-center rounded-xl shadow-[0_8px_16px_-6px_rgb(0_0_0/0.5),inset_0_1px_0_rgb(255_255_255/0.25)] ${
                  accent === "green"
                    ? "bg-linear-to-br from-green to-green-dark text-ink"
                    : "bg-linear-to-br from-purple to-purple-dark text-white"
                }`}
              >
                <Icon className="size-[26px]" />
              </span>
              <span className="text-[11.5px] [text-shadow:0_1px_3px_rgb(0_0_0/0.6)]">{ui.apps[id].label}</span>
            </button>
          </li>
        ))}
      </ul>

      {windows.openWindows.map(({ id, minimized }, layer) => {
        const appIndex = apps.findIndex((app) => app.id === id);
        return (
          <Window
            key={id}
            app={apps[appIndex]}
            cascadeIndex={appIndex}
            zIndex={10 + layer}
            minimized={minimized}
            active={windows.activeId === id}
            onFocus={() => windows.focus(id)}
            onMinimize={() => windows.minimize(id)}
            onClose={() => windows.close(id)}
          />
        );
      })}

      <Taskbar
        openIds={windows.openWindows.map((w) => w.id)}
        activeId={windows.activeId}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onCloseMenu={() => setMenuOpen(false)}
        onTaskbarItemClick={windows.clickTaskbarItem}
        onOpenApp={windows.open}
      />
    </main>
  );
}
