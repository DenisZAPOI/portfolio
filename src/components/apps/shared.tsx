import { ArrowRightIcon } from "@/components/pixel-icons";

/** Zone de contenu d'une fenêtre, qui défile si le contenu est trop long. */
export function ScrollArea({ children, ref }: { children: React.ReactNode; ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className="min-h-0 flex-1 overflow-y-auto px-[22px] pt-5 pb-6">
      {children}
    </div>
  );
}

export function Row({ children }: { children: React.ReactNode }) {
  return <div className="border-t border-line py-3 first:border-t-0 first:pt-0 last:pb-0">{children}</div>;
}

export function Title({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display text-base font-semibold text-text">{children}</h3>;
}

export function Caption({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs text-green">{children}</p>;
}

/** Intertitre d'une fenêtre, en mono comme les sections du menu démarrer. */
export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h4 className="mt-5 font-mono first:mt-0 text-[10.5px] uppercase tracking-wider text-muted">{children}</h4>;
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-green-dark px-1.5 py-0.5 font-mono text-[10.5px] uppercase text-green">{children}</span>
  );
}

/** Onglets façon Windows 95 : l'onglet choisi passe devant le trait et se raccorde au panneau. */
export function Tabs({
  labels,
  selectedIndex,
  onSelect,
}: {
  labels: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div role="tablist" className="mt-4 flex items-end gap-1 border-b-2 border-line-strong">
      {labels.map((label, index) => {
        const selected = index === selectedIndex;
        return (
          <button
            key={label}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onSelect(index)}
            className={`border-2 border-b-0 px-3 font-mono text-[11px] ${
              selected
                ? "-mb-0.5 border-line-strong bg-surface pt-1.5 pb-[5px] text-text"
                : "border-line bg-surface-2 py-1 text-muted hover:text-text"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

/** Retire le triangle natif de `<summary>` (on dessine le nôtre). */
export const summaryClass = "flex cursor-pointer list-none items-start gap-2.5 [&::-webkit-details-marker]:hidden";

/**
 * Petit bouton en relief façon Windows 95, avec une flèche pixel qui pivote vers le bas quand le
 * `<details>` parent (classe `group`) est ouvert.
 */
export function DisclosureArrow() {
  return (
    <span
      aria-hidden
      className="mt-px flex size-5 shrink-0 items-center justify-center border-2 border-t-line-strong border-l-line-strong border-r-ink border-b-ink bg-surface-2 group-open:border-t-ink group-open:border-l-ink group-open:border-r-line-strong group-open:border-b-line-strong"
    >
      <ArrowRightIcon className="size-3 group-open:rotate-90" />
    </span>
  );
}
