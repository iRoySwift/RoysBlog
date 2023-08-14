---
id: solana-web3.js
title: 1、Solana的Web3.js
---

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import BrowserWindow from '@site/src/components/BrowserWindow';
```

## Web3.js

如果之前接触过 ETH，一定知道 ETH 的 [web3.js](https://github.com/ethereum/web3.js/) ，主要提供了通过 JavaScript 与 ETH 上合约进行交互。而 Solana 也提供了与 Solana 的 JSON RPC 接口交互的 [solana-web3.js](https://github.com/solana-labs/solana-web3.js) 。通过这个库，可以实现在 dapp 中用 JavaScritp 和 Solana 上的智能合约进行交互。

Web3.js 库主要分为三部分

-   RPC 访问
-   keypair 管理
-   交易发送

## Demo

首先来看一个 Demo，在 Demo 中，首先导入私钥，然后可以查询该账号的余额。然后执行转账，转账后再可以查询余额来进行结果判断。

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/baseTransfer.png'),
        dark: useBaseUrl('/img/solana/baseTransfer.png'),
    }}
    />
</BrowserWindow>
```

这里我们是以开发网为开发环境，所以相应的数据都在开发网上。

## 安装

solana/web3.js 提供了 npm 包和 yarn 包的选择，使用 yarn 的话，可以在工程中用

```zsh
yarn add @solana/web3.js
```

进行引用，如果使用的 npm 的话，使用：

```zsh
npm install --save @solana/web3.js
```

如果想在自己已有的没有使用包管理的项目中使用，可以先 checkout 出 solana/web3.js 的代码，然后 checkout 到最新的分支上，执行：

```zsh
cd your_solana_web3js_directory
    git clone https://github.com/solana-labs/solana-web3.js.git
    git checkout v1.78.0
    yarn install
    yarn build
```

从 lib 目录取出 index.iife.js 既为浏览器使用的版本,然后使用<scritp />进行引用。

或者用已经编译好的：

```zsh
<!-- Production (minified) -->
    <script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.min.js"></script>
```

## Connection

Web3.js 通过 Connection 来抽象一个 RPC 链接。通过

```typescript title="client/src/pages/Tutorial/BaseTransfer/index.tsx"
let url = "https://api.devnet.solana.com";
const connection = new Connection(url);
```

通过指定 RPC 的地址这样来创建。这个对象包含了所有的 RPC 方法：
[RPC](https://docs.solana.com/api)
[solana-web3.js](https://solana-labs.github.io/solana-web3.js/index.html)

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/rpc-method.png'),
        dark: useBaseUrl('/img/solana/rpc-method.png'),
    }}
    />
</BrowserWindow>
```

可以查看每个方法的文档，来查看使用方法。这里举几个简单的例子。比如获取当前区块高度。

```typescript title="client/src/utils/solana/sendTransaction.ts"
// Step 1 - Fetch Latest Blockhash
let latestBlockhash = await connection.getLatestBlockhash("finalized");
console.log(
    "   ✅ - Fetched latest blockhash. Last valid height:",
    latestBlockhash.blockhash
);
```

这里指定了区块状态为 finalized,在 console 中可以看到：

```
✅ - Fetched latest blockhash. Last Valid Height: 175332530
```

## 账号

早年版本(20 年)，Web3.js 提供了一个 Account 对象，但是后来将其抽象为一个 Keypair 对象。

keypair 在前面的章节中有介绍到。其本质就是一个私钥和公钥的组合。因此 keypair 可以用一段私钥来进行初始化：

```typescript title="solana-web3.js/packages/library-legacy/src/keypair.ts""
constructor(keypair?: Ed25519Keypair) {
this._keypair = keypair ?? generateKeypair();
}
```

可以通过构造函数，直接创建。或者通过

```
static fromSecretKey(secretKey: Uint8Array, options?: { skipValidation?: boolean; })
```

来创建。

在前面的章节中，通过命令行创建了私钥，在文件"~/.config/solana/id.json"中，没有加密的情况下可以直接取出来

```typescript
// keypair
const secretKeyArray = JSON.parse(
    process.env.REACT_APP_PRIVATE_KEY
) as number[];
const secretKeyU8Array: Uint8Array = Uint8Array.from(secretKeyArray);
// Create a keypair from a raw secret key byte array.
const signer = Web3.Keypair.fromSecretKey(secretKeyU8Array);
// Uint8Array => bs58
const privatKey = bs58.encode(secretKeyU8Array);
console.log(
    "🚀 ~ file: initializeKeypair.ts:24 ~ initializeKeypair ~ address:",
    privatKey
);
console.log("🚀  address:", keypair.publicKey.toString());
```

可以看到：

```
🚀 ~ file: initializeKeypair.ts:24 ~ initializeKeypair ~ address: k5JDbCLyzKgGnPQtyfMpvEwL6dbffHME6UR2wShibHJ46yhdt8vcPRjAdpbf8gSFknqJfuF7489WuCbQZpFWii9
🚀 address: 6VX7znCYutpN4z4kyRA6B8uXiK6iPN799efjGr8m3rFX
```

和我们命令行中的地址是一样的。

这里 publicKey 就是对应的账号地址，keypair 就是 Signer。

## 发送交易

在介绍 Solana 核心概念的时候，我们有介绍到 Instruction 和 Transaction 以及 Message。所以发送交易，就是构建 Instructions 数组，然后构造 Message，再放到 Transaction 里面，做签名并进行发送。

如果是普通应用合约，需要自己封装 Instruction。

```typescript title="solana-web3.js/packages/library-legacy/src/transaction/legacy.ts"
/**
 * Transaction Instruction class
 */
