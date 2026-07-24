import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectGrid } from "@/features/portfolio/ProjectGrid";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader" data-reveal>
          <div>
            <p className="sectionKicker">Featured Projects</p>
            <h2 className="sectionTitle">Work that explains the process.</h2>
          </div>
          <ButtonLink href="/projects" variant="ghost">
            All projects
          </ButtonLink>
        </header>
        <ProjectGrid projects={featuredProjects} revealCards />
      </div>
    </section>
  );
}
