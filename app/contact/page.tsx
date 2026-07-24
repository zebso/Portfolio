import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { contactLinks } from "@/data/contactLinks";
import { getContent } from "@/data/content";
import { createPageMetadata } from "@/i18n/metadata";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata(
    locale,
    "/contact",
    getContent(locale).metadata.contact
  );
}

export default async function ContactPage() {
  const locale = await getLocale();
  const content = getContent(locale);
  const page = content.pages.contact;

  return (
    <section className="section">
      <div className="container">
        <header className="sectionHeader" data-reveal>
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="sectionTitle">{page.title}</h1>
            <p className="sectionText">{page.text}</p>
          </div>
        </header>
        <div
          className="contactLinks"
          aria-label={content.common.contactLinksLabel}
        >
          {contactLinks.map((link) => (
            <ButtonLink
              ariaLabel={link.iconOnly ? link.label : undefined}
              href={link.href}
              key={link.href}
              variant={link.variant}
            >
              <span
                aria-hidden="true"
                className="buttonIcon"
                data-icon={link.icon}
              />
              {!link.iconOnly ? <span>{link.label}</span> : null}
            </ButtonLink>
          ))}
        </div>
      </div>
    </section>
  );
}
