"use client";

import { useClock } from "@/hooks/useClock";

export function Clock() {
  const time = useClock();
  return <time className="min-w-[5ch] font-pixel text-[11px] text-muted">{time ?? "--:--"}</time>;
}
