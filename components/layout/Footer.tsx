import Image from "next/image";
import Link from "next/link";
import { contactLinks } from "@/data/contactLinks";
import type { PortfolioContent } from "@/data/content";

type FooterProps = {
  common: PortfolioContent["common"];
};

export function Footer({ common }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <div className="footerBrand">
          <Image
            alt="Zebso"
            className="brandIcon"
            height={32}
            src="/icons/user.png"
            width={32}
          />
          <div>
            <p>Zebso</p>
            <p className="footerCopyright">
              &copy; 2026-{currentYear} Zebso All Rights Reserved.
            </p>
          </div>
        </div>
        <nav aria-label={common.footerLinksLabel}>
          {contactLinks.map((link) => (
            <Link
              aria-label={link.iconOnly ? link.label : undefined}
              className="footerContactLink"
              href={link.href}
              key={link.href}
            >
              <span
                aria-hidden="true"
                className="buttonIcon footerContactIcon"
                data-icon={link.icon}
              />
              {!link.iconOnly ? <span>{link.label}</span> : null}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
