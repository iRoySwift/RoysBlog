"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[9923],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8946:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"\u6587\u6863\u641c\u7d22",authors:[{name:"Cle\u0301ment Vannicatte",title:"\u8f6f\u4ef6\u5de5\u7a0b\u5e08@ Algolia",url:"https://github.com/shortcuts",image_url:"https://github.com/shortcuts.png",twitter:"sh0rtcts"},{key:"slorber"}],tags:["search"],image:"./img/social-card.png"},s=void 0,c={permalink:"/en/blog/2021/11/21/algolia-docsearch-migration",editUrl:"https://github.com/iRoySwift/RoysBlog/tree/master/blog/2021-11-21-algolia-docsearch-migration/index.md",source:"@site/blog/2021-11-21-algolia-docsearch-migration/index.md",title:"\u6587\u6863\u641c\u7d22",description:"DocSearch \u6b63\u5728\u8fc1\u79fb\u5230\u4e00\u4e2a\u65b0\u7684\u3001\u66f4\u5f3a\u5927\u7684\u7cfb\u7edf\uff0c\u8fd9\u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u81ea\u5df1\u7684 Algolia \u5e94\u7528\u7a0b\u5e8f\u548c\u65b0\u51ed\u636e\u3002",date:"2021-11-21T00:00:00.000Z",formattedDate:"November 21, 2021",tags:[{label:"search",permalink:"/en/blog/tags/search"}],readingTime:1.8533333333333333,truncated:!0,authors:[{name:"Cle\u0301ment Vannicatte",title:"\u8f6f\u4ef6\u5de5\u7a0b\u5e08@ Algolia",url:"https://github.com/shortcuts",image_url:"https://github.com/shortcuts.png",twitter:"sh0rtcts",imageURL:"https://github.com/shortcuts.png"},{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{title:"\u6587\u6863\u641c\u7d22",authors:[{name:"Cle\u0301ment Vannicatte",title:"\u8f6f\u4ef6\u5de5\u7a0b\u5e08@ Algolia",url:"https://github.com/shortcuts",image_url:"https://github.com/shortcuts.png",twitter:"sh0rtcts",imageURL:"https://github.com/shortcuts.png"},{key:"slorber"}],tags:["search"],image:"./img/social-card.png"},prevItem:{title:"\u5c06Docusaurus\u90e8\u7f72\u81f3 GitHub Pages\u200b",permalink:"/en/blog/deploying-to-github-pages"},nextItem:{title:"Welcome",permalink:"/en/blog/welcome"}},u={image:a(3271).Z,authorsImageUrls:[void 0,void 0]},h=[{value:"Upgrading your Docusaurus site",id:"upgrading-your-docusaurus-site",level:2},{value:"DocSearch has a new home!",id:"docsearch-has-a-new-home",level:2},{value:"What is DocSearch?",id:"what-is-docsearch",level:3},{value:"What is this migration about?",id:"what-is-this-migration-about",level:2},{value:"Motivation",id:"motivation",level:3},{value:"What&#39;s new?",id:"whats-new",level:3},{value:"FAQ",id:"faq",level:2},{value:"I&#39;m using Docusaurus and DocSearch, can I migrate?",id:"im-using-docusaurus-and-docsearch-can-i-migrate",level:3},{value:"Where can I read more about this?",id:"where-can-i-read-more-about-this",level:3},{value:"I received the migration email but the invite expired",id:"i-received-the-migration-email-but-the-invite-expired",level:3},{value:"I have feedback!",id:"i-have-feedback",level:3},{value:"Can I still run my own DocSearch instance?",id:"can-i-still-run-my-own-docsearch-instance",level:3}],p={toc:h};function d(e){var t=e.components,l=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/"},"DocSearch")," \u6b63\u5728\u8fc1\u79fb\u5230\u4e00\u4e2a\u65b0\u7684\u3001\u66f4\u5f3a\u5927\u7684\u7cfb\u7edf\uff0c\u8fd9\u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u81ea\u5df1\u7684 Algolia \u5e94\u7528\u7a0b\u5e8f\u548c\u65b0\u51ed\u636e\u3002"),(0,i.kt)("p",null,"Docusaurus site owners should upgrade their configuration with ",(0,i.kt)("a",{parentName:"p",href:"#im-using-docusaurus-and-docsearch-can-i-migrate"},"their new credentials")," ",(0,i.kt)("strong",{parentName:"p"},"by February 1, 2022"),", existing search indexes will be frozen and become read-only after this date."),(0,i.kt)("h2",{id:"upgrading-your-docusaurus-site"},"Upgrading your Docusaurus site"),(0,i.kt)("p",null,"In the next few weeks, Docusaurus site owners will receive an email inviting them to join their personal Algolia application."),(0,i.kt)("p",null,"This email will include a new ",(0,i.kt)("inlineCode",{parentName:"p"},"appId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"apiKey")," to use in your Docusaurus configuration."),(0,i.kt)("p",null,"The only things you have to do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Join the Algolia application (eventually creating a new Algolia account)"),(0,i.kt)("li",{parentName:"ul"},"Update your site configuration.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const config = {\n  themeConfig: {\n    algolia: {\n      // highlight-start\n      appId: '<NEW_APP_ID>',\n      apiKey: '<NEW_SEARCH_API_KEY>',\n      // highlight-end\n    },\n  },\n};\n\nmodule.exports = config;\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"appId")," is now ",(0,i.kt)("strong",{parentName:"p"},"required"),"."),(0,i.kt)("p",{parentName:"div"},"These keys are not secrets and can be added to your Git repository."))),(0,i.kt)("h2",{id:"docsearch-has-a-new-home"},"DocSearch has a new home!"),(0,i.kt)("h3",{id:"what-is-docsearch"},"What is DocSearch?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/"},"DocSearch")," is a program created by ",(0,i.kt)("a",{parentName:"p",href:"http://algolia.com/"},"Algolia"),", which offers search to technical documentation of Open Source projects and technical blogs ",(0,i.kt)("strong",{parentName:"p"},"for free"),"."),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/what-is-docsearch/"},"read more here"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/apply"},"apply")," if you'd like to give it a try!"),(0,i.kt)("h2",{id:"what-is-this-migration-about"},"What is this migration about?"),(0,i.kt)("h3",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"With the upcoming stable release of ",(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/DocSearch-v3"},"DocSearch UI"),", we wanted to go further and provide better tooling for our users to improve their search, but also leverage the full potential of Algolia."),(0,i.kt)("h3",{id:"whats-new"},"What's new?"),(0,i.kt)("p",null,"DocSearch now leverages the ",(0,i.kt)("a",{parentName:"p",href:"https://www.algolia.com/products/search-and-discovery/crawler/"},"Algolia Crawler"),", which includes a web interface that will allow you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Start, schedule and monitor your crawls"),(0,i.kt)("li",{parentName:"ul"},"Edit your config file from a live editor"),(0,i.kt)("li",{parentName:"ul"},"Test your results with DocSearch v3")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Algolia crawler overview",src:a(3102).Z,width:"3832",height:"1882"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Algolia config editor",src:a(9788).Z,width:"3832",height:"1880"})),(0,i.kt)("p",null,"But also, more Algolia features in ",(0,i.kt)("strong",{parentName:"p"},"your own Algolia app"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Team management"),(0,i.kt)("li",{parentName:"ul"},"Browse and see how your records are indexed in Algolia"),(0,i.kt)("li",{parentName:"ul"},"Try other Algolia features with free trials")),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Algolia index overview",src:a(5502).Z,width:"3834",height:"1882"})),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Algolia index analytics",src:a(9169).Z,width:"3810",height:"1876"})),(0,i.kt)("p",null,"And of course, ",(0,i.kt)("strong",{parentName:"p"},"a lot more, for free"),"."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"im-using-docusaurus-and-docsearch-can-i-migrate"},"I'm using Docusaurus and DocSearch, can I migrate?"),(0,i.kt)("p",null,"At the time we are writing this, we are still at an early stage of the migration. We are doing small batches every week but will increase the load shortly, so please be patient and keep an eye out in your mailbox, you'll be contacted as soon as your Algolia app is ready!"),(0,i.kt)("h3",{id:"where-can-i-read-more-about-this"},"Where can I read more about this?"),(0,i.kt)("p",null,"We wrote a small ",(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/migrating-from-legacy"},"migration guide")," but you'll have more detailed information in the migration email."),(0,i.kt)("h3",{id:"i-received-the-migration-email-but-the-invite-expired"},"I received the migration email but the invite expired"),(0,i.kt)("p",null,"Please contact us via either ",(0,i.kt)("a",{parentName:"p",href:"mailto:docsearch@algolia.com"},"email")," or ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/bRTacwYrfX"},"DocSearch's Discord")," or on ",(0,i.kt)("a",{parentName:"p",href:"https://discordapp.com/invite/docusaurus"},"Docusaurus's Discord #algolia channel")),(0,i.kt)("h3",{id:"i-have-feedback"},"I have feedback!"),(0,i.kt)("p",null,"For any feedback regarding our documentation or the DocSearch UI component, you can open an issue ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/algolia/docsearch/issues"},"on our GitHub repository"),", but also contact us via the methods above."),(0,i.kt)("h3",{id:"can-i-still-run-my-own-docsearch-instance"},"Can I still run my own DocSearch instance?"),(0,i.kt)("p",null,"In favor of the new infrastructure and DocSearch v3, we will no longer maintain our beloved ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/algolia/docsearch-scraper"},"DocSearch scraper")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/algolia/docsearch/tree/master"},"DocSearch v2"),", but the repositories will still be available and open to pull requests."),(0,i.kt)("p",null,"The previous documentation (now called ",(0,i.kt)("inlineCode",{parentName:"p"},"legacy"),") remains available as well as our ",(0,i.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/legacy/run-your-own"},(0,i.kt)("inlineCode",{parentName:"a"},"run your own"))," guide."))}d.isMDXComponent=!0},3102:function(e,t,a){t.Z=a.p+"assets/images/crawler-overview-6224cc4c7b20511010652f3f4ed5904e.png"},9788:function(e,t,a){t.Z=a.p+"assets/images/editor-823e50dbed8e508bd5a69c708bab8928.png"},9169:function(e,t,a){t.Z=a.p+"assets/images/index-analytics-f9c27da3900de6206e949736b1cd8101.png"},5502:function(e,t,a){t.Z=a.p+"assets/images/index-overview-ca216346e6eee6881443644b6d7d8fe8.png"},3271:function(e,t,a){t.Z=a.p+"assets/images/social-card-99fd18bd61fee0f631b8c820ef873dd5.png"}}]);