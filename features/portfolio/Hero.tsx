import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  return (
    <section className="hero">
      <div className="container heroInner">
        <div
          className="heroContent"
          data-reveal
          data-reveal-delay="0"
        >
          <p className="eyebrow">Zebso</p>
          <h1>Building calm products with clear thinking.</h1>
          <p>
            Zebso is a product-minded developer exploring useful interfaces, AI
            workflows, and small systems that can grow without becoming messy.
          </p>
          <div className="heroActions">
            <ButtonLink href="/projects">View projects</ButtonLink>
            <ButtonLink href="/now" variant="secondary">
              Current focus
            </ButtonLink>
          </div>
        </div>
        <aside
          className="heroPanel"
          aria-label="Current product focus"
          data-reveal
          data-reveal-delay="1"
        >
          <p className="cardMeta">Current focus</p>
          <h2>Hugg!</h2>
          <p>
            A focused product study around warm, lightweight digital
            interactions.
          </p>
        </aside>
      </div>
    </section>
  );
}
