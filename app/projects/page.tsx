import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { CTASection } from '@/components/sections/cta-section';
import { ProjectCard, CardGrid } from '@/components/sections/image-card';
import { projects } from '@/data/projects';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'مشاريعنا | خدمات وتنفيذ في جدة والمدينة المنورة',
  description:
    'تصفح نماذج من مشاريع شركة المراحل السريعة في جدة والمدينة المنورة، وتشمل تنظيف الواجهات الزجاجية، تركيب السيراميك والبورسلان والرخام والموزايكو، والدهانات الداخلية.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'مشاريعنا', path: '/projects' }]} />

      <section className="section-pad">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="مشاريعنا"
            title="مشاريع نفخر بتنفيذها في جدة والمدينة المنورة"
            description="نماذج من مشاريعنا وخدماتنا المنجزة وفق معايير الجودة والاهتمام بالتفاصيل."
          />

          <CardGrid className="mt-14 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </CardGrid>
        </div>
      </section>

      <CTASection
        title="هل لديك مشروع مماثل؟"
        description="تواصل معنا لمناقشة احتياجك والحصول على عرض مناسب لخدمتك في جدة أو المدينة المنورة."
        primaryLabel="ناقش مشروعك معنا"
      />
    </>
  );
}