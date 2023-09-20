---
id: solana-vscode-hello
title: 1、使用VS Code开发合约
---

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import BrowserWindow from '@site/src/components/BrowserWindow';
```

在前面的基础中，已经安装好了 rust 和 solana cli。首先确定 rust 版本:

```zsh
rustc --version
rustc 1.70.0 (90c541806 2023-05-31)
```

如果没有安装，可以通过：

```zsh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

Current installation options:


default host triple: x86_64-apple-darwin
    default toolchain: stable (default)
            profile: default
modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation

直接Enter采用默认方式

Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload your PATH environment variable to include
Cargo's bin directory ($HOME/.cargo/bin).

To configure your current shell, run:
source "$HOME/.cargo/env"
```

这里执行下环境导入

```zsh
source "$HOME/.cargo/env"
```

在此确定下 solana 的版本：

```zsh
solana --version
solana-cli 1.16.4 (src:4ce8fe76; feat:2891131721, client:SolanaLabs)
```

如果这里的 cli 是 1.14.x 为当前的主网版本，我们的操作都是在测试环境，所以这里我们切换要切换到测试 环境的 1.16 版本:

```zsh
solana-install init 1.16.4
```

## 安装 VS Code

打开 VS Code 的页面，根据自己的系统选择下载对应的版本。 要先安装好 rust，然后再安装 VC Code 的插件。VS Code 安装好后，打开 VS Code，然后再插件的地方 安装 rust-analyzer：

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/rust_analyzer.png'),
        dark: useBaseUrl('/img/solana/rust_analyzer.png'),
    }}
    />
</BrowserWindow>
```

## 创建工程

在自己的工作目录下，用 cargo 创建一个工程：

```zsh
cargo new  --lib helloworld
```

然后进入到 helloworld 目录下，添加 solana SDK 的依赖：

```zsh
cargo add solana-program
Updating `tuna` index
Adding solana-program v1.16.5 to dependencies.
```

## 构建与发布

在 src/lib.rs 文件中，填入如下合约代码：

```rust title="hello-world/native/program/src/lib.rs"
use solana_program::{
    account_info::{AccountInfo, next_account_info},
    entrypoint,
    entrypoint::ProgramResult,
    pubkey::Pubkey,
    msg,
};


// Declare and export the program's entrypoint
entrypoint!(process_instruction);

// Program entrypoint's implementation
pub fn process_instruction(
    _program_id: &Pubkey, // Public key of the account the hello world program was loaded into
    accounts: &[AccountInfo], // The account to say hello to
    _instruction_data: &[u8], // Ignored, all helloworld instructions are hellos
) -> ProgramResult {

    // Iterating accounts is safer than indexing
    let accounts_iter = &mut accounts.iter();

    // Get the account to say hello to
    let account = next_account_info(accounts_iter)?;

    msg!("Hello World Rust program entrypoint from {}", account.key);

    Ok(())
}
```

并给 Cargo.toml 增加：

```zsh
[features]
no-entrypoint = []

[lib]
crate-type = ["cdylib", "lib"]
```

然后执行：

```zsh
cargo build-sbf
Finished release [optimized] target(s) in 0.23s
```

表示运行成功。这个时候我们可以用 solana cli 来进行发布：

```zsh
solana program deploy target/deploy/helloworld.so
Program Id: FbLTBNZmc77xJpf4whkr4t7vdctjsk8DBkfuksqtQ7g8
```

## Rust 客户端测试

我们在新建一个 cli 的 bin 工程：

```zsh
cargo new --bin cli
Created binary (application) `cli` package
```

然后再 main.rs 里面添加：

```rs title="hello-world/native/cli/src/main.rs"
use std::str::FromStr;

use solana_sdk::signature::Signer;
use solana_rpc_client::rpc_client;
use solana_sdk::signer::keypair;
use solana_sdk::transaction;
use solana_program::instruction;
use solana_program::pubkey;

const RPC_ADDR: &str = "https://api.devnet.solana.com";


fn main() {
    let helloworld = pubkey::Pubkey::from_str("FbLTBNZmc77xJpf4whkr4t7vdctjsk8DBkfuksqtQ7g8").unwrap();

    let me = keypair::Keypair::from_base58_string("VtqQ...xs8");
    println!("me is {}", me.pubkey());

    let client = rpc_client::RpcClient::new(RPC_ADDR);

    let account_metas = vec![
        instruction::AccountMeta::new(me.pubkey(), true),
    ];

    let instruction = instruction::Instruction::new_with_bytes(
        helloworld,
        "hello".as_bytes(),
        account_metas,
    );
    let ixs = vec![instruction];

    let latest_blockhash = client.get_latest_blockhash().unwrap();
    let sig = client.send_and_confirm_transaction(&transaction::Transaction::new_signed_with_payer(
        &ixs,
        Some(&me.pubkey()),
        &[&me],
        latest_blockhash,
    )).unwrap();

    println!("tx:{}", sig);
}
```

