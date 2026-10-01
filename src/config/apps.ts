import { AboutApp } from "@/components/apps/AboutApp";
import { ContactApp } from "@/components/apps/ContactApp";
import { ExperienceApp } from "@/components/apps/ExperienceApp";
import { ProjectsApp } from "@/components/apps/ProjectsApp";
import { SkillsApp } from "@/components/apps/SkillsApp";
import { BriefcaseIcon, CharacterIcon, EnvelopeIcon, FloppyDiskIcon, MonitorIcon } from "@/components/pixel-icons";

export type AppId = "experience" | "projects" | "skills" | "about" | "contact";

export type AppDefinition = {
  id: AppId;
  Icon: (props: { className?: string }) => React.ReactNode;
  Content: () => React.ReactNode;
};

export const apps: AppDefinition[] = [
  { id: "experience", Icon: BriefcaseIcon, Content: ExperienceApp },
  { id: "projects", Icon: FloppyDiskIcon, Content: ProjectsApp },
  { id: "skills", Icon: MonitorIcon, Content: SkillsApp },
  { id: "about", Icon: CharacterIcon, Content: AboutApp },
  { id: "contact", Icon: EnvelopeIcon, Content: ContactApp },
];
