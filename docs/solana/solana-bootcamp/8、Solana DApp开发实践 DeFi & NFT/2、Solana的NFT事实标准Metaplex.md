---
id: solana-bootcamp-Contract-metaplex
title: 2、Solana的NFT事实标准Metaplex
---

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import BrowserWindow from '@site/src/components/BrowserWindow';
```

我来看下当前 Solana 官方对于 NFT 的定义 [Non-Fungible tokens](https://spl.solana.com/token#non-fungible-tokens)：

`Non-Fungible tokens An NFT is simply a token type where only a single token has been minted.`

这段话出自 [SPL Token](https://spl.solana.com/token) 的官方文档。也就是说，Solana 上的 NFT 标准，也是由"SPL Token"来实现的，但是他是一个特殊的 Token，这个 Token 的

-   supply 一定为 1
-   精度为 0
-   mint Authority 为空，也就是不能再 mint 新的 token

根据我们前面的介绍，大家已经知道了 "SPL Token" 的几个基本属性，但是这里作为 NFT，他最典型的小图片地址在哪里呢？总的供应量在哪里呢？

我们来看 Solana 域名的下的 [NFT](https://solana.com/developers/nfts)

在这个页面，随便点击，我们会发现，官方站点将我们引导到了 [Metaplex](https://www.metaplex.com/)。这个 metaplex 是什么呢？

`Metaplex is a collection of tools, smart contracts, and more designed to make the process of creating and launching NFTs easier. While initially focused on supporting the needs of the arts and entertainment industry our plans extend far beyond that to all use cases where an NFT may add value.`

`Currently, our three major projects are:`

`Token Metadata - the NFT standard for Solana Candy Machine v3™ - a Profile Picture (PFP) focused tool that works like the gumball-style candy machines of old Auction House - a decentralized sales protocol for NFT marketplaces`

简而言之，就是 Metaplex 是一套 NFT 系统，他包含了一套 NFT 标准，一个发布 NFT 的工具和一套 NFT 交易市场协议。

从这里我们可以看到，Solana 官方基本是认可这里定义的这套 NFT 标准了。那么我们就来介绍下这个标准是怎样的。

## NFT 标准

首先 Metaplex 也一样要遵循前面 Solana 官方的"SPL Token"里面说的，一个 NFT 就是一个特殊的"SPL Token" 这个基础原则。然后 Metaplex 在这个基础之上做了一些扩展，为这个 supply 为 1 的 token 增加了如下属性：

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/nft_meta.png'),
        dark: useBaseUrl('/img/solana/nft_meta.png'),
    }}
    />
</BrowserWindow>
```

用 JSON 表示就是：

```ts
{
  "name": "SolanaArtProject #1",
  "description": "Generative art on Solana.",
  "image": "https://arweave.net/26YdhY_eAzv26YdhY1uu9uiA3nmDZYwP8MwZAultcE?ext=jpeg",
  "animation_url": "https://arweave.net/ZAultcE_eAzv26YdhY1uu9uiA3nmDZYwP8MwuiA3nm?ext=glb",
  "external_url": "https://example.com",
  "attributes": [
    {
      "trait_type": "trait1",
      "value": "value1"
    },
    {
      "trait_type": "trait2",
      "value": "value2"
    }
  ],
  "properties": {
    "files": [
      {
        "uri": "https://www.arweave.net/abcd5678?ext=png",
        "type": "image/png"
      },
      {
        "uri": "https://watch.videodelivery.net/9876jkl",
        "type": "unknown",
        "cdn": true
      },
      {
        "uri": "https://www.arweave.net/efgh1234?ext=mp4",
        "type": "video/mp4"
      }
    ],
    "category": "video",
  }
}
```

这里有了 name/image/attributes 是不是就比较像一个正常的 NFT 了。

这里只要有个地方记录上面的这个 meta 信息和我们的"SPL Token"的对应关系就可以了。在 Solana 中，我们很容易就想到了 PDA： 由合约和 seeds 管理的单向 Hash

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/nft_pda_meta.png'),
        dark: useBaseUrl('/img/solana/nft_pda_meta.png'),
    }}
    />
