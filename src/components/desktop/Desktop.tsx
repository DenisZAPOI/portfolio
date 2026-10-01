"use client";

import { useEffect, useState } from "react";
import { apps } from "@/config/apps";
import { wallpaperUrl } from "@/config/wallpaper";
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
    <main
      style={{ backgroundImage: wallpaperUrl ? `url(${wallpaperUrl})` : undefined }}
      className="relative h-dvh overflow-hidden bg-cover bg-center pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="absolute top-5 bottom-16 left-6 z-[1] grid content-start grid-flow-col auto-cols-[84px] grid-rows-[repeat(auto-fill,96px)] gap-x-4 max-sm:top-4.5 max-sm:right-3.5 max-sm:left-3.5 max-sm:grid-flow-row max-sm:grid-cols-[repeat(auto-fill,72px)] max-sm:grid-rows-none max-sm:gap-3.5">
        {apps.map(({ id, Icon }) => (
          <li key={id}>
            <button
              type="button"
              onClick={() => windows.open(id)}
              className="group flex w-[84px] flex-col items-center gap-1.5 px-1 py-2 focus-visible:outline-none max-sm:w-[72px]"
            >
              <Icon className="size-12 drop-shadow-[2px_2px_0_var(--color-ink)]" />
              <span className="px-1 text-[11.5px] [text-shadow:1px_1px_0_var(--color-ink)] group-hover:bg-purple group-focus-visible:bg-purple">
                {ui.apps[id].label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {windows.openWindows.map(({ id, minimized, page, focusedAc, navigationCount }, layer) => {
        const appIndex = apps.findIndex((app) => app.id === id);
        return (
          <Window
            key={id}
            app={apps[appIndex]}
            cascadeIndex={appIndex}
            zIndex={10 + layer}
            minimized={minimized}
            active={windows.activeId === id}
            page={page}
            focusedAc={focusedAc}
            navigationCount={navigationCount}
            onPageChange={(newPage) => windows.changePage(id, newPage)}
            openApp={windows.open}
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
