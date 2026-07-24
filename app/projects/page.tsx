import type { Metadata } from "next";
import { ProjectGrid } from "@/features/portfolio/ProjectGrid";
import { getContent } from "@/data/content";
import { createPageMetadata } from "@/i18n/metadata";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata(
    locale,
    "/projects",
    getContent(locale).metadata.projects
  );
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  const content = getContent(locale);
  const page = content.pages.projects;

  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader" data-reveal>
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="sectionTitle">{page.title}</h1>
            <p className="sectionText">{page.text}</p>
          </div>
        </header>
        <ProjectGrid common={content.common} projects={content.projects} />
      </div>
    </section>
  );
}
