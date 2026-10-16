import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SectionHeader } from '@/components/section-header';
import { ProjectCard } from '@/components/projects/project-card';
import { projects } from '@/data/projects';

export function HomeProjects() {
  const featured = projects.slice(0, 6);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="أعمالنا وخدماتنا"
          description="تعرّف على خدماتنا في التنظيف والتشطيبات في الرياض وجدة والمدينة المنورة والقصيم، واكتشف تفاصيل الخدمات ونطاق الأعمال المتاحة."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-white hover:bg-primary-dark transition-all hover:scale-105"
          >
            عرض المزيد من الأعمال والخدمات
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}