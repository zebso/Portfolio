import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";

const contactLinks = [
  {
    href: "https://github.com/zebso",
    icon: "github",
    label: "GitHub",
    variant: "secondary"
  },
  {
    href: "https://x.com/zebso",
    icon: "x",
    label: "",
    variant: "secondary"
  },
  {
    href: "mailto:hello@zebso.dev",
    icon: "email",
    label: "Email",
    variant: "primary"
  }
] as const;

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
          {contactLinks.map((link) => (
            <ButtonLink href={link.href} key={link.href} variant={link.variant}>
              <span
                aria-hidden="true"
                className="buttonIcon"
                data-icon={link.icon}
              />
              {link.label ? <span>{link.label}</span> : ''}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
