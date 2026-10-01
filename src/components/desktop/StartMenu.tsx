"use client";

import { FileIcon, LinkIcon } from "@/components/icons";
import { apps, type AppId } from "@/config/apps";
import { profile } from "@/data/profile";
import { locales, useLocale } from "@/i18n/locale";

type Props = {
  id: string;
  onOpenApp: (id: AppId) => void;
  onClose: () => void;
};

const sectionTitle = "px-3 pt-3 pb-1 font-mono text-[10.5px] uppercase tracking-wider text-muted";
const itemClass =
  "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-text hover:bg-white/8 focus-visible:bg-white/8 focus-visible:outline-none";

export function StartMenu({ id, onOpenApp, onClose }: Props) {
  const { ui, locale, setLocale } = useLocale();

  const links = [
    { label: ui.start.cv, href: profile.cv, Icon: FileIcon },
    { label: ui.contact.github, href: profile.github, Icon: LinkIcon },
    { label: ui.contact.linkedin, href: profile.linkedin, Icon: LinkIcon },
  ];

  return (
    <div
      id={id}
      className="absolute bottom-[60px] left-2 z-30 w-72 max-w-[calc(100vw-16px)] rounded-[10px] border border-line bg-surface/95 p-1.5 shadow-[0_30px_70px_-20px_rgb(0_0_0/0.65)] backdrop-blur-md"
    >
      <div className="rounded-md bg-linear-to-r from-purple-dark via-purple to-green-dark px-3 py-3">
        <p className="font-display font-semibold">{profile.name}</p>
        <p className="font-mono text-[11px] text-text/80">{ui.start.button}.exe</p>
      </div>

      <p className={sectionTitle}>{ui.start.apps}</p>
      {apps.map(({ id: appId, Icon }) => (
        <button
          key={appId}
          type="button"
          className={itemClass}
          onClick={() => {
            onOpenApp(appId);
            onClose();
          }}
        >
          <Icon className="size-4 text-purple" />
          {ui.apps[appId].label}
        </button>
      ))}

      <p className={sectionTitle}>{ui.start.links}</p>
      {links.map(({ label, href, Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" className={itemClass}>
          <Icon className="size-4 text-green" />
          {label}
          <span className="ml-auto text-muted">↗</span>
        </a>
      ))}

      <p className={sectionTitle}>{ui.start.language}</p>
      <div className="flex gap-1.5 px-3 pb-2">
        {locales.map((code) => (
          <button
            key={code}
            type="button"
            aria-pressed={locale === code}
            onClick={() => setLocale(code)}
            className={`rounded px-3 py-1 font-mono text-xs uppercase ${
              locale === code
                ? "bg-green text-ink"
                : "border border-line text-muted hover:text-text"
            }`}
          >
            {code}
          </button>
        ))}
      </div>
    </div>
  );
}
