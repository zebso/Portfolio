export const locales = ["en", "ja"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "zebso_locale";
export const localeCookieMaxAge = 60 * 60 * 24 * 365;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

function getBaseLanguage(language: string) {
  return language.trim().toLowerCase().split("-")[0];
}

function getLanguagePriority(part: string) {
  const quality = part
    .split(";")
    .slice(1)
    .map((segment) => segment.trim())
    .find((segment) => segment.startsWith("q="));

  if (!quality) {
    return 1;
  }

  const value = Number(quality.slice(2));

  return Number.isFinite(value) ? value : 0;
}

export function getLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined
): Locale {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  const preferredLanguages = acceptLanguage
    .split(",")
    .map((part) => ({
      language: part.split(";")[0]?.trim() ?? "",
      priority: getLanguagePriority(part)
    }))
    .filter(({ language }) => language.length > 0)
    .sort((a, b) => b.priority - a.priority);

  const preferredLocale = preferredLanguages.find(({ language }) => {
    const baseLanguage = getBaseLanguage(language);

    return isLocale(baseLanguage);
  });

  if (!preferredLocale) {
    return defaultLocale;
  }

  const baseLanguage = getBaseLanguage(preferredLocale.language);

  return isLocale(baseLanguage) ? baseLanguage : defaultLocale;
}
