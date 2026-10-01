"use client";

import { projects } from "@/data/projects";
import { usePagination } from "@/hooks/usePagination";
import { useLocale } from "@/i18n/locale";
import { PaginationBar } from "./PaginationBar";
import { Row, ScrollArea, Title } from "./shared";

const PROJECTS_PER_PAGE = 3;

export function ProjectsApp({ active }: { active: boolean }) {
  const { ui, translate } = useLocale();
  const { page, pageCount, firstIndex, lastIndex, isFirstPage, isLastPage, goToPreviousPage, goToNextPage, scrollRef } =
    usePagination(projects.length, PROJECTS_PER_PAGE, active);
  const visibleProjects = projects.slice(firstIndex, lastIndex);

  return (
    <>
      <ScrollArea ref={scrollRef}>
        {visibleProjects.map((project) => (
          <Row key={translate(project.title)}>
            <Title>{translate(project.title)}</Title>
            <p>{translate(project.description)}</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-green-dark px-1.5 py-0.5 font-mono text-[10.5px] uppercase text-green"
                >
                  {tag}
                </span>
              ))}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ml-auto text-xs text-green underline-offset-2 hover:underline"
                >
                  {ui.projects.view} ↗
                </a>
              )}
            </div>
          </Row>
        ))}
      </ScrollArea>
      <PaginationBar
        page={page}
        pageCount={pageCount}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        onPrevious={goToPreviousPage}
        onNext={goToNextPage}
      />
    </>
  );
}
