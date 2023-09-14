---
id: solana-Contract-alts
title: 1、ALTs交易
---

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import BrowserWindow from '@site/src/components/BrowserWindow';
```

传输到 Solana 验证器的消息不得超过 IPv6 MTU 大小，以确保通过 UDP 快速可靠地进行集群信息网络传输。Solana 的网络堆栈使用 1280 字节的保守 MTU 大小，在考虑标头后，为数据包数据（如序列化事务）留下 1232 字节。

在 Solana 上构建应用程序的开发人员必须在上述交易大小限制约束内设计其链上程序接口。一种常见的解决方法是将状态临时存储在链上并在以后的交易中使用该状态。这是 BPF 加载程序用于部署 Solana 程序的方法。

然而，当开发人员在单个原子事务中编写许多链上程序时，这种解决方法效果不佳。组合越多，帐户输入就越多，每个帐户输入占用 32 个字节。目前没有可用的解决方法来增加单个事务中使用的帐户数量，因为每个事务必须列出正确锁定帐户以进行并行执行所需的所有帐户。因此，在考虑签名和其他交易元数据后，当前上限约为 35 个账户。

地址查找表通常简称为“查找表”或简称“ ALT ”，允许开发人员创建相关地址的集合，以便在单个事务中有效地加载更多地址。

由于 Solana 区块链上的每笔交易都需要列出作为交易一部分进行交互的每个地址，因此该列表实际上将限制每笔交易的 32 个地址。在地址查找表的帮助下，一笔交易现在可以将该限制提高到每笔交易 256 个地址。

## ALT

在这里，我们描述了一个基于程序的解决方案，协议开发人员或最终用户可以在链上创建相关地址的集合，以便在交易的帐户输入中简洁使用。

地址存储在链上地址查找表账户中后，可以使用 1 字节 u8 索引而不是完整的 32 字节地址在交易中简洁地引用它们。这将需要一种新的交易格式来利用这些简洁的引用以及运行时处理来从链上查找表中查找和加载地址。

地址查找表在初始化时以及每次添加新地址后都必须免租。查找表可以从链上缓冲的地址列表扩展，也可以直接通过指令数据附加地址来扩展。新添加的地址需要一个槽位进行预热，然后才能供交易进行查找。

由于事务使用 u8 索引来查找地址，因此每个地址表最多可以存储 256 个地址。除了存储的地址之外，地址表帐户还跟踪下面解释的各种元数据。

```rs
/// The maximum number of addresses that a lookup table can hold
pub const LOOKUP_TABLE_MAX_ADDRESSES: usize = 256;

/// The serialized size of lookup table metadata
pub const LOOKUP_TABLE_META_SIZE: usize = 56;

pub struct LookupTableMeta {
    /// Lookup tables cannot be closed until the deactivation slot is
    /// no longer "recent" (not accessible in the `SlotHashes` sysvar).
    pub deactivation_slot: Slot,
    /// The slot that the table was last extended. Address tables may
    /// only be used to lookup addresses that were extended before
    /// the current bank's slot.
    pub last_extended_slot: Slot,
    /// The start index where the table was last extended from during
    /// the `last_extended_slot`.
    pub last_extended_slot_start_index: u8,
    /// Authority address which must sign for each modification.
    pub authority: Option<Pubkey>,
    // Raw list of addresses follows this serialized structure in
    // the account's data, starting from `LOOKUP_TABLE_META_SIZE`.
}
```

一旦不再需要地址查找表，就可以将其停用并关闭以回收其租金余额。地址查找表不能在同一地址重新创建，因为每个新的查找表必须在从最近的槽派生的地址处初始化。

地址查找表可以随时停用，但可以继续被事务使用，直到停用槽不再出现在槽哈希 sysvar 中。此冷却期可确保正在进行的事务无法被审查，并且地址查找表无法关闭并为同一槽重新创建。

## 版本化交易

为了支持上述的 ALT，我们需要对交易数据内容做修改，因此区别于原始的交易（legacy），新交易使用了 VersionedTransaction:

```rs
#[derive(Serialize, Deserialize)]
pub struct VersionedTransaction {
    /// List of signatures
    #[serde(with = "short_vec")]
    pub signatures: Vec<Signature>,
    /// Message to sign.
    pub message: VersionedMessage,
}

// Uses custom serialization. If the first bit is set, the remaining bits
// in the first byte will encode a version number. If the first bit is not
// set, the first byte will be treated as the first byte of an encoded
// legacy message.
pub enum VersionedMessage {
    Legacy(LegacyMessage),
    V0(v0::Message),
}

// The structure of the new v0 Message
#[derive(Serialize, Deserialize)]
pub struct Message {
    // unchanged
    pub header: MessageHeader,

    // unchanged
    #[serde(with = "short_vec")]
    pub account_keys: Vec<Pubkey>,

    // unchanged
    pub recent_blockhash: Hash,

    // unchanged
    //
    // # Notes
    //
    // Account and program indexes will index into the list of addresses
    // constructed from the concatenation of three key lists:
    //   1) message `account_keys`
    //   2) ordered list of keys loaded from address table `writable_indexes`
    //   3) ordered list of keys loaded from address table `readonly_indexes`
    #[serde(with = "short_vec")]
    pub instructions: Vec<CompiledInstruction>,

    /// List of address table lookups used to load additional accounts
    /// for this transaction.
    #[serde(with = "short_vec")]
    pub address_table_lookups: Vec<MessageAddressTableLookup>,
}

