module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            pre: {
              color: null,
              backgroundColor: null,
            },
            h1: {
              fontWeight: "300",
              color: theme("colors.blue.600"),
            },
            h2: {
              fontWeight: "350",
              color: theme("colors.blue.600"),
            },
            h3: {
              fontWeight: "400",
              color: theme("colors.blue.600"),
            },
            h4: {
              fontWeight: "600",
              color: theme("colors.blue.600"),
            },
            h5: {
              color: theme("colors.blue.600"),
            },
            h6: {
              fontStyle: "italic",
              color: theme("colors.blue.600"),
            },
            a: {
              fontWeight: "450",
              textDecoration: "none",
            },
            "a:hover": {
              backgroundColor: theme("colors.blue.600"),
              color: theme("colors.white"),
            },
            blockquote: {
              borderLeftColor: theme("colors.blue.600"),
            },
            "ol > li::before": {
              color: theme("colors.blue.600"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.blue.600"),
            },
          },
        },
      }),
      fontFamily: {
        sans: [
          "'Work Sans'",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "ui-serif",
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
