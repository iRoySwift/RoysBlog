---
id: solana-intro
title: 1、Solana介绍
---

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import BrowserWindow from '@site/src/components/BrowserWindow';
```

Solana 作为新一代公链的代表，以高性能和低 gas 费，深受开发者的青睐，为让更多人拥抱区块链打下了坚实的基础。Solana 中文开发教程旨在让更多的中文 Solana 开发者更好地上手在 Solana 上进行开发，和我们一起，为未来 BUIDL!

[Solana 中文开发教程](https://www.solanazh.com/)

## Solana 介绍

一句话概括

-   Solana 是一条高性能的 L1 公链

一张图表示

```mdx-code-block
<BrowserWindow minHeight={240} >
<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/img/solana/sol_kline.png'),
    dark: useBaseUrl('/img/solana/sol_kline.png'),
  }}
/>
</BrowserWindow>
```

曾经也是辉煌夺目

## Solana 历史

2017 年 11 月，Anatoly Yakovenko 发表了一篇白皮书，介绍了“Proof of History”这一技术，用于在不信任彼此的计算机之间进行时间同步。根据 Anatoly 在高通、Mesosphere 和 Dropbox 设计分布式系统的经验，他知道可靠的时钟可以使网络同步变得非常简单。当同步变得简单时，结果的网络可以非常快速，仅受网络带宽的限制。

Anatoly 注意到，没有时钟的区块链系统（如比特币和以太坊）在全球范围内的交易速度在 15 次每秒时遇到困难，而世界中心化支付系统（如 Visa）则需要峰值 65000 次每秒。 没有时钟，很明显他们永远无法成为全球支付系统或全球超级计算机。当 Anatoly 解决了计算机之间不信任时间一致性的问题时，他知道他拥有将 40 年分布式系统研究带给区块链世界的关键。由此产生的集群不仅仅是 10 倍、100 倍或 1000 倍，而是立即实现了出厂时是一万倍的速度！

Anatoly 的实施开始是在一个私人代码库中，使用 C 编程语言进行实现。曾在 Qualcomm Incorporated 与 Anatoly 一起合作的 Greg Fitzgerald 鼓励他以 Rust 编程语言重新实现该项目。Greg 曾在 LLVM 编译器基础设施上工作，该基础设施是 Clang C/C++编译器和 Rust 编译器的基础。Greg 声称该语言的安全保证将提高软件的生产率，并且其无垃圾回收器将使程序能够像使用 C 编写的程序一样运行。Anatoly 尝试了一下，仅用了两个星期，就将他的整个代码库迁移到了 Rust 上。成功了。计划将全球的交易编织在一个可伸缩的区块链上，Anatoly 将该项目命名为 Loom。

2018 年 2 月 13 日，Greg 开始为 Anatoly 的白皮书创建开源实现的原型。该项目在 Loom 协议组织的 GitHub 上发布，命名为 Silk。2 月 28 日，Greg 发布了首个版本，演示了超过 10,000 个签名交易可以在半秒内验证和处理。不久之后，另一位曾在高通工作的同事 Stephen Akridge 演示了通过将签名验证转移至图形处理器可以大大提高吞吐量。Anatoly 邀请 Greg、Stephen 和其他三个人共同创办了一家名为 Loom 的公司。

与此同时，基于以太坊的项目 Loom Network 涌现出来，许多人对它们是否是同一个项目感到困惑。Loom 团队决定进行重新品牌推广。他们选择名为 Solana 的名字，以致敬他们在工作于高通期间住和冲浪了三年的圣地亚哥北部的一个小海滩城镇 Solana Beach。 2018 年 3 月 28 日，团队创建了 Solana GitHub 组织，并将 Greg 的原型命名为 Solana。

2018 年 6 月，团队将技术扩展到云网络上运行，并于 7 月 19 日发布了一个 50 个节点的许可,且公开的测试网络，能够始终支持每秒 25 万个交易的突发。在稍后于 12 月的 v0.10 Pillbox 版本中，团队发布了一个以千兆位网络运行 150 个节点的许可测试网络，演示了平均每秒处理 20 万个交易和突发 500 万个交易的吸收测试。该项目还扩展到支持使用 C 编程语言编写的链上程序，并在称为 SBF 的安全执行环境中并行运行。

## Solana 开发流程

Solana 网络是一个庞大的全球计算机，任何人都可以支付费用来存储和执行代码。部署的代码被称为程序，在其他区块链上通常被称为智能合约。要与程序交互，您需要从客户端在区块链上发送一笔交易。这是一个高层次的表示。需要注意的是，这只是为了简单易懂而对 Solana 网络的过度简化。

Solana 开发者工作流程是程序-客户（program-client）模型。程序开发的第一个工作流程允许您直接创建和部署自定义的 Rust、C 和 C++程序到区块链。一旦这些程序部署完成，任何知道如何与它们通信的人都可以使用它们。您可以使用任何可用的客户端 SDK（或 CLI）编写 dApps 来与这些程序通信，所有这些 SDK 都在底层使用 JSON RPC API。

客户端开发是第二个工作流，您可以在这里编写与部署的程序通信的 dApp。您的应用程序可以通过客户端 SDK 向这些程序提交交易指令，以创建各种应用程序，如钱包、交易所等。最常用的应用程序是浏览器扩展钱包和 Web 应用程序，但您也可以构建移动、桌面应用程序或任何能够与 JSON RPC API 通信的应用程序。

这两个部分共同工作，创建了一个由 dApp 和程序组成的网络，它们可以相互通信以更新状态并查询区块链。

```mdx-code-block
<BrowserWindow minHeight={240} >
<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/img/solana/solana-overview-client-program.png'),
    dark: useBaseUrl('/img/solana/solana-overview-client-program.png'),
  }}
/>
</BrowserWindow>
```
