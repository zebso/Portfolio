export const locales = ["en", "ja"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const localeCookieName = "zebso_locale";
export const localeCookieMaxAge = 60 * 60 * 24 * 365;

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
