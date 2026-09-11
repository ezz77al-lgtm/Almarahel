import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { blogPosts } from '@/data/blog';

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getArticle(slug: string) {
  return blogPosts.find((a) => a.slug === slug);
}

export function getRelatedServices(slugs: string[]) {
  return slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
}

export function getRelatedProjects(slugs: string[]) {
  return slugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
}

export function getRelatedArticles(slugs: string[]) {
  return slugs
    .map((slug) => blogPosts.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
}

export function getProjectsForService(serviceSlug: string) {
  return projects.filter((p) => p.service === serviceSlug || p.relatedServices.includes(serviceSlug));
}

export function getArticlesForService(serviceSlug: string) {
  return blogPosts.filter((a) => a.relatedService === serviceSlug);
}

export function getAllServiceSlugs() {
  return services.map((s) => s.slug);
}

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}

export function getAllArticleSlugs() {
  return blogPosts.map((a) => a.slug);
}
