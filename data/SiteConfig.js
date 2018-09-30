module.exports = {
  siteTitle: "UMSTeK Blog", // Site title.
  siteTitleShort: "UMSTeK", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "UMSTeK Website and Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.umstek.tk", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Random thoughts and projects", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1787109794946154", // FB Application ID for using app insights
  googleAnalyticsID: "UA-90437175-1", // GA tracking ID.
  disqusShortname: "umstek", // Disqus shortname.
  postDefaultCategoryID: "misc.", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "hexmint", // Username to display in the author segment.
  userTwitter: "hexmint", // Optionally renders "Follow Me" in the UserInfo segment.
  userGPlus: "107431763132154281166",
  userLocation: "Sri Lanka", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "I know how to google.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/umstek",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/hexmint",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:umstek@live.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017 -2018 Wickramaranga Abeygunawardhana", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
