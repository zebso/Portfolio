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
    "/about",
    getContent(locale).metadata.about
  );
}

export default async function AboutPage() {
  const locale = await getLocale();
  const content = getContent(locale);
  const page = content.pages.about;

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
          <Card
            className="span-6"
            title={page.philosophyTitle}
            description={page.philosophyText}
          />
          <Card
            className="span-6"
            title={page.timelineTitle}
            description={page.timelineText}
          />
          <Card
            className="span-6"
            title={page.skillsTitle}
            description={page.skillsText}
          >
            <TagList
              ariaLabel={content.common.tagsLabel}
              tags={page.skills}
            />
          </Card>
          <Card
            className="span-6"
            title={page.toolsTitle}
            description={page.toolsText}
          >
            <TagList
              ariaLabel={content.common.tagsLabel}
              tags={page.tools}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