/// Address table lookups describe an on-chain address lookup table to use
/// for loading more readonly and writable accounts in a single tx.
#[derive(Serialize, Deserialize)]
pub struct MessageAddressTableLookup {
    /// Address lookup table account key
    pub account_key: Pubkey,
    /// List of indexes used to load writable account addresses
    #[serde(with = "short_vec")]
    pub writable_indexes: Vec<u8>,
    /// List of indexes used to load readonly account addresses
    #[serde(with = "short_vec")]
    pub readonly_indexes: Vec<u8>,
}
```

新的 VersionedTransaction 需要用 VersionedMessage 来构造，而 VersionedMessage 使用的是 v0::Message 其中包含了"address_table_lookups"他是"MessageAddressTableLookup" 数组，每个 Table 包含了 Table 存储的内容 Account，以及其实读和写的 Index。

这样最终在序列化的交易中，只需要 Table 中的 index 和 Table 的地址，既可以实现对 256 个 Account 的 追踪。

## ALT 使用

要发起 ALT 交易，首先要通过 createLookupTable 创建 ALT 的 Table 账户：

```ts
const web3 = require("@solana/web3.js");

// connect to a cluster and get the current `slot`
const connection = new web3.Connection(web3.clusterApiUrl("devnet"));
const slot = await connection.getSlot();

// Assumption:
// `payer` is a valid `Keypair` with enough SOL to pay for the execution

const [lookupTableInst, lookupTableAddress] =
    web3.AddressLookupTableProgram.createLookupTable({
        authority: payer.publicKey,
        payer: payer.publicKey,
        recentSlot: slot,
    });

console.log("lookup table address:", lookupTableAddress.toBase58());

// To create the Address Lookup Table on chain:
// send the `lookupTableInst` instruction in a transaction
```

然后将要用到的 Account 的地址，存入这个账号：

```ts
// add addresses to the `lookupTableAddress` table via an `extend` instruction
const extendInstruction = web3.AddressLookupTableProgram.extendLookupTable({
    payer: payer.publicKey,
    authority: payer.publicKey,
    lookupTable: lookupTableAddress,
    addresses: [
        payer.publicKey,
        web3.SystemProgram.programId,
        // list more `publicKey` addresses here
    ],
});

// Send this `extendInstruction` in a transaction to the cluster
// to insert the listing of `addresses` into your lookup table with address `lookupTableAddress`
```

然后发起交易：

```ts
// Assumptions:
// - `arrayOfInstructions` has been created as an `array` of `TransactionInstruction`
// - we are using the `lookupTableAccount` obtained above

// construct a v0 compatible transaction `Message`
const messageV0 = new web3.TransactionMessage({
    payerKey: payer.publicKey,
    recentBlockhash: blockhash,
    instructions: arrayOfInstructions, // note this is an array of instructions
}).compileToV0Message([lookupTableAccount]);

// create a v0 transaction from the v0 message
const transactionV0 = new web3.VersionedTransaction(messageV0);

// sign the v0 transaction using the file system wallet we created named `payer`
transactionV0.sign([payer]);

// send and confirm the transaction
// (NOTE: There is NOT an array of Signers here; see the note below...)
const txid = await web3.sendAndConfirmTransaction(connection, transactionV0);

console.log(
    `Transaction: https://explorer.solana.com/tx/${txidV0}?cluster=devnet`
);
```

## 实例

以 ALT 的方式，来组合实现 Mint Token 的创建

```ts
const slot = await connection.getSlot();
const [lookupTableIx, lookupTableAddress] =
    await AddressLookupTableProgram.createLookupTable({
        authority: publicKey,
        payer: publicKey,
        recentSlot: slot,
    });

const extendIx = await AddressLookupTableProgram.extendLookupTable({
    payer: publicKey,
    authority: publicKey,
    lookupTable: lookupTableAddress,
    addresses: [
        publicKey,
        SystemProgram.programId,
        mintKeypair.publicKey,
        TOKEN_PROGRAM_ID,
    ],
});

const txInstructions = [
    lookupTableIx,
    extendIx,
    SystemProgram.createAccount({
        fromPubkey: publicKey,
        newAccountPubkey: mintKeypair.publicKey,
        space: MINT_SIZE,
        lamports: lamports,
        programId: TOKEN_PROGRAM_ID,
    }),
    createInitializeMint2Instruction(
        mintKeypair.publicKey,
        9,
        publicKey,
        publicKey,
        TOKEN_PROGRAM_ID
    ),
];

console.log("txi : ", txInstructions);
const {
    context: { slot: minContextSlot },
    value: { blockhash, lastValidBlockHeight },
} = await connection.getLatestBlockhashAndContext();
//let latestBlockhash = await connection.getLatestBlockhash("finalized");
enqueueSnackbar(
    `   ✅ - Fetched latest blockhash. Last Valid Height:
      ${lastValidBlockHeight}`
);
console.log("slot:", minContextSlot);
console.log("latestBlockhash:", blockhash);

const messageV0 = new TransactionMessage({
    payerKey: publicKey,
    recentBlockhash: blockhash,
    instructions: txInstructions,
}).compileToV0Message();

const trx = new VersionedTransaction(messageV0);
const signature = await sendTransaction(trx, connection, {
    minContextSlot,
    signers: [mintKeypair],
});
console.log("signature:", signature);
```

运行后，我们创建 Token，并得到交易记录

https://explorer.solana.com/tx/4DFETLv7bExTESy4cGtJ1A7Vd4G8WK2f48hCAhB33i2bc9Kuofbw9y5KeLqBW4gbFHFMA4RnUgDuzAkcsbrszQRp?cluster=devnet

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/alt_tx.png'),
        dark: useBaseUrl('/img/solana/alt_tx.png'),
    }}
    />
</BrowserWindow>
```
