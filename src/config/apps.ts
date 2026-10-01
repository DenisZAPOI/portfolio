import { AboutApp } from "@/components/apps/AboutApp";
import { ContactApp } from "@/components/apps/ContactApp";
import { ExperienceApp } from "@/components/apps/ExperienceApp";
import { ProjectsApp } from "@/components/apps/ProjectsApp";
import { SkillsApp } from "@/components/apps/SkillsApp";
import { BriefcaseIcon, ChartIcon, CodeIcon, MailIcon, UserIcon } from "@/components/icons";

export type AppId = "experience" | "projects" | "skills" | "about" | "contact";

export type AppDefinition = {
  id: AppId;
  Icon: (props: { className?: string }) => React.ReactNode;
  accent: "purple" | "green";
  Content: () => React.ReactNode;
};

export const apps: AppDefinition[] = [
  { id: "experience", Icon: BriefcaseIcon, accent: "purple", Content: ExperienceApp },
  { id: "projects", Icon: CodeIcon, accent: "green", Content: ProjectsApp },
  { id: "skills", Icon: ChartIcon, accent: "purple", Content: SkillsApp },
  { id: "about", Icon: UserIcon, accent: "green", Content: AboutApp },
  { id: "contact", Icon: MailIcon, accent: "purple", Content: ContactApp },
];
