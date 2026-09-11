import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { CTASection } from '@/components/sections/cta-section';
import { ProjectCard, CardGrid } from '@/components/sections/image-card';
import { projects } from '@/data/projects';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'مشاريعنا | تشطيبات وديكورات في جدة',
  description:
    'تصفح نماذج من مشاريع شركة المراحل السريعة المنجزة في جدة — تشطيبات سكنية وتجارية، تركيب سيراميك وبورسلان ورخام، دهانات وديكورات، وتنظيف واجهات زجاجية.',
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
            title="مشاريع نفخر بتنفيذها في جدة"
            description="نماذج من مشاريعنا المنجزة بأعلى معايير الجودة في مختلف أنواع التشطيبات والديكورات."
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
        description="تواصل معنا لتحويل رؤيتك إلى واقع بأعلى معايير الجودة في جدة."
        primaryLabel="ناقش مشروعك معنا"
      />
    </>
  );
}
