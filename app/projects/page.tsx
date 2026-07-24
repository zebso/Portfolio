import type { Metadata } from "next";
import { ProjectGrid } from "@/features/portfolio/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Products and case studies showing how Zebso approaches problems, trade-offs, and implementation.",
  alternates: {
    canonical: "/projects"
  }
};

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader" data-reveal>
          <div>
            <p className="eyebrow">Projects</p>
            <h1 className="sectionTitle">Products tell the story.</h1>
            <p className="sectionText">
              A focused collection of product work, experiments that became
              systems, and notes from the decisions behind them.
            </p>
          </div>
        </header>
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
