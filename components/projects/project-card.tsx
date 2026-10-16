import Link from 'next/link';
import { MapPin, ArrowLeft } from 'lucide-react';
import type { Project } from '@/data/projects';
import { getServiceById } from '@/data/services';

export function ProjectCard({ project }: { project: Project }) {
  const service = getServiceById(project.serviceId);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-800 w-1200 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute inset-0 navy-gradient" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <h3 className="mb-1 line-clamp-1 text-sm font-bold">
          {project.title}
        </h3>

        <p className="mb-2 line-clamp-2 text-xs text-white/80">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-xs text-white/70">
            <MapPin className="h-3 w-3" />
            {project.cityName}
          </span>

          <span className="inline-flex items-center gap-1 text-xs font-medium text-accent">
            التفاصيل
            <ArrowLeft className="h-3 w-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}