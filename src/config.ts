export const SITE = {
  website: "https://umstek.github.io/", // Update with current domain
  author: "Wickramaranga",
  profile: "https://github.com/umstek",
  desc: "Personal blog of Wickramaranga (UMSTeK) – programming, tech and more.",
  title: "UMSTeK Blog",
  ogImage: "umstek-blog-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/umstek/blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Colombo", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
