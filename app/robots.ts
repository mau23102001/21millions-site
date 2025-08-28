// app/robots.ts
import type { MetadataRoute } from 'next';

const site = 'https://www.21millionspe.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*'],
    },
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}

