(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"9Dj+":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("yMWw"),i=function(){return n.a.createElement("footer",{className:"border-t bg-gray-900"},n.a.createElement("div",{className:"mx-32 mt-8 flex flex-row justify-between"},n.a.createElement("div",{className:"flex flex-col"},n.a.createElement(o.a,{href:"/tags/",className:"hover:bg-gray-100 text-gray-400 hover:text-gray-900"},"Tags"),n.a.createElement(o.a,{href:"/disclaimer/",className:"hover:bg-gray-100 text-gray-400 hover:text-gray-900"},"Disclaimer"),n.a.createElement(o.a,{href:"/about/",className:"hover:bg-gray-100 text-gray-400 hover:text-gray-900"},"About")),n.a.createElement("div",null)),n.a.createElement("div",{className:"flex flex-col lg:flex-row font-light text-sm text-gray-300 justify-between"},n.a.createElement("p",{className:"px-2 mx-32 mt-6 mb-2 lg:mb-8"},"Copyright © 2010 - 2021 Wickramaranga Abeygunawardhana."),n.a.createElement("p",{className:"px-2 mx-32 mt-2 lg:mt-6 mb-8"},"This blog is currently under development and will continue to be so indefinitely.")))},s=function(){return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))},c=function(){return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"}))},m=function(e){var t=Object(r.useState)(!1),a=t[0],l=t[1],o=Object(r.useState)(!1),i=o[0],m=o[1];return n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return l(!a)},className:"w-8 h-8 rounded-full p-2 text-black hover:bg-black hover:text-white",title:"Share post"},n.a.createElement(c,null)),n.a.createElement("button",{onClick:function(){return m(!i)},className:"w-8 h-8 rounded-full p-2 text-black hover:bg-black hover:text-white",title:"Settings"},n.a.createElement(s,null)),n.a.createElement("div",{className:["origin-top-right absolute right-0 mt-3 sm:rounded-bl-lg shadow-md bg-white","transform transition-all duration-100 w-full sm:w-auto flex flex-row justify-center",a?"translate-y-0":"-translate-y-12 opacity-0 invisible"].filter((function(e){return!!e})).join(" ")},n.a.createElement("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"share-menu"},n.a.createElement("div",{className:"block px-4 py-2 text-sm",role:"menuitem"},n.a.createElement("div",{className:"addthis_inline_share_toolbox_ajiu"})))),n.a.createElement("div",{className:["origin-top-right absolute right-0 mt-3 sm:rounded-bl-lg shadow-md bg-white","transform transition-all duration-100 w-full sm:w-auto flex flex-row justify-center",i?"translate-y-0":"-translate-y-12 opacity-0 invisible"].filter((function(e){return!!e})).join(" ")},n.a.createElement("div",{className:"py-1",role:"menu","aria-orientation":"vertical","aria-labelledby":"settings-menu"},n.a.createElement("div",{className:"block px-4 py-2 text-sm",role:"menuitem"},n.a.createElement("button",{className:"p-2 hover:bg-blue-600 transition-colors cursor-pointer text-blue-600 hover:text-blue-100 rounded-md",onClick:e.toggleLigatures},"Toggle Ligatures"),n.a.createElement("button",{className:"p-2 hover:bg-blue-600 transition-colors cursor-pointer text-blue-600 hover:text-blue-100 rounded-md",onClick:e.toggleDarkMode},"Toggle Dark Mode")))))};t.a=function(e){var t,a=e.location,o=e.title,s=e.children,c="/"===a.pathname,u=Object(r.useState)(!0),d=u[0],g=u[1],f=Object(r.useState)(!1),x=f[0],b=f[1];return t=n.a.createElement(l.Link,{to:"/"},o),n.a.createElement("div",{className:[!d&&"no-ligatures",x?"dark":"light","transition duration-100"].filter((function(e){return!!e})).join(" "),"data-is-root-path":c},n.a.createElement("header",{className:"glass shadow-md px-8 py-3 z-50 sticky top-0 flex flex-row justify-between dark:bg-black"},t,n.a.createElement(m,{toggleLigatures:function(){return g(!d)},toggleDarkMode:function(){return b(!x)}})),n.a.createElement("main",{className:"mb-8 dark:bg-black"},s),n.a.createElement("div",{className:"addthis_inline_share_toolbox_ajiu"}),n.a.createElement(i,null))}},VtOc:function(e,t,a){"use strict";a.r(t);var r=a("N1om"),n=a.n(r),l=a("q1tI"),o=a.n(l),i=a("Wbzz"),s=a("9Dj+"),c=a("Xb9x");t.default=function(e){var t=e.pageContext,a=e.data,r=t.tag,l=a.allMdx,m=l.nodes,u=l.totalCount,d=u+" post"+(1===u?"":"s")+' tagged with "'+r+'"';return o.a.createElement(s.a,{location:"/tags/"+n()(r)+"/",title:d},o.a.createElement("ol",{style:{listStyle:"none"}},o.a.createElement(c.a,{posts:m})),o.a.createElement("nav",{className:"my-8 mx-4"},o.a.createElement("ul",{className:"flex flex-row justify-between"},o.a.createElement("li",null,o.a.createElement(i.Link,{className:"px-2 hover:bg-gray-700 hover:text-white",to:"/tags"},"All tags")))))}},Xb9x:function(e,t,a){"use strict";var r=a("N1om"),n=a.n(r),l=a("q1tI"),o=a.n(l),i=a("hbBt"),s=a("Vmdw");t.a=function(e){var t=e.posts;return o.a.createElement(o.a.Fragment,null,t.map((function(e){var t=e.frontmatter.title||e.fields.slug;return o.a.createElement("li",{key:e.fields.slug},o.a.createElement("article",{className:"px-4 sm:px-8 md:px-0 container mx-auto mt-16 mb-32",itemScope:!0,itemType:"http://schema.org/Article"},o.a.createElement("header",null,o.a.createElement("h1",{itemProp:"headline"},o.a.createElement("div",{className:"text-3xl text-center text-gray-700"},o.a.createElement("a",{className:"px-2 hover:bg-gray-700 hover:text-white",href:"/posts"+e.fields.slug},t))),o.a.createElement("div",{className:"mt-2 flex flex-row justify-center items-center"},o.a.createElement(i.a,{className:"mr-4 text-sm",date:e.frontmatter.date}),o.a.createElement("div",{className:"overflow-x-auto overflow-y-hidden flex flex-row"},(e.frontmatter.tags||[]).map((function(e){return o.a.createElement(s.a,{key:e,name:e,link:"/tags/"+n()(e)+"/"})}))))),o.a.createElement("section",{itemProp:"articleBody",className:"mx-auto mt-2 prose prose-blue lg:prose-lg"},o.a.createElement("p",{itemProp:"description"},e.frontmatter.description||e.excerpt))))})))}},hbBt:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);t.a=function(e){var t=e.date,a=e.className;return n.a.createElement("p",{className:["text-center uppercase text-gray-600",a].filter((function(e){return!!e})).join(" ")},"📅 ",t)}},yLpj:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(r){"object"==typeof window&&(a=window)}e.exports=a},yMWw:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);t.a=function(e){return n.a.createElement("a",Object.assign({},e,{className:["my-1 px-2 transition-colors",e.className].filter((function(e){return!!e})).join(" ")}))}}}]);
//# sourceMappingURL=component---src-templates-posts-by-tag-tsx-dbbd489fc219e0337dcb.js.map