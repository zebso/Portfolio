"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  localeCookieMaxAge,
  localeCookieName,
  type Locale
} from "@/i18n/config";

type LanguageLabels = {
  group: string;
  english: string;
  japanese: string;
};

type LanguageSwitcherProps = {
  locale: Locale;
  labels: LanguageLabels;
  onChange?: () => void;
};

function writeLocaleCookie(locale: Locale) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${localeCookieName}=${locale}; Max-Age=${localeCookieMaxAge}; Path=/; SameSite=Lax${secure}`;
}

export function LanguageSwitcher({
  locale,
  labels,
  onChange
}: LanguageSwitcherProps) {
  const router = useRouter();
  const switchingRef = useRef(false);

  useEffect(() => {
    switchingRef.current = false;
  }, [locale]);

  const selectLocale = (nextLocale: Locale) => {
    if (nextLocale === locale || switchingRef.current) {
      return;
    }

    switchingRef.current = true;
    writeLocaleCookie(nextLocale);
    onChange?.();
    router.refresh();
  };

  return (
    <div
      aria-label={labels.group}
      className="languageSwitcher"
      role="group"
    >
      <button
        aria-label={labels.english}
        aria-pressed={locale === "en"}
        className="languageOption"
        onClick={() => selectLocale("en")}
        type="button"
      >
        EN
      </button>
      <button
        aria-label={labels.japanese}
        aria-pressed={locale === "ja"}
        className="languageOption"
        onClick={() => selectLocale("ja")}
        type="button"
      >
        JA
      </button>
    </div>
  );
}
