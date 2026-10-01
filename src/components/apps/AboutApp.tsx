"use client";

import { profile } from "@/data/profile";
import { useLocale } from "@/i18n/locale";
import { Caption, Row, ScrollArea, Title } from "./shared";

export function AboutApp() {
  const { translate } = useLocale();
  return (
    <ScrollArea>
      <Row>
        <Title>{profile.name}</Title>
        <Caption>{translate(profile.tagline)}</Caption>
        {profile.bio.map((paragraph) => (
          <p key={paragraph.fr} className="mt-4">
            {translate(paragraph)}
          </p>
        ))}
      </Row>
    </ScrollArea>
  );
}
