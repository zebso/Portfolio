import type { Project } from "@/types/portfolio";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { TagList } from "@/components/ui/TagList";
import { Card } from "@/components/ui/Card";

type ProjectGridProps = {
  projects: Project[];
  revealCards?: boolean;
};

export function ProjectGrid({
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
          <ProjectImage title={project.title} status={project.status} />
          <TagList tags={project.technologies} />
        </Card>
      ))}
    </div>
  );
}
