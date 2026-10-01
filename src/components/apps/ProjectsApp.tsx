"use client";

import { projects } from "@/data/projects";
import { useLocale } from "@/i18n/locale";
import { Row, Title } from "./shared";

export function ProjectsApp() {
  const { ui, translate } = useLocale();
  return projects.map((project) => (
    <Row key={translate(project.title)}>
      <Title>{translate(project.title)}</Title>
      <p>{translate(project.description)}</p>
      <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-green-dark px-1.5 py-0.5 font-mono text-[10.5px] uppercase text-green"
          >
            {tag}
          </span>
        ))}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-xs text-purple underline-offset-2 hover:underline"
          >
            {ui.projects.view} ↗
          </a>
        )}
      </div>
    </Row>
  ));
}
