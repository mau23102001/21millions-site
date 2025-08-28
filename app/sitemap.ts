// app/sitemap.ts
import type { MetadataRoute } from "next";

const site = "https://www.21millionspe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site, lastModified: now, changeFrequency: "monthly", priority: 1 },
  ];
}
