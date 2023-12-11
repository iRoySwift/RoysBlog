---
id: solana-api
title: Solana API
description: 参考指南
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
```

## 背景

[SPL-Token](https://spl.solana.com/token): Solana 区块链上的令牌程序。

该程序定义了可替代和不可替代令牌的通用实现。

Solana 的编程模型和本文档中使用的 Solana 术语的定义可在以下网址获得：

-   https://docs.solana.com/apps
-   https://docs.solana.com/terminology

<!--
注释掉的内容
```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/img/solana-spl-token.drawio.svg'),
    dark: useBaseUrl('/img/solana-spl-token.drawio.svg'),
  }}
/>
``` -->

## solana-program 命令

[solana-program](https://docs.solana.com/cli/deploy-a-program#closing-program-and-buffer-accounts-and-reclaiming-their-lamports)

## solana program 部署失败

### Error: Deploying program failed: Error processing Instruction 0: account data too small for instruction

是!即使部署失败，用于出租的 SOL 仍然存储在帐户中。

从一个部署中恢复 SOL

部署失败后，您将得到如下错误：

```zsh
solana program deploy target/deploy/native_dapp_todo.so
==============================================================================
Recover the intermediate account's ephemeral keypair file with
`solana-keygen recover` and the following 12-word seed phrase:
==============================================================================
dynamic purse ritual young clarify walk mutual grocery speak cousin flash hole
==============================================================================
To resume a deploy, pass the recovered keypair as the
[BUFFER_SIGNER] to `solana program deploy` or `solana program write-buffer'.
Or to recover the account's lamports, pass it as the
[BUFFER_ACCOUNT_ADDRESS] argument to `solana program close`.
==============================================================================
Error: Deploying program failed: Error processing Instruction 0: account data too small for instruction
```

-   首先，从它给你的种子词组中恢复键盘：

```zsh
# After running this, paste in the seed phrase above
solana-keygen recover -o recover.json
```

-   然后你可以关闭帐户以恢复你的索尔。

```zsh
solana program close recover.json
```

从所有正在进行或失败的部署中恢复 SOL

-   或者，您可以通过运行以下命令从所有正在进行的部署中恢复 SOL：

```zsh
solana program close --buffers
```
