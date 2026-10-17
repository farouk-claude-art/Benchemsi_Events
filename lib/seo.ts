import type { Metadata } from "next";
import { site, siteUrl } from "@/content/site";

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} | ${site.name}`, description, url: path, type: "website", locale: "fr_MA", siteName: site.name },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Caterer", "LocalBusiness"],
    name: site.name,
    description: site.description,
    url: siteUrl,
    telephone: site.phones.map((p) => p.tel),
    ...(site.email && { email: site.email }),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: "MA",
      ...(site.address && { streetAddress: site.address }),
    },
    areaServed: { "@type": "City", name: site.city },
    sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
    ...(site.hours && { openingHours: site.hours.map((h) => `${h.days} ${h.hours}`) }),
  };
}
