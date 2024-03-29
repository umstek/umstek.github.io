import type { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: 'Wickramaranga',
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: 'UMSTeK Blog',
  // Meta property used as the default description meta property
  description: '',
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: 'en-GB',
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: 'en_GB',
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: 'en-GB',
    options: {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
  },
  // Include view-transitions: https://docs.astro.build/en/guides/view-transitions/
  includeViewTransitions: false,
  webmentions: {
    link: 'https://webmention.io/umstek.github.io/webmention',
  },
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
  {
    title: 'Blog',
    path: '/blog/',
  },
  {
    title: 'About',
    path: '/about/',
  },
];
