import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://zebso.dev"),
  title: {
    default: "Zebso",
    template: "%s | Zebso"
  },
  description:
    "A calm portfolio about how Zebso thinks, designs, and builds products.",
  openGraph: {
    title: "Zebso",
    description:
      "A calm portfolio about how Zebso thinks, designs, and builds products.",
    url: "https://zebso.dev",
    siteName: "Zebso",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Zebso portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-app-loading="true"
      data-reveal-ready="true"
    >
      <body>
        <LoadingScreen />
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
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
