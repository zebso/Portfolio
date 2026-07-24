import { Card } from "@/components/ui/Card";
import type { PortfolioContent } from "@/data/content";

type CurrentFocusProps = {
  content: PortfolioContent["home"]["current"];
};

export function CurrentFocus({ content }: CurrentFocusProps) {
  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader" data-reveal>
          <div>
            <p className="sectionKicker">{content.kicker}</p>
            <h2 className="sectionTitle">{content.title}</h2>
          </div>
        </header>
        <div className="grid">
          {content.items.map((item, index) => (
            <Card
              className="span-4"
              description={item.text}
              key={`${item.meta}-${item.title}`}
              meta={item.meta}
              revealDelay={index}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
