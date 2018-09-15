const posts: { [x: string]: Promise<typeof import("*.md")> } = {
  test: import("./test.md")
};

export const postNames = () => Object.keys(posts);

export default async function loadPost(
  name: string
): Promise<typeof import("*.md")> {
  const post = await posts[name];
  return post;
}
