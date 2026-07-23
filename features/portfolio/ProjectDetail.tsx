import type { Project } from "@/types/portfolio";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { TagList } from "@/components/ui/TagList";

type ProjectDetailProps = {
  project: Project;
};

const sections = [
  ["Overview", "overview"],
  ["Problem", "problem"],
  ["Research", "research"],
  ["Design", "design"],
  ["Development", "development"],
  ["Result", "result"],
  ["Reflection", "reflection"]
] as const;

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <section className="projectHero">
        <div className="container projectHeroGrid">
          <div>
            <p className="eyebrow">{project.year} / {project.status}</p>
            <h1>{project.title}</h1>
            <p>{project.tagline}</p>
            <div className="heroActions">
              {project.demo ? (
                <ButtonLink href={project.demo}>Open demo</ButtonLink>
              ) : null}
              <ButtonLink href={project.repository} variant="secondary">
                Repository
              </ButtonLink>
            </div>
          </div>
          <ProjectImage title={project.title} status={project.status} />
        </div>
      </section>
      <section className="section">
        <div className="container projectMetaGrid">
          <div>
            <p className="cardMeta">Tags</p>
            <TagList tags={project.tags} />
          </div>
          <div>
            <p className="cardMeta">Technologies</p>
            <TagList tags={project.technologies} />
          </div>
          <div>
            <p className="cardMeta">Updated</p>
            <p className="metaValue">{project.updatedAt}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container caseStudy">
          {sections.map(([title, key]) => (
            <article className="caseStudySection" key={key}>
              <h2>{title}</h2>
              <p>{project[key]}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
