import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { site, siteUrl } from "@/content/site";
import { localBusinessJsonLd } from "@/lib/seo";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ActionBar } from "@/components/ActionBar";
import { MotionProvider } from "@/components/Motion";
import { JsonLd } from "@/components/JsonLd";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} — Traiteur à ${site.city}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { type: "website", locale: "fr_MA", siteName: site.name },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#1e3fa0", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">
          Aller au contenu
        </a>
        <MotionProvider>
          <Header />
          <main id="contenu">{children}</main>
          <Footer />
          <ActionBar />
        </MotionProvider>
        <JsonLd data={localBusinessJsonLd()} />
        {plausible && <Script defer data-domain={plausible} src="https://plausible.io/js/script.js" strategy="afterInteractive" />}
      </body>
    </html>
  );
}
