"use client";

import { experiences } from "@/data/experiences";
import { useLocale } from "@/i18n/locale";
import { Caption, Row, Title } from "./shared";

export function ExperienceApp() {
  const { translate } = useLocale();
  return experiences.map((exp) => (
    <Row key={exp.company + translate(exp.role)}>
      <Title>
        {translate(exp.role)} — {exp.company}
      </Title>
      <Caption>{translate(exp.period)}</Caption>
      <p className="mt-1">{translate(exp.description)}</p>
    </Row>
  ));
}
