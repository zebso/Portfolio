import type { Project } from "@/types/portfolio";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { TagList } from "@/components/ui/TagList";
import type { PortfolioContent } from "@/data/content";

type ProjectDetailProps = {
  common: PortfolioContent["common"];
  content: PortfolioContent["projectDetail"];
  project: Project;
};

export function ProjectDetail({
  common,
  content,
  project
}: ProjectDetailProps) {
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
                <ButtonLink href={project.demo}>
                  {content.openDemo}
                </ButtonLink>
              ) : null}
              <ButtonLink href={project.repository} variant="secondary">
                {content.repository}
              </ButtonLink>
            </div>
          </div>
          <ProjectImage
            previewLabel={common.interfacePreviewLabel}
            status={project.status}
            title={project.title}
          />
        </div>
      </section>
      <section className="section">
        <div className="container projectMetaGrid">
          <div>
            <p className="cardMeta">{content.tags}</p>
            <TagList ariaLabel={common.tagsLabel} tags={project.tags} />
          </div>
          <div>
            <p className="cardMeta">{content.technologies}</p>
            <TagList
              ariaLabel={content.technologies}
              tags={project.technologies}
            />
          </div>
          <div>
            <p className="cardMeta">{content.updated}</p>
            <p className="metaValue">{project.updatedAt}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container caseStudy">
          {content.sections.map(({ title, key }) => (
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
