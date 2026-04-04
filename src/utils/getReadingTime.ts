const WORDS_PER_MINUTE = 200;

export default function getReadingTime(content: string): number {
  const withoutFrontmatter = content.replace(/^---[\s\S]*?---/, "");
  const words = withoutFrontmatter.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
