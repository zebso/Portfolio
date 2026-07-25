import { cookies, headers } from "next/headers";
import {
  getLocaleFromAcceptLanguage,
  isLocale,
  localeCookieName,
  type Locale
} from "@/i18n/config";

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(localeCookieName)?.value;

  if (isLocale(value)) {
    return value;
  }

  const headerStore = await headers();

  return getLocaleFromAcceptLanguage(headerStore.get("accept-language"));
}
