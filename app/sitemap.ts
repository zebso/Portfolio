import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://zebso.vercel.app";

const staticRoutes = [
  "",
  "/projects",
  "/experiments",
  "/writing",
  "/now",
  "/about",
  "/contact",
  "/privacy"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedDates = projects
    .map((project) => project.updatedAt)
    .filter(Boolean)
    .sort();
  const latestProjectUpdate = updatedDates.at(-1);

  const staticPages = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: latestProjectUpdate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.7
  })) satisfies MetadataRoute.Sitemap;

  const projectPages = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: project.updatedAt,
    changeFrequency: "monthly",
    priority: 0.8
  })) satisfies MetadataRoute.Sitemap;

  return [...staticPages, ...projectPages];
}
