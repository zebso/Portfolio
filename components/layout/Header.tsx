"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [menuState, setMenuState] = useState({
    open: false,
    pathname
  });
  const menuOpen = menuState.open && menuState.pathname === pathname;

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuState({ open: false, pathname });
      }
    };

    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setMenuState({ open: false, pathname });
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [menuOpen, pathname]);

  const closeMenu = () => {
    setMenuState({ open: false, pathname });
  };

  return (
    <header className="siteHeader" ref={headerRef}>
      <div className="container headerInner">
        <Link
          className="brandLink"
          href="/"
          aria-label="Zebso home"
          onClick={closeMenu}
        >
          <Image
            alt="Zebso"
            className="brandIcon"
            height={32}
            src="/icons/user.png"
            width={32}
          />
          <span>Zebso</span>
        </Link>
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          className="menuButton"
          onClick={() =>
            setMenuState({ open: !menuOpen, pathname })
          }
          type="button"
        >
          {menuOpen ? (
            <X aria-hidden="true" size={24} />
          ) : (
            <Menu aria-hidden="true" size={24} />
          )}
        </button>
        <nav
          aria-label="Primary navigation"
          className="siteNav"
          data-open={menuOpen}
          id="primary-navigation"
        >
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
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <button
        aria-hidden={!menuOpen}
        aria-label="Close menu"
        className="menuBackdrop"
        data-open={menuOpen}
        onClick={closeMenu}
        tabIndex={menuOpen ? 0 : -1}
        type="button"
      />
    </header>
  );
}
