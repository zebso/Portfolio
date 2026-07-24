"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { contactLinks } from "@/data/contactLinks";
import type { PortfolioContent } from "@/data/content";
import type { Locale } from "@/i18n/config";

type HeaderProps = {
  locale: Locale;
  common: PortfolioContent["common"];
};

const primaryNavigationHrefs = ["/projects", "/writing", "/about"];
const moreNavigationHrefs = ["/experiments", "/now", "/contact"];

export function Header({ locale, common }: HeaderProps) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const [menuState, setMenuState] = useState({
    open: false,
    pathname
  });
  const [moreState, setMoreState] = useState({
    open: false,
    pathname
  });
  const menuOpen = menuState.open && menuState.pathname === pathname;
  const moreOpen = moreState.open && moreState.pathname === pathname;
  const isCurrentPath = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    if (!menuOpen && !moreOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuState({ open: false, pathname });
        setMoreState({ open: false, pathname });
        if (moreOpen) {
          moreButtonRef.current?.focus();
        }
      }
    };

    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setMenuState({ open: false, pathname });
        setMoreState({ open: false, pathname });
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [menuOpen, moreOpen, pathname]);

  const closeMenu = () => {
    setMenuState({ open: false, pathname });
    setMoreState({ open: false, pathname });
  };

  const primaryNavigation = common.navigation.filter((item) =>
    primaryNavigationHrefs.includes(item.href)
  );
  const moreNavigation = common.navigation.filter((item) =>
    moreNavigationHrefs.includes(item.href)
  );
  const moreIsActive = moreNavigation.some((item) =>
    isCurrentPath(item.href)
  );

  const contactNavigation = (className: string) => (
    <div
      aria-label={common.contactLinksLabel}
      className={className}
      role="group"
    >
      {contactLinks.map((link) => (
        <Link
          aria-label={link.label}
          className="headerContactLink"
          href={link.href}
          key={link.href}
          onClick={closeMenu}
          title={link.label}
        >
          <span
            aria-hidden="true"
            className="buttonIcon headerContactIcon"
            data-icon={link.icon}
          />
        </Link>
      ))}
    </div>
  );

  return (
    <header className="siteHeader" ref={headerRef}>
      <div className="container headerInner">
        <Link
          className="brandLink"
          href="/"
          aria-label={common.brandHomeLabel}
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
          aria-label={
            menuOpen ? common.closeMenuLabel : common.openMenuLabel
          }
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          className="menuButton"
          onClick={() => {
            setMenuState({ open: !menuOpen, pathname });
            setMoreState({ open: false, pathname });
          }}
          type="button"
        >
          {menuOpen ? (
            <X aria-hidden="true" size={24} />
          ) : (
            <Menu aria-hidden="true" size={24} />
          )}
        </button>
        <nav
          aria-label={common.primaryNavigationLabel}
          className="siteNav"
          data-open={menuOpen}
          id="primary-navigation"
        >
          <div className="desktopNavigation">
            {primaryNavigation.map((item) => (
              <Link
                aria-current={isCurrentPath(item.href) ? "page" : undefined}
                className="navLink"
                data-active={isCurrentPath(item.href)}
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="moreNavigation">
              <button
                aria-controls="more-navigation"
                aria-expanded={moreOpen}
                aria-haspopup="true"
                className="moreButton"
                data-active={moreIsActive}
                onClick={() =>
                  setMoreState({ open: !moreOpen, pathname })
                }
                ref={moreButtonRef}
                type="button"
              >
                <span>More</span>
                <ChevronDown aria-hidden="true" size={16} />
              </button>
              <div
                className="moreNavigationPanel"
                data-open={moreOpen}
                id="more-navigation"
              >
                {moreNavigation.map((item) => (
                  <Link
                    aria-current={
                      isCurrentPath(item.href) ? "page" : undefined
                    }
                    className="moreNavigationLink"
                    data-active={isCurrentPath(item.href)}
                    href={item.href}
                    key={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {contactNavigation("headerContactLinks")}
            <LanguageSwitcher
              labels={{
                group: common.languageLabel,
                english: common.englishLabel,
                japanese: common.japaneseLabel
              }}
              locale={locale}
              onChange={closeMenu}
            />
          </div>
          <div className="mobileNavigation">
            {common.navigation.map((item) => (
              <Link
                aria-current={isCurrentPath(item.href) ? "page" : undefined}
                className="navLink"
                data-active={isCurrentPath(item.href)}
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="mobileNavigationUtilities">
              {contactNavigation(
                "headerContactLinks mobileHeaderContactLinks"
              )}
              <LanguageSwitcher
                labels={{
                  group: common.languageLabel,
                  english: common.englishLabel,
                  japanese: common.japaneseLabel
                }}
                locale={locale}
                onChange={closeMenu}
              />
            </div>
          </div>
        </nav>
      </div>
      <button
        aria-hidden={!menuOpen}
        aria-label={common.closeMenuLabel}
        className="menuBackdrop"
        data-open={menuOpen}
        onClick={closeMenu}
        tabIndex={menuOpen ? 0 : -1}
        type="button"
      />
    </header>
  );
}
