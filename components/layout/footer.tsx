import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-primary/20 bg-primary text-primary-foreground">
      <div className="container-mw container-px relative py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent overflow-hidden">
                  <Image
                    src="/icon.jpeg"
                    alt={`شعار ${siteConfig.name}`}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-xl object-cover"
                  />
                </div>
              <div>
                <span className="font-display text-lg font-bold">{siteConfig.nameShort}</span>
                <span className="block text-xs text-muted-foreground">{siteConfig.nameEn}</span>
              </div>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              شركة متخصصة في مقاولات التشطيبات والديكورات في جدة. نقدم خدمات احترافية بجودة عالية والزام بالمواعيد.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Twitter, href: siteConfig.social.twitter, label: 'تويتر' },
                { icon: Instagram, href: siteConfig.social.instagram, label: 'انستغرام' },
                { icon: Linkedin, href: siteConfig.social.linkedin, label: 'لينكدإن' },
                { icon: Facebook, href: '#', label: 'فيسبوك' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-primary-foreground/70 transition-all hover:border-accent/40 hover:text-accent"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-display text-base font-bold">خدماتنا</h3>
            <ul className="space-y-3">
              {services.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary dark:hover:text-accent"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-5 font-display text-base font-bold">روابط سريعة</h3>
            <ul className="space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-display text-base font-bold">تواصل معنا</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 font-mono text-sm text-primary-foreground/60 transition-colors hover:text-accent">
                  <Phone className="h-4 w-4 flex-shrink-0 text-accent" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-primary-foreground/60 transition-colors hover:text-accent">
                  <Mail className="h-4 w-4 flex-shrink-0 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <MapPin className="h-4 w-4 flex-shrink-0 text-accent" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Clock className="h-4 w-4 flex-shrink-0 text-accent" />
                {siteConfig.workingHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm text-primary-foreground/50">
            {siteConfig.city}، {siteConfig.country}
          </p>
          <p className="text-sm text-primary-foreground/50">
             مهندس الموقع : عزالدين منصور
          </p>
        </div>
      </div>
    </footer>
  );
}
