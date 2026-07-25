import { ButtonLink } from "@/components/ui/ButtonLink";
import type { PortfolioContent } from "@/data/content";

type HeroProps = {
  content: PortfolioContent["home"]["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero">
      <div className="container heroInner">
        <div
          className="heroContent"
          data-reveal
          data-reveal-delay="0"
          data-reveal-variant="hero"
        >
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p>{content.text}</p>
          <div className="heroActions">
            <ButtonLink href="/projects">
              {content.projectsAction}
            </ButtonLink>
            <ButtonLink href="/now" variant="secondary">
              {content.focusAction}
            </ButtonLink>
          </div>
        </div>
        <aside
          className="heroPanel"
          aria-label={content.panelLabel}
          data-reveal
          data-reveal-delay="1"
          data-reveal-variant="panel"
        >
          <p className="cardMeta">{content.panelMeta}</p>
          <h2>{content.panelTitle}</h2>
          <p>{content.panelText}</p>
        </aside>
      </div>
    </section>
  );
}
