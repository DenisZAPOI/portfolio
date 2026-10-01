"use client";

import { trashFiles } from "@/data/desktop";
import { useLocale } from "@/i18n/locale";
import { Row, ScrollArea } from "./shared";

export function TrashApp() {
  const { ui, translate } = useLocale();

  return (
    <ScrollArea>
      {trashFiles.length === 0 ? (
        <p className="font-mono text-muted">{ui.trash.empty}</p>
      ) : (
        trashFiles.map((file) => (
          <Row key={file.name}>
            <p className="font-mono text-xs text-text">{file.name}</p>
            <p className="mt-1">{translate(file.description)}</p>
          </Row>
        ))
      )}
    </ScrollArea>
  );
}
