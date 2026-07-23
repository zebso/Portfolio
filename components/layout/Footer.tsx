import Link from "next/link";

const links = [
  { href: "https://github.com/zebso", label: "GitHub" },
  { href: "https://x.com/zebso", label: "X" },
  { href: "mailto:hello@zebso.dev", label: "Email" }
];

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerInner">
        <p>Zebso</p>
        <nav aria-label="Footer links">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