export class TransactionInstruction {
    /**
     * Public keys to include in this transaction
     * Boolean represents whether this pubkey needs to sign the transaction
     */
    keys: Array<AccountMeta>;
    /**
     * Program Id to execute
     */
    programId: PublicKey;
    /**
     * Program input
     */
    data: Buffer;
    constructor(opts: TransactionInstructionCtorFields);
}
```

```typescript title="solana-web3.js/packages/library-legacy/src/transaction/legacy.ts"
/**
 * Account metadata used to define instructions
 */
export type AccountMeta = {
    /** An account's public key */
    pubkey: PublicKey;
    /** True if an instruction requires a transaction signature matching `pubkey` */
    isSigner: boolean;
    /** True if the `pubkey` can be loaded as a read-write account. */
    isWritable: boolean;
};
```

其中 programId 表示调用合约的地址。key 是合约中需要使用到的 Account， data 则是所有的输入序列化后的二进制。

因为合约的入口是：

```rust
declare_process_instruction!(
        process_instruction,
        DEFAULT_COMPUTE_UNITS,
        |invoke_context| {
            let transaction_context = &invoke_context.transaction_context;
            let instruction_context = transaction_context.get_current_instruction_context()?;
            let instruction_data = instruction_context.get_instruction_data();
            let instruction = limited_deserialize(instruction_data)?;
```

可以简化为：

```rust
fn process_instruction(
        program_id: &Pubkey,
        accounts: &[AccountInfo],
        instruction_data: &[u8],
    ) -> ProgramResult {
```

具体的方法是从 data 里面解析出来，然后再解析出来参数。

而 Solana 的系统合约，或者说 Native Program。 Web3.js 已经为我们封装好了一些 Instruction。比如转账：

```typescript title="solana-web3.js/packages/library-legacy/src/programs/system.ts"
SystemProgram.transfer({
    fromPubkey: new PublicKey(this.state.publicKey), //this.publicKey,
    toPubkey: new PublicKey(this.state.toPublicKey), //destination,
    lamports: this.state.toCount, //amount,
});
```

这里表示从 fromPubkey 地址转 lamports 的 SOL 到 toPubkey 的地址。他实际上会调用"11111111111111111111111111111111"合约的 transfer 方法。该方法接受三个参数，其中 fromPubkey 需要是签名对象。

```rust
fn transfer(
        from_account_index: IndexOfAccount,
        to_account_index: IndexOfAccount,
        lamports: u64,
        invoke_context: &InvokeContext,
        transaction_context: &TransactionContext,
        instruction_context: &InstructionContext,
    ) -> Result<(), InstructionError> {
```

因为转账只需要用到一个 Instruction，所以用这个 Instrcuton 构造 Message:

```typescript
const messageV0 = new TransactionMessage({
    payerKey: this.keypair.publicKey,
    recentBlockhash: latestBlockhash.blockhash,
    instructions: txInstructions,
}).compileToV0Message();
```

这里 instructions 是 `Array<TransactionInstruction>`一个数组。

payerKey 则是发送这个消息的 gas 付费者，其也需要提供签名。 recentBlockhash 通过我们前面的 RPC 可以获取到。这里 recentBlockhash 不能隔的太远。这样就限制了消息的签名时间。最后调用 compileToV0Message 构造 Message 对象。

有了 Message，还有构造 VersionedTransaction， 早期的 Transaction 已经废弃。

```typescript
export class VersionedTransaction {
    signatures: Array<Uint8Array>;
    message: VersionedMessage;
    get version(): TransactionVersion;
    constructor(message: VersionedMessage, signatures?: Array<Uint8Array>);
    serialize(): Uint8Array;
    static deserialize(serializedTransaction: Uint8Array): VersionedTransaction;
    sign(signers: Array<Signer>): void;
    addSignature(publicKey: PublicKey, signature: Uint8Array): void;
}
```

新的 VersionedTransaction 对象，通过传入 VersionedMessage 来构造：

```typescript
constructor(message: VersionedMessage, signatures?: Array<Uint8Array>);
```

这里我们上面构造的 V0 就是 VersionedMessage 的对象。

这里可以传入 signatures,比如通过硬件钱包签名的内容。或者不传入也可以，调用：

```typescript
sign(signers: Array<Signer>): void;
```

传入我们上面的 keypair。也可以对 VersionedTransaction 进行签名。

构造结束后，通过 connection 的 sendTransaction 方法发送即可：

```typescript
sendTransaction(transaction: VersionedTransaction, options?: SendOptions): Promise<TransactionSignature>;
```

这里返回的 TransactionSignature 即为，交易的 hash，可以通过浏览器进行查询。