</BrowserWindow>
```

图中的信息可以和上面标准中定义的字段意义匹配上，这里将基本信息，放入到 Solana 的 Account 的进行链上存储，而内容比较多的，复杂的信息，则以一个 JSON 格式存储在链下，这里可以是一个 s3 静态文件，也可以是 ipfs 的存储。而用来存储扩展 Meta 信息的 Account，我们叫做 "Metadata Account",其地址是经由 这个管理合约，以及"SPL Token" 的 Mint Account，推导出来的 PDA 唯一地址。因此知道 "SPL Token"也就知道了这里的 Metadata。

上面的逻辑定义了单个 NFT，到这里，我们还只是实现了我们前面作业里面的相关逻辑，那这样就够了么？

我们知道 Mint Account 还可以通过 Authority 和 Freezen 来控制增发和冻结，那么这个时候，这个权限还在创建者手里，我们怎么来保证其不会被随意的触发呢？

为此 Metaplex 引入了一个"Master Edition Account"来作为某 NFT 的管理者：

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/erc721.png'),
        dark: useBaseUrl('/img/solana/erc721.png'),
    }}
    />
</BrowserWindow>
```

这里，同样，在此以 PDA 为基础，推导出一个"Master Edition Account"地址出来，然后在这个 Account 里面来记录 Supply 等信息。同时将"SPL Token"的"mint" 和 "freeze" 都设置成这个 Account，这样就可以使得没人在此修改这个 NFT 对应的“SPL Token”。

但是在现实中，我们还会对 NFT 做集合归类，比如游戏里面 的宝物集合，装备结合，药水集合等，ERC1155 定义了这样的逻辑。而 Metaplex 定义了 [Certified Collections](https://docs.metaplex.com/programs/token-metadata/certified-collections)。

为了将 NFT（或任何代币）分组在一起，Metaplex 首先创建一个 "Collection" NFT，其目的是存储与该集合相关的任何元数据。 也就是"Collection "本身就是 NFT。 它与任何其他 NFT 具有相同的链上数据布局，也就是类似的 PDA 推导还有其配套的“SPL Token” 账号。

Collection NFT 和常规 NFT 之间的区别在于，前者提供的信息将用于定义其包含的 NFT 组，而后者将用于定义 NFT 本身。

在上面的 PDA 生成的 “Metadata Account”里面有一个 Collection 属性，如果其有值，那么这个 NFT 就是从属于这个组的 NFT，如果这个属性没有值，那么这个 NFT 可能就是普通 NFT 或者是“Collection” NFT。如果其"CollectionDetails"还有值，那么就是一个“Collection” 了。

下面图描述了 NFT 组和组内普通 NFT 的关系：

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/collection_nft.png'),
        dark: useBaseUrl('/img/solana/collection_nft.png'),
    }}
    />
</BrowserWindow>
```

## NFT 实例

来看个 NFT 的例子，Solana 手机 [Saga](https://magiceden.io/marketplace/saga)。

点开其中一个 NFT，比如 1927：

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/saga_1927.png'),
        dark: useBaseUrl('/img/solana/saga_1927.png'),
    }}
    />
</BrowserWindow>
```

我们可以在浏览器中看到对应的这里的 "MINT Account" BBDajxrF4KJdmXredbz8BtCBF5b5HFrAPxX5xqtysAJC

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/solscan_1927_mintaccount.png'),
        dark: useBaseUrl('/img/solana/solscan_1927_mintaccount.png'),
    }}
    />
</BrowserWindow>
```

而对应的真实"SPL Token Account"为 BVhF7uWD4LYKZmwWMk7KwohZbC7vUNzQPD953h5atjb8

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/solscan_1927_tokenaccount.png'),
        dark: useBaseUrl('/img/solana/solscan_1927_tokenaccount.png'),
    }}
    />
</BrowserWindow>
```

