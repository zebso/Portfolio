import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { getContent } from "@/data/content";
import { createPageMetadata } from "@/i18n/metadata";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata(
    locale,
    "/now",
    getContent(locale).metadata.now
  );
}

export default async function NowPage() {
  const locale = await getLocale();
  const content = getContent(locale);
  const page = content.pages.now;

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
          {content.nowItems.map((item) => (
            <Card
              className="span-3"
              description={item.text}
              key={item.label}
              meta={item.label}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
