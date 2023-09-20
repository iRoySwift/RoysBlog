---
id: solana-hello-world
title: 1、Hello World
---

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import BrowserWindow from '@site/src/components/BrowserWindow';
```

Solana 为了初学者可以快速入门，提供了一个 [Playground](https://beta.solpg.io/) 服务。 可以在不需要本地环境的情况下，进行 DApp 的开发。

## 1、创建项目

在界面中，我们点击 "Create a New Project"

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/playground_create_hellowrld.png'),
        dark: useBaseUrl('/img/solana/playground_create_hellowrld.png'),
    }}
    />
</BrowserWindow>
```

创建完项目后。在 Explorer 里可以看到文件列表，主要有：

```zsh
src/
    lib.rs

client/
    clinet.ts

test/
    native.test.ts
```

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/playground_explorer.png'),
        dark: useBaseUrl('/img/solana/playground_explorer.png'),
    }}
    />
</BrowserWindow>
```

对应的位置有

-   "Build"：构建合约
-   "Run" : 运行客户端端，调试合约。
-   "Test": 执行测试代码

## 2、链接钱包

在界面的左下角有个"unconnect"的提示，点击后，弹出：

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/playground_import_wallet.png'),
        dark: useBaseUrl('/img/solana/playground_import_wallet.png'),
    }}
    />
</BrowserWindow>
```

在这里选择我们之前生成的"~/.config/solana/id.json"秘钥文件。导入后，可以看到钱包详情

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/playground_wallet.png'),
        dark: useBaseUrl('/img/solana/playground_wallet.png'),
    }}
    />
</BrowserWindow>
```

## 3、开发合约

打开这里的 lib.rs，在里面贴上：

```rust
use solana_program::{
    account_info::AccountInfo,
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
    _accounts: &[AccountInfo], // The account to say hello to
    _instruction_data: &[u8], // Ignored, all helloworld instructions are hellos
) -> ProgramResult {
    msg!("Hello World Rust program entrypoint");

    Ok(())
}
```

然后点击"Build",在下面的界面可以看到 build 的结果：

```zsh
Building...
Build successful. Completed in 0.60s.
```

然后点击左侧的 锤子+扳手的图标，点击"Deploy":

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/playground_build_deplay.png'),
        dark: useBaseUrl('/img/solana/playground_build_deplay.png'),
    }}
    />
</BrowserWindow>
```

发布成功，可以在界面上看到发布后的合约地址。在发布过一次后，这里的"Deploy"就会变成"Update"

如果我们的合约有修改，只要在这里构建后点击"Update"就可以进行更新了。

### HelloWorld 代码：

```toml title="Cargo.toml"
[package]
name = "hello-world"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[features]
no-entrypoint = []

[dependencies]
borsh = "0.10.3"
solana-program = "1.16.10"
solana-sdk = "1.16.11"

[dev-dependencies]
solana-program-test = "1.16.11"

[lib]
name = "hello_world"
crate-type = ["cdylib", "lib"]

```

```rust title="lib.rs"
use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_account_info, AccountInfo},
    entrypoint,
    entrypoint::ProgramResult,
    msg,
    program_error::ProgramError,
    pubkey::Pubkey,
};

/// Define the type of state stored in accounts
#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct GreetingAccount {
    /// number of greetings
    pub counter: u32,
}

// Declare and export the program's entrypoint
entrypoint!(process_instruction);

// Program entrypoint's implementation
pub fn process_instruction(
    program_id: &Pubkey, // Public key of the account the hello world program was loaded into
    accounts: &[AccountInfo], // The account to say hello to
    _instruction_data: &[u8], // Ignored, all helloworld instructions are hellos
) -> ProgramResult {
    // Iterating accounts is safer than indexing
    let accounts_iter = &mut accounts.iter();

    // Get the account to say hello to
    let account = next_account_info(accounts_iter)?;

    // The account must be owned by the program in order to modify its data
    if account.owner != program_id {
        msg!("Greeted account does not have the correct program id");
        return Err(ProgramError::IncorrectProgramId);
    }

    // Increment and store the number of times the account has been greeted
    let mut greeting_account = GreetingAccount::try_from_slice(&account.data.borrow())?;

    println!("greeting_account{:?}", greeting_account);

    greeting_account.counter += 1;
    // greeting_account.greeting = String::from("hello");

    println!("greeting_account2{:?}", greeting_account);
    println!("account.data.borrow_mut(){:?}", account.data.borrow_mut());
    greeting_account.serialize(&mut &mut account.data.borrow_mut()[..])?;

    msg!("Greeted {} time(s)!", greeting_account.counter);

    Ok(())
}

// Sanity tests
#[cfg(test)]
mod tests {
    use crate::{entrypoint::process_instruction, processor::GreetingAccount};
    use borsh::BorshDeserialize;
    use solana_program::{account_info::AccountInfo, pubkey::Pubkey, stake_history::Epoch};
    use std::mem;

    // cargo test test_sanity -- --nocapture
    #[test]
    fn test_sanity() {
        let program_id = Pubkey::default();
        let instruction_data: Vec<u8> = Vec::new();
        let key = Pubkey::default();
        let is_signer = false;
        let is_writable = true;
        let mut lamports = 0;
        let mut data = vec![0; mem::size_of::<u32>()];
        let owner = Pubkey::default();
        let executable = false;
        let rent_epoch = Epoch::default();

        println!("key: {:?}", key);
        println!("data: {:?}", data);
        println!("rent_epoch: {:?}", rent_epoch);

        let account = AccountInfo::new(
            &key,
            is_signer,
            is_writable,
            &mut lamports,
            &mut data,
            &owner,
            executable,
            rent_epoch,
        );

        let accounts = vec![account];

        assert_eq!(
            GreetingAccount::try_from_slice(&accounts[0].data.borrow())
                .unwrap()
                .counter,
            0
        );
        process_instruction(&program_id, &accounts, &instruction_data).unwrap();
        assert_eq!(
            GreetingAccount::try_from_slice(&accounts[0].data.borrow())
                .unwrap()
                .counter,
            1
        );
        process_instruction(&program_id, &accounts, &instruction_data).unwrap();
        assert_eq!(
            GreetingAccount::try_from_slice(&accounts[0].data.borrow())
                .unwrap()
                .counter,
            2
        );
    }

    #[test]
    fn test_slice() {
        println!("teset slice with")
    }
}

```

