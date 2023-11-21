"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[3436],{7620:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=s(1527),t=s(7279),l=s(8722),i=s(2674),a=s(2379);const o={id:"solana-rustaceans",title:"4\u3001Rustaceans\u7684\u7406\u89e3"},c=void 0,d={id:"solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/solana-rustaceans",title:"4\u3001Rustaceans\u7684\u7406\u89e3",description:"\u5982\u679c\u6ca1\u6709\u5176\u4ed6\u8bed\u8a00\u4e3a\u57fa\u7840\u3002\u90a3\u4e48\u4e0d\u5efa\u8bae\u9996\u5148\u5b66\u4e60 Rust\u3002\u4f46\u662f\u6709\u4e86\u5176\u4ed6\u8bed\u8a00\u7684\u57fa\u7840\uff0c\u53c8\u4f1a\u5bf9 Rust \u7684\u8bed\u8a00\u4e2d\u7684\u4e00\u4e9b\u4e0d\u90a3\u4e48\u5e38\u89c1\u7684\u8bed\u6cd5\u6240\u96be\u5012\u3002",source:"@site/docs/solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/4\u3001Rustaceans\u7684\u7406\u89e3.md",sourceDirName:"solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6",slug:"/solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/solana-rustaceans",permalink:"/docs/solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/solana-rustaceans",draft:!1,unlisted:!1,editUrl:"https://github.com/iRoySwift/RoysBlog/tree/master/docs/solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/4\u3001Rustaceans\u7684\u7406\u89e3.md",tags:[],version:"current",frontMatter:{id:"solana-rustaceans",title:"4\u3001Rustaceans\u7684\u7406\u89e3"},sidebar:"docs",previous:{title:"3\u3001\u901a\u8fc7Cargo\u7ba1\u7406\u5de5\u7a0b",permalink:"/docs/solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/solana-cargo-manage"},next:{title:"5\u3001\u8bfe\u540e\u7ec3\u4e60",permalink:"/docs/solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/solana-exersize-4"}},u={},h=[{value:"1\u3001\u5185\u5b58\u7ba1\u7406",id:"1\u5185\u5b58\u7ba1\u7406",level:2},{value:"2\u3001\u667a\u80fd\u6307\u9488",id:"2\u667a\u80fd\u6307\u9488",level:2},{value:"Box<code>&lt;T&gt;</code>",id:"boxt",level:3},{value:"Rc<code>&lt;T&gt;</code>",id:"rct",level:3},{value:"RefCell<code>&lt;T&gt;</code>",id:"refcellt",level:3},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",level:3},{value:"3\u3001\u9519\u8bef\u5904\u7406",id:"3\u9519\u8bef\u5904\u7406",level:2},{value:"4\u3001\u6d4b\u8bd5\u4ee3\u7801",id:"4\u6d4b\u8bd5\u4ee3\u7801",level:2},{value:"\u5355\u5143\u6d4b\u8bd5",id:"\u5355\u5143\u6d4b\u8bd5",level:3},{value:"\u96c6\u6210\u6d4b\u8bd5",id:"\u96c6\u6210\u6d4b\u8bd5",level:3}];function x(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u5982\u679c\u6ca1\u6709\u5176\u4ed6\u8bed\u8a00\u4e3a\u57fa\u7840\u3002\u90a3\u4e48\u4e0d\u5efa\u8bae\u9996\u5148\u5b66\u4e60 Rust\u3002\u4f46\u662f\u6709\u4e86\u5176\u4ed6\u8bed\u8a00\u7684\u57fa\u7840\uff0c\u53c8\u4f1a\u5bf9 Rust \u7684\u8bed\u8a00\u4e2d\u7684\u4e00\u4e9b\u4e0d\u90a3\u4e48\u5e38\u89c1\u7684\u8bed\u6cd5\u6240\u96be\u5012\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u91cc Rustaceans \u662f\u5bf9 Rust \u7a0b\u5e8f\u5458\u7684\u4e00\u79cd\u6635\u79f0\uff0c\u6211\u4eec\u5728\u5199\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u4e5f\u9700\u8981\u5c3d\u91cf\u7684\u7528 Rust \u7684\u601d\u7ef4\u6765\u5199\uff0c\u800c\u4e0d\u662f\u5bf9\u5176\u4ed6\u8bed\u8a00\u7684\u7ffb\u8bd1\u3002\u6bd4\u5982\u5c06\u5df2\u6709\u7684 Solidity \u7ffb\u8bd1\u6210 Rust\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u91cc\u6807\u9898\u4e3a Rustaceans\uff0c\u5176\u5b9e\u5185\u5bb9\u662f Rust \u7684\u9677\u9631\u4e0e\u7f3a\u9677\u3002\u4e3b\u8981\u8bb2\u4e00\u4e9b Rust \u91cc\u9762\u6bd4\u8f83\u96be\u7406\u89e3\u7684\u8bed\u6cd5\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"1\u5185\u5b58\u7ba1\u7406",children:"1\u3001\u5185\u5b58\u7ba1\u7406"}),"\n",(0,r.jsx)(e.p,{children:"rust \u4e0d\u662f\u8bf4\u4e0d\u9700\u8981\u50cf C++\u4e00\u6837 new/delete\uff0c\u81ea\u5df1\u5f00\u8f9f/\u91ca\u653e\u5185\u5b58\u4e48\uff1f\u600e\u4e48\u8fd8\u9700\u8981\u8bf4\u5185\u5b58\u7ba1\u7406\u3002\n\u6240\u6709\u6743\u548c\u501f\u7528"}),"\n",(0,r.jsx)(e.h2,{id:"2\u667a\u80fd\u6307\u9488",children:"2\u3001\u667a\u80fd\u6307\u9488"}),"\n",(0,r.jsx)(e.p,{children:"rust \u7684\u667a\u80fd\u6307\u9488\uff0c\u4e3b\u8981\u63d0\u4f9b\u4e86"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["Box",(0,r.jsx)(e.code,{children:"<T>"})," \u5728\u5806\u4e0a\u5206\u914d\u7a7a\u95f4"]}),"\n",(0,r.jsxs)(e.li,{children:["Rc",(0,r.jsx)(e.code,{children:"<T>"})," \u5f15\u7528\u8ba1\u6570\uff0c\u53ef\u4ee5\u4f7f\u5f97\u4e00\u4e2a\u5bf9\u8c61\u6709\u591a\u4e2a owner"]}),"\n",(0,r.jsxs)(e.li,{children:["Ref",(0,r.jsx)(e.code,{children:"<T>"})," and RefMut",(0,r.jsx)(e.code,{children:"<T>"}),", RefCell",(0,r.jsx)(e.code,{children:"<T>"})," \u5f3a\u5236\u8981\u6c42\u5728\u8fd0\u884c\u65f6\u68c0\u67e5\u501f\u7528\u5173\u7cfb\uff0c\u800c\u4e0d\u662f\u7f16\u8bd1\u671f\u95f4\uff0c\u5c31\u6709\u70b9\u52a8\u6001\u68c0\u67e5\u7684\u610f\u601d"]}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"boxt",children:["Box",(0,r.jsx)(e.code,{children:"<T>"})]}),"\n",(0,r.jsx)(e.p,{children:"box \u987e\u540d\u601d\u4e49\uff0c\u5c31\u662f\u88c5\u7bb1\uff0c\u5728 Objective-C \u4e2d\u6709\u76f8\u5173\u6982\u5ff5\u3002\u672c\u8d28\u5c31\u7c7b\u4f3c C \u91cc\u9762 alloc \u4e00\u6bb5\u5185\u5b58\uff0c\u7136\u540e\u5c06\u503c copy \u8fc7\u53bb\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'fn main() {\n        let b = Box::new(5);\n        println!("b = {}", b);\n    }\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u4e2a\u65f6\u5019\uff0cb \u5b9e\u9645\u4e0a\u5b58\u50a8\u7684\u662f\u4e00\u4e2a\u6307\u9488\uff0c\u6307\u5411\u4e00\u6bb5\u653e\u4e86\u6570\u5b57 5 \u7684\u5185\u5b58\uff0c\u8fd9\u6bb5\u5185\u5b58\u5728\u5806\u4e0a\u9762\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u7c7b\u4f3c\u8fd9\u6837\u7684\u5b9a\u4e49"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"enum List {\n    Cons(i32, Box<List>),\n    Nil,\n}\n\nuse crate::List::{Cons, Nil};\n\nfn main() {\n    let list = Cons(1, Box::new(Cons(2, Box::new(Cons(3, Box::new(Nil))))));\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5c31\u597d\u6bd4\u662f C++\u91cc\u9762\u7684\u524d\u5411\u7c7b\u58f0\u660e\uff0c\u7136\u540e\u5b58\u4e00\u4e2a\u8be5\u7c7b\u7684\u6307\u9488\u3002\u5982\u679c\u8fd9\u91cc\u4e0d\u7528 Box\uff0c\u5c31\u4f1a\u5bfc\u81f4\uff0c\u8fd9\u91cc\u5728\u63a8\u6d4b\u4f7f\u7528\u4e86\u591a\u5c11\u7a7a\u95f4\u7684\u65f6\u5019\uff0c\u9677\u5165\u4e86\u5faa\u73af\u3002\u800c Box \u53ea\u9700\u8981\u653e\u4e00\u4e2a\u6307\u9488\u5927\u5c0f\u5c31\u53ef\u4ee5\u4e86\u3002\u5177\u4f53\u7684\u5185\u5bb9\u5728\u91cc\u9762\u6307\u5411\u3002"}),"\n",(0,r.jsx)(a.Z,{minHeight:240,children:(0,r.jsx)(i.Z,{alt:"Docusaurus themed image",sources:{light:(0,l.Z)("/img/solana/cons.png"),dark:(0,l.Z)("/img/solana/cons.png")}})}),"\n",(0,r.jsxs)(e.h3,{id:"rct",children:["Rc",(0,r.jsx)(e.code,{children:"<T>"})]}),"\n",(0,r.jsx)(e.p,{children:"Rc\uff1aReference Count\uff0c\u4e5f\u5c31\u662f C++\u91cc\u9762\u667a\u80fd\u6307\u9488\u6700\u5e38\u89c1\u7684\u65b9\u5f0f\uff0c\u5f53\u67d0\u4e2a\u7a7a\u95f4\u9700\u8981\u4f7f\u7528\u65f6\uff0c\u5c31\u5bf9\u5176\u8ba1\u6570\u52a0\u4e00\u3002\u5f53\u4e0d\u9700\u8981\u7684\u65f6\u5019\uff0c\u5c31\u51cf\u4e00\u3002\u5f53\u5f15\u7528\u6280\u672f\u7684\u503c\u4e3a 0 \u7684\u65f6\u5019\uff0c\u5c31\u5bf9\u5176\u8fdb\u884c\u9500\u6bc1\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6bd4\u5982\u8fd9\u6837\u7684\u4ee3\u7801\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"enum List {\n        Cons(i32, Box<List>),\n        Nil,\n    }\n\n    use crate::List::{Cons, Nil};\n\n    fn main() {\n        let a = Cons(5, Box::new(Cons(10, Box::new(Nil))));\n        let b = Cons(3, Box::new(a));\n        let c = Cons(4, Box::new(a));\n    }\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4f1a\u51fa\u9519\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"error[E0382]: use of moved value: `a`\n    --\x3e src/main.rs:11:30\n    |\n    9  |     let a = Cons(5, Box::new(Cons(10, Box::new(Nil))));\n    |         - move occurs because `a` has type `List`, which does not implement the `Copy` trait\n    10 |     let b = Cons(3, Box::new(a));\n    |                              - value moved here\n    11 |     let c = Cons(4, Box::new(a));\n    |                              ^ value used here after move\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u56e0\u4e3a\u8fd9\u91cc\u5728\u7528 Box \u521b\u5efa b \u7684\u65f6\u5019\uff0c\u5df2\u7ecf\u5c06 a \u501f\u7528\u4e86\u3002\u63a5\u7740\u53c8\u5728\u521b\u5efa c \u7684\u65f6\u5019\uff0c\u501f\u7528\u4e86 a\uff0c\u6b64\u65f6 a \u6240\u8868\u8fbe\u7684\u7a7a\u95f4\u7684 owner \u5df2\u7ecf\u4e0d\u518d\u662f a\u3002\u56e0\u6b64\u62a5\u9519\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u91cc\u53ef\u4ee5\u4fee\u6539\u6210\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"enum List {\n        Cons(i32, Rc<List>),\n        Nil,\n    }\n\n    use crate::List::{Cons, Nil};\n    use std::rc::Rc;\n\n    fn main() {\n        let a = Rc::new(Cons(5, Rc::new(Cons(10, Rc::new(Nil)))));\n        let b = Cons(3, Rc::clone(&a));\n        let c = Cons(4, Rc::clone(&a));\n    }\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u9996\u5148\u5c06 a \u5b9a\u4e49\u4e3a Rc\uff0c\u662f\u4e00\u4e2a\u5f15\u7528\u8ba1\u6570\u667a\u80fd\u6307\u9488\uff0c\u5b83\u5305\u542b\u4e86\u7a7a\u95f4\u5185\u5bb9\uff0c\u548c\u7a7a\u95f4\u8ba1\u6570\u3002 \u6bcf\u6b21 Rc::clone \u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u5c06\u8ba1\u6570\u5668+1,\u540c\u65f6\u8fd4\u56de\u4e00\u4e2a Rc\uff0c\u5176\u4e2d\u5185\u5bb9\u6307\u5411\u7684\u662f\u540c\u4e00\u4e2a\u5730\u65b9\uff0c\u4f46\u662f\u5f15\u7528\u8ba1\u6570+1\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u56e0\u6b64\u5c31\u53ef\u4ee5\u540c\u65f6\u521b\u5efa b \u548c c \u4e86\u3002"}),"\n",(0,r.jsxs)(e.h3,{id:"refcellt",children:["RefCell",(0,r.jsx)(e.code,{children:"<T>"})]}),"\n",(0,r.jsx)(e.p,{children:"\u524d\u9762\u501f\u7528\u6709\u4ecb\u7ecd\u5230,\u4e0d\u53ef\u4ee5\u5728 mut \u501f\u7528\u540e\uff0c\u7ee7\u7eed\u53ef\u8bfb\u501f\u7528\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6bd4\u5982\u4ee3\u7801\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'fn main() {\n        let x =String::from("hello, world");\n\n        let y = x.borrow_mut();\n        let z = x.borrow();\n\n        print!("y:{}, z:{}", y,z);\n    }\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u62a5\u9519\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"--\x3e src/main.rs:1:5\n    |\n    1 | use std::cell::RefCell;\n    |     ^^^^^^^^^^^^^^^^^^\n    |\n    = note: `#[warn(unused_imports)]` on by default\n\n    error[E0599]: no method named `borrow_mut` found for struct `String` in the current scope\n    --\x3e src/main.rs:6:15\n        |\n    6   |     let y = x.borrow_mut();\n        |               ^^^^^^^^^^ method not found in `String`\n        |\n    ::: /Users/changzeng/.rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/src/rust/library/core/src/borrow.rs:206:8\n        |\n    206 |     fn borrow_mut(&mut self) -> &mut Borrowed;\n        |        ---------- the method is available for `String` here\n        |\n        = help: items from traits can only be used if the trait is in scope\n    help: the following trait is implemented but not in scope; perhaps add a `use` for it:\n        |\n    1   + use std::borrow::BorrowMut;\n        |\n\n    error[E0599]: no method named `borrow` found for struct `String` in the current scope\n    --\x3e src/main.rs:7:15\n        |\n    7   |     let z = x.borrow();\n        |               ^^^^^^ method not found in `String`\n        |\n    ::: /Users/changzeng/.rustup/toolchains/stable-x86_64-apple-darwin/lib/rustlib/src/rust/library/core/src/borrow.rs:179:8\n        |\n    179 |     fn borrow(&self) -> &Borrowed;\n        |        ------ the method is available for `String` here\n        |\n        = help: items from traits can only be used if the trait is in scope\n    help: the following trait is implemented but not in scope; perhaps add a `use` for it:\n        |\n    1   + use std::borrow::Borrow;\n        |\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u73b0\u5728\u4fee\u6539\u6210 RefCell:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'use std::cell::RefCell;\n\n    fn main() {\n        let x = RefCell::new(String::from("hello, world"));\n\n        let y = x.borrow_mut();\n        let z = x.borrow();\n\n        print!("y:{}, z:{}", y,z);\n    }\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u867d\u7136\u4e0d\u53ef\u4ee5\u8fd0\u884c\uff0c\u4f46\u662f\u5374\u53ef\u4ee5\u901a\u8fc7\u7f16\u8bd1\u3002\u56e0\u4e3a\u5728\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u8fd8\u662f\u4f1a\u68c0\u67e5\u501f\u7528\u5173\u7cfb\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"Running `target/debug/helloworld`\n    thread 'main' panicked at 'already mutably borrowed: BorrowError', src/main.rs:7:15\n    note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u90a3\u8fd9\u4e2a\u6709\u5565\u7528\u5462\uff1f\u8fd8\u4e0d\u5982\u5728\u7f16\u8bd1\u671f\u95f4\u68c0\u67e5\u3002\u90a3\u6bd4\u5982\u5982\u4e0b\u4ee3\u7801\u5462\uff1f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'let x = RefCell::new(String::from("hello, world"));\n\n        if your_x_switch {\n            let y = x.borrow_mut();\n        }\n        if (your_z_switch) {\n            let z = x.borrow();\n        }\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u4ec5\u901a\u8fc7\u7f16\u8bd1\u662f\u6ca1\u6cd5\u533a\u5206 if \u5206\u652f\u7684\uff0c\u4f46\u662f\u518d\u8fd0\u884c\u65f6\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u53ea\u8d70\u4e00\u4e2a\u5206\u652f\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u751f\u547d\u5468\u671f",children:"\u751f\u547d\u5468\u671f"}),"\n",(0,r.jsx)(e.p,{children:"\u9996\u5148\u751f\u547d\u5468\u671f\u4fee\u9970\u662f\u4e00\u4e2a\u6cdb\u578b\u4fee\u9970\uff0c\u4e5f\u5c31\u662f\u610f\u5473\u4ed6\u662f\u9488\u5bf9\u7c7b\u578b\u7684\u3002\u751f\u547d\u5468\u671f\u4e3b\u8981\u7528\u6765\u89e3\u51b3\u60ac\u5782\u6307\u9488\u95ee\u9898\u3002\u4e5f\u5c31\u662f\u5f15\u7528\u4e86\u4e00\u4e2a\u5df2\u7ecf\u88ab\u91ca\u653e\u7684\u7a7a\u95f4\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u90a3\u4e48\u5982\u4f55\u4fdd\u8bc1\u88ab\u5f15\u7528\u7684\u7a7a\u95f4\u4e00\u5b9a\u6ca1\u6709\u88ab\u91ca\u653e\u5462\uff1f\u5c31\u9700\u8981\u901a\u8fc7\u751f\u547d\u5468\u671f\u4fee\u9970\uff0c\u4f7f\u5f97 rust \u77e5\u9053\u67d0\u4e2a\u7a7a\u95f4\u8fd8\u5728\u88ab\u5f15\u7528\u4e2d\uff0c\u4e0d\u53ef\u4ee5\u81ea\u52a8\u91ca\u653e\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6bd4\u5982\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"fn main() {\n        let r;                  // ---------+-- 'a\n                                //          |\n        {                       //          |\n            let x = 5;          // -+-- 'b  |\n            r = &x;             //  |       |\n        }                       // -+       |\n                                //          |\n        println!(\"r: {}\", r);   //          |\n    }                           // ---------+\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u91cc\uff0c\u7f16\u8bd1\u4f1a\u62a5\u9519\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'--\x3e src/main.rs:6:13\n    |\n    6 |         r = &x;\n    |             ^^ borrowed value does not live long enough\n    7 |     }\n    |     - `x` dropped here while still borrowed\n    8 |\n    9 |     println!("r: {}", r);\n    |                       - borrow later used here\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u90e8\u5206\uff0c\u5df2\u7ecf\u7528\u6ce8\u91ca\u5427\u751f\u547d\u5468\u671f\u8303\u56f4\u7f57\u5217\u51fa\u6765\u4e86\uff0c\u56e0\u4e3a r \u501f\u7528\u8d85\u8fc7\u4e86'b \u7684\u7a7a\u95f4\uff0c\u6240\u4ee5\u62a5\u9519\uff0c\u56e0\u4e3a\u8d85\u8fc7'b \u540e\uff0cx \u4e0d\u518d\u5b58\u5728\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6240\u4ee5\u4e00\u822c\u6211\u4eec\u5728\u63cf\u8ff0\u751f\u547d\u5468\u671f\u7684\u662f\uff0c\u4e5f\u91c7\u7528'a 'b \u7684\u5f62\u5f0f\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u518d\u6765\u770b\u4e00\u4e2a\u7f16\u8bd1\u9519\u8bef\u7684\u4f8b\u5b50\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'fn longest(x: &str, y: &str) -> &str {\n        if x.len() > y.len() {\n            x\n        } else {\n            y\n        }\n    }\n\n    fn main() {\n        let string1 = String::from("abcd");\n        let string2 = "xyz";\n\n        let result = longest(string1.as_str(), string2);\n        println!("The longest string is {}", result);\n    }\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u62a5\u9519\u4e3a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"--\x3e src/main.rs:9:33\n    |\n    9 | fn longest(x: &str, y: &str) -> &str {\n    |               ----     ----     ^ expected named lifetime parameter\n    |\n    = help: this function's return type contains a borrowed value, but the signature does not say whether it is borrowed from `x` or `y`\n    help: consider introducing a named lifetime parameter\n    |\n    9 | fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {\n    |           ++++     ++          ++          ++\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4fee\u6539\u65b9\u5f0f\uff0c\u7f16\u8bd1\u5668\u4e5f\u7ed9\u51fa\u6765\u4e86\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"fn longest<'a>(x: &'a str, y: &'a str) -> &'a str\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u8fd9\u91cc",(0,r.jsx)(e.code,{children:"<'a>"}),"\u662f\u4e00\u4e2a\u6cdb\u578b\u4fee\u9970\u7b26\uff0c\u5728\u539f\u6709\u7684&str \u4e2d\u95f4\u589e\u52a0 'a \u6765\u4fee\u9970\u8fd9\u4e2a\u53c2\u6570\u7684\u751f\u547d\u5468\u671f\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e0a\u9762\u7684\u4fee\u6539\uff0c\u8981\u6c42\u4f20\u5165\u7684\u53c2\u6570\u751f\u547d\u5468\u671f\uff0cx\u3001y\u3001z \u4e09\u8005\u7684\u6700\u5c0f\u8303\u56f4\u8981\u4e00\u81f4\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"3\u9519\u8bef\u5904\u7406",children:"3\u3001\u9519\u8bef\u5904\u7406"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u7c7b\u4f3c java/c++\u4e2d\uff0c\u5bf9\u9519\u8bef\u5904\u7406\uff0c\u6709\u629b\u5f02\u5e38\u7684\u65b9\u5f0f\uff0c \u800c\u7c7b\u4f3c go \u8fd9\u6837\u7684\uff0c\u4e00\u822c\u4f1a\u901a\u8fc7\u591a\u8fd4\u56de\u503c\u7684\u65b9\u5f0f\uff0c\u8fd4\u56de\u4e00\u4e2a\u9519\u8bef\u3002\u800c\u5728 rust \u4e2d\uff0c\u4e00\u822c\u901a\u8fc7 Enum \u7684\u5f62\u5f0f\uff0c\u8fd4\u56de\u4e00\u76f4\u7ed3\u679c\u8fd4\u56de\u503c\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u9996\u5148\u6765\u770b\u8fd9\u91cc\u8bf4\u7684\u7ed3\u679c\u8fd4\u56de\u503c\uff0cResult \u7684\u5b9a\u4e49\u3002\u8fd9\u4e2a\u5b9a\u4e49\u662f\u6807\u51c6\u5e93\u4e2d\uff0c\u53ef\u4ee5\u5728\u4e0d\u7528\u505a\u7279\u522b use \u7684\u60c5\u51b5\u4e0b\u76f4\u63a5\u4f7f\u7528\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"enum Result<T, E> {\n    Ok(T),\n    Err(E),\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u8d28\u4e0a\u4ed6\u5c31\u662f\u4e2a\u679a\u4e3e\u3002\u5305\u542b\u4e24\u79cd\u53ef\u80fd\uff0c\u8981\u4e48\u662f\u4e00\u4e2a T,\u8981\u4e48\u662f\u4e00\u4e2a E\u3002T \u5c31\u662f\u6210\u529f\u65f6\u5e94\u8be5\u6b63\u786e\u8fd4\u56de\u7684\u503c\u7c7b\u578b\uff0c\u800c E \u5c31\u662f\u9519\u8bef\u65f6\uff0c\u8fd4\u56de\u7684\u9519\u8bef\u7c7b\u578b\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6765\u770b\u4e00\u6bb5\u4f7f\u7528\u6848\u4f8b:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'use std::fs::File;\n\n    fn main() {\n        let greeting_file_result = File::open("hello.txt");\n\n        let greeting_file = match greeting_file_result {\n            Ok(file) => file,\n            Err(error) => panic!("Problem opening the file: {:?}", error),\n        };\n    }\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u56e0\u4e3a Resutl \u662f\u4e2a enum\uff0c\u56e0\u6b64\uff0c\u8fd9\u91cc\u53ef\u4ee5\u901a\u8fc7 match \u8bed\u6cd5\uff0c\u6765\u5bf9\u5176\u8fdb\u884c\u7c7b\u578b\u5339\u914d\u3002"}),"\n",(0,r.jsx)(e.p,{children:"open \u7684\u539f\u578b\u4e3a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"pub fn open<P: AsRef<Path>>(path: P) -> io::Result<File>\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u91cc io::Result \u5b9a\u4e49\u4e3a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"pub type Result<T> = result::Result<T, Error>;\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u800c Error \u662f std::io::error \u5b9a\u4e49\u7684\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"pub struct Error {\n        repr: Repr,\n    }\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6240\u4ee5 Rust \u53ef\u4ee5\u63a8\u5bfc\u51fa\u5982\u679c\u6587\u4ef6\u6253\u5f00\u5931\u8d25\uff0c\u8fd9\u91cc greeting_file_result\uff0c\u8fd4\u56de\u7684\u662f std::io::error::Error\uff0c\u5e76\u653e\u5728\u679a\u4e3e Err(error)\u4e2d\u5305\u88f9\u3002\u901a\u8fc7 match \u53ef\u4ee5\u89e3\u51fa\u6765\u8fdb\u884c\u6253\u5370\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"4\u6d4b\u8bd5\u4ee3\u7801",children:"4\u3001\u6d4b\u8bd5\u4ee3\u7801"}),"\n",(0,r.jsx)(e.p,{children:"\u6d4b\u8bd5\u4ee3\u7801\u4e3b\u8981\u5206\u4e3a\u5355\u5143\u6d4b\u8bd5\u548c\u96c6\u6210\u6d4b\u8bd5\u3002\u7c7b\u4f3c go \u8bed\u8a00\u7279\u6027\uff0cgo \u8bed\u8a00\u5728\u6807\u51c6\u5e93\u548c\u5de5\u5177\u5c42\u9762\u63d0\u4f9b\u4e86\u5355\u5143\u6d4b\u8bd5\u7684\u65b9\u6cd5\u3002 rust \u4e5f\u5728\u5de5\u5177\u548c\u6807\u51c6\u5e93\u5c42\u9762\u63d0\u4f9b\u4e86\u7c7b\u4f3c\u5730\u65b9\u65b9\u6cd5\u3002\u9664\u6b64\u4e4b\u5916\uff0crust \u8fd8\u63d0\u4f9b\u4e86\u96c6\u6210\u6d4b\u8bd5\u6846\u67b6\u6a21\u677f\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u5355\u5143\u6d4b\u8bd5",children:"\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u4ee3\u7801\u6240\u5728\u6587\u4ef6\u4e2d\uff0c\u6dfb\u52a0\u4e00\u4e2a test \u7684 mod \u5e76\u7528#[cfg(test)] \u7279\u6027\u63a7\u5236\uff0c\u7136\u540e\u5728\u8981\u6267\u884c test \u7684\u51fd\u6570\u4e0a\u589e\u52a0\u4fee\u9970 [test] \u5373\u53ef\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"#[cfg(test)]\n    mod tests {\n        #[test]\n        fn it_works() {\n            let result = 2 + 2;\n            assert_eq!(result, 4);\n        }\n    }\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u6837\u5f53\u6211\u4eec\u6267\u884c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"cargo test\n    Compiling testcase v0.1.0 (Solana-Asia-Summer-2023/s101/Solana-Rust/demo/testcase)\n        Finished test [unoptimized + debuginfo] target(s) in 0.23s\n        Running unittests src/lib.rs (target/debug/deps/testcase-4146fa835bb26be8)\n\n    running 1 test\n    test tests::test_fun ... ok\n\n    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n\n    Doc-tests testcase\n\n    running 0 tests\n\n    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5c31\u4f1a\u6267\u884c test mod \u91cc\u9762\u7684 it_works \u51fd\u6570\u4e86\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u4e0a\u9762\u7684\u6d4b\u8bd5\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u7528 assert_eq \u5b8f\u5224\u65ad\u4e86\u662f\u5426\u76f8\u7b49\uff0c\u5982\u679c\u5931\u8d25\u7684\u8bdd\uff0c\u6d4b\u8bd5\u7ed3\u679c\u5c31\u662f\u5931\u8d25\u3002\u6211\u4eec\u8fd8\u53ef\u4ee5\u7528 panic \u5f3a\u884c\u5931\u8d25\uff0c\u8fd9\u91cc\u6211\u4eec\u589e\u52a0\u6d4b\u8bd5\u4ee3\u7801\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:'#[test]\n    fn test_panic() {\n        panic!("got panic");\n    }\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u5931\u8d25 \u7684\u65f6\u5019\u8868\u73b0\u4e3a\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"cargo test\n    Compiling testcase v0.1.0 (Solana-Asia-Summer-2023/s101/Solana-Rust/demo/testcase)\n        Finished test [unoptimized + debuginfo] target(s) in 0.30s\n        Running unittests src/lib.rs (target/debug/deps/testcase-4146fa835bb26be8)\n\n    running 2 tests\n    test tests::test_fun ... ok\n    test tests::test_panic ... FAILED\n\n    failures:\n\n    ---- tests::test_panic stdout ----\n    thread 'tests::test_panic' panicked at 'got panic', src/lib.rs:12:9\n    note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace\n\n\n    failures:\n        tests::test_panic\n\n    test result: FAILED. 1 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n\n    error: test failed, to rerun pass `--lib`\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u96c6\u6210\u6d4b\u8bd5",children:"\u96c6\u6210\u6d4b\u8bd5"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u67d0\u4e2a\u6d4b\u8bd5\uff0c\u9700\u8981\u6d89\u53ca\u5230\u591a\u4e2a\u6a21\u5757\u7684\u4ee3\u7801\uff0c\u5e76\u4e14\u8fd8\u6709\u4e00\u4e9b\u521d\u59cb\u5316\u6216\u8005\u6761\u4ef6\u7684\u8bbe\u7f6e\u3002"}),"\n",(0,r.jsx)(e.p,{children:'\u6211\u4eec\u53ef\u4ee5\u5728\u5de5\u7a0b\u76ee\u5f55\u4e0b\u65b0\u589e\u4e00\u4e2a "tests" \u76ee\u5f55\uff0c\u7136\u540e\u5728\u5728 tests \u76ee\u5f55\u4e0b\u589e\u52a0\u6587\u4ef6\u6216\u8005\u76ee\u5f55\u3002'}),"\n",(0,r.jsx)(e.p,{children:"\u5728 tests \u76ee\u5f55\u4e0b\u7684\u5355\u4e2a\u6587\u4ef6\u4e2d\uff0c\u6b64\u65f6\u53ef\u4ee5\u4e0d\u7528\u4f7f\u7528 test \u6a21\u5757\u3002\u76f4\u63a5\u5199\u8981\u6d4b\u8bd5\u7684\u903b\u8f91\u3002\u53ea\u9700\u8981\u5728\u8981\u6d4b\u8bd5\u7684\u903b\u8f91\u51fd\u6570\u7684\u4e0a\u9762\u7528 #[tset]\u8fdb\u884c\u4fee\u9970\u5373\u53ef\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6bd4\u5982\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-zsh",children:".\n    \u251c\u2500\u2500 Cargo.lock\n    \u251c\u2500\u2500 Cargo.toml\n    \u251c\u2500\u2500 src\n    \u2502   \u2514\u2500\u2500 lib.rs\n    \u2514\u2500\u2500 tests\n        \u251c\u2500\u2500 test01.rs\n        \u2514\u2500\u2500 test_files\n            \u251c\u2500\u2500 func.rs\n            \u2514\u2500\u2500 main.rs\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6307\u5b9a\u6267\u884c\u6d4b\u8bd5\uff1a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-zsh",children:"cargo test --test test01\n        Finished test [unoptimized + debuginfo] target(s) in 0.00s\n        Running tests/test01.rs (target/debug/deps/test01-0c980e86b9bfdada)\n\n    running 1 test\n    test test_main ... ok\n\n    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n"})})]})}function p(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(x,{...n})}):x(n)}},2379:(n,e,s)=>{s.d(e,{Z:()=>l});s(959);const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var t=s(1527);function l(n){let{children:e,minHeight:s,url:l="http://localhost:3000"}=n;return(0,t.jsxs)("div",{className:r.browserWindow,style:{minHeight:s},children:[(0,t.jsxs)("div",{className:r.browserWindowHeader,children:[(0,t.jsxs)("div",{className:r.buttons,children:[(0,t.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,t.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,t.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,t.jsx)("div",{className:r.browserWindowAddressBar,children:l}),(0,t.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,t.jsxs)("div",{children:[(0,t.jsx)("span",{className:r.bar}),(0,t.jsx)("span",{className:r.bar}),(0,t.jsx)("span",{className:r.bar})]})})]}),(0,t.jsx)("div",{className:r.browserWindowBody,children:e})]})}},7279:(n,e,s)=>{s.d(e,{Z:()=>a,a:()=>i});var r=s(959);const t={},l=r.createContext(t);function i(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);