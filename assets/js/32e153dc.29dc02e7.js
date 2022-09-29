"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[9],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return t?a.createElement(m,l(l({ref:n},c),{},{components:t})):a.createElement(m,l({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3055:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={id:"install-solana-env",title:"A Starter Kit for New Solana Developer",description:"\u5b89\u88c5Solana\u73af\u5883"},s=void 0,u={unversionedId:"solana/install-solana-env",id:"solana/install-solana-env",title:"A Starter Kit for New Solana Developer",description:"\u5b89\u88c5Solana\u73af\u5883",source:"@site/docs/solana/install-solana-env.md",sourceDirName:"solana",slug:"/solana/install-solana-env",permalink:"/RoysBlog/docs/solana/install-solana-env",editUrl:"https://github.com/iRoySwift/RoysBlog/tree/master/docs/solana/install-solana-env.md",tags:[],version:"current",frontMatter:{id:"install-solana-env",title:"A Starter Kit for New Solana Developer",description:"\u5b89\u88c5Solana\u73af\u5883"},sidebar:"docs",previous:{title:"\u5b89\u88c5Solana\u73af\u5883",permalink:"/RoysBlog/docs/category/\u5b89\u88c5solana\u73af\u5883"},next:{title:"Git",permalink:"/RoysBlog/docs/category/git"}},c={},p=[{value:"A Starter Kit for New Solana Developer",id:"a-starter-kit-for-new-solana-developer",level:2},{value:"Install Rust and Solana Cli",id:"install-rust-and-solana-cli",level:2},{value:"Mac \u73af\u5883\u4e0b rust \u7684\u5b89\u88c5",id:"mac-\u73af\u5883\u4e0b-rust-\u7684\u5b89\u88c5",level:3},{value:"Mac \u73af\u5883\u4e0b solane \u7684\u5b89\u88c5",id:"mac-\u73af\u5883\u4e0b-solane-\u7684\u5b89\u88c5",level:3}],d={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"a-starter-kit-for-new-solana-developer"},"A Starter Kit for New Solana Developer"),(0,o.kt)("h2",{id:"install-rust-and-solana-cli"},"Install Rust and Solana Cli"),(0,o.kt)("h3",{id:"mac-\u73af\u5883\u4e0b-rust-\u7684\u5b89\u88c5"},"Mac \u73af\u5883\u4e0b rust \u7684\u5b89\u88c5"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728 mac \u73af\u5883\u4e0b\u6bd4\u8f83\u4fbf\u6377\u7684\u5b89\u88c5\u65b9\u5f0f\u4e3b\u8981\u6709\u4e24\u79cd\uff0c\u4e00\u79cd\u662f\u76f4\u63a5\u901a\u8fc7 brew install rust \uff0c\u53e6\u4e00\u79cd\u65b9\u5f0f\u662f\u901a\u8fc7\u5b89\u88c5 rustup \u6765\u95f4\u63a5\u5b89\u88c5 rust \uff0c\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 \u5b89\u88c5 rustup \u7684\u65b9\u5f0f \u6765\u95f4\u63a5\u7ba1\u7406 rust \u73af\u5883\u3002")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9996\u5148\u901a\u8fc7 brew \u5b89\u88c5 rustup-init")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew install rustup-init\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u6267\u884c rustup-init \u5b89\u88c5 rust \u76f8\u5173\u73af\u5883")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rustup-init\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Welcome to Rust!\n\nThis will download and install the official compiler for the Rust\nprogramming language, and its package manager, Cargo.\n\nRustup metadata and toolchains will be installed into the Rustup\nhome directory, located at:\n\n  /Users/roy/.rustup\n\nThis can be modified with the RUSTUP_HOME environment variable.\n\nThe Cargo home directory located at:\n\n  /Users/roy/.cargo\n\nThis can be modified with the CARGO_HOME environment variable.\n\nThe cargo, rustc, rustup and other commands will be added to\nCargo's bin directory, located at:\n\n  /Users/roy/.cargo/bin\n\nThis path will then be added to your PATH environment variable by\nmodifying the profile files located at:\n\n  /Users/roy/.profile\n  /Users/roy/.bash_profile\n  /Users/roy/.bashrc\n  /Users/roy/.zshenv\n\nYou can uninstall at any time with rustup self uninstall and\nthese changes will be reverted.\n\nCurrent installation options:\n\n\n   default host triple: x86_64-apple-darwin\n     default toolchain: stable (default)\n               profile: default\n  modify PATH variable: yes\n\n1) Proceed with installation (default)\n2) Customize installation\n3) Cancel installation\n>\n\ninfo: profile set to 'default'\ninfo: default host triple is x86_64-apple-darwin\nwarning: Updating existing toolchain, profile choice will be ignored\ninfo: syncing channel updates for 'stable-x86_64-apple-darwin'\ninfo: default toolchain set to 'stable-x86_64-apple-darwin'\n\n  stable-x86_64-apple-darwin unchanged - rustc 1.63.0 (4b91a6ea7 2022-08-08)\n\n\nRust is installed now. Great!\n\nTo get started you may need to restart your current shell.\nThis would reload your PATH environment variable to include\nCargo's bin directory ($HOME/.cargo/bin).\n\nTo configure your current shell, run:\nsource $HOME/.cargo/env\n\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5b89\u88c5 toolchain , \u8fd9\u91cc\u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5\u5f53\u524d\u7cfb\u7edf\u73af\u5883\u5bf9\u5e94\u7684 stable \u7248\u672c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rustup toolchain install stable\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u6267\u884c rustup show \u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u5b89\u88c5\u7684 rust \u76f8\u5173\u73af\u5883")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rustup show\n")),(0,o.kt)("h3",{id:"mac-\u73af\u5883\u4e0b-solane-\u7684\u5b89\u88c5"},"Mac \u73af\u5883\u4e0b solane \u7684\u5b89\u88c5"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7528 brew \u5b89\u88c5 solana")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install solana\nsolana --version\n")))}f.isMDXComponent=!0}}]);