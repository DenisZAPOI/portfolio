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
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-line">
        <div className="h-full bg-linear-to-r from-green to-purple" style={{ width: `${skill.level}%` }} />
      </div>
    </Row>
  ));
}