```rust title="tests/lib.rs"
use borsh::BorshDeserialize;
use hello_world::processor::{process_instruction, GreetingAccount};
use solana_program_test::*;
use solana_sdk::{
    account::Account,
    instruction::{AccountMeta, Instruction},
    pubkey::Pubkey,
    signature::Signer,
    transaction::Transaction,
};
use std::mem;

#[tokio::test]
async fn test_helloworld() {
    let program_id = Pubkey::new_unique();
    let greeted_pubkey = Pubkey::new_unique();

    let mut program_test = ProgramTest::new(
        "helloworld", // Run the BPF version with `cargo test-bpf`
        program_id,
        processor!(process_instruction), // Run the native version with `cargo test`
    );
    program_test.add_account(
        greeted_pubkey,
        Account {
            lamports: 5,
            data: vec![0_u8; mem::size_of::<u32>()],
            owner: program_id,
            ..Account::default()
        },
    );
    let (mut banks_client, payer, recent_blockhash) = program_test.start().await;

    // Verify account has zero greetings
    let greeted_account = banks_client
        .get_account(greeted_pubkey)
        .await
        .expect("get_account")
        .expect("greeted_account not found");
    assert_eq!(
        GreetingAccount::try_from_slice(&greeted_account.data)
            .unwrap()
            .counter,
        0
    );

    // Greet once
    let mut transaction = Transaction::new_with_payer(
        &[Instruction::new_with_bincode(
            program_id,
            &[0], // ignored but makes the instruction unique in the slot
            vec![AccountMeta::new(greeted_pubkey, false)],
        )],
        Some(&payer.pubkey()),
    );
    transaction.sign(&[&payer], recent_blockhash);
    banks_client.process_transaction(transaction).await.unwrap();

    // Verify account has one greeting
    let greeted_account = banks_client
        .get_account(greeted_pubkey)
        .await
        .expect("get_account")
        .expect("greeted_account not found");
    assert_eq!(
        GreetingAccount::try_from_slice(&greeted_account.data)
            .unwrap()
            .counter,
        1
    );

    // Greet again
    let mut transaction = Transaction::new_with_payer(
        &[Instruction::new_with_bincode(
            program_id,
            &[1], // ignored but makes the instruction unique in the slot
            vec![AccountMeta::new(greeted_pubkey, false)],
        )],
        Some(&payer.pubkey()),
    );
    transaction.sign(&[&payer], recent_blockhash);
    banks_client.process_transaction(transaction).await.unwrap();

    // Verify account has two greetings
    let greeted_account = banks_client
        .get_account(greeted_pubkey)
        .await
        .expect("get_account")
        .expect("greeted_account not found");
    assert_eq!(
        GreetingAccount::try_from_slice(&greeted_account.data)
            .unwrap()
            .counter,
        2
    );
}

```

## 4、客户端开发

回到 Explorer 界面，打开 client.ts，在里面贴上：

