export function Row({ children }: { children: React.ReactNode }) {
  return <div className="border-t border-line py-3 first:border-t-0 first:pt-0 last:pb-0">{children}</div>;
}

export function Title({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display text-base font-semibold text-text">{children}</h3>;
}

export function Caption({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-xs text-green">{children}</p>;
}
