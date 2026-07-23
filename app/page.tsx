import type { Metadata } from "next";
import { CurrentFocus } from "@/features/portfolio/CurrentFocus";
import { FeaturedProjects } from "@/features/portfolio/FeaturedProjects";
import { Hero } from "@/features/portfolio/Hero";
import { LatestWriting } from "@/features/portfolio/LatestWriting";

export const metadata: Metadata = {
  title: "Zebso",
  description:
    "A product-minded portfolio about building useful interfaces, experiments, and tools.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <CurrentFocus />
      <LatestWriting />
    </>
  );
}
