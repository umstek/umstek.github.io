import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

export default function getRelatedPosts(
  currentPost: CollectionEntry<"blog">,
  allPosts: CollectionEntry<"blog">[],
  maxResults = 3
): CollectionEntry<"blog">[] {
  const currentTags = new Set(currentPost.data.tags);

  return allPosts
    .filter(
      post =>
        post.id !== currentPost.id &&
        postFilter(post) &&
        post.data.tags.some(tag => currentTags.has(tag))
    )
    .map(post => ({
      post,
      score: post.data.tags.filter(tag => currentTags.has(tag)).length,
    }))
    .toSorted((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(({ post }) => post);
}
