"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[9],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3055:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={id:"install-solana-env",title:"\u5b89\u88c5Solana\u73af\u5883",description:"\u5b89\u88c5Solana\u73af\u5883"},o=void 0,s={unversionedId:"solana/install-solana-env",id:"solana/install-solana-env",title:"\u5b89\u88c5Solana\u73af\u5883",description:"\u5b89\u88c5Solana\u73af\u5883",source:"@site/docs/solana/install-solana-env.md",sourceDirName:"solana",slug:"/solana/install-solana-env",permalink:"/docs/solana/install-solana-env",draft:!1,editUrl:"https://github.com/iRoySwift/RoysBlog/tree/master/docs/solana/install-solana-env.md",tags:[],version:"current",frontMatter:{id:"install-solana-env",title:"\u5b89\u88c5Solana\u73af\u5883",description:"\u5b89\u88c5Solana\u73af\u5883"},sidebar:"docs",previous:{title:"\u5b89\u88c5Solana\u73af\u5883",permalink:"/docs/category/\u5b89\u88c5solana\u73af\u5883"},next:{title:"\u4ee3\u5e01\u8ba1\u5212",permalink:"/docs/category/\u4ee3\u5e01\u8ba1\u5212"}},i={},u=[{value:"A Starter Kit for New Solana Developer",id:"a-starter-kit-for-new-solana-developer",level:2},{value:"Install Rust and Solana Cli",id:"install-rust-and-solana-cli",level:2},{value:"Mac \u73af\u5883\u4e0b rust \u7684\u5b89\u88c5",id:"mac-\u73af\u5883\u4e0b-rust-\u7684\u5b89\u88c5",level:3},{value:"Mac \u73af\u5883\u4e0b solane \u7684\u5b89\u88c5",id:"mac-\u73af\u5883\u4e0b-solane-\u7684\u5b89\u88c5",level:3}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-starter-kit-for-new-solana-developer"},"A Starter Kit for New Solana Developer"),(0,r.kt)("h2",{id:"install-rust-and-solana-cli"},"Install Rust and Solana Cli"),(0,r.kt)("h3",{id:"mac-\u73af\u5883\u4e0b-rust-\u7684\u5b89\u88c5"},"Mac \u73af\u5883\u4e0b rust \u7684\u5b89\u88c5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 mac \u73af\u5883\u4e0b\u6bd4\u8f83\u4fbf\u6377\u7684\u5b89\u88c5\u65b9\u5f0f\u4e3b\u8981\u6709\u4e24\u79cd\uff0c\u4e00\u79cd\u662f\u76f4\u63a5\u901a\u8fc7 brew install rust \uff0c\u53e6\u4e00\u79cd\u65b9\u5f0f\u662f\u901a\u8fc7\u5b89\u88c5 rustup \u6765\u95f4\u63a5\u5b89\u88c5 rust \uff0c\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 \u5b89\u88c5 rustup \u7684\u65b9\u5f0f \u6765\u95f4\u63a5\u7ba1\u7406 rust \u73af\u5883\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u901a\u8fc7 brew \u5b89\u88c5 rustup-init")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install rustup-init\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c rustup-init \u5b89\u88c5 rust \u76f8\u5173\u73af\u5883")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rustup-init\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Welcome to Rust!\n\nThis will download and install the official compiler for the Rust\nprogramming language, and its package manager, Cargo.\n\nRustup metadata and toolchains will be installed into the Rustup\nhome directory, located at:\n\n  /Users/roy/.rustup\n\nThis can be modified with the RUSTUP_HOME environment variable.\n\nThe Cargo home directory located at:\n\n  /Users/roy/.cargo\n\nThis can be modified with the CARGO_HOME environment variable.\n\nThe cargo, rustc, rustup and other commands will be added to\nCargo's bin directory, located at:\n\n  /Users/roy/.cargo/bin\n\nThis path will then be added to your PATH environment variable by\nmodifying the profile files located at:\n\n  /Users/roy/.profile\n  /Users/roy/.bash_profile\n  /Users/roy/.bashrc\n  /Users/roy/.zshenv\n\nYou can uninstall at any time with rustup self uninstall and\nthese changes will be reverted.\n\nCurrent installation options:\n\n\n   default host triple: x86_64-apple-darwin\n     default toolchain: stable (default)\n               profile: default\n  modify PATH variable: yes\n\n1) Proceed with installation (default)\n2) Customize installation\n3) Cancel installation\n>\n\ninfo: profile set to 'default'\ninfo: default host triple is x86_64-apple-darwin\nwarning: Updating existing toolchain, profile choice will be ignored\ninfo: syncing channel updates for 'stable-x86_64-apple-darwin'\ninfo: default toolchain set to 'stable-x86_64-apple-darwin'\n\n  stable-x86_64-apple-darwin unchanged - rustc 1.63.0 (4b91a6ea7 2022-08-08)\n\n\nRust is installed now. Great!\n\nTo get started you may need to restart your current shell.\nThis would reload your PATH environment variable to include\nCargo's bin directory ($HOME/.cargo/bin).\n\nTo configure your current shell, run:\nsource $HOME/.cargo/env\n\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 toolchain , \u8fd9\u91cc\u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5\u5f53\u524d\u7cfb\u7edf\u73af\u5883\u5bf9\u5e94\u7684 stable \u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rustup toolchain install stable\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c rustup show \u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u5b89\u88c5\u7684 rust \u76f8\u5173\u73af\u5883")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rustup show\n")),(0,r.kt)("h3",{id:"mac-\u73af\u5883\u4e0b-solane-\u7684\u5b89\u88c5"},"Mac \u73af\u5883\u4e0b solane \u7684\u5b89\u88c5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528 brew \u5b89\u88c5 solana")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install solana\nsolana --version\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u7528bash")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528brew\u5b89\u88c5\u4f1a\u4e22\u5931solana\u5f88\u591a\u5de5\u5177",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cargo-build-sbf"),(0,r.kt)("li",{parentName:"ul"},"solana-test-validator")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sh -c "$(curl -sSfL https://release.solana.com/stable/install)"\nsolana --version\nsolana-install update\n')))}p.isMDXComponent=!0}}]);