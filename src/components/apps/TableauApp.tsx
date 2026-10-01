"use client";

import { useState } from "react";
import type { AppContentProps } from "@/config/apps";
import { useLocale } from "@/i18n/locale";
import {
  competencePageOfAc,
  evaluatedCompetences,
  projectPage,
  projectProvesAc,
  projectsWithAcs,
} from "@/lib/competences";
import { ScrollArea, Tabs } from "./shared";

/** Tableau croisé projets × AC, un onglet par compétence. Calculé depuis `projects`. */
export function TableauApp({ openApp }: AppContentProps) {
  const { ui, translate } = useLocale();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const competence = evaluatedCompetences[selectedIndex];
  const columnCount = projectsWithAcs.length + 1;

  return (
    <ScrollArea>
      <p>{ui.tableau.intro}</p>
      <Tabs
        labels={evaluatedCompetences.map((c) => c.id)}
        selectedIndex={selectedIndex}
        onSelect={setSelectedIndex}
      />
      <table className="mt-3 w-full border-collapse">
        <thead>
          <tr>
            <th className="pb-2 text-left font-mono text-[10.5px] font-normal uppercase tracking-wider text-muted">
              {translate(competence.title)}
            </th>
            {projectsWithAcs.map((project) => (
              <th
                key={project.title.fr}
                scope="col"
                className="w-24 px-1 pb-2 align-bottom font-mono text-[10.5px] font-normal uppercase text-green max-sm:w-12 max-sm:text-[9px] max-sm:break-words"
              >
                {translate(project.title)}
              </th>
            ))}
          </tr>
        </thead>
        {competence.levels.map((level) => (
          <tbody key={level.number}>
            <tr>
              <th
                colSpan={columnCount}
                scope="colgroup"
                className="border-t-2 border-line-strong pt-3 pb-1 text-left font-mono text-[10.5px] font-normal uppercase tracking-wider text-muted"
              >
                {ui.competences.level} {level.number} — {translate(level.title)}
              </th>
            </tr>
            {level.acs.map((ac) => {
              const proven = projectsWithAcs.some((project) => projectProvesAc(project, ac.id));
              const competencePage = competencePageOfAc(ac.id);
              return (
                <tr
                  key={ac.id}
                  title={proven ? undefined : ui.competences.notProven}
                  className={`border-t border-line ${proven ? "" : "text-muted opacity-60"}`}
                >
                  <th scope="row" className="py-1.5 pr-2 text-left font-normal">
                    <button
                      type="button"
                      onClick={() => competencePage !== null && openApp("competences", competencePage, ac.id)}
                      title={ui.projects.openCompetence}
                      className="mr-2 font-mono text-[10.5px] text-magenta underline-offset-2 hover:underline"
                    >
                      {ac.id}
                    </button>
                    <span className={`text-xs ${proven ? "text-text" : ""}`}>{translate(ac.title)}</span>
                  </th>
                  {projectsWithAcs.map((project) => (
                    <td key={project.title.fr} className="px-1 text-center">
                      {projectProvesAc(project, ac.id) ? (
                        <button
                          type="button"
                          onClick={() => openApp("projects", projectPage(project), ac.id)}
                          title={`${ui.competences.openProject} : ${translate(project.title)}`}
                          aria-label={`${translate(project.title)} — ${ac.id}`}
                          className="inline-flex size-6 items-center justify-center hover:bg-surface-2 focus-visible:bg-surface-2 focus-visible:outline-none"
                        >
                          <span className="size-3 bg-green shadow-[2px_2px_0_var(--color-ink)]" />
                        </button>
                      ) : (
                        <span aria-hidden className="text-line-strong">
                          ·
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        ))}
      </table>
    </ScrollArea>
  );
}