对应的 Collection 为 1yPMtWU5aqcF72RdyRD5yipmcMRC8NGNK59NvYubLkZ 这个 Collection 的 Mint Account:

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/solscan_saga_collection_mintaccount.png'),
        dark: useBaseUrl('/img/solana/solscan_saga_collection_mintaccount.png'),
    }}
    />
</BrowserWindow>
```

其对应的 MasterEdition 为 [5WFe712HEfptjd6EyhwojxbMiA5NVsGsr9vVj5Rm4Urs](https://solscan.io/account/5WFe712HEfptjd6EyhwojxbMiA5NVsGsr9vVj5Rm4Urs)

而相关的 NFT 数据存储在 Metadata [2VVEUmmkVUg1SCtszhjnn2WNudJE5ESJKF8Q1WsfJqMy](https://solscan.io/account/2VVEUmmkVUg1SCtszhjnn2WNudJE5ESJKF8Q1WsfJqMy) 中。

Token Metadata Program
Metaplex 的 NFT 标准实现，在一个叫做 [Token Metadata Program](https://docs.metaplex.com/programs/token-metadata/overview) 合约中。也就是上面的用于生成 PDA 的合约。

当我们需要创建一个 NFT 的时候，我们通过 Token Metadata Program 的"Create a Metadata account" 指令来创建 一个 NFT，他会依次创建"Metadata Account"以及 "SPL Token"的"Mint Account"。

具体 Accounts 参数为：

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/create_metaaccount_args_account.png'),
        dark: useBaseUrl('/img/solana/create_metaaccount_args_account.png'),
    }}
    />
</BrowserWindow>
```

参数为：

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/create_metaaccount_args.png'),
        dark: useBaseUrl('/img/solana/create_metaaccount_args.png'),
    }}
    />
</BrowserWindow>
```

直接来看，太复杂了。

创建完单个 NFT 后，我们可以创建"Master Edition Account"来进行管理。我们使用"CreateMasterEditionV3"指令 Account 参数为：

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/create_master_edtion_accounts.png'),
        dark: useBaseUrl('/img/solana/create_master_edtion_accounts.png'),
    }}
    />
</BrowserWindow>
```

参数为：

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/create_master_edition_args.png'),
        dark: useBaseUrl('/img/solana/create_master_edition_args.png'),
    }}
    />
</BrowserWindow>
```

这里还是以 Saga 的 NFT 来举例，来看一个 NFT 的创建过程：首先创建 MasterEdition ：

[321ytzCAk2JAWwBEKKSCnk4w717UA6PWMtEfLxQQ5Pz4gS3xZA9AMUbXShU7s4ekLCkqC8s5WLhkHhtid5VCF5hD](https://solscan.io/tx/321ytzCAk2JAWwBEKKSCnk4w717UA6PWMtEfLxQQ5Pz4gS3xZA9AMUbXShU7s4ekLCkqC8s5WLhkHhtid5VCF5hD)

I1-I2 创建了 MintAccount
I3-I4 创建 ATA 作为 TokenAccount 并 Mint
I5 创建 Metadata Account
I6 创建 Master Edition Account
其次创建具体的 NFT:

[3P8MgszvGDmzVV3yByQnPLQ1t7p7jC9ZvtQeRs4nZxmSoWvDV2MBx9A1sCMbrZosRdXBfRZTXj6YjXimVLQuW5Rf](https://solscan.io/tx/3P8MgszvGDmzVV3yByQnPLQ1t7p7jC9ZvtQeRs4nZxmSoWvDV2MBx9A1sCMbrZosRdXBfRZTXj6YjXimVLQuW5Rf)

这里主要关注 I5,因为这里通过 Metaplex 的 Canndy 来进行 Mint 也就是 5.2 中，并且这里传递了"1yPMtWU5aqcF72RdyRD5yipmcMRC8NGNK59NvYubLkZ"作为 Collection。而 5.3 创建了 Metadata。并在 5.10 和 5.11 设置了 mint 和 frezzen 的权限。在 5.12 中完成对这个 NFT 的 Mint 逻辑。最后在 5.19 中，将这个 NFT 和这个 Collection 做 Verify，从而确保他是归属于这个 NFT 集合的。
