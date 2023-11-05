import rss from '@astrojs/rss';
import { getAllPosts } from '../utils';
import { siteConfig } from '../site.config';

export const GET = async () => {
  const posts = await getAllPosts();

  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `blog/${post.slug}`,
    })),
  });
};
