import { generateMetadata, generateBreadcrumbSchema, generateItemListSchema } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { SectionHeader } from '@/components/section-header';
import { ProjectCard } from '@/components/projects/project-card';
import { projects } from '@/data/projects';
import { ProjectsShowMore } from '@/components/projects/projects-show-more';

import { JsonLd } from '@/components/seo/json-ld';
export const metadata = generateMetadata({
  title: 'المشاريع',
  description: 'تعرّف على خدمات شركة المراحل السريعة في التنظيف والتشطيبات، واكتشف تفاصيل الخدمات التي نقدمها في الرياض وجدة والمدينة المنورة والقصيم.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'الرئيسية', url: '/' }, { name: 'المشاريع', url: '/projects' }])} />
      <JsonLd data={generateItemListSchema({ name: 'أعمال وخدمات شركة المراحل السريعة', path: '/projects', items: projects.map((p) => ({ name: p.title, url: `/projects/${p.slug}` })) })} />
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/' },
            { label: 'المشاريع' },
          ]}
        />

        <div className="mt-6">
          <SectionHeader
            title="أعمالنا وخدماتنا"
            description="تعرّف على تفاصيل خدمات التنظيف والتشطيبات حسب نوع الخدمة والمدينة، ونطاق الأعمال الذي يمكن طلبه من شركة المراحل السريعة."
          />
        </div>

        <ProjectsShowMore projects={projects} />
      </div>
    </div>
    </>
  );
}
