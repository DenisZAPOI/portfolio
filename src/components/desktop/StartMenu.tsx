"use client";

import { FileIcon, LinkIcon } from "@/components/icons";
import { apps, type AppId } from "@/config/apps";
import { profile } from "@/data/profile";
import { themes, useTheme } from "@/hooks/useTheme";
import { locales, useLocale } from "@/i18n/locale";

type Props = {
  id: string;
  onOpenApp: (id: AppId) => void;
  onClose: () => void;
};

const sectionTitle = "px-3 pt-3 pb-1 font-mono text-label uppercase tracking-wider text-muted";
const itemClass =
  "flex w-full items-center gap-3 px-3 py-2 text-left text-sm text-text hover:bg-purple hover:text-on-accent focus-visible:bg-purple focus-visible:text-on-accent focus-visible:outline-none";
const choiceClass = "border-2 px-3 py-1 font-mono text-xs";

export function StartMenu({ id, onOpenApp, onClose }: Props) {
  const { ui, locale, setLocale } = useLocale();
  const { theme, setTheme } = useTheme();

  const links = [
    { label: ui.start.cv, href: profile.cv, Icon: FileIcon },
    { label: ui.contact.github, href: profile.github, Icon: LinkIcon },
    { label: ui.contact.linkedin, href: profile.linkedin, Icon: LinkIcon },
  ];

  return (
    <div
      id={id}
      className="absolute bottom-15 left-2 z-30 w-72 max-w-[calc(100vw-16px)] border-2 border-line-strong bg-surface p-1.5 shadow-[4px_4px_0_var(--color-ink)]"
    >
      <div className="bg-purple px-3 py-3 text-on-accent">
        <p className="font-display font-semibold">{profile.name}</p>
        <p className="font-mono text-label-lg text-on-accent/80">{ui.start.button.toLowerCase()}.exe</p>
      </div>

      <p className={sectionTitle}>{ui.start.apps}</p>
      {apps
        .filter((app) => !app.corner)
        .map(({ id: appId, Icon }) => (
          <button
            key={appId}
            type="button"
            className={itemClass}
            onClick={() => {
              onOpenApp(appId);
              onClose();
            }}
          >
            <Icon className="size-4" />
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
            className={`${choiceClass} uppercase ${
              locale === code ? "border-ink bg-green text-ink" : "border-line text-body hover:text-text"
            }`}
          >
            {code}
          </button>
        ))}
      </div>

      <p className={sectionTitle}>{ui.start.theme}</p>
      <div className="flex gap-1.5 px-3 pb-2">
        {themes.map((code) => (
          <button
            key={code}
            type="button"
            aria-pressed={theme === code}
            onClick={() => setTheme(code)}
            className={`${choiceClass} ${
              theme === code ? "border-ink bg-green text-ink" : "border-line text-body hover:text-text"
            }`}
          >
            {ui.start.themes[code]}
          </button>
        ))}
      </div>
    </div>
  );
}
