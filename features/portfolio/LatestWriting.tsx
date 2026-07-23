import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import { writingPosts } from "@/data/writing";

export function LatestWriting() {
  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader">
          <div>
            <p className="sectionKicker">Latest Writing</p>
            <h2 className="sectionTitle">Notes from the work.</h2>
          </div>
          <ButtonLink href="/writing" variant="ghost">
            Read writing
          </ButtonLink>
        </header>
        <div className="grid">
          {writingPosts.slice(0, 3).map((post) => (
            <Card
              className="span-6"
              description={post.excerpt}
              href={post.href}
              key={post.title}
              meta={`${post.category} / ${post.publishedAt}`}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
