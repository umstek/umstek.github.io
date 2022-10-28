import rss from '@astrojs/rss';

import { SITE_TITLE, SITE_DESCRIPTION, SITE } from '~config';

const postImportResult = import.meta.glob('./blog/**/*.{md,mdx}', { eager: true });
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: SITE,
    items: posts
      .filter((p: any) => import.meta.env.DEV || !p.frontmatter.draft)
      .map((post: any) => ({
        link: `${post.url}/`,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.publishedAt,
      })),
  });
