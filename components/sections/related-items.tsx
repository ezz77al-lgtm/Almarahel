import { CardGrid, ImageCard } from '@/components/sections/image-card';
import type { Service, Project, BlogPost } from '@/types';

export function RelatedServices({ services }: { services: Service[] }) {
  if (!services.length) return null;
  return (
    <CardGrid className="md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ImageCard
          key={service.slug}
          href={`/services/${service.slug}`}
          image={service.image}
          imageAlt={service.imageAlt}
          badge="خدمة"
          badgeClassName="bg-primary/90 text-primary-foreground backdrop-blur-sm"
          title={service.name}
          description={service.shortDescription}
          cardHeight="h-[380px] sm:h-[400px]"
          overlayClassName="from-primary-dark/90 via-primary-dark/35 to-transparent"
          ariaLabel={`عرض تفاصيل ${service.name}`} 
        />
      ))}
    </CardGrid>
  );
}

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;
  return (
    <CardGrid className="md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ImageCard
          key={project.slug}
          href={`/projects/${project.slug}`}
          image={project.image}
          imageAlt={project.imageAlt}
          badge={project.category}
          badgeClassName="bg-accent/90 text-accent-foreground backdrop-blur-sm"
          title={project.title}
          description={project.shortDescription}
          meta={`${project.location} · ${project.year}`}
          cardHeight="h-[380px] sm:h-[400px]"
          overlayClassName="from-primary-dark/90 via-primary-dark/35 to-transparent"
          ariaLabel={`عرض مشروع ${project.title}`}
        />
      ))}
    </CardGrid>
  );
}

export function RelatedArticles({ articles }: { articles: BlogPost[] }) {
  if (!articles.length) return null;
  return (
    <CardGrid className="md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ImageCard
          key={article.slug}
          href={`/blog/${article.slug}`}
          image={article.image}
          imageAlt={article.imageAlt}
          badge={article.category}
          badgeClassName="bg-primary/90 text-primary-foreground backdrop-blur-sm"
          title={article.title}
          description={article.excerpt}
          meta={`${article.readTime} · ${article.date}`}
          cardHeight="h-[380px] sm:h-[400px]"
          overlayClassName="from-primary-dark/90 via-primary-dark/35 to-transparent"
          ariaLabel={`قراءة مقال ${article.title}`}
        />
      ))}
    </CardGrid>
  );
}
