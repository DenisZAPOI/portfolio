"use client";

import { useState } from "react";
import type { AppContentProps } from "@/config/apps";
import type { AcId } from "@/data/competences";
import { projects, type Project } from "@/data/projects";
import { usePagination } from "@/hooks/usePagination";
import { useLocale } from "@/i18n/locale";
import { competenceIdOfAc, competencePageOfAc, findAc, groupProjectAcsByCompetence } from "@/lib/competences";
import { PaginationBar } from "./PaginationBar";
import { DisclosureArrow, ScrollArea, SectionTitle, summaryClass, Tabs, Tag, Title } from "./shared";

const PROJECTS_PER_PAGE = 1;

export function ProjectsApp({
  active,
  page: requestedPage,
  onPageChange,
  focusedAc,
  navigationCount,
  openApp,
}: AppContentProps) {
  const { page, pageCount, firstIndex, lastIndex, isFirstPage, isLastPage, goToPreviousPage, goToNextPage, scrollRef } =
    usePagination(projects.length, PROJECTS_PER_PAGE, active, requestedPage, onPageChange);
  const visibleProjects = projects.slice(firstIndex, lastIndex);

  return (
    <>
      <ScrollArea ref={scrollRef}>
        {visibleProjects.map((project) => (
          // Une nouvelle navigation croisée change la clé, donc remet les onglets à zéro.
          <ProjectPage
            key={`${project.title.fr}-${navigationCount}`}
            project={project}
            focusedAc={focusedAc}
            openApp={openApp}
          />
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

type ProjectPageProps = {
  project: Project;
  focusedAc?: AcId;
  openApp: AppContentProps["openApp"];
};

function ProjectPage({ project, focusedAc, openApp }: ProjectPageProps) {
  const { ui, translate } = useLocale();
  const groups = groupProjectAcsByCompetence(project);
  const focusedGroupIndex = groups.findIndex(
    ({ competence }) => focusedAc && competence.id === competenceIdOfAc(focusedAc),
  );
  const [selectedIndex, setSelectedIndex] = useState(Math.max(0, focusedGroupIndex));
  const selectedGroup = groups[selectedIndex];

  return (
    <article>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <Title>{translate(project.title)}</Title>
        {project.period && <p className="font-mono text-xs text-green">{translate(project.period)}</p>}
      </div>
      {project.description && <p className="mt-2">{translate(project.description)}</p>}
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        {project.repositories.map((repository) => (
          <a
            key={repository.url}
            href={repository.url}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-green underline-offset-2 first-of-type:ml-auto hover:underline"
          >
            {project.repositories.length > 1 ? repository.name : ui.projects.view} ↗
          </a>
        ))}
      </div>

      {selectedGroup && (
        <>
          <Tabs
            labels={groups.map(({ competence }) => competence.id)}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
          />
          <SectionTitle>{translate(selectedGroup.competence.title)}</SectionTitle>
          <div className="mt-1">
            {selectedGroup.acs.map((mobilizedAc) => {
              const competencePage = competencePageOfAc(mobilizedAc.id);
              const ac = findAc(mobilizedAc.id);
              return (
                <details
                  key={mobilizedAc.id}
                  open={mobilizedAc.id === focusedAc}
                  className="group border-b border-line py-1 last:border-b-0"
                >
                  <summary className={`${summaryClass} -mx-2 px-2 py-1.5 hover:bg-surface-2 group-open:bg-surface-2`}>
                    <DisclosureArrow />
                    <span className="mt-0.5 shrink-0 font-mono text-[10.5px] text-magenta">{mobilizedAc.id}</span>
                    {ac && <span className="text-text">{translate(ac.title)}</span>}
                  </summary>
                  <div className="mt-1.5 mb-1.5 pl-7.5">
                    <p>{translate(mobilizedAc.argument)}</p>
                    {competencePage !== null && (
                      <button
                        type="button"
                        onClick={() => openApp("competences", competencePage, mobilizedAc.id)}
                        className="mt-1.5 font-mono text-[10.5px] text-magenta underline-offset-2 hover:underline"
                      >
                        {ui.projects.openCompetence} →
                      </button>
                    )}
                  </div>
                </details>
              );
            })}
          </div>
        </>
      )}
    </article>
  );
}
