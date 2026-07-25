import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";

type MetadataCopy = {
  title: string;
  description: string;
};

const siteName = "Zebso";
const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Zebso portfolio"
} as const;

export function createPageMetadata(
  locale: Locale,
  path: string,
  copy: MetadataCopy
): Metadata {
  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: path,
      siteName,
      images: [ogImage],
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website"
    }
  };
}
