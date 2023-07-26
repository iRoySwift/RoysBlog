"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[9628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>b});var l=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(r),b=a,d=m["".concat(u,".").concat(b)]||m[b]||c[b]||n;return r?l.createElement(d,o(o({ref:t},i),{},{components:r})):l.createElement(d,o({ref:t},i))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<n;p++)o[p]=r[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1704:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var l=r(7462),a=(r(7294),r(3905));const n={id:"brew_cmd",title:"Homebrew\u547d\u4ee4"},o=void 0,s={unversionedId:"tools/brew/brew_cmd",id:"tools/brew/brew_cmd",title:"Homebrew\u547d\u4ee4",description:"Homebrew",source:"@site/docs/tools/brew/brew.md",sourceDirName:"tools/brew",slug:"/tools/brew/",permalink:"/docs/tools/brew/",draft:!1,editUrl:"https://github.com/iRoySwift/RoysBlog/tree/master/docs/tools/brew/brew.md",tags:[],version:"current",frontMatter:{id:"brew_cmd",title:"Homebrew\u547d\u4ee4"},sidebar:"docs",previous:{title:"Homebrew",permalink:"/docs/category/homebrew"},next:{title:"Git",permalink:"/docs/category/git"}},u={},p=[{value:"Homebrew",id:"homebrew",level:2},{value:"1. \u4ecb\u7ecd",id:"1-\u4ecb\u7ecd",level:2},{value:"2. \u5b89\u88c5",id:"2-\u5b89\u88c5",level:2},{value:"2.1 \u6267\u884c\u5b89\u88c5\u811a\u672c",id:"21-\u6267\u884c\u5b89\u88c5\u811a\u672c",level:3},{value:"2.2 \u5b89\u88c5\u9a8c\u8bc1",id:"22-\u5b89\u88c5\u9a8c\u8bc1",level:3},{value:"2.3 \u66f4\u65b0\u8f6f\u4ef6\u5305",id:"23-\u66f4\u65b0\u8f6f\u4ef6\u5305",level:3},{value:"3. \u5e38\u7528\u547d\u4ee4",id:"3-\u5e38\u7528\u547d\u4ee4",level:2},{value:"3.1 \u5b89\u88c5\u8f6f\u4ef6",id:"31-\u5b89\u88c5\u8f6f\u4ef6",level:3},{value:"3.2 \u5207\u6362 node \u7248\u672c",id:"32-\u5207\u6362-node-\u7248\u672c",level:3},{value:"3.3 \u66f4\u65b0\u8f6f\u4ef6\u5305",id:"33-\u66f4\u65b0\u8f6f\u4ef6\u5305",level:3},{value:"3.4 \u5378\u8f7d\u8f6f\u4ef6\u5305",id:"34-\u5378\u8f7d\u8f6f\u4ef6\u5305",level:3},{value:"3.5 \u670d\u52a1\u76f8\u5173",id:"35-\u670d\u52a1\u76f8\u5173",level:3},{value:"3.6 \u5176\u5b83\u5e38\u7528\u547d\u4ee4",id:"36-\u5176\u5b83\u5e38\u7528\u547d\u4ee4",level:3}],i={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"homebrew"},(0,a.kt)("a",{parentName:"h2",href:"https://formulae.brew.sh/"},"Homebrew")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://brew.sh/assets/img/homebrew-256x256.png",alt:"Homebrew"})),(0,a.kt)("h2",{id:"1-\u4ecb\u7ecd"},"1. \u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://formulae.brew.sh/"},"Homebrew"),"\u662f\u4e00\u6b3e\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u76ee\u524d\u652f\u6301 macOS \u548c Linux \u7cfb\u7edf\u3002\u4e3b\u8981\u6709\u56db\u4e2a\u90e8\u5206\u7ec4\u6210\uff1abrew\u3001homebrew-core \u3001homebrew-cask\u3001homebrew-bottles\u3002"),(0,a.kt)("h2",{id:"2-\u5b89\u88c5"},"2. \u5b89\u88c5"),(0,a.kt)("h3",{id:"21-\u6267\u884c\u5b89\u88c5\u811a\u672c"},"2.1 \u6267\u884c\u5b89\u88c5\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("h3",{id:"22-\u5b89\u88c5\u9a8c\u8bc1"},"2.2 \u5b89\u88c5\u9a8c\u8bc1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew --version\n")),(0,a.kt)("h3",{id:"23-\u66f4\u65b0\u8f6f\u4ef6\u5305"},"2.3 \u66f4\u65b0\u8f6f\u4ef6\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\n")),(0,a.kt)("h2",{id:"3-\u5e38\u7528\u547d\u4ee4"},"3. \u5e38\u7528\u547d\u4ee4"),(0,a.kt)("h3",{id:"31-\u5b89\u88c5\u8f6f\u4ef6"},"3.1 \u5b89\u88c5\u8f6f\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  brew install node \u9ed8\u8ba4\u5b89\u88c5\u6700\u65b0\u7248\u672c\n  brew install node@14 \u5b89\u88c5\u6307\u5b9a\u7248\u672c\n")),(0,a.kt)("h3",{id:"32-\u5207\u6362-node-\u7248\u672c"},"3.2 \u5207\u6362 node \u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"  brew unlink node \u89e3\u9664\u539f\u94fe\u63a5\n  brew link --overwrite node@16 \u94fe\u63a5\u65b0\u7248\u672c\n")),(0,a.kt)("h3",{id:"33-\u66f4\u65b0\u8f6f\u4ef6\u5305"},"3.3 \u66f4\u65b0\u8f6f\u4ef6\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"   brew upgrade node@14\n")),(0,a.kt)("h3",{id:"34-\u5378\u8f7d\u8f6f\u4ef6\u5305"},"3.4 \u5378\u8f7d\u8f6f\u4ef6\u5305"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"   brew uninstall node@14\n")),(0,a.kt)("h3",{id:"35-\u670d\u52a1\u76f8\u5173"},"3.5 \u670d\u52a1\u76f8\u5173"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6 services \u5217\u8868")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    brew services list\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8 mysql")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"    brew services start mysql\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u505c\u6b62 mysql")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"   brew services stop mysql\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u91cd\u542f mysql")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"   brew services restart mysql\n")),(0,a.kt)("h3",{id:"36-\u5176\u5b83\u5e38\u7528\u547d\u4ee4"},"3.6 \u5176\u5b83\u5e38\u7528\u547d\u4ee4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew config\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b node \u5b89\u88c5\u4fe1\u606f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew info node\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b\u5df2\u5b89\u88c5\u8f6f\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew list\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u67e5\u770b\u5df2\u5b89\u88c5\u8f6f\u4ef6\u7248\u672c\u53f7")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew list --versions\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u641c\u7d22\u53ef\u7528 node \u76f8\u5173\u8f6f\u4ef6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew search node\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"brew \u81ea\u8eab\u66f4\u65b0")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew update\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6e05\u9664\u4e0b\u8f7d\u7684\u7f13\u5b58")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew cleanup\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8bca\u65ad brew\uff0c\u5e76\u7ed9\u51fa\u4fee\u590d\u547d\u4ee4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew doctor\n")))}c.isMDXComponent=!0}}]);