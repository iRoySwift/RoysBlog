"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[76],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>d});var r=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},u=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=s(t),d=o,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||i;return t?r.createElement(m,n(n({ref:a},u),{},{components:t})):r.createElement(m,n({ref:a},u))}));function d(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=t.length,n=new Array(i);n[0]=h;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var s=2;s<i;s++)n[s]=t[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1403:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={title:"\u6587\u6863\u641c\u7d22",slug:"algolia-docsearch-migration",authors:"roy",tags:["search"],image:"./img/social-card.png"},n=void 0,l={permalink:"/blog/algolia-docsearch-migration",editUrl:"https://github.com/iRoySwift/RoysBlog/tree/master/blog/2021-11-21 \u6587\u6863\u641c\u7d22/index.md",source:"@site/blog/2021-11-21 \u6587\u6863\u641c\u7d22/index.md",title:"\u6587\u6863\u641c\u7d22",description:"DocSearch \u6b63\u5728\u8fc1\u79fb\u5230\u4e00\u4e2a\u65b0\u7684\u3001\u66f4\u5f3a\u5927\u7684\u7cfb\u7edf\uff0c\u8fd9\u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u81ea\u5df1\u7684 Algolia \u5e94\u7528\u7a0b\u5e8f\u548c\u65b0\u51ed\u636e\u3002",date:"2021-11-21T00:00:00.000Z",formattedDate:"2021\u5e7411\u670821\u65e5",tags:[{label:"search",permalink:"/blog/tags/search"}],readingTime:1.8533333333333333,hasTruncateMarker:!0,authors:[{name:"Roy Swift",title:"A @ReactJs Developer",url:"https://github.com/iRoySwift",imageURL:"https://github.com/iRoySwift.png",key:"roy"}],frontMatter:{title:"\u6587\u6863\u641c\u7d22",slug:"algolia-docsearch-migration",authors:"roy",tags:["search"],image:"./img/social-card.png"},prevItem:{title:"\u5c06Docusaurus\u90e8\u7f72\u81f3 GitHub Pages\u200b",permalink:"/blog/deploying-to-github-pages"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},c={image:t(5897).Z,authorsImageUrls:[void 0]},s=[{value:"Upgrading your Docusaurus site",id:"upgrading-your-docusaurus-site",level:2},{value:"DocSearch has a new home!",id:"docsearch-has-a-new-home",level:2},{value:"What is DocSearch?",id:"what-is-docsearch",level:3},{value:"What is this migration about?",id:"what-is-this-migration-about",level:2},{value:"Motivation",id:"motivation",level:3},{value:"What&#39;s new?",id:"whats-new",level:3},{value:"FAQ",id:"faq",level:2},{value:"I&#39;m using Docusaurus and DocSearch, can I migrate?",id:"im-using-docusaurus-and-docsearch-can-i-migrate",level:3},{value:"Where can I read more about this?",id:"where-can-i-read-more-about-this",level:3},{value:"I received the migration email but the invite expired",id:"i-received-the-migration-email-but-the-invite-expired",level:3},{value:"I have feedback!",id:"i-have-feedback",level:3},{value:"Can I still run my own DocSearch instance?",id:"can-i-still-run-my-own-docsearch-instance",level:3}],u={toc:s};function p(e){let{components:a,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/"},"DocSearch")," \u6b63\u5728\u8fc1\u79fb\u5230\u4e00\u4e2a\u65b0\u7684\u3001\u66f4\u5f3a\u5927\u7684\u7cfb\u7edf\uff0c\u8fd9\u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u81ea\u5df1\u7684 Algolia \u5e94\u7528\u7a0b\u5e8f\u548c\u65b0\u51ed\u636e\u3002"),(0,o.kt)("p",null,"Docusaurus site owners should upgrade their configuration with ",(0,o.kt)("a",{parentName:"p",href:"#im-using-docusaurus-and-docsearch-can-i-migrate"},"their new credentials")," ",(0,o.kt)("strong",{parentName:"p"},"by February 1, 2022"),", existing search indexes will be frozen and become read-only after this date."),(0,o.kt)("h2",{id:"upgrading-your-docusaurus-site"},"Upgrading your Docusaurus site"),(0,o.kt)("p",null,"In the next few weeks, Docusaurus site owners will receive an email inviting them to join their personal Algolia application."),(0,o.kt)("p",null,"This email will include a new ",(0,o.kt)("inlineCode",{parentName:"p"},"appId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"apiKey")," to use in your Docusaurus configuration."),(0,o.kt)("p",null,"The only things you have to do:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Join the Algolia application (eventually creating a new Algolia account)"),(0,o.kt)("li",{parentName:"ul"},"Update your site configuration.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const config = {\n  themeConfig: {\n    algolia: {\n      // highlight-start\n      appId: '<NEW_APP_ID>',\n      apiKey: '<NEW_SEARCH_API_KEY>'\n      // highlight-end\n    }\n  }\n};\n\nmodule.exports = config;\n")),(0,o.kt)("admonition",{title:"\u4fe1\u606f",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"appId")," is now ",(0,o.kt)("strong",{parentName:"p"},"required"),"."),(0,o.kt)("p",{parentName:"admonition"},"These keys are not secrets and can be added to your Git repository.")),(0,o.kt)("h2",{id:"docsearch-has-a-new-home"},"DocSearch has a new home!"),(0,o.kt)("h3",{id:"what-is-docsearch"},"What is DocSearch?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/"},"DocSearch")," is a program created by ",(0,o.kt)("a",{parentName:"p",href:"http://algolia.com/"},"Algolia"),", which offers search to technical documentation of Open Source projects and technical blogs ",(0,o.kt)("strong",{parentName:"p"},"for free"),"."),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/what-is-docsearch/"},"read more here"),", and ",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/apply"},"apply")," if you'd like to give it a try!"),(0,o.kt)("h2",{id:"what-is-this-migration-about"},"What is this migration about?"),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"With the upcoming stable release of ",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/DocSearch-v3"},"DocSearch UI"),", we wanted to go further and provide better tooling for our users to improve their search, but also leverage the full potential of Algolia."),(0,o.kt)("h3",{id:"whats-new"},"What's new?"),(0,o.kt)("p",null,"DocSearch now leverages the ",(0,o.kt)("a",{parentName:"p",href:"https://www.algolia.com/products/search-and-discovery/crawler/"},"Algolia Crawler"),", which includes a web interface that will allow you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start, schedule and monitor your crawls"),(0,o.kt)("li",{parentName:"ul"},"Edit your config file from a live editor"),(0,o.kt)("li",{parentName:"ul"},"Test your results with DocSearch v3")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Algolia crawler overview",src:t(467).Z,width:"3832",height:"1882"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Algolia config editor",src:t(9690).Z,width:"3832",height:"1880"})),(0,o.kt)("p",null,"But also, more Algolia features in ",(0,o.kt)("strong",{parentName:"p"},"your own Algolia app"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Team management"),(0,o.kt)("li",{parentName:"ul"},"Browse and see how your records are indexed in Algolia"),(0,o.kt)("li",{parentName:"ul"},"Try other Algolia features with free trials")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Algolia index overview",src:t(7012).Z,width:"3834",height:"1882"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Algolia index analytics",src:t(6830).Z,width:"3810",height:"1876"})),(0,o.kt)("p",null,"And of course, ",(0,o.kt)("strong",{parentName:"p"},"a lot more, for free"),"."),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"im-using-docusaurus-and-docsearch-can-i-migrate"},"I'm using Docusaurus and DocSearch, can I migrate?"),(0,o.kt)("p",null,"At the time we are writing this, we are still at an early stage of the migration. We are doing small batches every week but will increase the load shortly, so please be patient and keep an eye out in your mailbox, you'll be contacted as soon as your Algolia app is ready!"),(0,o.kt)("h3",{id:"where-can-i-read-more-about-this"},"Where can I read more about this?"),(0,o.kt)("p",null,"We wrote a small ",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/migrating-from-legacy"},"migration guide")," but you'll have more detailed information in the migration email."),(0,o.kt)("h3",{id:"i-received-the-migration-email-but-the-invite-expired"},"I received the migration email but the invite expired"),(0,o.kt)("p",null,"Please contact us via either ",(0,o.kt)("a",{parentName:"p",href:"mailto:docsearch@algolia.com"},"email")," or ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/bRTacwYrfX"},"DocSearch's Discord")," or on ",(0,o.kt)("a",{parentName:"p",href:"https://discordapp.com/invite/docusaurus"},"Docusaurus's Discord #algolia channel")),(0,o.kt)("h3",{id:"i-have-feedback"},"I have feedback!"),(0,o.kt)("p",null,"For any feedback regarding our documentation or the DocSearch UI component, you can open an issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/algolia/docsearch/issues"},"on our GitHub repository"),", but also contact us via the methods above."),(0,o.kt)("h3",{id:"can-i-still-run-my-own-docsearch-instance"},"Can I still run my own DocSearch instance?"),(0,o.kt)("p",null,"In favor of the new infrastructure and DocSearch v3, we will no longer maintain our beloved ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/algolia/docsearch-scraper"},"DocSearch scraper")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/algolia/docsearch/tree/master"},"DocSearch v2"),", but the repositories will still be available and open to pull requests."),(0,o.kt)("p",null,"The previous documentation (now called ",(0,o.kt)("inlineCode",{parentName:"p"},"legacy"),") remains available as well as our ",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/legacy/run-your-own"},(0,o.kt)("inlineCode",{parentName:"a"},"run your own"))," guide."))}p.isMDXComponent=!0},467:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/crawler-overview-6224cc4c7b20511010652f3f4ed5904e.png"},9690:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/editor-823e50dbed8e508bd5a69c708bab8928.png"},6830:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/index-analytics-f9c27da3900de6206e949736b1cd8101.png"},7012:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/index-overview-ca216346e6eee6881443644b6d7d8fe8.png"},5897:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/social-card-99fd18bd61fee0f631b8c820ef873dd5.png"}}]);