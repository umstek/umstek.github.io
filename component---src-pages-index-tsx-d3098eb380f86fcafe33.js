(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{H8eV:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("qhky"),o=a("Wbzz"),i=function(e){var t,a,n,i=e.description,c=e.lang,s=e.meta,m=e.title,p=Object(o.useStaticQuery)("2841359383").site,u=i||p.siteMetadata.description,d=null===(t=p.siteMetadata)||void 0===t?void 0:t.title;return r.a.createElement(l.a,{htmlAttributes:{lang:c},title:m,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:u},{property:"og:title",content:m},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=p.siteMetadata)||void 0===a||null===(n=a.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:m},{name:"twitter:description",content:u}].concat(s)})};i.defaultProps={lang:"en",meta:[],description:""},t.a=i},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("9Dj+"),o=a("H8eV"),i=a("Xb9x");t.default=function(e){var t,a=e.data,n=e.location,c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=a.allMdx.nodes;return 0===s.length?r.a.createElement(l.a,{location:n,title:c},r.a.createElement(o.a,{title:"All posts"}),r.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):r.a.createElement(l.a,{location:n,title:c},r.a.createElement(o.a,{title:"All posts"}),r.a.createElement("ol",{style:{listStyle:"none"}},r.a.createElement(i.a,{posts:s})))}},Xb9x:function(e,t,a){"use strict";var n=a("N1om"),r=a.n(n),l=a("q1tI"),o=a.n(l),i=a("hbBt"),c=a("Vmdw");t.a=function(e){var t=e.posts;return o.a.createElement(o.a.Fragment,null,t.map((function(e){var t=e.frontmatter.title||e.fields.slug;return o.a.createElement("li",{key:e.fields.slug},o.a.createElement("article",{className:"px-4 sm:px-8 md:px-0 container mx-auto mt-16 mb-32",itemScope:!0,itemType:"http://schema.org/Article"},o.a.createElement("header",null,o.a.createElement("h1",{itemProp:"headline"},o.a.createElement("div",{className:"text-3xl text-center text-gray-700"},o.a.createElement("a",{className:"px-2 hover:bg-gray-700 hover:text-white",href:"/posts"+e.fields.slug},t))),o.a.createElement("div",{className:"mt-2 flex flex-row justify-center items-center"},o.a.createElement(i.a,{className:"mr-4 text-sm",date:e.frontmatter.date}),o.a.createElement("div",{className:"overflow-x-auto overflow-y-hidden flex flex-row"},(e.frontmatter.tags||[]).map((function(e){return o.a.createElement(c.a,{key:e,name:e,link:"/tags/"+r()(e)+"/"})}))))),o.a.createElement("section",{itemProp:"articleBody",className:"mx-auto mt-2 prose prose-blue lg:prose-lg"},o.a.createElement("p",{itemProp:"description"},e.frontmatter.description||e.excerpt))))})))}},hbBt:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.date,a=e.className;return r.a.createElement("p",{className:["text-center uppercase text-gray-600",a].filter((function(e){return!!e})).join(" ")},t)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d3098eb380f86fcafe33.js.map