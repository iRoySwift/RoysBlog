"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[322],{9382:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>t});var a=s(1527),i=s(7279);const r={id:"solana-cargo-manage",title:"3\u3001\u901a\u8fc7Cargo\u7ba1\u7406\u5de5\u7a0b"},l=void 0,c={id:"solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/solana-cargo-manage",title:"3\u3001\u901a\u8fc7Cargo\u7ba1\u7406\u5de5\u7a0b",description:"cargo \u4f5c\u4e3a rust \u7684\u5de5\u7a0b\u7ba1\u7406\u5de5\u5177\u3002\u7c7b\u4f3c go \u8bed\u8a00\u7684 gomod\u3002\u5176\u4e3b\u8981\u901a\u8fc7 Cargo.toml \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\uff0c \u914d\u5408 cargo \u4e8c\u8fdb\u5236\u5de5\u5177\u6765\u7ba1\u7406\u4f9d\u8d56\u3002",source:"@site/docs/solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/3\u3001\u901a\u8fc7Cargo\u7ba1\u7406\u5de5\u7a0b.md",sourceDirName:"solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6",slug:"/solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/solana-cargo-manage",permalink:"/docs/solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/solana-cargo-manage",draft:!1,unlisted:!1,editUrl:"https://github.com/iRoySwift/RoysBlog/tree/master/docs/solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/3\u3001\u901a\u8fc7Cargo\u7ba1\u7406\u5de5\u7a0b.md",tags:[],version:"current",frontMatter:{id:"solana-cargo-manage",title:"3\u3001\u901a\u8fc7Cargo\u7ba1\u7406\u5de5\u7a0b"},sidebar:"docs",previous:{title:"2\u3001Rust\u57fa\u672c\u8bed\u6cd5",permalink:"/docs/solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/solana-rust-lang"},next:{title:"4\u3001Rustaceans\u7684\u7406\u89e3",permalink:"/docs/solana/solana-bootcamp/4\u3001Rust\u57fa\u672c\u77e5\u8bc6/solana-rustaceans"}},o={},t=[{value:"1\u3001cargo \u547d\u4ee4",id:"1cargo-\u547d\u4ee4",level:2},{value:"\u521b\u5efa\u5de5\u7a0b",id:"\u521b\u5efa\u5de5\u7a0b",level:3},{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"\u6784\u5efa &amp; \u6267\u884c",id:"\u6784\u5efa--\u6267\u884c",level:3},{value:"2\u3001Cargo.toml \u7ed3\u6784",id:"2cargotoml-\u7ed3\u6784",level:2},{value:"3\u3001\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784",id:"3\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784",level:2},{value:"\u53ef\u6267\u884c\u7a0b\u5e8f",id:"\u53ef\u6267\u884c\u7a0b\u5e8f",level:3},{value:"4\u3001\u4f8b\u5b50\u7a0b\u5e8f",id:"4\u4f8b\u5b50\u7a0b\u5e8f",level:2},{value:"\u96c6\u6210\u6d4b\u8bd5\u7a0b\u5e8f",id:"\u96c6\u6210\u6d4b\u8bd5\u7a0b\u5e8f",level:3},{value:"5\u3001\u53c2\u8003",id:"5\u53c2\u8003",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"cargo \u4f5c\u4e3a rust \u7684\u5de5\u7a0b\u7ba1\u7406\u5de5\u5177\u3002\u7c7b\u4f3c go \u8bed\u8a00\u7684 gomod\u3002\u5176\u4e3b\u8981\u901a\u8fc7 Cargo.toml \u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\uff0c \u914d\u5408 cargo \u4e8c\u8fdb\u5236\u5de5\u5177\u6765\u7ba1\u7406\u4f9d\u8d56\u3002"}),"\n",(0,a.jsx)(n.p,{children:"cargo \u5728\u901a\u8fc7 rustup \u5b89\u88c5 rust \u7684\u8fc7\u7a0b\u4e2d\u5df2\u7ecf\u5b89\u88c5\u597d\u4e86\u3002Cargo.toml \u5728\u901a\u8fc7 cargo new \u521b\u5efa\u5de5\u7a0b\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u751f\u6210\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u6784\u5efa\u7684\u65f6\u5019\uff0ccargo \u4f1a\u6839\u636e Cargo.toml \u4e2d\u7684\u4f9d\u8d56\uff0c\u81ea\u52a8\u62c9\u53d6\u4f9d\u8d56\u7684\u4ee3\u7801\uff0c\u5e76\u5c06\u76f8\u5e94\u7684\u7248\u672c\u4fe1\u606f\uff0c\u8d44\u6e90\u7b7e\u540d\uff0c\u8bb0\u5f55\u5728 Cargo.lock \u6587\u4ef6\u4e2d\uff0c\u8be5\u6587\u4ef6\u7c7b\u4f3c go.sum \u6587\u4ef6\uff0c\u8bb0\u5f55\u4e86\u5404\u4e2a\u4f9d\u8d56\u7684 meta \u4fe1\u606f\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"1cargo-\u547d\u4ee4",children:"1\u3001cargo \u547d\u4ee4"}),"\n",(0,a.jsx)(n.h3,{id:"\u521b\u5efa\u5de5\u7a0b",children:"\u521b\u5efa\u5de5\u7a0b"}),"\n",(0,a.jsx)(n.p,{children:"\u9996\u5148\u901a\u8fc7 cargo \u547d\u4ee4\uff0c\u53ef\u4ee5\u521b\u5efa\u5de5\u7a0b\u3002\u521b\u5efa\u7684\u5de5\u7a0b\u5206\u6210\u4e24\u7c7b\uff0c\u4e00\u7c7b\u662f\u5e93\uff0c\u4e00\u7c7b\u662f\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u7a0b\u5e8f\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7 cargo new project_name \u547d\u4ee4\u53ef\u4ee5\u521b\u5efa project_name \u7684\u5de5\u7a0b\u3002\u9ed8\u8ba4\u5de5\u7a0b\u662f\u4e00\u4e2a\u53ef\u6267\u884c\u7a0b\u5e8f\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7\u6307\u5b9a--lib \u53ef\u4ee5\u6307\u5b9a\u5176\u4e3a\u5e93\u9879\u76ee\u3002\u4e00\u4e2a\u5de5\u7a0b\uff0c\u53ea\u80fd\u5305\u542b\u4e00\u4e2a\u5e93\u76ee\u6807\uff0c\u4f46\u662f\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u4e8c\u8fdb\u5236\u7a0b\u5e8f\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u6dfb\u52a0\u4f9d\u8d56",children:"\u6dfb\u52a0\u4f9d\u8d56"}),"\n",(0,a.jsx)(n.p,{children:"\u5f53\u9700\u8981\u4f9d\u8d56\u5916\u90e8\u5e93\u7684\u65f6\u5019\uff0c\u9996\u5148\u8981\u5c06\u5176\u52a0\u5165\u5230\u5de5\u7a0b\u4e2d\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"cargo add [options] crate\u2026\n    cargo add [options] --path path\n    cargo add [options] --git url [crate\u2026]\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u4e09\u79cd\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u9488\u5bf9\u4e09\u79cd\u60c5\u51b5\u7684\u4f9d\u8d56\u3002"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u76f4\u63a5\u8ddf\u5e93\u540d\uff0c\u4f1a\u53bb cargo.io \u4e0a\u7d22\u5f15\uff0c\u627e\u5230\u6700\u65b0\u7684\u7248\u672c"}),"\n",(0,a.jsx)(n.li,{children:"--path \u6307\u5b9a\u5e93\u5728\u672c\u5730\u7684\u8def\u5f84\uff0c\u53ef\u4ee5\u5bf9\u672c\u5730\u76ee\u5f55\u8fdb\u884c\u4f9d\u8d56"}),"\n",(0,a.jsx)(n.li,{children:"--git \u5219\u6307\u5b9a\u7684 git \u4ed3\u5e93\u7684\u8def\u5f84\uff0c\u6bd4\u5982\u662f\u79c1\u6709\u7684 git \u4ed3\u5e93\n\u901a\u8fc7 cargo remove \u53ef\u4ee5\u79fb\u9664\u76f8\u5173\u7684\u4f9d\u8d56\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"\u6784\u5efa--\u6267\u884c",children:"\u6784\u5efa & \u6267\u884c"}),"\n",(0,a.jsx)(n.p,{children:"\u524d\u9762\u5df2\u7ecf\u63a5\u89e6\u4e86\u6784\u5efa\u3002\u76f4\u63a5\u7528 build \u5c31\u53ef\u4ee5\u4e86:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"cargo build [options]\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u91cc\u6709\u51e0\u4e2a\u53c2\u6570"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"--workspace\uff1a \u6784\u5efa\u6574\u4e2a workspace \u91cc\u9762\u7684\u76ee\u6807"}),"\n",(0,a.jsx)(n.li,{children:"--lib\uff1a \u6784\u5efa\u5e93\u76ee\u6807"}),"\n",(0,a.jsx)(n.li,{children:"--bin name\u2026\uff1a \u53ea\u6784\u5efa\u6307\u5b9a\u7684\u53ef\u6267\u884c\u6587\u4ef6"}),"\n",(0,a.jsx)(n.li,{children:"--example name\u2026\uff1a \u53ea\u6784\u5efa\u6307\u5b9a\u7684 example"}),"\n",(0,a.jsx)(n.li,{children:"--test name\u2026\uff1a \u6784\u5efa\u6307\u5b9a\u7684 test"}),"\n",(0,a.jsx)(n.li,{children:"--release: \u91c7\u7528 relase \u6784\u5efa"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u800c\u901a\u8fc7\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"cargo clean [options]\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5219\u53ef\u4ee5\u6e05\u9664\u6784\u5efa\u7ed3\u679c"}),"\n",(0,a.jsx)(n.p,{children:"\u6267\u884c\u901a\u8fc7 run \u547d\u4ee4\u6765\u53d1\u8d77\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"cargo run [options] [-- args]\n"})}),"\n",(0,a.jsx)(n.p,{children:'\u5176\u4e2d\u5982\u679c\u662f\u4f20\u9012\u7ed9 cargo \u7684 flag \u76f4\u63a5\u4f20\u5165\u3002\u5982\u679c\u8981\u4f20\u9012\u7ed9\u88ab\u6267\u884c\u7684\u7a0b\u5e8f\u3002\u5219\u9700\u8981\u4f7f\u7528 "--" \u505a\u5206\u5272\u3002\u5176\u540e\u7684 flag \u624d\u662f\u4f20\u9012\u7ed9\u8981\u8fd0\u884c\u7684\u7a0b\u5e8f\u7684\u3002'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"--bin name\u2026\uff1a \u53ea\u6267\u884c\u6307\u5b9a\u7684\u53ef\u6267\u884c\u6587\u4ef6"}),"\n",(0,a.jsx)(n.li,{children:"--example name\u2026\uff1a \u53ea\u6267\u884c\u6307\u5b9a\u7684 example"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u6bd4\u5982"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"cargo run --bin helloworld\n    Finished dev [unoptimized + debuginfo] target(s) in 0.04s\n    Running `target/debug/helloworld`\n    Please use ./hellowolrd name.\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6ca1\u6709\u643a\u5e26\u53c2\u6570\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u662f\u8fd9\u6837\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"cargo run --bin helloworld -l\n    error: unexpected argument '-l' found\n\n    tip: to pass '-l' as a value, use '-- -l'\n\n    Usage: cargo run [OPTIONS] [args]...\n\n    For more information, try '--help'.\n"})}),"\n",(0,a.jsx)(n.p,{children:'\u8fd9\u91cc\u5b9e\u9645\u4e0a\u662f\u628a-l \u4f20\u9012\u7ed9\u4e86 cargo run \uff0c\u4f46\u662f cargo run \u672c\u8eab\u662f\u4e0d\u63a5\u53d7"-l"\u7684 flag \u7684\u3002\u6240\u4ee5\u8fd9\u91cc\u62a5\u9519\u4e86\u3002'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"cargo run --bin helloworld -- -l\n        Finished dev [unoptimized + debuginfo] target(s) in 0.00s\n        Running `target/debug/helloworld -l`\n    Hello -l\n"})}),"\n",(0,a.jsx)(n.p,{children:'\u901a\u8fc7"--"\u7684\u5206\u5272\uff0c\u6211\u4eec\u5c06 flag \u53c2\u6570\u8df3\u8fc7 cargo run \u4f20\u9012\u7ed9\u53ef\u6267\u884c\u7a0b\u5e8f\u3002'}),"\n",(0,a.jsx)(n.p,{children:"\u66f4\u591a\u5176\u4ed6\u53c2\u6570\u53ef\u4ee5\u53c2\u8003 The Cargo Book"}),"\n",(0,a.jsx)(n.h2,{id:"2cargotoml-\u7ed3\u6784",children:"2\u3001Cargo.toml \u7ed3\u6784"}),"\n",(0,a.jsx)(n.p,{children:"\u6bcf\u4e2a Cargo.toml \u5305\u542b\u5982\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"[cargo-features] --- Unstable, nightly-only features."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"[[package]] --- Defines a package."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"[name] --- The name of the package."}),"\n",(0,a.jsx)(n.li,{children:"[version] --- The version of the package."}),"\n",(0,a.jsx)(n.li,{children:"[authors] --- The authors of the package."}),"\n",(0,a.jsx)(n.li,{children:"[edition] --- The Rust edition."}),"\n",(0,a.jsx)(n.li,{children:"[rust-version] --- The minimal supported Rust version."}),"\n",(0,a.jsx)(n.li,{children:"[description] --- A description of the package."}),"\n",(0,a.jsx)(n.li,{children:"[documentation] --- URL of the package documentation."}),"\n",(0,a.jsx)(n.li,{children:"[readme] --- Path to the package's README file."}),"\n",(0,a.jsx)(n.li,{children:"[homepage] --- URL of the package homepage."}),"\n",(0,a.jsx)(n.li,{children:"[repository] --- URL of the package source repository."}),"\n",(0,a.jsx)(n.li,{children:"[license] --- The package license."}),"\n",(0,a.jsx)(n.li,{children:"[license-file] --- Path to the text of the license."}),"\n",(0,a.jsx)(n.li,{children:"[keywords] --- Keywords for the package."}),"\n",(0,a.jsx)(n.li,{children:"[categories] --- Categories of the package."}),"\n",(0,a.jsx)(n.li,{children:"[workspace] --- Path to the workspace for the package."}),"\n",(0,a.jsx)(n.li,{children:"[build] --- Path to the package build script."}),"\n",(0,a.jsx)(n.li,{children:"[links] --- Name of the native library the package links - with."}),"\n",(0,a.jsx)(n.li,{children:"[exclude] --- Files to exclude when publishing."}),"\n",(0,a.jsx)(n.li,{children:"[include] --- Files to include when publishing."}),"\n",(0,a.jsx)(n.li,{children:"[publish] --- Can be used to prevent publishing the - package."}),"\n",(0,a.jsx)(n.li,{children:"[metadata] --- Extra settings for external tools."}),"\n",(0,a.jsx)(n.li,{children:"[default-run] --- The default binary to run by [cargo - run]."}),"\n",(0,a.jsx)(n.li,{children:"[autobins] --- Disables binary auto discovery."}),"\n",(0,a.jsx)(n.li,{children:"[autoexamples] --- Disables example auto discovery."}),"\n",(0,a.jsx)(n.li,{children:"[autotests] --- Disables test auto discovery."}),"\n",(0,a.jsx)(n.li,{children:"[autobenches] --- Disables bench auto discovery."}),"\n",(0,a.jsx)(n.li,{children:"[resolver] --- Sets the dependency resolver to use."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Target tables:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"[[lib]] --- Library target settings."}),"\n",(0,a.jsx)(n.li,{children:"[[[bin]]] --- Binary target settings."}),"\n",(0,a.jsx)(n.li,{children:"[[[example]]] --- Example target settings."}),"\n",(0,a.jsx)(n.li,{children:"[[[test]]] --- Test target settings."}),"\n",(0,a.jsx)(n.li,{children:"[[[bench]]] --- Benchmark target settings."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Dependency tables:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"[[dependencies]] --- Package library dependencies."}),"\n",(0,a.jsx)(n.li,{children:"[[dev-dependencies]] --- Dependencies for examples, - tests, and benchmarks."}),"\n",(0,a.jsx)(n.li,{children:"[[build-dependencies]] --- Dependencies for build - scripts."}),"\n",(0,a.jsx)(n.li,{children:"[[target]] --- Platform-specific dependencies."}),"\n",(0,a.jsx)(n.li,{children:"[[badges]] --- Badges to display on a registry."}),"\n",(0,a.jsx)(n.li,{children:"[[features]] --- Conditional compilation features."}),"\n",(0,a.jsx)(n.li,{children:"[[patch]] --- Override dependencies."}),"\n",(0,a.jsx)(n.li,{children:"[[replace]] --- Override dependencies ."}),"\n",(0,a.jsx)(n.li,{children:"[[profile]] --- Compiler settings and optimizations."}),"\n",(0,a.jsx)(n.li,{children:"[[workspace]] --- The workspace definition."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u6574\u4e2a\u7684\u5b8c\u6574\u7684\u5185\u5bb9\u4f1a\u6bd4\u8f83\u591a\uff0c\u666e\u901a\u60c5\u51b5\u4e0b\u53ea\u9700\u8981\u4f7f\u7528\u9ed8\u8ba4\u751f\u6210\u7684\u6587\u4ef6\uff0c\u7136\u540e\u5728\u91cc\u9762\u586b\u5145 dependence \u5373\u53ef\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4f5c\u4e3a\u5b9e\u8df5\uff0c\u4e00\u822c\u5c06 Cargo.toml \u5206\u6210\u4e24\u7c7b\u3002\u5bf9\u4e8e\u4e00\u4e2a\u5927 repo\uff0c\u4f1a\u5c06\u6240\u6709\u7684\u4ee3\u7801\u653e\u5728\u4e00\u4e2a\u76ee\u5f55\u4e0b\u9762\uff0c\u901a\u8fc7\u4e00\u4e2a\u5305\u542b workspace \u7684 Cargo.toml \u6765\u7ba1\u7406\u5176\u4ed6\u81ea Cargo.toml\u3002\u7c7b\u4f3c Makefile \u7684\u5d4c\u5957\u7ba1\u7406\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6bd4\u5982 solana \u5de5\u7a0b\u7684\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:'[workspace]\n    members = [\n        "account-decoder",\n        "accounts-bench",\n        ...\n    ]\n\n\n    exclude = [\n        "programs/sbf",\n    ]\n\n    # This prevents a Travis CI error when building for Windows.\n    resolver = "2"\n\n    [workspace.package]\n    version = "1.17.0"\n    authors = ["Solana Labs Maintainers <maintainers@solanalabs.com>"]\n    repository = "https://github.com/solana-labs/solana"\n    homepage = "https://solanalabs.com/"\n    license = "Apache-2.0"\n    edition = "2021"\n\n    [workspace.dependencies]\n    aes-gcm-siv = "0.10.3"\n    ahash = "0.8.3"\n\n    ...\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u91cc\u80fd\u770b\u5230\uff0c\u4e3b\u8981\u7ed3\u6784\u5c31\u662f\u901a\u8fc7 ",(0,a.jsx)(n.code,{children:"workspace.members"})," \u6765\u6307\u5b9a\u4e86\u5b50\u76ee\u5f55\u3002 exclude \u6307\u5b9a\u4e0d\u8981\u7684\u76ee\u5f55\u3002",(0,a.jsx)(n.code,{children:"workspace.dependencies"})," \u6307\u5b9a\u4e86\u6574\u4e2a\u5de5\u4f5c \u533a\u8981\u4f9d\u8d56\u7684\u5e93\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u53e6\u5916\u4e00\u79cd\u5c31\u662f\u5177\u4f53\u7684\u6267\u884c\u7a0b\u5e8f\u6216\u8005\u5e93\u7684\u76ee\u5f55\uff0c\u4e5f\u5c31\u662f workspace \u7ba1\u7406\u7684\u5177\u4f53\u5b50\u76ee\u5f55\uff0c\u8fd9\u91cc\u6bd4\u5982 solana cli \u7684\u76ee\u5f55\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:'[package]\n    name = "solana-cli"\n    description = "Blockchain, Rebuilt for Scale"\n    documentation = "https://docs.rs/solana-cli"\n    version = { workspace = true }\n    authors = { workspace = true }\n    repository = { workspace = true }\n    homepage = { workspace = true }\n    license = { workspace = true }\n    edition = { workspace = true }\n\n    [dependencies]\n    bincode = { workspace = true }\n    bs58 = { workspace = true }\n    ...\n\n    [dev-dependencies]\n    solana-streamer = { workspace = true }\n    solana-test-validator = { workspace = true }\n    tempfile = { workspace = true }\n\n    [[bin]]\n    name = "solana"\n    path = "src/main.rs"\n\n    [package.metadata.docs.rs]\n    targets = ["x86_64-unknown-linux-gnu"]\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u91cc package \u4e0b\u9762\u7684\u952e\u6307\u5b9a\u4e86\u5e93\u7684\u5c5e\u6027\uff0c\u6bd4\u5982\u540d\u5b57\uff0c\u63cf\u8ff0\u3002\u800c dependencies \u6307\u5b9a\u4e86\u4f9d\u8d56\uff0c \u5176\u4e2d ",(0,a.jsx)(n.code,{children:"{ workspace = true }"})," \u8868\u793a\u5176\u7ee7\u627f workspace \u7236\u76ee\u5f55\u4e2d\u7684 \u76f8\u5173\u4f4d\u7f6e\u7248\u672c\u7684\u4fe1\u606f\u3002"]}),"\n",(0,a.jsx)(n.p,{children:'\u6700\u540e\u8fd9\u901a\u8fc7[[bin]]\u5b9a\u4e49\u4e86\u8fd9\u91cc\u6709\u4e2a\u53ef\u6267\u884c\u7a0b\u5e8f\u53eb: "solana"'}),"\n",(0,a.jsx)(n.h2,{id:"3\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784",children:"3\u3001\u5de5\u7a0b\u76ee\u5f55\u7ed3\u6784"}),"\n",(0,a.jsx)(n.p,{children:"\u6211\u4eec\u6765\u770b\u4e00\u4e2a\u76f8\u5bf9\u590d\u6742\u7684 cargo \u5de5\u7a0b\u76ee\u5f55\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 examples\n\u2502   \u251c\u2500\u2500 example01.rs\n\u2502   \u2514\u2500\u2500 example_files\n\u2502       \u251c\u2500\u2500 func.rs\n\u2502       \u2514\u2500\u2500 main.rs\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 bin\n\u2502   \u2502   \u251c\u2500\u2500 bin1.rs\n\u2502   \u2502   \u2514\u2500\u2500 bin2.rs\n\u2502   \u2514\u2500\u2500 lib.rs\n\u2514\u2500\u2500 tests\n    \u251c\u2500\u2500 test01.rs\n    \u2514\u2500\u2500 test_files\n        \u251c\u2500\u2500 func.rs\n        \u2514\u2500\u2500 main.rs\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5728\u8fd9\u4e2a demo \u91cc\u9762\uff0c\u6211\u4eec\u4e3b\u8981\u5305\u542b\u4e86 \u4e09\u4e2a\u76ee\u5f55\uff1a"}),"\n",(0,a.jsx)(n.p,{children:"src: \u5e93\u548c\u4e8c\u8fdb\u5236\u6587\u4ef6\nexample: \u4f8b\u5b50\ntests: \u96c6\u6210\u6d4b\u8bd5"}),"\n",(0,a.jsx)(n.h3,{id:"\u53ef\u6267\u884c\u7a0b\u5e8f",children:"\u53ef\u6267\u884c\u7a0b\u5e8f"}),"\n",(0,a.jsx)(n.p,{children:"\u53ef\u6267\u884c\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u5c06\u5176\u653e\u5165 src/bin \u76ee\u5f55\u4e0b\u3002\u6bcf\u4e2a\u6587\u4ef6\u53ef\u4ee5\u6709\u81ea\u5df1\u5355\u72ec\u7684 main \u51fd\u6570\u3002\u6bd4\u5982\u8fd9\u91cc\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'bin1.rs:\n\n    use cargodir::lib_func;\n\n\n    fn main() {\n        lib_func();\n        println!("it is bin1");\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u4f7f\u7528\u5230\u7684\u5e93\u51fd\u6570\u5728 lib.rs \u4e2d\u5b9a\u4e49\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'pub fn lib_func() {\n        println!("lib_func");\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u4f46\u662f\u5728\u53ef\u6267\u884c\u7a0b\u5e8f\u6587\u4ef6\u4e2d\uff0c\u901a\u8fc7 use \u6765\u5305\u542b\uff0c\u7136\u540e\u5728 main \u51fd\u6570\u4e2d\u8c03\u7528\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u662f\u6309\u7167 src/bin \u76ee\u5f55\u6765\u7ec4\u7ec7\u4ee3\u7801\u7684\uff0c\u9700\u8981\u5728 Cargo.toml \u4e2d\u8fdb\u884c\u6307\u5b9a\uff0c\u6bd4\u5982\u7528 cli \u76ee\u5f55\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:'[[bin]]\n    name = "bin1"\n    path = "src/cli/bin1.rs"\n\n    [[bin]]\n    name = "bin2"\n    path = "src/cli/bin2.rs"\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u6837\u5c31\u53ef\u4ee5\u901a\u8fc7--bin \u6765\u6307\u5b9a\u8981\u6267\u884c\u54ea\u4e2a name \u7684\u53ef\u6267\u884c\u7a0b\u5e8f\u4e86\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-zsh",children:"cargo run --bin bin1\n        Finished dev [unoptimized + debuginfo] target(s) in 0.00s\n        Running `target/debug/bin1`\n    lib_func\n    it is bin1\n"})}),"\n",(0,a.jsx)(n.h2,{id:"4\u4f8b\u5b50\u7a0b\u5e8f",children:"4\u3001\u4f8b\u5b50\u7a0b\u5e8f"}),"\n",(0,a.jsx)(n.p,{children:"\u793a\u4f8b\u7a0b\u5e8f\u53ef\u4ee5\u901a examples \u76ee\u5f55\u6765\u7ba1\u7406\u3002\u5176\u4e2d\u53ef\u4ee5\u662f\u5355\u4e2a\u6587\u4ef6\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e00\u4e2a\u76ee\u5f55\u6765\u7ec4\u7ec7\u591a\u4e2a\u6587\u4ef6\u3002\u5355\u4e2a\u6587\u4ef6\u548c\u76ee\u5f55\u4e2d\u90fd\u53ef\u4ee5\u5b9e\u73b0 main \u51fd\u6570\u4f5c\u4e3a\u793a\u4f8b\u7a0b\u5e8f\u7684\u5165\u53e3\uff1a"}),"\n",(0,a.jsx)(n.p,{children:"\u6bd4\u5982 example01.rs:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'fn main() {\n        println!("it is example 01 ");\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd9\u6837\u53ea\u8981\u6267\u884c\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"cargo run --example example01\n    Compiling cargodir v0.1.0 (Solana-Asia-Summer-2023/s101/Solana-Rust/demo/cargodir)\n        Finished dev [unoptimized + debuginfo] target(s) in 0.20s\n        Running `target/debug/examples/example01`\n    it is example 01\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u96c6\u6210\u6d4b\u8bd5\u7a0b\u5e8f",children:"\u96c6\u6210\u6d4b\u8bd5\u7a0b\u5e8f"}),"\n",(0,a.jsx)(n.p,{children:"\u5355\u5143\u6d4b\u8bd5\u662f\u653e\u5728\u5b9e\u73b0\u6587\u4ef6\u4e2d\u7684\uff0c\u5982\u679c\u6709\u96c6\u6210\u6d4b\u8bd5\uff0c\u5219\u53ef\u4ee5\u7c7b\u4f3c\u4f8b\u5b50\u4e00\u6837\uff0c\u7ec4\u7ec7\u5728 tests \u76ee\u5f55\u4e2d\u3002\u4e00\u6837\u53ef\u4ee5\u5355\u4e2a\u6587\u4ef6\u6216\u8005\u591a\u4e2a\u6587\u4ef6\u653e\u5728\u4e00\u4e2a\u76ee\u5f55\u4e2d\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u6bd4\u5982\uff1atest01.rs:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'#[test]\n    fn test_main() {\n        println!("it is test 01");\n    }\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u8fd0\u884c\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"cargo test --test test01\n    Compiling cargodir v0.1.0 (Solana-Asia-Summer-2023/s101/Solana-Rust/demo/cargodir)\n        Finished test [unoptimized + debuginfo] target(s) in 0.22s\n        Running tests/test01.rs (target/debug/deps/test01-de791c18df3f4346)\n\n    running 1 test\n    test test_main ... ok\n\n    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s\n"})}),"\n",(0,a.jsx)(n.h2,{id:"5\u53c2\u8003",children:"5\u3001\u53c2\u8003"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://doc.rust-lang.org/cargo/",children:"The Cargo Book"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7279:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>l});var a=s(959);const i={},r=a.createContext(i);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);