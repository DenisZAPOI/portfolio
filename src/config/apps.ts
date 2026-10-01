import { AboutApp } from "@/components/apps/AboutApp";
import { CompetencesApp } from "@/components/apps/CompetencesApp";
import { ContactApp } from "@/components/apps/ContactApp";
import { ExperienceApp } from "@/components/apps/ExperienceApp";
import { ProjectsApp } from "@/components/apps/ProjectsApp";
import { TableauApp } from "@/components/apps/TableauApp";
import { TechnologiesApp } from "@/components/apps/TechnologiesApp";
import {
  BriefcaseIcon,
  CharacterIcon,
  EnvelopeIcon,
  FloppyDiskIcon,
  MedalIcon,
  MonitorIcon,
  SpreadsheetIcon,
} from "@/components/pixel-icons";
import type { AcId } from "@/data/competences";

export type AppId = "experience" | "projects" | "competences" | "tableau" | "technologies" | "about" | "contact";

export type AppContentProps = {
  /** La fenêtre est au premier plan (utile pour les raccourcis clavier). */
  active: boolean;
  /** Page affichée par la pagination de la fenêtre. */
  page: number;
  onPageChange: (page: number) => void;
  /** AC visé par la navigation croisée : ouvrir son onglet et le mettre en évidence. */
  focusedAc?: AcId;
  /** Change à chaque navigation croisée : sert de clé pour remettre les onglets à zéro. */
  navigationCount: number;
  /** Ouvre une autre fenêtre, éventuellement sur une page et un AC précis (navigation croisée). */
  openApp: (id: AppId, page?: number, focusedAc?: AcId) => void;
};

export type AppDefinition = {
  id: AppId;
  Icon: (props: { className?: string }) => React.ReactNode;
  /** Fenêtre large, pour les apps chargées en texte. */
  wide?: boolean;
  Content: (props: AppContentProps) => React.ReactNode;
};

export const apps: AppDefinition[] = [
  { id: "experience", Icon: BriefcaseIcon, Content: ExperienceApp },
  { id: "projects", Icon: FloppyDiskIcon, wide: true, Content: ProjectsApp },
  { id: "competences", Icon: MedalIcon, wide: true, Content: CompetencesApp },
  { id: "tableau", Icon: SpreadsheetIcon, wide: true, Content: TableauApp },
  { id: "technologies", Icon: MonitorIcon, Content: TechnologiesApp },
  { id: "about", Icon: CharacterIcon, Content: AboutApp },
  { id: "contact", Icon: EnvelopeIcon, Content: ContactApp },
];
