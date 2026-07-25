import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getContent } from "@/data/content";
import { getLocale } from "@/i18n/server";


export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const content = getContent(locale);
  const metadata = content.metadata.site;

  return {
    metadataBase: new URL("https://zebso.vercel.app"),
    title: {
      default: metadata.title,
      template: `%s | ${metadata.title}`
    },
    description: metadata.description,
    icons: {
      icon: {
        url: "/icons/user.png",
        type: "image/png"
      },
      apple: "/icons/user.png"
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: "https://zebso.vercel.app",
      siteName: "Zebso",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Zebso portfolio"
        }
      ],
      locale: locale === "ja" ? "ja_JP" : "en_US",
      type: "website"
    },
    verification: {
      google: "9odtnXKn_kEBJZvzRh5wiFoRGhZbmKf2aTZcMFW4m2s",
    }
  };
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const content = getContent(locale);

  return (
    <html
      lang={locale}
      data-app-loading="true"
      data-reveal-ready="true"
    >
      <body>
        <SpeedInsights />
        <Analytics />
        <LoadingScreen label={content.common.loadingLabel} />
        <ScrollReveal />
        <noscript>
          <style>{`
            html[data-app-loading="true"] {
              overflow: auto;
            }

            .loadingScreen {
              display: none;
            }

            [data-reveal] {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
        <div className="page-shell">
          <Header common={content.common} locale={locale} />
          <main className="site-main">{children}</main>
          <Footer common={content.common} />
        </div>
      </body>
    </html>
  );
}
