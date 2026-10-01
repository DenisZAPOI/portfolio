"use client";

import { profile } from "@/data/profile";
import { useLocale } from "@/i18n/locale";
import { Caption, Row, Title } from "./shared";

export function AboutApp() {
  const { translate } = useLocale();
  return (
    <Row>
      <Title>{profile.name}</Title>
      <Caption>{translate(profile.tagline)}</Caption>
      {profile.bio.map((paragraph) => (
        <p key={paragraph.fr} className="mt-4">
          {translate(paragraph)}
        </p>
      ))}
    </Row>
  );
}
