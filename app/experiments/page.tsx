import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagList";
import { getContent } from "@/data/content";
import { createPageMetadata } from "@/i18n/metadata";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata(
    locale,
    "/experiments",
    getContent(locale).metadata.experiments
  );
}

export default async function ExperimentsPage() {
  const locale = await getLocale();
  const content = getContent(locale);
  const page = content.pages.experiments;

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
        <div className="grid">
          {content.experiments.map((experiment) => (
            <Card
              className="span-4"
              description={experiment.description}
              key={experiment.title}
              meta={experiment.status}
              title={experiment.title}
            >
              <TagList
                ariaLabel={content.common.tagsLabel}
                tags={experiment.tags}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
