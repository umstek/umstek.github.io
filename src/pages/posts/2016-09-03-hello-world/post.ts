export default {
  title: "Hello, world",
  tags: ["hello world", "snippet", "programming"],
  spoiler: "Say hello world in different languages",
  getContent: () => import("./document.mdx")
};
