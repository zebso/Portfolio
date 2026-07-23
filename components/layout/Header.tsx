"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link className="brandLink" href="/" aria-label="Zebso home">
          <Image
            alt="Zebso"
            className="brandIcon"
            height={32}
            src="/icons/user.png"
            width={32}
          />
          <span>Zebso</span>
        </Link>
        <nav className="siteNav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className="navLink"
                data-active={isActive}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
