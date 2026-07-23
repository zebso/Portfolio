import type { Project } from "@/types/portfolio";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { TagList } from "@/components/ui/TagList";
import { Card } from "@/components/ui/Card";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid">
      {projects.map((project) => (
        <Card
          className="span-4 projectCard"
          description={project.description}
          href={`/projects/${project.slug}`}
          key={project.slug}
          meta={`${project.status} / ${project.year}`}
          title={project.title}
        >
          <ProjectImage title={project.title} status={project.status} />
          <TagList tags={project.technologies} />
        </Card>
      ))}
    </div>
  );
}
