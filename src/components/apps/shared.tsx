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
