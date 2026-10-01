"use client";

import { skills } from "@/data/skills";
import { usePagination } from "@/hooks/usePagination";
import { useLocale } from "@/i18n/locale";
import { PaginationBar } from "./PaginationBar";
import { Row, ScrollArea } from "./shared";

const SKILLS_PER_PAGE = 5;

export function SkillsApp({ active }: { active: boolean }) {
  const { translate } = useLocale();
  const { page, pageCount, firstIndex, lastIndex, isFirstPage, isLastPage, goToPreviousPage, goToNextPage, scrollRef } =
    usePagination(skills.length, SKILLS_PER_PAGE, active);
  const visibleSkills = skills.slice(firstIndex, lastIndex);

  return (
    <>
      <ScrollArea ref={scrollRef}>
        {visibleSkills.map((skill) => (
          <Row key={translate(skill.name)}>
            <div className="flex justify-between">
              <span className="text-text">{translate(skill.name)}</span>
              <span className="font-mono text-xs">{skill.level}%</span>
            </div>
            <div className="mt-1.5 h-2 bg-ink">
              <div className="h-full bg-green" style={{ width: `${skill.level}%` }} />
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
