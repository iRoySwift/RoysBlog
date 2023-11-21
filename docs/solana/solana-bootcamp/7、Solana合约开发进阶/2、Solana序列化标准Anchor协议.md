---
id: solana-Contract-serializes-achor-protocol
title: 2、Solana序列化标准Anchor协议
---

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import BrowserWindow from '@site/src/components/BrowserWindow';
```

Anchor 是什么？

**Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.**

Anchor 现在是 Solana 合约开发的一套框架，但是 Anchor 在建立之初，其实只是一个序列化协议。

Long Long Ago，我们来看之前的 Token 代码，关于 Mint 的对象的序列化存储是这样的：

```rs
fn pack_into_slice(&self, dst: &mut [u8]) {
    let dst = array_mut_ref![dst, 0, 82];
    let (
        mint_authority_dst,
        supply_dst,
        decimals_dst,
        is_initialized_dst,
        freeze_authority_dst,
    ) = mut_array_refs![dst, 36, 8, 1, 1, 36];
    let &Mint {
        ref mint_authority,
        supply,
        decimals,
        is_initialized,
        ref freeze_authority,
    } = self;
    pack_coption_key(mint_authority, mint_authority_dst);
    *supply_dst = supply.to_le_bytes();
    decimals_dst[0] = decimals;
    is_initialized_dst[0] = is_initialized as u8;
    pack_coption_key(freeze_authority, freeze_authority_dst);
}
```

而 Instruction 的打包是这样的：

```rs
/// Packs a [TokenInstruction](enum.TokenInstruction.html) into a byte buffer.
pub fn pack(&self) -> Vec<u8> {
    let mut buf = Vec::with_capacity(size_of::<Self>());
    match self {
        &Self::InitializeMint {
            ref mint_authority,
            ref freeze_authority,
            decimals,
        } => {
            buf.push(0);
            buf.push(decimals);
            buf.extend_from_slice(mint_authority.as_ref());
            Self::pack_pubkey_option(freeze_authority, &mut buf);
        }
        ...
```

这里都是自定义的,比如上面这些，用第一个字节作为类型判断，后续需要代码进行手动大解包。在传统的 Web2 领域，这个是非常 low 且不工程化的实践，Web2 领域有成熟的 Protobuf/Thift 等方案。但是这些方案 一来性能较差，二来序列化的结果较大，并不适用区块链的场景。因此在区块链领域就有了各种各样的实现， 比如 Ethereum 的 rlp 编码。

在 Rust 实现的公链领域中，主要有两种方案，一种是 BCS，他出生 与 Libra/Diem，现在主要用于 Aptos 和 Sui。而另外一种则是 Borsh 他是 Near 开发团队的一大力作，在今年的 Rust China 上，他们也做了比较详细的一个分享，当前 Borsh 已经在性能，支持的语言， 压缩率上有一个比较好的表现。因此 Solana 官方实现也很多都采用了 Borsh 的序列方式。

anchor 的官网域名是"https://www.anchor-lang.com/" 是不是跟一个框架有点不搭，对的。其实 anchor 最开始的命题就是序列化方案，或者说一种 IDL 语言。

后面 Anchor 也改变了他的命题，将其定义为一套开发框架。那么 Anchor 是不是必须的？当然不是，我们前面介绍 的代码组织形式，加上 Borsh 的能力，其实已经很好的覆盖了 Anchor 的功能。但是 Anchor 除了这些功能外， 还通过 IDL 对 instruction 交互协议进行描述，更方便非 Rust 得语言的接入，比如在钱包测显示交互的内容。 同时还提供了项目管理如构建，发布等工具，以及合约逻辑结构的框架，方便做客户端接入以及 rust 客户端和测试。 可以类比以太生态里面的 hardhat/truffle

## 安装

现在的 Anchor 定位是一整套开发工具，其大部分是用 rust 实现的，因此我们可以通过 cargo 来进行安装， 前提条件是你已经按照我们前面的步骤按照好了 Rust 和 Solana 命令行。

```zsh
cargo install --git https://github.com/coral-xyz/anchor avm --locked --force
```

安装完成后，通过 Anchor 的工具安装最新的 avm，avm 是"Anchor Version Manager"，类似 rustup 管理 rustc 的版本，又或者 pyenv 管理 python 版本。

```zsh
avm install latest
avm use latest
```

然后查看 anchor 的版本

```zsh
anchor --version
```

## 创建工程

通过 anchor 的命令创建工程

```zsh
anchor init helloworld
```

这将创建一个您可以移入的新锚定工作区。

```zsh
.
├── Anchor.toml
├── Cargo.toml
├── app
├── migrations
├── node_modules
├── package.json
├── programs
├── tests
├── tsconfig.json
└── yarn.lock
```

以下是该文件夹中的一些重要文件：

-   .anchor 文件夹：它包含最新的程序日志和用于测试的本地分类帐
-   app 目录：如果您使用 monorepo，则可以使用它来保存前端的空文件夹
-   programs 目录：此文件夹包含您的程序。 它可以包含多个，但最初只包含一个与 `<new-workspace-name>` 同名的程序。 该程序已经包含一个 lib.rs 文件和一 些示例代码。
-   tests 目录：包含 E2E 测试的文件夹。 它已经包含一个用于测试 programs/`<new-workspace-name>`中的示例代码的文件。
-   migrations 目录：在此文件夹中，您可以保存程序的部署和迁移脚本。
-   Anchor.toml 文件：此文件为您的程序配置工作区范围的设置。 最初，它配置
    -   合约在本地网络上的地址 ([programs.localnet])
    -   合约可以推送到的注册表 ([registry])
    -   测试中使用的 provider ([provider])
    -   通过 Anchor 执行的脚本 ([scripts])。 测试脚本在运行锚点测试时运行。 可以使用 anchor run `<script_name>`运行自己的脚本。

## 构建工程

执行 build 命令便可以完成对合约的构建：

```zsh
anchor build


warning: unused variable: `ctx`
 --> programs/hellowolrd/src/lib.rs:9:23
  |
9 |     pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
  |                       ^^^ help: if this is intentional, prefix it with an underscore: `_ctx`
  |
  = note: `#[warn(unused_variables)]` on by default

warning: `hellowolrd` (lib) generated 1 warning (run `cargo fix --lib -p hellowolrd` to apply 1 suggestion)
    Finished release [optimized] target(s) in 13m 08s
```

这里 warning 可以忽略。

## 测试工程

执行 anchor 的测试命令：

```zsh
'
  hellowolrd
Your transaction signature 5ne8MSmBpWFBnQr5LhuB87Ma2Snz4CvwuMjx4P8pSUCzJtBa5QUrsJkhnfrbaUJFcXJoPn8bx6HS2LLS11SvPurx
    ✔ Is initialized! (350ms)


  1 passing (357ms)

Done in 2.44s.
```

可以看到这里提示测试通过。

这里测试执行的是哪里的代码呢？又是怎么运行的呢？

其实测试代码在 "tests/hellowolrd.ts"中，他就是一个类似我们自己的前端访问代码。来测试这里的合约：

```ts
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Hellowolrd } from "../target/types/hellowolrd";

describe("hellowolrd", () => {
    // Configure the client to use the local cluster.
    anchor.setProvider(anchor.AnchorProvider.env());

    const program = anchor.workspace.Hellowolrd as Program<Hellowolrd>;

    it("Is initialized!", async () => {
        // Add your test here.
        const tx = await program.methods.initialize().rpc();
        console.log("Your transaction signature", tx);
    });
});
```

这里通过 anchor 的 sdk 可以直接导入合约。

那么合约又是怎么来运行的呢？这里其实 anchor 拉起了一个 solana 的本地节点，并通过".anchor/test-ledger"下的 genesis.json 文件作为初始节点信息。

```zsh
4

Run solana-test-validator in a separate terminal.

Then run anchor test --skip-local-validator whenever you wanna test your program.

You can create an alias if this gets tedious. e.g. alias anchortest="anchor test --skip-local-validator
```

```zsh
anchor test --skip-local-validator
warning: unused variable: `ctx`
 --> programs/helloworld/src/lib.rs:9:23
  |
9 |     pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
  |                       ^^^ help: if this is intentional, prefix it with an underscore: `_ctx`
  |
  = note: `#[warn(unused_variables)]` on by default

warning: `helloworld` (lib) generated 1 warning (run `cargo fix --lib -p helloworld` to apply 1 suggestion)
    Finished release [optimized] target(s) in 0.43s
Deploying cluster: http://localhost:8899
Upgrade authority: /Users/roy/.config/solana/id.json
Deploying program "helloworld"...
Program path: /Users/roy/Project/Solana/demo/helloworld/target/deploy/helloworld.so...
Program Id: Dwwno9cpgrbXFFEdJhMt9FB9TJKnJ5en31y433M11oPQ

Deploy success

Found a 'test' script in the Anchor.toml. Running it as a test suite!

Running test suite: "/Users/roy/Project/Solana/demo/helloworld/Anchor.toml"

yarn run v1.22.19
warning package.json: No license field
$ /Users/roy/Project/Solana/demo/helloworld/node_modules/.bin/ts-mocha -p ./tsconfig.json -t 1000000 'tests/**/*.ts'


  helloworld
Your transaction signature 38Kgfdmw8rMJKE4vZgCWru8T5EPSM8kZ92R1WvVCvaPory6u8eXxnE796ChWTQywx4UdWKUmEfbP5iyzQPcRxebZ
    ✔ Is initialized! (187ms)


  1 passing (190ms)

✨  Done in 3.27s.
```

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/top_test.jpg'),
        dark: useBaseUrl('/img/solana/top_test.jpg'),
    }}
    />
</BrowserWindow>
```

这里我们可以看到在运行 test 的时候，会同时启动一个 solana 进程。

## 发布合约

Anchor 在 build 的时候，和 solana build-sbf 一样会生成一个私钥，在位置"target/deploy/xxx.json"中， 后续我们在发布的时候，都是使用的这个私钥对应的地址，作为合约地址。因此我们可以在"lib.rs"中声明我们的 合约地址

```rs
declare_id!("8gDUQtUK65Aaq6gWHTvGJqfjoUW4Nt7GX3LfXnVhnsu8");
```

为了在开发网发布，我们修改 Anchor.toml 中的 provider:

```toml
[provider]
cluster = "devnet"
```

然后执行发布命令即可。

```zsh
anchor deploy
Deploying cluster: https://api.devnet.solana.com
Upgrade authority: /home/ubuntu/.config/solana/id.json
Deploying program "hellowolrd"...
Program path: ./Solana-Asia-Summer-2023/s101/Expert-Solana-Program/demo/hellowolrd/target/deploy/hellowolrd.so...
Program Id: 8gDUQtUK65Aaq6gWHTvGJqfjoUW4Nt7GX3LfXnVhnsu8

Deploy success
```

在浏览器中可以看到合约

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/hellowolrd2.png'),
        dark: useBaseUrl('/img/solana/hellowolrd2.png'),
    }}
    />
</BrowserWindow>
```

对应的数据在

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/helloworld_data.png'),
        dark: useBaseUrl('/img/solana/helloworld_data.png'),
    }}
    />
</BrowserWindow>
```

合约为 422KB 大小。
