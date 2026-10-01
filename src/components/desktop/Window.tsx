"use client";

import { useEffect, useId } from "react";
import type { AppDefinition } from "@/config/apps";
import { useWindowDrag } from "@/hooks/useWindowDrag";
import { useLocale } from "@/i18n/locale";

type Props = {
  app: AppDefinition;
  /** Position de l'app sur le bureau, pour décaler les fenêtres en cascade. */
  cascadeIndex: number;
  zIndex: number;
  minimized: boolean;
  active: boolean;
  onFocus: () => void;
  onMinimize: () => void;
  onClose: () => void;
};

export function Window({ app, cascadeIndex, zIndex, minimized, active, onFocus, onMinimize, onClose }: Props) {
  const { ui } = useLocale();
  const titleId = useId();
  const { windowRef, position, startDrag, moveDrag, stopDrag } = useWindowDrag(cascadeIndex);
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
      style={{ left: position.x, top: position.y, zIndex }}
      className={`absolute flex w-[460px] max-w-[88vw] flex-col border-2 bg-surface shadow-[4px_4px_0_var(--color-ink)] outline-none max-sm:inset-x-0! max-sm:top-0! max-sm:bottom-13 max-sm:w-auto max-sm:max-w-none max-sm:shadow-none ${
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
      <div className="max-h-[56vh] overflow-y-auto px-[22px] pt-5 pb-6 text-sm leading-relaxed text-body max-sm:max-h-none max-sm:flex-1">
        <Content />
      </div>
    </div>
  );
}
