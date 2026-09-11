import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { CTASection } from '@/components/sections/cta-section';
import { BlogCard, CardGrid } from '@/components/sections/image-card';
import { blogPosts } from '@/data/blog';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'المدونة | نصائح ومقالات عن التشطيبات والديكور في جدة',
  description:
    'مقالات إرشادية ونصائح مفيدة عن التشطيبات والديكورات وتركيب السيراميك والبورسلان والرخام والدهانات وتنظيف الواجهات الزجاجية في جدة.',
  path: '/blog',
});

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Breadcrumbs items={[{ name: 'المدونة', path: '/blog' }]} />

      <section className="section-pad">
        <div className="container-mw container-px">
          <SectionHeading
            eyebrow="المدونة"
            title="مقالات ونصائح عن التشطيبات والديكور"
            description="مقالات إرشادية لمساعدتك في فهم خدمات التشطيب والديكور واتخاذ القرار المناسب لمشروعك."
          />

          <CardGrid className="mt-14 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </CardGrid>
        </div>
      </section>

      <CTASection
        title="هل تحتاج مساعدة في مشروعك؟"
        description="فريقنا جاهز لتقديم الاستشارة المناسبة لمشروعك في جدة."
        primaryLabel="تحدث مع فريقنا"
      />
    </>
  );
}
