(self.webpackChunkumstek=self.webpackChunkumstek||[]).push([[523],{3729:function(e,t,a){"use strict";var r=a(7294);t.Z=function(e){return r.createElement("a",Object.assign({},e,{className:["my-1 px-2 transition-colors",e.className].filter((function(e){return!!e})).join(" ")}))}},6628:function(e,t,a){"use strict";var r=a(7294);t.Z=function(e){var t=e.date,a=e.className;return r.createElement("p",{className:["text-center uppercase text-gray-600",a].filter((function(e){return!!e})).join(" ")},"📅 ",t)}},7005:function(e,t,a){"use strict";var r=a(1804),n=a.n(r),l=a(7294),o=a(6628),s=a(9470);t.Z=function(e){var t=e.posts;return l.createElement(l.Fragment,null,t.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"px-4 sm:px-8 md:px-0 container mx-auto mt-16 mb-32",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h1",{itemProp:"headline"},l.createElement("div",{className:"text-3xl text-center text-gray-700"},l.createElement("a",{className:"px-2 hover:bg-gray-700 hover:text-white",href:"/posts"+e.fields.slug},t))),l.createElement("div",{className:"mt-2 flex flex-row justify-center items-center"},l.createElement(o.Z,{className:"mr-4 text-sm",date:e.frontmatter.date}),l.createElement("div",{className:"overflow-x-auto overflow-y-hidden flex flex-row"},(e.frontmatter.tags||[]).map((function(e){return l.createElement(s.Z,{key:e,name:e,link:"/tags/"+n()(e)+"/"})}))))),l.createElement("section",{itemProp:"articleBody",className:"mx-auto mt-2 prose prose-blue lg:prose-lg"},l.createElement("p",{itemProp:"description"},e.frontmatter.description||e.excerpt))))})))}},8184:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var r=a(7294),n=a(3729),l=function(){return r.createElement("footer",{className:"border-t bg-gray-900"},r.createElement("div",{className:"mx-32 mt-8 flex flex-row justify-between"},r.createElement("div",{className:"flex flex-col"},r.createElement(n.Z,{href:"/tags/",className:"hover:bg-gray-100 text-gray-400 hover:text-gray-900"},"Tags"),r.createElement(n.Z,{href:"/disclaimer/",className:"hover:bg-gray-100 text-gray-400 hover:text-gray-900"},"Disclaimer"),r.createElement(n.Z,{href:"/about/",className:"hover:bg-gray-100 text-gray-400 hover:text-gray-900"},"About")),r.createElement("div",null)),r.createElement("div",{className:"flex flex-col lg:flex-row font-light text-sm text-gray-300 justify-between"},r.createElement("p",{className:"px-2 mx-32 mt-6 mb-2 lg:mb-8"},"Copyright © 2010 - 2021 Wickramaranga Abeygunawardhana."),r.createElement("p",{className:"px-2 mx-32 mt-2 lg:mt-6 mb-8"},"This blog is currently under development and will continue to be so indefinitely.")))},o=function(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))},s=function(){return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"}))},i=function(e){var t=(0,r.useState)(!1),a=t[0],n=t[1],l=(0,r.useState)(!1),i=l[0],c=l[1];return r.createElement("div",null,r.createElement("button",{onClick:function(){return n(!a)},className:"w-8 h-8 rounded-full p-2 text-black hover:bg-black hover:text-white",title:"Share post"},r.createElement(s,null)),r.createElement("button",{onClick:function(){return c(!i)},className:"w-8 h-8 rounded-full p-2 text-black hover:bg-black hover:text-white",title:"Settings"},r.createElement(o,null)),r.createElement("div",{className:["glass origin-top-right absolute right-0 mt-1 sm:rounded-bl-lg shadow","transform transition-all duration-100 w-full sm:w-auto flex flex-row justify-center",a?"translate-y-0":"-translate-y-12 opacity-0 invisible"].filter((function(e){return!!e})).join(" ")},r.createElement("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"share-menu"},r.createElement("div",{className:"block px-4 py-2 text-sm",role:"menuitem"},r.createElement("div",{className:"addthis_inline_share_toolbox_ajiu"})))),r.createElement("div",{className:["glass origin-top-right absolute right-0 mt-1 sm:rounded-bl-lg shadow","transform transition-all duration-100 w-full sm:w-auto flex flex-row justify-center",i?"translate-y-0":"-translate-y-12 opacity-0 invisible"].filter((function(e){return!!e})).join(" ")},r.createElement("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"settings-menu"},r.createElement("div",{className:"block px-4 py-2 text-sm",role:"menuitem"},r.createElement("button",{className:"p-2 hover:bg-blue-600 transition-colors cursor-pointer text-blue-600 hover:text-blue-100 rounded-md",onClick:e.toggleLigatures},"Toggle Ligatures"),r.createElement("button",{className:"p-2 hover:bg-blue-600 transition-colors cursor-pointer text-blue-600 hover:text-blue-100 rounded-md",onClick:e.toggleDarkMode},"Toggle Dark Mode")))))},c=function(e){var t,a=e.location,n=e.title,o=e.children,s="/"===a.pathname,c=(0,r.useState)(!0),m=c[0],u=c[1],g=(0,r.useState)(!1),d=g[0],f=g[1];return t=r.createElement("a",{href:"/"},n),r.createElement("div",{className:[!m&&"no-ligatures",d?"dark":"light","transition duration-100"].filter((function(e){return!!e})).join(" "),"data-is-root-path":s},r.createElement("header",{className:"glass shadow px-8 py-1 z-50 sticky top-0 flex flex-row items-center justify-between dark:bg-black"},r.createElement("div",null,t),r.createElement(i,{toggleLigatures:function(){return u(!m)},toggleDarkMode:function(){return f(!d)}})),r.createElement("main",{className:"mb-8 dark:bg-black"},o),r.createElement(l,null))}},6293:function(e,t,a){"use strict";a.r(t);var r=a(1804),n=a.n(r),l=a(7294),o=a(5444),s=a(8184),i=a(7005);t.default=function(e){var t=e.pageContext,a=e.data,r=t.tag,c=a.allMdx,m=c.nodes,u=c.totalCount,g=u+" post"+(1===u?"":"s")+' tagged with "'+r+'"';return l.createElement(s.Z,{location:"/tags/"+n()(r)+"/",title:g},l.createElement("ol",{style:{listStyle:"none"}},l.createElement(i.Z,{posts:m})),l.createElement("nav",{className:"my-8 mx-4"},l.createElement("ul",{className:"flex flex-row justify-between"},l.createElement("li",null,l.createElement(o.Link,{className:"px-2 hover:bg-gray-700 hover:text-white",to:"/tags"},"All tags")))))}}}]);
//# sourceMappingURL=component---src-templates-posts-by-tag-tsx-145339d7abe6e9c33e85.js.map