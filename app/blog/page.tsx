import { Breadcrumbs } from '@/components/sections/breadcrumbs';
import { SectionHeading } from '@/components/sections/section-heading';
import { CTASection } from '@/components/sections/cta-section';
import { BlogCard, CardGrid } from '@/components/sections/image-card';
import { blogPosts } from '@/data/blog';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'المدونة | نصائح ومقالات عن التنظيف والسيراميك والرخام في جدة والمدينة المنورة',
  description:
    'مقالات إرشادية ونصائح مفيدة عن تنظيف الزجاج والواجهات، تنظيف الواجهات التجارية، تركيب السيراميك والبورسلان والرخام والموزايكو، والدهانات الداخلية في جدة والمدينة المنورة، مع نصائح حول عقود التنظيف الشهرية.',
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
            title="مقالات ونصائح عن التنظيف والتركيب والدهانات"
            description="مقالات إرشادية تساعدك على فهم خدمات تنظيف الزجاج والواجهات، وتركيب السيراميك والبورسلان والرخام والموزايكو، والدهانات الداخلية، واختيار الحل المناسب لمشروعك في جدة والمدينة المنورة."
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
        description="فريقنا جاهز لتقديم الاستشارة المناسبة لخدمتك في جدة أو المدينة المنورة."
        primaryLabel="تحدث مع فريقنا"
      />
    </>
  );
}