import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

const paths = ["", "/services", "/buffets", "/lunch-box", "/decoration", "/galerie", "/devis", "/a-propos", "/contact", "/mentions-legales"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${siteUrl}${p}`, changeFrequency: p === "/lunch-box" ? "weekly" : "monthly", priority: p === "" ? 1 : 0.7 }));
}
