import { HeroSlider } from '@/components/home/hero-slider';
import { HomeServices } from '@/components/home/home-services';
import { HomeCities } from '@/components/home/home-cities';
import { HomeWhyChooseUs } from '@/components/home/home-why-choose-us';
import { HomeGlassFeature } from '@/components/home/home-glass-feature';
import { HomeFlooring } from '@/components/home/home-flooring';
import { HomeHowToRequest } from '@/components/home/home-how-to-request';
import { HomeProjects } from '@/components/home/home-projects';
import { HomeArticles } from '@/components/home/home-articles';
import { HomeFAQ } from '@/components/home/home-faq';
import { HomeFinalCTA } from '@/components/home/home-final-cta';

import { JsonLd } from '@/components/seo/json-ld';
import { generateWebPageSchema, generateMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';
export const metadata = generateMetadata({
  title: 'خدمات التنظيف وتركيب الأرضيات وتنظيف الواجهات الزجاجية',
  description: 'شركة المراحل السريعة تقدم خدمات تنظيف الواجهات الزجاجية والمنازل والمباني والمكاتب، وتنظيف ما بعد البناء وتركيب الأرضيات والدهانات الداخلية في جدة والرياض والمدينة المنورة والقصيم.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <JsonLd data={generateWebPageSchema({ name: siteConfig.name, description: siteConfig.description, path: '/' })} />
      <HeroSlider />
      <HomeServices />
      <HomeCities />
      <HomeWhyChooseUs />
      <HomeGlassFeature />
      <HomeFlooring />
      <HomeHowToRequest />
      <HomeProjects />
      <HomeArticles />
      <HomeFAQ />
      <HomeFinalCTA />
    </>
  );
}
