// /app/sitemap.ts
import type { MetadataRoute } from 'next';

const site = 'https://www.21millionspe.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: site,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Cuando tengas más páginas reales (no anclas #),
    // agrégalas aquí como objetos adicionales.
  ];
}
