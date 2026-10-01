"use client";

import { skills } from "@/data/skills";
import { useLocale } from "@/i18n/locale";
import { Row } from "./shared";

export function SkillsApp() {
  const { translate } = useLocale();
  return skills.map((skill) => (
    <Row key={translate(skill.name)}>
      <div className="flex justify-between">
        <span className="text-text">{translate(skill.name)}</span>
        <span className="font-mono text-xs">{skill.level}%</span>
      </div>
      <div className="mt-1.5 h-2 bg-ink">
        <div className="h-full bg-green" style={{ width: `${skill.level}%` }} />
      </div>
    </Row>
  ));
}