执行后可以得到：

```zsh
cargo run
Compiling cli v0.1.0 (/Users/cz/repos/github.com/Gametaverse/Solana-Asia-Summer-2023/s101/Solana-Program-Part2/demo/helloworld/cli)
    Finished dev [unoptimized + debuginfo] target(s) in 6.13s
    Running `target/debug/cli`
me is 5pWae6RxD3zrYzBmPTMYo1LZ5vef3vfWH6iV3s8n6ZRG
tx:xosYkqqhHfD2xmcrqYXUQhkdTZiVUCMSc6QWazK25Li5Y4xebuG974vSvfVQCo9A7A7MZ6KQoNaKuTEb8YxXhYY
```

通过查看浏览器：

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/helloworld.png'),
        dark: useBaseUrl('/img/solana/helloworld.png'),
    }}
    />
</BrowserWindow>
```

## JEST 测试

```ts title="hello-world/native/src/tests/Hello.test.ts"
// No imports needed: web3, borsh, pg and more are globally available

import {
    clusterApiUrl,
    Connection,
    Keypair,
    PublicKey,
    Transaction,
    TransactionInstruction,
    sendAndConfirmTransaction,
} from "@solana/web3.js";
import dotenv from "dotenv";

dotenv.config();

const PROGRAM_ID = "9eMNGtayMEuNkzfdUYSw8k9msaPhFJG9Bi75wGQDvddR";

// keypair
const secretKeyArray = JSON.parse(process.env.PRIVATE_KEY || "[]") as number[];

// Step 1 连接到Solana网络 devnet
const devnet = clusterApiUrl("devnet");
const connection = new Connection(process.env.DEVNET || devnet, "confirmed");

// Step 2 创建者账号信息（private key）
const signer = Keypair.fromSecretKey(new Uint8Array(secretKeyArray));

const pg = {
    connection,
    PROGRAM_ID: new PublicKey(PROGRAM_ID),
    wallet: {
        keypair: signer,
        publicKey: signer.publicKey,
    },
};

describe("Test", () => {
    it("greet", async () => {
        // Create greetings account instruction

        // Create greet instruction
        const greetIx = new TransactionInstruction({
            keys: [
                {
                    pubkey: pg.wallet.publicKey,
                    isSigner: false,
                    isWritable: true,
                },
            ],
            programId: pg.PROGRAM_ID,
        });

        // Create transaction and add the instructions
        const tx = new Transaction();
        tx.add(greetIx);

        // Send and confirm the transaction
        const txHash = await sendAndConfirmTransaction(pg.connection, tx, [
            pg.wallet.keypair,
        ]);
        console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);

        // Fetch the greetings account
        const greetingAccount = await pg.connection.getAccountInfo(
            pg.wallet.publicKey
        );

        if (!greetingAccount) {
            console.error("Don't get greeting information");
            return;
        }
    }, 20000);
});
```

执行后可以得到：

```zsh
yarn test
yarn run v1.22.19
$ jest --forceExit
  console.log
    Use 'solana confirm -v 5gCPEdxGpNc1UG1wpSscLfb7sjiGxjwHPnn6zMVvyDHeJNxuKA5x39VQwy8hUuAHFSSgDm1w7kSKvVRTeGZLmMDn' to see the logs

      at Object.<anonymous> (src/tests/Hello.test.ts:61:17)

 PASS  src/tests/Hello.test.ts (9.951 s)
  Test
    ✓ greet (8905 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        10.029 s
Ran all test suites.
Force exiting Jest: Have you considered using `--detectOpenHandles` to detect async operations that kept running after all tests finished?
✨  Done in 12.46s.
```

可以看到跟之前的 Playgroud 能够得到一样的效果。

## 日志查看

### 网络设置

```zsh
solana config set --url https://qn-devnet.solana.fm
Config File: /Users/roy/.config/solana/cli/config.yml
RPC URL: https://qn-devnet.solana.fm
WebSocket URL: wss://qn-devnet.solana.fm/ (computed)
Keypair Path: /Users/roy/.config/solana/id.json
Commitment: confirmed

```
