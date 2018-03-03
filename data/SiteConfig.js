module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "UMSTeK", // Site title.
  siteTitleAlt: "UMSTeK", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.umstek.tk", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "UMSTeK Labs", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1787109794946154", // FB Application ID for using app insights
  googleAnalyticsID: "UA-90437175-1", // GA tracking ID.
  disqusShortname: "umstek", // Disqus shortname.
  postDefaultCategoryID: "uncategorized", // Default category for posts.
  userName: "hexmint", // Username to display in the author segment.
  userTwitter: "hexmint", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Sri Lanka", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "Someone on the web", // User description to display in the author segment.
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
  copyright: "Copyright © 2018 Wickramaranga Abeygunawardhana", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#16A085", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff" // Used for setting manifest background color.
};
