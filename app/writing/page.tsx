import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { getContent } from "@/data/content";
import { createPageMetadata } from "@/i18n/metadata";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata(
    locale,
    "/writing",
    getContent(locale).metadata.writing
  );
}

export default async function WritingPage() {
  const locale = await getLocale();
  const content = getContent(locale);
  const page = content.pages.writing;

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
        {content.writingPosts.length > 0 ? (
          <div className="grid">
            {content.writingPosts.map((post) => (
              <Card
                className="span-4"
                description={post.excerpt}
                href={post.href}
                key={post.title}
                meta={`${post.category} / ${post.publishedAt}`}
                title={post.title}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            actionHref="/projects"
            actionLabel={page.emptyAction}
            title={page.emptyTitle}
            text={page.emptyText}
          />
        )}
      </div>
    </section>
  );
}
