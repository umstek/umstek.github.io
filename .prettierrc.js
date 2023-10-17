/** @type {import("@types/prettier").Options} */
module.exports = {
  printWidth: 100,
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss" /* Must come last */],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
