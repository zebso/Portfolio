import { ButtonLink } from "@/components/ui/ButtonLink";
import { Card } from "@/components/ui/Card";
import type { PortfolioContent } from "@/data/content";

type LatestWritingProps = {
  content: PortfolioContent["home"]["latest"];
};

export function LatestWriting({ content }: LatestWritingProps) {
  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader" data-reveal>
          <div>
            <p className="sectionKicker">{content.kicker}</p>
            <h2 className="sectionTitle">{content.title}</h2>
          </div>
          <ButtonLink href="/writing" variant="ghost">
            {content.action}
          </ButtonLink>
        </header>
        <div className="grid">
          {content.posts.slice(0, 3).map((post, index) => (
            <Card
              className="span-6"
              description={post.excerpt}
              href={post.href}
              key={post.title}
              meta={post.meta}
              revealDelay={index}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
