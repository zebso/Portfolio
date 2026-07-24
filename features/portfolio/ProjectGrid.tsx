import type { Project } from "@/types/portfolio";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { TagList } from "@/components/ui/TagList";
import { Card } from "@/components/ui/Card";
import type { PortfolioContent } from "@/data/content";

type ProjectGridProps = {
  common: PortfolioContent["common"];
  projects: Project[];
  revealCards?: boolean;
};

export function ProjectGrid({
  common,
  projects,
  revealCards = false
}: ProjectGridProps) {
  return (
    <div className="grid">
      {projects.map((project, index) => (
        <Card
          className="span-4 projectCard"
          description={project.description}
          href={`/projects/${project.slug}`}
          key={project.slug}
          meta={`${project.status} / ${project.year}`}
          revealDelay={revealCards ? index : undefined}
          title={project.title}
        >
          <ProjectImage
            previewLabel={common.interfacePreviewLabel}
            status={project.status}
            title={project.title}
          />
          <TagList ariaLabel={common.tagsLabel} tags={project.technologies} />
        </Card>
      ))}
    </div>
  );
}
