import { competences, evaluatedCompetenceIds, type Ac, type AcId, type Competence } from "@/data/competences";
import { projects, type Project } from "@/data/projects";

// Le lien projet → AC n'est saisi que dans `projects`. Tout ce qui suit le lit dans l'autre sens.

export const evaluatedCompetences = competences.filter((competence) => evaluatedCompetenceIds.includes(competence.id));

/** `C1-N3-AC2` → `C1`. */
export function competenceIdOfAc(acId: AcId): Competence["id"] {
  return acId.split("-")[0] as Competence["id"];
}

export function findAc(acId: AcId): Ac | undefined {
  return competences
    .flatMap((competence) => competence.levels)
    .flatMap((level) => level.acs)
    .find((ac) => ac.id === acId);
}

/** Page de competences.exe qui affiche cet AC, ou `null` si sa compétence n'y est pas. */
export function competencePageOfAc(acId: AcId): number | null {
  const index = evaluatedCompetences.findIndex((competence) => competence.id === competenceIdOfAc(acId));
  return index === -1 ? null : index + 1;
}

/** Page de projets.exe (un projet par page). */
export function projectPage(project: Project): number {
  return projects.indexOf(project) + 1;
}

export function findProjectsProvingAc(acId: AcId): Project[] {
  return projects.filter((project) => project.acs.some((ac) => ac.id === acId));
}

/** AC d'un projet regroupés par compétence, dans l'ordre du référentiel. */
export function groupProjectAcsByCompetence(project: Project) {
  return competences
    .map((competence) => ({
      competence,
      acs: project.acs.filter((ac) => competenceIdOfAc(ac.id) === competence.id),
    }))
    .filter((group) => group.acs.length > 0);
}

/** Les outils d'une compétence = les tags des projets qui la prouvent (sans doublon). */
export function technologiesOfCompetence(competence: Competence): string[] {
  const provingProjects = projects.filter((project) =>
    project.acs.some((ac) => competenceIdOfAc(ac.id) === competence.id),
  );
  return [...new Set(provingProjects.flatMap((project) => project.tags))];
}
