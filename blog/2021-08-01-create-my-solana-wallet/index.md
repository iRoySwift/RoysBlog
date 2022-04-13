---
title: 创建Solana钱包
slug: create-my-solana-wallet
authors: roy
tags: [Solana, Wallet]
image: https://explorer.solana.com/favicon.ico
hide_table_of_contents: false
# date: 2021-09-13T10:00
---

# 介绍

## 💸 什么是 Solana?

Solana 是一个开源项目，实现了一个新的、高性能的、无需许可的区块链。 Solana 基金会位于瑞士日内瓦，负责维护开源项目。

**如果您想在 Solana 区块链上接收 SOL 令牌，您首先需要创建一个钱包。**

<!--truncate-->

## 💰 什么是钱包？

加密钱包是一种存储密钥集合的设备或应用程序，可用于发送、接收和跟踪加密货币的所有权。钱包可以采取多种形式。钱包可能是计算机文件系统中的目录或文件，一张纸，也可能是称为硬件钱包的专用设备。还有各种智能手机应用程序和计算机程序，为创建和管理钱包提供了一种用户友好的方式。

密钥对是安全生成的私钥及其加密派生的公钥。私钥及其相应的公钥一起被称为密钥对。钱包包含一个或多个密钥对的集合，并提供一些与它们交互的方式。

公钥（通常缩写为 pubkey）被称为钱包的接收地址或简称为其地址。钱包地址**可以免费共享和显示**。当另一方要向钱包发送一定数量的加密货币时，他们需要知道钱包的接收地址。根据区块链的实现，该地址也可以用于查看有关钱包的某些信息，例如查看余额，但无法更改钱包的任何内容或提取任何令牌。

私钥需要对任何交易进行数字签名，以便将加密货币发送到另一个地址或对钱包进行任何更改。**绝不能共享私钥**。如果有人可以访问钱包的私钥，他们可以提取其中包含的所有代币。如果钱包的私钥丢失，发送到该钱包地址的任何代币都将**永久丢失**。

不同的钱包解决方案提供了不同的密钥对安全性方法，与密钥对交互，以及签署交易以使用/花费令牌。有些比其他的更容易使用。有些可以更安全地存储和备份私钥。Solana 支持多种类型的钱包，因此您可以选择安全性和便利性的正确平衡。