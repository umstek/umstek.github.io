# UMSTeK Blog 📖

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Content License](https://img.shields.io/badge/Content-CC--BY--SA--4.0-green?style=for-the-badge)](LICENSE)
[![Code License](https://img.shields.io/badge/Code-MIT-blue?style=for-the-badge)](LICENSE-CODE)

Personal blog of **Wickramaranga (UMSTeK)** - a software engineer from Sri Lanka. This is my online space where I write down my thoughts about programming, technology, and more. It's mainly for me, but if anyone else finds it useful, that's great!

🌐 **Live Site**: [umstek.github.io](https://umstek.github.io/)

## 👨‍💻 About Me

I'm Wickramaranga, a software engineer from Sri Lanka who mainly works with the MERN stack. This blog is where I share my thoughts, experiences, and learnings in software development.

**Find me on:**

- 🐙 [GitHub](https://github.com/umstek)
- 🐘 [Mastodon](https://mastodon.social/@hexmint)
- 💼 [LinkedIn](https://www.linkedin.com/in/wickramaranga/)
- 📧 [Email](mailto:umstek@live.com)

## 🔥 Features

- ⚡ **Super fast performance** - Static site generation with Astro
- 📱 **Responsive design** - Mobile to desktop optimization
- 🎨 **Light & dark mode** - Theme toggle with system preference detection
- 🔍 **Fuzzy search** - Find posts quickly with Pagefind
- 📝 **Markdown & MDX support** - Rich content with components
- 🏷️ **Tag system** - Organize and filter posts by topics
- 📖 **Series navigation** - Multi-part posts linked together
- 🔗 **Related posts** - Suggestions based on shared tags
- ⏱️ **Reading time** - Estimated reading time per post
- 💬 **Comments** - Giscus integration with GitHub Discussions
- 🖼️ **Dynamic OG images** - Auto-generated social media cards
- 📊 **SEO optimized** - Sitemap, RSS feed, meta tags
- ♿ **Accessible** - Keyboard navigation and screen reader support
- 🎯 **Type-safe** - Full TypeScript integration

## 🚀 Tech Stack

**Framework**: [Astro](https://astro.build/) v6  
**Styling**: [TailwindCSS](https://tailwindcss.com/) v4  
**Language**: [TypeScript](https://www.typescriptlang.org/) v6  
**Search**: [Pagefind](https://pagefind.app/) v1.4.0  
**Syntax Highlighting**: [Shiki](https://shiki.style/) with transformers  
**Comments**: [Giscus](https://giscus.app/) (GitHub Discussions)  
**Deployment**: [GitHub Pages](https://pages.github.com/)  
**Package Manager**: [Bun](https://bun.sh/)

## 💻 Local Development

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/umstek/blog.git
cd blog

# Install dependencies
bun install

# Start development server
bun run dev
```

The site will be available at `http://localhost:4321`.

## 🧞 Available Commands

| Command                | Action                                                                                                                      |
| :--------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| `bun install`          | Install dependencies                                                                                                        |
| `bun run dev`          | Start local dev server at `localhost:4321`                                                                                  |
| `bun run build`        | Build production site to `./dist/`                                                                                          |
| `bun run preview`      | Preview build locally before deploying                                                                                      |
| `bun run format:check` | Check code format with oxfmt                                                                                                |
| `bun run format`       | Format code with oxfmt                                                                                                      |
| `bun run sync`         | Generate TypeScript types for Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `bun run lint`         | Lint with oxlint                                                                                                            |

## 📁 Project Structure

```
/
├── public/                 # Static assets
│   ├── favicon.svg
│   ├── toggle-theme.js
│   └── toggle-font.js
├── src/
│   ├── assets/            # Icons and images
│   ├── components/         # Reusable components
│   ├── data/blog/         # Blog posts (Markdown/MDX)
│   ├── layouts/           # Page layouts
│   ├── pages/             # Routes
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   ├── config.ts          # Site configuration
│   └── constants.ts       # Global constants
├── astro.config.ts        # Astro configuration
└── tsconfig.json          # TypeScript configuration
```

## 📝 Writing Posts

Blog posts are written in Markdown/MDX format and stored in `src/data/blog/`. Each post includes frontmatter for metadata:

```yaml
---
title: Your Post Title
description: Brief description for SEO
pubDatetime: 2025-01-06T10:00:00Z
modDatetime: 2025-01-07T10:00:00Z
author: Wickramaranga
tags:
  - programming
  - web development
featured: false
draft: false
series:
  name: "My Series Name"
  part: 1
---
Your post content here...
```

## 🎨 Customization

The blog can be customized through:

- `src/config.ts` - Site metadata and configuration
- `src/constants.ts` - Global constants and settings
- `src/styles/` - Custom styles and theme modifications
- `astro.config.ts` - Build and integration settings

## 📜 Licensing

This project uses dual licensing:

- **Blog Content** ([`src/data/blog/`](src/data/blog/)): Licensed under [CC-BY-SA-4.0](LICENSE) - Feel free to share and adapt, just give credit and share alike!
- **Source Code**: Licensed under [MIT License](LICENSE-CODE) - Use, modify, and distribute freely

### Attribution

This blog is built using the [AstroPaper](https://github.com/satnaing/astro-paper) theme by [Sat Naing](https://satnaing.dev), modified and customized for my personal use. The original AstroPaper theme is also licensed under the MIT License.

---

**Built with ❤️ by [Wickramaranga](https://github.com/umstek)**  
_Based on [AstroPaper](https://github.com/satnaing/astro-paper) theme by [Sat Naing](https://satnaing.dev)_