```ts title="solana_tools/client/src/pages/Tutorial/HelloWorld/Native.ts"
// No imports needed: web3, borsh, pg and more are globally available
// ts-node --esm ./Native.ts
// node --experimental-specifier-resolution=node --loader ts-node/esm ./Native.ts
import assert from "assert";
import * as borsh from "borsh";
import web3, {
    // clusterApiUrl,
    SystemProgram,
    Connection,
    Keypair,
    PublicKey,
} from "@solana/web3.js";

const PRIVATE_KEY = `[37,37,60,131,98,125,34,130,135,2,57,248,169,60,174,216,219,70,59,155,64,7,77,104,33,204,94,10,112,105,150,19,81,152,193,57,135,12,148,233,95,219,65,201,180,32,3,250,82,142,28,180,128,106,126,102,144,196,181,26,146,135,251,94]`;

// keypair
const secretKeyArray = JSON.parse(PRIVATE_KEY || "[]") as number[];

const PROGRAM_ID = "2VMQ2eVVwEUPtQzZES3goUjk7QjYcDM9N3RM8jUvms2V";

// Step 1 连接到Solana网络 devnet
// const devnet = clusterApiUrl("devnet");
const devnet = "https://qn-devnet.solana.fm/";
const connection = new Connection(devnet, "confirmed");

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
/**
 * The state of a greeting account managed by the hello world program
 */
class GreetingAccount {
    counter = 0;
    constructor(fields: { counter: number } | undefined = undefined) {
        if (fields) {
            this.counter = fields.counter;
        }
    }
}

/**
 * Borsh schema definition for greeting accounts
 */
const GreetingSchema = new Map([
    [GreetingAccount, { kind: "struct", fields: [["counter", "u32"]] }],
]);

// const GreetingSchema = {
//     struct: {
//         counter: "u32",
//     },
// };

/**
 * The expected size of each greeting account.
 */
const GREETING_SIZE = borsh.serialize(
    GreetingSchema as unknown as borsh.Schema,
    new GreetingAccount()
).length;

const test = async () => {
    // Create greetings account instruction
    const greetingAccountKp = new web3.Keypair();
    const lamports = await pg.connection.getMinimumBalanceForRentExemption(
        GREETING_SIZE
    );
    console.log(
        "🚀 ~ file: Native.test.ts:81 ~ it ~ pg.PROGRAM_ID:",
        pg.PROGRAM_ID
    );
    const createGreetingAccountIx = SystemProgram.createAccount({
        fromPubkey: pg.wallet.publicKey,
        lamports,
        newAccountPubkey: greetingAccountKp.publicKey,
        programId: pg.PROGRAM_ID,
        space: GREETING_SIZE,
    });

    // Create greet instruction
    const greetIx = new web3.TransactionInstruction({
        keys: [
            {
                pubkey: greetingAccountKp.publicKey,
                isSigner: false,
                isWritable: true,
            },
        ],
        programId: pg.PROGRAM_ID,
    });

    // Create transaction and add the instructions
    const tx = new web3.Transaction();
    tx.add(createGreetingAccountIx, greetIx);

    // Send and confirm the transaction
    const txHash = await web3.sendAndConfirmTransaction(pg.connection, tx, [
        pg.wallet.keypair,
        greetingAccountKp,
    ]);
    console.log(`Use 'solana confirm -v ${txHash}' to see the logs`);

    // Fetch the greetings account
    const greetingAccount = await pg.connection.getAccountInfo(
        greetingAccountKp.publicKey
    );

    if (!greetingAccount) {
        console.error("Don't get greeting information");
        return;
    }

    // Deserialize the account data
    const deserializedAccountData: any = borsh.deserialize(
        GreetingSchema,
        GreetingAccount,
        greetingAccount.data
    );

    // Assertions
    assert.equal(greetingAccount?.lamports, lamports);

    assert(greetingAccount?.owner.equals(pg.PROGRAM_ID));

    assert.deepEqual(greetingAccount?.data, Buffer.from([1, 0, 0, 0]));

    assert.equal(deserializedAccountData?.counter, 1);
};

test();
```

这里，不需要过多的 import，IDE 已经帮忙们做了 import。可以直接使用 web3。其中"pg.wallet" 就是我们的钱包，其 publicKey 属性就是钱包的地址。而 pg.connection 就如同我们用 web3 创建 的 connection 对象，这里共用 playground 的设置里面的 RPC 地址。

pb.PROGRAM_ID 就是我们要刚刚构建并发布的合约的地址。

点击"Run"我们可以在日志里面看到:

```zsh
Running client...
client.ts:
My address: 5pWae6RxD3zrYzBmPTMYo1LZ5vef3vfWH6iV3s8n6ZRG
My balance: 4.27388232 SOL
Sending transaction...
Transaction sent with hash: 3XcaF6zpXthBQ2mih7DdVBuvwXi7L6Wy4rCHzgwHEaNsqMDNRGC5yppG9xKP9g9hYfT6wPEw127mxgYWBTouS5gz
```

打开 solana 浏览器，贴上这里的 hash 地址。可以看到。在日志部分，执行了我们前面合约代码里面的"HelloWorld"。

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/playground_helloworld_explorer.png'),
        dark: useBaseUrl('/img/solana/playground_helloworld_explorer.png'),
    }}
    />
</BrowserWindow>
```

## 5、日志查看

### 网络设置

```zsh
solana config set --url localhost
Config File: /Users/roy/.config/solana/cli/config.yml
RPC URL: http://localhost:8899
WebSocket URL: ws://localhost:8900/ (computed)
Keypair Path: /Users/roy/.config/solana/id.json
Commitment: confirmed

```
