"use client";

import { useEffect, useState } from "react";
import { apps, desktopColumns, type AppDefinition } from "@/config/apps";
import { wallpaperUrl } from "@/config/wallpaper";
import { useIsMobileScreen } from "@/hooks/useIsMobileScreen";
import { useWindowManager } from "@/hooks/useWindowManager";
import { useLocale } from "@/i18n/locale";
import { ScreenshotViewer } from "./ScreenshotViewer";
import { StickyNote } from "./StickyNote";
import { Taskbar } from "./Taskbar";
import { Window } from "./Window";

const gridApps = desktopColumns.flat().map((id) => apps.find((app) => app.id === id)!);
const iconsPerColumn = Math.max(...desktopColumns.map((column) => column.length));
const cornerApps = apps.filter((app) => app.corner);

export function Desktop() {
  const windows = useWindowManager();
  const isMobileScreen = useIsMobileScreen();
  const [menuOpen, setMenuOpen] = useState(false);

  // Les fenêtres ouvertes au démarrage (lisezmoi.txt) ne s'affichent pas sur mobile.
  const visibleWindows = windows.openWindows.filter((w) => !(w.openedAtStartup && isMobileScreen));

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
      <ul
        style={{ gridTemplateRows: `repeat(${iconsPerColumn}, 7rem)` }}
        className="absolute top-5 bottom-16 left-6 z-[1] grid content-start grid-flow-col auto-cols-[6rem] gap-x-4 max-sm:top-4.5 max-sm:right-3.5 max-sm:left-3.5 max-sm:grid-flow-row max-sm:grid-cols-[repeat(auto-fill,72px)] max-sm:grid-rows-none! max-sm:gap-3.5">
        {gridApps.map((app) => (
          <li key={app.id}>
            <DesktopIcon app={app} onOpen={() => windows.open(app.id)} />
          </li>
        ))}
      </ul>

      {/* Widgets à droite, seulement sur grand écran. */}
      <aside className="absolute top-5 right-6 z-[1] hidden w-72 flex-col gap-5 lg:flex">
        <ScreenshotViewer openApp={windows.open} />
        <StickyNote openApp={windows.open} />
      </aside>

      {/* Icônes du coin en bas à droite (corbeille). */}
      <div className="absolute right-6 bottom-16 z-[1] max-sm:right-3.5">
        {cornerApps.map((app) => (
          <DesktopIcon key={app.id} app={app} onOpen={() => windows.open(app.id)} />
        ))}
      </div>

      {visibleWindows.map(({ id, minimized, page, focusedAc, navigationCount }) => {
        const appIndex = apps.findIndex((app) => app.id === id);
        const layer = windows.openWindows.findIndex((w) => w.id === id);
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
        openIds={visibleWindows.map((w) => w.id)}
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

function DesktopIcon({ app, onOpen }: { app: AppDefinition; onOpen: () => void }) {
  const { ui } = useLocale();
  const { id, Icon } = app;

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex w-24 flex-col items-center gap-1.5 px-1 py-2 focus-visible:outline-none max-sm:w-[72px]"
    >
      <Icon className="size-14 drop-shadow-[2px_2px_0_var(--color-ink)] max-sm:size-12" />
      <span className="px-1 text-xs [text-shadow:1px_1px_0_var(--color-ink)] group-hover:bg-purple group-focus-visible:bg-purple">
        {ui.apps[id].label}
      </span>
    </button>
  );
}
