'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpLeft, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { FaWhatsapp } from 'react-icons/fa';

/* ------------------------------------------------------------------ */
/*  Entrance animation variants — cinematic image reveal + stagger    */
/* ------------------------------------------------------------------ */

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 1.08 },
  visible: { scale: 1, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
};

/* ------------------------------------------------------------------ */
/*  Reusable ImageCard — full-bleed background image card              */
/* ------------------------------------------------------------------ */

export interface ImageCardProps {
  href: string;
  image: string;
  imageAlt: string;
  badge?: string;
  badgeClassName?: string;
  title: string;
  description?: string;
  meta?: string;
  children?: React.ReactNode;
  cardHeight?: string;
  overlayClassName?: string;
  ariaLabel?: string;
}

export function ImageCard({
  href,
  image,
  imageAlt,
  badge,
  badgeClassName,
  title,
  description,
  meta,
  children,
  cardHeight = 'h-[420px] sm:h-[460px] lg:h-[480px]',
  overlayClassName = 'from-primary-dark/78 via-primary-dark/20 to-transparent',
  ariaLabel,
}: ImageCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="h-full"
    >
      <Link
        href={href}
        aria-label={ariaLabel ?? title}
        className={cn(
          'group relative block h-full w-full overflow-hidden rounded-3xl border border-border shadow-soft transition-all duration-500 hover:border-accent/40 hover:shadow-card-hover',
          cardHeight,
        )}
      >
        {/* Background image */}
        <motion.div variants={imageVariants} className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </motion.div>

        {/* Gradient overlay — strengthens on hover */}
        <div
          className={cn(
          'absolute inset-0 bg-gradient-to-t transition-opacity duration-500 group-hover:from-primary-dark/88',
          overlayClassName,
        )}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          {badge && (
            <span
              className={cn(
                'mb-4 inline-flex w-fit rounded-lg px-3 py-1 text-xs font-bold backdrop-blur-sm',
                badgeClassName ?? 'bg-accent/90 text-accent-foreground',
              )}
            >
              {badge}
            </span>
          )}
          {meta && (
            <p className="mb-2 font-mono text-sm font-medium text-white/60">{meta}</p>
          )}
          <h3 className="font-display text-xl font-bold text-white transition-transform duration-500 group-hover:-translate-y-1.5 sm:text-2xl">
            {title}
          </h3>
          {description && (
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75 transition-opacity duration-500 group-hover:text-white/90">
              {description}
            </p>
          )}
          {children}
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent">
            عرض التفاصيل
            <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Staggered grid container                                           */
/* ------------------------------------------------------------------ */

export interface CardGridProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}

export function CardGrid({ children, className, stagger = 0.12 }: CardGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
      className={cn('grid gap-6 sm:gap-7', className)}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  ServiceCard — full-bleed image + WhatsApp CTA                     */
/* ------------------------------------------------------------------ */

import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/site';
import type { Service } from '@/types';

export function ServiceCard({ service }: { service: Service }) {
  const waMessage = encodeURIComponent(
    `السلام عليكم، أرغب في طلب خدمة ${service.name} في جدة.`,
  );
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${waMessage}`;

  return (
    <motion.div variants={cardVariants} className="h-full">
      <div
        className={cn(
          'group relative block h-full w-full overflow-hidden rounded-3xl border border-border shadow-soft transition-all duration-500 hover:border-accent/40 hover:shadow-card-hover',
          'h-[440px] sm:h-[480px] lg:h-[500px]',
        )}
      >
        {/* Background image */}
        <motion.div variants={imageVariants} className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/35 to-transparent transition-opacity duration-500 group-hover:from-primary-dark/95" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <span className="mb-4 inline-flex w-fit rounded-lg bg-accent/90 px-3 py-1 text-xs font-bold text-accent-foreground backdrop-blur-sm">
            خدمة
          </span>
          <h3 className="font-display text-xl font-bold text-white transition-transform duration-500 group-hover:-translate-y-1.5 sm:text-2xl">
            {service.name}
          </h3>
          <p className="mt-2 line-clamp-2 max-w-md text-sm leading-relaxed text-white/75 transition-opacity duration-500 group-hover:text-white/90">
            {service.shortDescription}
          </p>

          {/* Actions */}
          <div className="mt-5 flex items-center gap-3">
            <Link
              href={`/services/${service.slug}`}
              aria-label={`عرض تفاصيل ${service.name}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              عرض التفاصيل
              <ArrowUpLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`اطلب خدمة ${service.name} عبر واتساب`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-2.5 text-sm font-bold text-white transition-all hover:brightness-110 active:scale-95"
            >
              <FaWhatsapp className="h-5 w-5 sm:h-5 sm:w-5" />
              اطلب الخدمة الآن
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  ProjectCard                                                        */
/* ------------------------------------------------------------------ */

import type { Project } from '@/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <ImageCard
      href={`/projects/${project.slug}`}
      image={project.image}
      imageAlt={project.imageAlt}
      badge={project.category}
      badgeClassName="bg-accent/90 text-accent-foreground backdrop-blur-sm"
      title={project.title}
      description={project.shortDescription}
      meta={`${project.location} · ${project.year}`}
      cardHeight="h-[420px] sm:h-[460px] lg:h-[480px]"
      overlayClassName="from-primary-dark/90 via-primary-dark/35 to-transparent"
      ariaLabel={`عرض مشروع ${project.title}`}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  BlogCard                                                           */
/* ------------------------------------------------------------------ */

import type { BlogPost } from '@/types';

export function BlogCard({ article }: { article: BlogPost }) {
  return (
    <ImageCard
      href={`/blog/${article.slug}`}
      image={article.image}
      imageAlt={article.imageAlt}
      badge={article.category}
      badgeClassName="bg-accent/90 text-accent-foreground backdrop-blur-sm"
      title={article.title}
      description={article.excerpt}
      meta={`${article.readTime} · ${article.date}`}
      cardHeight="h-[400px] sm:h-[440px] lg:h-[460px]"
     overlayClassName="from-primary-dark/90 via-primary-dark/35 to-transparent"
      ariaLabel={`قراءة مقال ${article.title}`}
    />
  );
}
