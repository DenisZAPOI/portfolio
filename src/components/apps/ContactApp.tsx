"use client";

import { profile } from "@/data/profile";
import { useLocale } from "@/i18n/locale";
import { Caption, Row, ScrollArea } from "./shared";

export function ContactApp() {
  const { ui } = useLocale();
  const links = [
    { label: ui.contact.email, href: `mailto:${profile.email}`, text: profile.email },
    { label: ui.contact.github, href: profile.github, text: profile.github.replace("https://", "") },
    { label: ui.contact.linkedin, href: profile.linkedin, text: profile.linkedin.replace("https://www.", "") },
  ];
  return (
    <ScrollArea>
      {links.map((link) => (
        <Row key={link.label}>
          <Caption>{link.label}</Caption>
          <a
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noreferrer"
            className="text-text underline-offset-2 hover:underline"
          >
            {link.text}
          </a>
        </Row>
      ))}
    </ScrollArea>
  );
}
