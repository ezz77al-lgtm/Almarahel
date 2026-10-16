export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'الرئيسية', href: '/' },
  { label: 'الخدمات', href: '/services' },
  { label: 'المدن', href: '/cities' },
  { label: 'المشاريع', href: '/projects' },
  { label: 'المقالات', href: '/blog' },
  { label: 'من نحن', href: '/about' },
  { label: 'الأسئلة الشائعة', href: '/faq' },
  { label: 'تواصل معنا', href: '/contact' },
];

export const footerLinks = {
  pages: [
    { label: 'الرئيسية', href: '/' },
    { label: 'من نحن', href: '/about' },
    { label: 'الخدمات', href: '/services' },
    { label: 'المدن', href: '/cities' },
    { label: 'المشاريع', href: '/projects' },
    { label: 'المقالات', href: '/blog' },
    { label: 'الأسئلة الشائعة', href: '/faq' },
    { label: 'تواصل معنا', href: '/contact' },
  ] as NavLink[],
};
