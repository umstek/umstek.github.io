module.exports = {
  siteMetadata: {
    title: `UMSTeK Blog`,
    author: {
      name: `Wickramaranga Abeygunawardhana`,
      summary: `I think a lot and tend to build useless things.`,
    },
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://umstek.tk/`,
    social: {
      twitter: `hexmint`,
    },
    shortname: `umstek`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-remark-reading-time`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed-mdx`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UMSTeK Blog`,
        short_name: `UMSTeK`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2563EB`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-90437175-1"],
      },
    },
    {
      resolve: `gatsby-plugin-addthis`,
      options: {
        pubid: "ra-606c8d277ef00c2f",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
