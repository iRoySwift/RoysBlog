"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[7290],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,d=m["".concat(s,".").concat(f)]||m[f]||i[f]||o;return t?r.createElement(d,c(c({ref:n},u),{},{components:t})):r.createElement(d,c({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={id:"solana-Contract-Anchor-practice",title:"4\u3001Anchor\u5b9e\u8df5"},c=void 0,l={unversionedId:"solana/solana-bootcamp/7\u3001Solana\u5408\u7ea6\u5f00\u53d1\u8fdb\u9636/solana-Contract-Anchor-practice",id:"solana/solana-bootcamp/7\u3001Solana\u5408\u7ea6\u5f00\u53d1\u8fdb\u9636/solana-Contract-Anchor-practice",title:"4\u3001Anchor\u5b9e\u8df5",description:"\u6211\u4eec\u5c06\u4e4b\u524d\u7684\u6211\u4eec\u7684\u8bb0\u4e8b\u672c\u5408\u7ea6\u6539\u6210 Anchor \u5de5\u7a0b\u3002\u540c\u65f6\u4e3a\u4e86\u6a21\u62df PDA\uff0c\u6211\u4eec\u5c06\u8bb0\u4e8b\u672c\u6240\u5728\u5730\uff0c\u6309\u7167\u7528\u6237 \u6539\u6210\u5176 PDA \u5730\u5740\u3002",source:"@site/docs/solana/solana-bootcamp/7\u3001Solana\u5408\u7ea6\u5f00\u53d1\u8fdb\u9636/4\u3001Anchor\u5b9e\u8df5.md",sourceDirName:"solana/solana-bootcamp/7\u3001Solana\u5408\u7ea6\u5f00\u53d1\u8fdb\u9636",slug:"/solana/solana-bootcamp/7\u3001Solana\u5408\u7ea6\u5f00\u53d1\u8fdb\u9636/solana-Contract-Anchor-practice",permalink:"/docs/solana/solana-bootcamp/7\u3001Solana\u5408\u7ea6\u5f00\u53d1\u8fdb\u9636/solana-Contract-Anchor-practice",draft:!1,editUrl:"https://github.com/iRoySwift/RoysBlog/tree/master/docs/solana/solana-bootcamp/7\u3001Solana\u5408\u7ea6\u5f00\u53d1\u8fdb\u9636/4\u3001Anchor\u5b9e\u8df5.md",tags:[],version:"current",frontMatter:{id:"solana-Contract-Anchor-practice",title:"4\u3001Anchor\u5b9e\u8df5"},sidebar:"docs",previous:{title:"3\u3001Anchor\u5f00\u53d1\u6846\u67b6",permalink:"/docs/solana/solana-bootcamp/7\u3001Solana\u5408\u7ea6\u5f00\u53d1\u8fdb\u9636/solana-Anchor-development-framework"},next:{title:"5\u3001\u8bfe\u540e\u7ec3\u4e60",permalink:"/docs/solana/solana-bootcamp/7\u3001Solana\u5408\u7ea6\u5f00\u53d1\u8fdb\u9636/solana-contact-exercise5"}},s={},p=[{value:"\u8bbe\u8ba1\u6307\u4ee4",id:"\u8bbe\u8ba1\u6307\u4ee4",level:2},{value:"\u6267\u884c\u903b\u8f91",id:"\u6267\u884c\u903b\u8f91",level:2}],u={toc:p};function i(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u4e4b\u524d\u7684\u6211\u4eec\u7684\u8bb0\u4e8b\u672c\u5408\u7ea6\u6539\u6210 Anchor \u5de5\u7a0b\u3002\u540c\u65f6\u4e3a\u4e86\u6a21\u62df PDA\uff0c\u6211\u4eec\u5c06\u8bb0\u4e8b\u672c\u6240\u5728\u5730\uff0c\u6309\u7167\u7528\u6237 \u6539\u6210\u5176 PDA \u5730\u5740\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u521b\u5efa\u5de5\u7a0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-zsh"},"anchor init note\n")),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u6307\u4ee4"},"\u8bbe\u8ba1\u6307\u4ee4"),(0,a.kt)("p",null,"\u5b9a\u4e49\u6307\u4ee4 Account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rs"},"#[derive(Accounts)]\npub struct Create<'info> {\n    #[account(\n        init,\n        payer=user,\n        space = 128,\n        seeds = [user.key().as_ref()],\n        bump\n    )]\n    pub note: Account<'info, Note>,\n    #[account(mut)]\n    pub user: Signer<'info>,\n    pub system_program: Program<'info, System>,\n}\n")),(0,a.kt)("p",null,"\u5176\u4e2d State \u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rs"},"#[account]\npub struct Note {\n    pub message: String\n}\n")),(0,a.kt)("p",null,"\u5b58\u50a8\u6d88\u606f\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rs"},"#[account(\n        init,\n        payer=user,\n        space = 128,\n        seeds = [user.key().as_ref()],\n        bump\n    )]\n")),(0,a.kt)("p",null,"\u4f1a\u65b0\u521b\u5efa\u4e00\u4e2a Account\uff0c\u8be5 account \u7684\u5730\u5740\u4e3a seeds \u786e\u5b9a\u7684 PDA \u5730\u5740\uff0c\u7a7a\u95f4\u5927\u5c0f\u4e3a 128 \u5b57\u8282\uff0c\u7531 user \u6765\u652f\u4ed8 lamports \u8d39\u7528\u3002"),(0,a.kt)("h2",{id:"\u6267\u884c\u903b\u8f91"},"\u6267\u884c\u903b\u8f91"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rs"},"#[program]\npub mod note {\n    use super::*;\n\n    pub fn create(ctx: Context<Create>, msg: String) -> Result<()> {\n        let note = &mut ctx.accounts.note;\n\n        note.message = msg;\n        Ok(())\n    }\n}\n")),(0,a.kt)("p",null,"\u8fd9\u91cc\u6574\u4e2a\u903b\u8f91\u5c31\u975e\u5e38\u7b80\u5355\u3002\u76f4\u63a5\u83b7\u53d6\u76f8\u5e94\u7684 Account \u5bf9\u8c61\uff0c\u7136\u540e\u5c06\u8be5 state \u5bf9\u8c61\u7684 message \u8d4b\u503c\u5373\u53ef\u3002"))}i.isMDXComponent=!0}}]);