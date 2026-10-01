"use client";

import { useState } from "react";
import type { AppContentProps } from "@/config/apps";
import type { AcId, Competence } from "@/data/competences";
import { usePagination } from "@/hooks/usePagination";
import { useLocale } from "@/i18n/locale";
import { evaluatedCompetences, findProjectsProvingAc, projectPage, technologiesOfCompetence } from "@/lib/competences";
import { PaginationBar } from "./PaginationBar";
import { DisclosureArrow, ScrollArea, SectionTitle, summaryClass, Tabs, Tag, Title } from "./shared";

const COMPETENCES_PER_PAGE = 1;

const projectButtonClass =
  "border border-green px-1.5 py-0.5 font-mono text-label uppercase text-green hover:bg-green hover:text-ink focus-visible:bg-green focus-visible:text-ink focus-visible:outline-none";

export function CompetencesApp({
  active,
  page: requestedPage,
  onPageChange,
  focusedAc,
  navigationCount,
  openApp,
}: AppContentProps) {
  const { page, pageCount, firstIndex, lastIndex, isFirstPage, isLastPage, goToPreviousPage, goToNextPage, scrollRef } =
    usePagination(evaluatedCompetences.length, COMPETENCES_PER_PAGE, active, requestedPage, onPageChange);
  const visibleCompetences = evaluatedCompetences.slice(firstIndex, lastIndex);

  return (
    <>
      <ScrollArea ref={scrollRef}>
        {visibleCompetences.map((competence) => (
          // Une nouvelle navigation croisée change la clé, donc remet l'onglet à zéro.
          <CompetencePage
            key={`${competence.id}-${navigationCount}`}
            competence={competence}
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

type CompetencePageProps = {
  competence: Competence;
  focusedAc?: AcId;
  openApp: AppContentProps["openApp"];
};

function CompetencePage({ competence, focusedAc, openApp }: CompetencePageProps) {
  const { ui, translate } = useLocale();
  const focusedLevelIndex = competence.levels.findIndex((level) => level.acs.some((ac) => ac.id === focusedAc));
  const [selectedIndex, setSelectedIndex] = useState(Math.max(0, focusedLevelIndex));
  const selectedLevel = competence.levels[selectedIndex];

  return (
    <article>
      <Title>
        {competence.id} — {translate(competence.title)}
      </Title>

      <details className="group mt-2">
        <summary className={`${summaryClass} text-muted hover:text-text`}>
          <DisclosureArrow />
          <span className="mt-0.5 font-mono text-label-lg">{ui.competences.about}</span>
        </summary>
        <div className="mt-1.5 pl-7.5">
          <p>{translate(competence.description)}</p>
          <ul className="mt-1 list-['–_'] pl-4">
            {competence.components.map((component) => (
              <li key={component.fr}>{translate(component)}</li>
            ))}
          </ul>
        </div>
      </details>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 font-mono text-label uppercase tracking-wider text-muted">
          {ui.competences.technologies}
        </span>
        {technologiesOfCompetence(competence).map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>

      <Tabs
        labels={competence.levels.map((level) => `${ui.competences.level} ${level.number}`)}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
      />
      <SectionTitle>{translate(selectedLevel.title)}</SectionTitle>
      <ul className="mt-1">
        {selectedLevel.acs.map((ac) => {
          const provingProjects = findProjectsProvingAc(ac.id);
          const proven = provingProjects.length > 0;
          const focused = ac.id === focusedAc;
          return (
            <li
              key={ac.id}
              title={proven ? undefined : ui.competences.notProven}
              className={`border-b border-line py-2 last:border-b-0 ${proven ? "" : "text-muted opacity-60"} ${
                focused ? "-mx-2 border-l-2 border-l-magenta bg-surface-2 px-2" : ""
              }`}
            >
              <p>
                <span className="mr-2 font-mono text-label">{ac.id}</span>
                <span className={proven ? "text-text" : ""}>{translate(ac.title)}</span>
              </p>
              {proven && (
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {provingProjects.map((project) => (
                    <button
                      key={project.title.fr}
                      type="button"
                      onClick={() => openApp("projects", projectPage(project), ac.id)}
                      title={ui.competences.openProject}
                      className={projectButtonClass}
                    >
                      {translate(project.title)}
                    </button>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
