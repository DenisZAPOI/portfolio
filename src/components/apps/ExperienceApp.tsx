"use client";

import { PadlockIcon } from "@/components/pixel-icons";
import type { AppContentProps } from "@/config/apps";
import { experiences } from "@/data/experiences";
import { usePagination } from "@/hooks/usePagination";
import { useLocale } from "@/i18n/locale";
import { PaginationBar } from "./PaginationBar";
import { Caption, Row, ScrollArea, Title } from "./shared";

const EXPERIENCES_PER_PAGE = 1;

export function ExperienceApp({ active, page: requestedPage, onPageChange }: AppContentProps) {
  const { translate } = useLocale();
  const { page, pageCount, firstIndex, lastIndex, isFirstPage, isLastPage, goToPreviousPage, goToNextPage, scrollRef } =
    usePagination(experiences.length, EXPERIENCES_PER_PAGE, active, requestedPage, onPageChange);
  const visibleExperiences = experiences.slice(firstIndex, lastIndex);

  return (
    <>
      <ScrollArea ref={scrollRef}>
        {visibleExperiences.map((exp) =>
          exp.locked ? (
            <Row key={exp.role.fr}>
              <div className="flex items-center gap-3 text-muted">
                <PadlockIcon className="size-8 shrink-0" />
                <h3 className="font-display text-base font-semibold">{translate(exp.role)}</h3>
              </div>
              {exp.description.map((paragraph) => (
                <p key={paragraph.fr} className="mt-4 font-mono text-muted">
                  {translate(paragraph)}
                </p>
              ))}
            </Row>
          ) : (
            <Row key={exp.role.fr}>
              <Title>
                {translate(exp.role)}
                {exp.company && ` — ${exp.company}`}
              </Title>
              {exp.period && <Caption>{translate(exp.period)}</Caption>}
              {exp.description.map((paragraph) => (
                <p key={paragraph.fr} className="mt-4">
                  {translate(paragraph)}
                </p>
              ))}
            </Row>
          ),
        )}
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
