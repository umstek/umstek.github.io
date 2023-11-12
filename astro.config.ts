import { defineConfig } from 'astro/config';
import fs from 'fs';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import remarkShikiTwoslash from 'remark-shiki-twoslash';
import remarkUnwrapImages from 'remark-unwrap-images';
import { remarkReadingTime } from './src/utils/remark-reading-time';

// https://astro.build/config
export default defineConfig({
  // ! Please remember to replace the following site property with your own domain
  site: 'https://umstek.github.io',
  markdown: {
    remarkPlugins: [
      [remarkShikiTwoslash, { themes: ['github-dark', 'github-light'] }],
      remarkUnwrapImages,
      remarkReadingTime,
    ],
    remarkRehype: { footnoteLabelProperties: { className: [''] } },
  },
  integrations: [
    mdx({}),
    react({
      include: ['**/react/*'],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    prefetch(),
  ],
  image: {
    domains: ['webmention.io'],
  },
  vite: {
    plugins: [rawFonts(['.ttf', '.woff', '.woff2'])],
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
});

function rawFonts(ext: Array<string>) {
  return {
    name: 'vite-plugin-raw-fonts',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    transform(_, id) {
      if (ext.some((e) => id.endsWith(e))) {
        console.log(_, id);
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        };
      }
    },
  };
}