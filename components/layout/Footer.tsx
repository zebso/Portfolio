import Image from "next/image";
import Link from "next/link";
import { contactLinks } from "@/data/contactLinks";

export function Footer() {
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
          <p>Zebso</p>
        </div>
        <nav aria-label="Footer links">
          {contactLinks.map((link) => (
            <Link className="footerContactLink" href={link.href} key={link.href}>
              <span
                aria-hidden="true"
                className="buttonIcon footerContactIcon"
                data-icon={link.icon}
              />
              {link.label ? <span>{link.label}</span> : null}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
