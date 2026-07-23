import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({
  children,
  href,
  variant = "primary"
}: ButtonLinkProps) {
  return (
    <Link className="buttonLink" data-variant={variant} href={href}>
      {children}
    </Link>
  );
}
