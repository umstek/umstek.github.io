import type { CollectionEntry } from "astro:content";

export default function getSeriesPosts(
  currentPost: CollectionEntry<"blog">,
  allPosts: CollectionEntry<"blog">[]
): CollectionEntry<"blog">[] {
  const seriesName = currentPost.data.series?.name;
  if (!seriesName) return [];

  return allPosts
    .filter(
      post =>
        post.data.series?.name === seriesName && post.id !== currentPost.id
    )
    .toSorted(
      (a, b) => (a.data.series?.part ?? 0) - (b.data.series?.part ?? 0)
    );
}
