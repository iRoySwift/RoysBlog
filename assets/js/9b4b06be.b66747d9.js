"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[1187],{9984:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var s=r(1527),l=r(7279);const t={id:"references-and-borrowing",title:"\u5f15\u7528\u4e0e\u501f\u7528",description:"\u5f15\u7528\u4e0e\u501f\u7528"},i=void 0,c={id:"rust/ownership/references-and-borrowing",title:"\u5f15\u7528\u4e0e\u501f\u7528",description:"\u5f15\u7528\u4e0e\u501f\u7528",source:"@site/docs/rust/ownership/references-and-borrowing.md",sourceDirName:"rust/ownership",slug:"/rust/ownership/references-and-borrowing",permalink:"/docs/rust/ownership/references-and-borrowing",draft:!1,unlisted:!1,editUrl:"https://github.com/iRoySwift/RoysBlog/tree/master/docs/rust/ownership/references-and-borrowing.md",tags:[],version:"current",frontMatter:{id:"references-and-borrowing",title:"\u5f15\u7528\u4e0e\u501f\u7528",description:"\u5f15\u7528\u4e0e\u501f\u7528"},sidebar:"docs",previous:{title:"OwnerShip",permalink:"/docs/category/ownership"},next:{title:"\u81ea\u5b9a\u4e49\u6a21\u677f",permalink:"/docs/web/react/custom-templates"}},a={},o=[{value:"\u6240\u6709\u6743",id:"\u6240\u6709\u6743",level:2},{value:"immutable refrences \u4e0e mutable refrences",id:"immutable-refrences-\u4e0e-mutable-refrences",level:2},{value:"mutable refrences \u6392\u5b83\u6027",id:"mutable-refrences-\u6392\u5b83\u6027",level:2}];function u(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u6240\u6709\u6743",children:"\u6240\u6709\u6743"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'fn main() {\n    let a = 10u32;\n    let b = a;\n    println!("{a}");\n    println!("{b}");\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'fn main() {\n    let s1 = String::from("I am a superman.");\n    let s2 = s1;\n    //println!("{s1}");\n    println!("{s2}");\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u7406\u89e3\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u5b58\u50a8\u5728\u6808\u4e2d\u7684\u6570\u636e(\u6574\u6570\u3001\u5e03\u5c14\u3001\u6d6e\u70b9\u6570\u3001char \u7b49)\uff0c\u5c06\u53d8\u91cf a \u8d4b\u503c\u7ed9\u53e6\u4e00\u4e2a\u53d8\u91cf b \u65f6\u4f1a\u590d\u5236\u4e00\u4efd\u6570\u636e\uff0c\u65b0\u53d8\u91cf b \u4e5f\u4f1a\u62e5\u6709\u5bf9\u65b0\u590d\u5236\u6570\u636e 10u32 \u7684\u6240\u6709\u6743\uff0c\u800c\u4e14\u4e0d\u4f1a\u5f71\u54cd\u539f\u6765 a \u7684\u6240\u6709\u6743\u3002\u6240\u4ee5\u6253\u5370 a\u3001b \u53d8\u91cf\u90fd\u53ef\u4ee5\u6b63\u5e38\u6253\u5370\u3002\u7b49 main \u51fd\u6570\u7ed3\u675f\uff0ca\u3001b \u90fd\u79bb\u5f00\u4e86\u4f5c\u7528\u57df\uff0c\u5bf9\u5e94\u7684\u6808\u6570\u636e\u5185\u5b58\u4f7f\u7528\u4e5f\u4f1a\u88ab\u56de\u6536\uff1b"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"(only one ownership in a scope)\u5bf9\u4e8e\u5b58\u50a8\u5728\u5806\u4e2d\u7684\u6570\u636e\uff0c\u5c06\u53d8\u91cf s1 \u8d4b\u503c\u7ed9\u53e6\u4e00\u4e2a\u53d8\u91cf s2 \u65f6\uff0c Rust \u540c\u65f6\u4f1a\u4f7f\u7b2c\u4e00\u4e2a\u53d8\u91cf s1 \u65e0\u6548\u4e86\uff0c\u6240\u4ee5 s1 \u4e0d\u53ef\u6253\u5370\u3002\u76f4\u5230\u82b1\u62ec\u53f7\u7ed3\u675f s2 \u53ca s2 \u6240\u62e5\u6709\u7684\u5b57\u7b26\u4e32\u5185\u5b58\u4e5f\u4f1a\u88ab\u56de\u6536\uff0c\u6808\u7ed3\u675f\u65f6\uff0cs1 \u6240\u5bf9\u5e94\u7684\u5c40\u90e8\u53d8\u91cf\u5185\u5b58\u4e5f\u4f1a\u88ab\u56de\u6536\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"immutable-refrences-\u4e0e-mutable-refrences",children:"immutable refrences \u4e0e mutable refrences"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'fn main() {\n    let mut a = 10u32;\n    let _c = &a; // &a \u591a\u4e2a\u5f15\u7528\n    let _e = &a;\n    let b = &mut a;\n    // let f = &a; //&mut a\u4e0e&a \u4e00\u4e2a\u8d44\u6e90\u7684immutable refrences\u4e8emutable refrences\u4f5c\u7528\u57df\u4e0d\u53ef\u4ee5\u91cd\u53e0\uff0c\u4e0d\u53ef\u4ee5\u540c\u65f6\u5b58\u5728\n    *b = 20;\n    // let d = &mut a; // \u4e00\u4e2a\u8d44\u6e90\u7684mutable refrences\u4e0e\u53e6\u4e00\u4e2amutable refrences\u7684\u4f5c\u7528\u57df\u4e0d\u53ef\u4ee5\u91cd\u53e0\n    println!("{b}");\n}\n\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u7406\u89e3\uff1a","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5f15\u7528\u7684\u4f5c\u7528\u57df\u662f\u4ece\u5b83\u5b9a\u4e49\u5230\u5b83\u6700\u540e\u4e00\u6b21\u4f7f\u7528\u65f6\u7ed3\u675f\uff01"}),"\n",(0,s.jsx)(n.li,{children:"\u5f15\u7528\u7684\u4f5c\u7528\u57df\u4e0d\u53ef\u80fd\u957f\u4e8e\u6240\u6709\u6743\u4f5c\u7528\u57df\uff08\u60ac\u5782\u5f15\u7528\uff09"}),"\n",(0,s.jsx)(n.li,{children:"\u4e00\u4e2a\u8d44\u6e90\u7684 immutable refrences\uff0c\u53ef\u4ee5\u540c\u65f6\u5b58\u5728\u591a\u4e2a;(multiple immutable references)"}),"\n",(0,s.jsx)(n.li,{children:"\u4e00\u4e2a\u8d44\u6e90\u7684 immutable refrences \u4e8e mutable refrences \u4f5c\u7528\u57df\u4e0d\u53ef\u4ee5\u91cd\u53e0\uff0c\u4e0d\u53ef\u4ee5\u540c\u65f6\u5b58\u5728(only one immutable reference or mutable reference in scope)"}),"\n",(0,s.jsx)(n.li,{children:"\u4e00\u4e2a\u8d44\u6e90\u7684 mutable refrences \u4e0e\u53e6\u4e00\u4e2a mutable refrences \u7684\u4f5c\u7528\u57df\u4e0d\u53ef\u4ee5\u91cd\u53e0(only one mutable reference)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"mutable-refrences-\u6392\u5b83\u6027",children:"mutable refrences \u6392\u5b83\u6027"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'fn main() {\n    let mut a = 10u32;\n    let r1 = &mut a;\n    let r2 = r1; // r1\u7684\u6240\u6709\u6743\u88abmove\n    println!("{r1}")\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u7406\u89e3","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"immutable refrences \u53ef\u4ee5\u88ab\u590d\u5236"}),"\n",(0,s.jsx)(n.li,{children:"mutable refrences \u4e0d\u53ef\u4ee5\u88ab\u590d\u5236\uff0c\u53ea\u80fd\u88ab move"}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},7279:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>i});var s=r(959);const l={},t=s.createContext(l);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);