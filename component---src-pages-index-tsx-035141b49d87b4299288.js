(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{H8eV:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("qhky"),i=a("Wbzz"),l=function(e){var t,a,n,l=e.description,c=e.lang,s=e.meta,m=e.title,p=e.location,d=e.imageURL,u=Object(i.useStaticQuery)("2841359383").site,f=l||u.siteMetadata.description,g=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return r.a.createElement(o.a,{htmlAttributes:{lang:c},title:m,titleTemplate:g?"%s | "+g:void 0,meta:[{name:"description",content:f},{property:"og:title",content:m},{property:"og:description",content:f},{property:"og:type",content:"website"},{property:"og:url",content:null==p?void 0:p.href},{property:"og:image",content:""+(null==p?void 0:p.origin)+d},{property:"fb:app_id",content:""+(null==p?void 0:p.origin)+d},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=u.siteMetadata)||void 0===a||null===(n=a.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:m},{name:"twitter:description",content:f}].concat(s)})};l.defaultProps={lang:"en",meta:[],description:""},t.a=l},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("9Dj+"),i=a("H8eV"),l=a("Xb9x");t.default=function(e){var t,a=e.data,n=e.location,c=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=a.allMdx.nodes;return 0===s.length?r.a.createElement(o.a,{location:n,title:c},r.a.createElement(i.a,{title:"All posts"}),r.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):r.a.createElement(o.a,{location:n,title:c},r.a.createElement(i.a,{title:"All posts"}),r.a.createElement("ol",{style:{listStyle:"none"}},r.a.createElement(l.a,{posts:s})))}},Xb9x:function(e,t,a){"use strict";var n=a("N1om"),r=a.n(n),o=a("q1tI"),i=a.n(o),l=a("hbBt"),c=a("Vmdw");t.a=function(e){var t=e.posts;return i.a.createElement(i.a.Fragment,null,t.map((function(e){var t=e.frontmatter.title||e.fields.slug;return i.a.createElement("li",{key:e.fields.slug},i.a.createElement("article",{className:"px-4 sm:px-8 md:px-0 container mx-auto mt-16 mb-32",itemScope:!0,itemType:"http://schema.org/Article"},i.a.createElement("header",null,i.a.createElement("h1",{itemProp:"headline"},i.a.createElement("div",{className:"text-3xl text-center text-gray-700"},i.a.createElement("a",{className:"px-2 hover:bg-gray-700 hover:text-white",href:"/posts"+e.fields.slug},t))),i.a.createElement("div",{className:"mt-2 flex flex-row justify-center items-center"},i.a.createElement(l.a,{className:"mr-4 text-sm",date:e.frontmatter.date}),i.a.createElement("div",{className:"overflow-x-auto overflow-y-hidden flex flex-row"},(e.frontmatter.tags||[]).map((function(e){return i.a.createElement(c.a,{key:e,name:e,link:"/tags/"+r()(e)+"/"})}))))),i.a.createElement("section",{itemProp:"articleBody",className:"mx-auto mt-2 prose prose-blue lg:prose-lg"},i.a.createElement("p",{itemProp:"description"},e.frontmatter.description||e.excerpt))))})))}},hbBt:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.date,a=e.className;return r.a.createElement("p",{className:["text-center uppercase text-gray-600",a].filter((function(e){return!!e})).join(" ")},"📅 ",t)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-035141b49d87b4299288.js.map