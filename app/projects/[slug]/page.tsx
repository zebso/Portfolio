import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/features/portfolio/ProjectDetail";
import { getContent, getLocalizedProject } from "@/data/content";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/i18n/metadata";
import { getLocale } from "@/i18n/server";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const project = getLocalizedProject(locale, slug);

  if (!project) {
    return {
      title: "Project not found"
    };
  }

  return createPageMetadata(locale, `/projects/${project.slug}`, {
    title: project.title,
    description: project.description
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const locale = await getLocale();
  const content = getContent(locale);
  const project = getLocalizedProject(locale, slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetail
      common={content.common}
      content={content.projectDetail}
      project={project}
    />
  );
}
