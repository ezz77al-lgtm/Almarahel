import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { getCityById } from '@/data/cities';
import { getServiceById } from '@/data/services';
import { projects } from '@/data/projects';
import { articles } from '@/data/articles';
import { getCityServiceCombinations } from '@/data/city-services';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/cities`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${base}/cities/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const cityServiceRoutes: MetadataRoute.Sitemap = getCityServiceCombinations()
    .map(({ cityId, serviceId }) => {
      const city = getCityById(cityId);
      const service = getServiceById(serviceId);
      if (!city || !service) return null;
      return {
        url: `${base}/cities/${city.slug}/${service.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.65,
      };
    })
    .filter(Boolean) as MetadataRoute.Sitemap;

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...cityRoutes,
    ...cityServiceRoutes,
    ...projectRoutes,
    ...articleRoutes,
  ];
}
