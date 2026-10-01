"use client";

import type { AppContentProps } from "@/config/apps";
import { technologies } from "@/data/technologies";
import { usePagination } from "@/hooks/usePagination";
import { useLocale } from "@/i18n/locale";
import { PaginationBar } from "./PaginationBar";
import { Row, ScrollArea } from "./shared";

const TECHNOLOGIES_PER_PAGE = 5;

export function TechnologiesApp({ active, page: requestedPage, onPageChange }: AppContentProps) {
  const { translate } = useLocale();
  const { page, pageCount, firstIndex, lastIndex, isFirstPage, isLastPage, goToPreviousPage, goToNextPage, scrollRef } =
    usePagination(technologies.length, TECHNOLOGIES_PER_PAGE, active, requestedPage, onPageChange);
  const visibleTechnologies = technologies.slice(firstIndex, lastIndex);

  return (
    <>
      <ScrollArea ref={scrollRef}>
        {visibleTechnologies.map((technology) => (
          <Row key={translate(technology.name)}>
            <div className="flex justify-between">
              <span className="text-text">{translate(technology.name)}</span>
              <span className="font-mono text-xs">{technology.level}%</span>
            </div>
            <div className="mt-1.5 h-2 bg-ink">
              <div className="h-full bg-green" style={{ width: `${technology.level}%` }} />
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
