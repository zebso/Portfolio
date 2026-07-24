import type { Metadata } from "next";
import { CurrentFocus } from "@/features/portfolio/CurrentFocus";
import { FeaturedProjects } from "@/features/portfolio/FeaturedProjects";
import { Hero } from "@/features/portfolio/Hero";
import { LatestWriting } from "@/features/portfolio/LatestWriting";
import { getContent } from "@/data/content";
import { createPageMetadata } from "@/i18n/metadata";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata(locale, "/", getContent(locale).metadata.home);
}

export default async function HomePage() {
  const locale = await getLocale();
  const content = getContent(locale);

  return (
    <>
      <Hero content={content.home.hero} />
      <FeaturedProjects
        common={content.common}
        content={content.home.featured}
        projects={content.projects}
      />
      <CurrentFocus content={content.home.current} />
      <LatestWriting content={content.home.latest} />
    </>
  );
}
