"use client";

import { useEffect, useId } from "react";
import type { AppDefinition, AppId } from "@/config/apps";
import type { AcId } from "@/data/competences";
import { useWindowDrag } from "@/hooks/useWindowDrag";
import { useLocale } from "@/i18n/locale";
import { WIDE_WINDOW_WIDTH, WINDOW_WIDTH } from "@/lib/windowLayout";

type Props = {
  app: AppDefinition;
  /** Position de l'app sur le bureau, pour décaler les fenêtres en cascade. */
  cascadeIndex: number;
  zIndex: number;
  minimized: boolean;
  active: boolean;
  page: number;
  onPageChange: (page: number) => void;
  focusedAc?: AcId;
  navigationCount: number;
  openApp: (id: AppId, page?: number, focusedAc?: AcId) => void;
  onFocus: () => void;
  onMinimize: () => void;
  onClose: () => void;
};

export function Window({
  app,
  cascadeIndex,
  zIndex,
  minimized,
  active,
  page,
  onPageChange,
  focusedAc,
  navigationCount,
  openApp,
  onFocus,
  onMinimize,
  onClose,
}: Props) {
  const { ui } = useLocale();
  const titleId = useId();
  const width = app.wide ? WIDE_WINDOW_WIDTH : WINDOW_WIDTH;
  const { windowRef, position, startDrag, moveDrag, stopDrag } = useWindowDrag(cascadeIndex, width, app.centered ?? false);
  const { Icon, Content } = app;

  // Donne le focus à la fenêtre à son ouverture, pour la navigation au clavier.
  useEffect(() => {
    windowRef.current?.focus();
  }, [windowRef]);

  return (
    <div
      ref={windowRef}
      role="dialog"
      aria-labelledby={titleId}
      tabIndex={-1}
      onPointerDownCapture={onFocus}
      style={{ left: position.x, top: position.y, width, zIndex }}
      className={`absolute flex max-w-[88vw] flex-col border-2 bg-surface shadow-[4px_4px_0_var(--color-ink)] outline-none max-sm:inset-x-0! max-sm:top-0! max-sm:bottom-13 max-sm:w-auto! max-sm:max-w-none max-sm:shadow-none ${
        active ? "border-line-strong" : "border-line"
      } ${minimized ? "hidden" : ""}`}
    >
      <div
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        className={`flex touch-none items-center justify-between py-2 pr-2.5 pl-3 sm:cursor-grab sm:active:cursor-grabbing ${
          active ? "bg-purple" : "bg-surface-2 text-body"
        }`}
      >
        <h2 id={titleId} className="flex items-center gap-2 font-display text-[13.5px] font-semibold">
          <Icon className="size-4" />
          {ui.apps[app.id].file}
        </h2>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={onMinimize}
            aria-label={ui.window.minimize}
            className="size-6 border border-ink bg-surface-2 text-xs leading-none hover:bg-line-strong sm:size-5"
          >
            _
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label={ui.window.close}
            className="size-6 border border-ink bg-surface-2 text-xs leading-none hover:bg-magenta sm:size-5"
          >
            ×
          </button>
        </div>
      </div>
      <div className="flex max-h-[56vh] min-h-0 flex-col text-sm leading-relaxed text-body max-sm:max-h-none max-sm:flex-1">
        <Content
          active={active}
          page={page}
          onPageChange={onPageChange}
          focusedAc={focusedAc}
          navigationCount={navigationCount}
          openApp={openApp}
        />
      </div>
    </div>
  );
}
