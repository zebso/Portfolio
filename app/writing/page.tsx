import type { Metadata } from "next";
import { writingPosts } from "@/data/writing";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on development, design, AI, engineering, product, and learning.",
  alternates: {
    canonical: "/writing"
  }
};

export default function WritingPage() {
  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader" data-reveal>
          <div>
            <p className="eyebrow">Writing</p>
            <h1 className="sectionTitle">Useful notes, not noise.</h1>
            <p className="sectionText">
              Short writing about product decisions, engineering lessons, and
              the process of learning in public.
            </p>
          </div>
        </header>
        {writingPosts.length > 0 ? (
          <div className="grid">
            {writingPosts.map((post) => (
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
            actionLabel="Explore projects"
            title="Writing is being prepared."
            text="The writing page will collect useful notes once the first drafts are ready."
          />
        )}
      </div>
    </section>
  );
}
