"use client";

import { useState } from "react";
import type { AppId } from "@/config/apps";
import type { AcId } from "@/data/competences";
import {
  changePage,
  clickTaskbarItem,
  closeWindow,
  focusWindow,
  getActiveWindow,
  minimizeWindow,
  openWindow,
  type OpenWindow,
} from "@/lib/windowManager";

export function useWindowManager() {
  const [openWindows, setOpenWindows] = useState<OpenWindow[]>([]);

  return {
    openWindows,
    activeId: getActiveWindow(openWindows),
    open: (id: AppId, page?: number, focusedAc?: AcId) =>
      setOpenWindows((current) => openWindow(current, id, page, focusedAc)),
    focus: (id: AppId) => setOpenWindows((current) => focusWindow(current, id)),
    close: (id: AppId) => setOpenWindows((current) => closeWindow(current, id)),
    minimize: (id: AppId) => setOpenWindows((current) => minimizeWindow(current, id)),
    changePage: (id: AppId, page: number) => setOpenWindows((current) => changePage(current, id, page)),
    clickTaskbarItem: (id: AppId) => setOpenWindows((current) => clickTaskbarItem(current, id)),
  };
}
