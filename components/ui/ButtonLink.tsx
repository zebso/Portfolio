import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  ariaLabel?: string;
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  ariaLabel,
  children,
  href,
  variant = "primary"
}: ButtonLinkProps) {
  return (
    <Link
      aria-label={ariaLabel}
      className="buttonLink"
      data-variant={variant}
      href={href}
    >
      {children}
    </Link>
  );
}
