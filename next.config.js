const images = require("remark-images");
const emoji = require("remark-emoji");
const highlight = require("remark-highlight.js");

const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [images, emoji, highlight]
  }
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"]
});
