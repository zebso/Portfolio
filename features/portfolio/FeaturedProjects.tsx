import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectGrid } from "@/features/portfolio/ProjectGrid";
import type { PortfolioContent } from "@/data/content";

type FeaturedProjectsProps = {
  common: PortfolioContent["common"];
  content: PortfolioContent["home"]["featured"];
  projects: PortfolioContent["projects"];
};

export function FeaturedProjects({
  common,
  content,
  projects
}: FeaturedProjectsProps) {
  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader" data-reveal>
          <div>
            <p className="sectionKicker">{content.kicker}</p>
            <h2 className="sectionTitle">{content.title}</h2>
          </div>
          <ButtonLink href="/projects" variant="ghost">
            {content.action}
          </ButtonLink>
        </header>
        <ProjectGrid
          common={common}
          projects={projects.slice(0, 3)}
          revealCards
        />
      </div>
    </section>
  );
}
