import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ways to reach Zebso.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="sectionTitle">Start with a clear note.</h1>
            <p className="sectionText">
              For product conversations, collaboration, or feedback, these are
              the simplest places to reach Zebso.
            </p>
          </div>
        </header>
        <div className="contactLinks" aria-label="Contact links">
          <ButtonLink href="https://github.com/zebso" variant="secondary">
            GitHub
          </ButtonLink>
          <ButtonLink href="https://x.com/zebso" variant="secondary">
            X
          </ButtonLink>
          <ButtonLink href="mailto:hello@zebso.dev" variant="primary">
            Email
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
