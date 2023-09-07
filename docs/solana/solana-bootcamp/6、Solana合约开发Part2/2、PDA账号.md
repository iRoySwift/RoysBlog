---
id: solana-pda
title: 2、PDA账号
---

程序派生地址 (PDA:Program derived addresses) 是只有程序 program_id 有权签名的帐户密钥。 该地址与 Solana Pubkey 的形式相同，但确保它们不在 ed25519 曲线上，因此没有关联的私钥。

程序派生地址允许在程序之间调用时使用以编程方式生成的签名。

使用程序派生地址，程序可以被授予对帐户的权限，然后将该权限转移给另一个程序。 这是可能的，因为程序可以充当授予权限的交易中的签名者。

例如，如果两个用户想要对 Solana 中的游戏结果进行下注，他们必须将其下注资产转移给某个遵守协议的中介机构。 目前，无法在 Solana 中将此中介程序实施为程序，因为中介程序无法将资产转移给获胜者。

此功能对于许多 DeFi 应用程序来说是必要的，因为它们需要将资产转移到托管代理，直到发生确定新所有者的事件为止。

-   在匹配的买价和卖价订单之间转移资产的去中心化交易所。
-   将资产转移给获胜者的拍卖。
-   收集奖品并将其重新分配给获胜者的游戏或预测市场。

程序派生地址：

-   允许程序控制特定地址（称为程序地址），这样外部用户就无法生成带有这些地址签名的有效交易。
-   允许程序以编程方式对通过跨程序调用调用的指令中存在的程序地址进行签名。

满足这两个条件，用户可以安全地将链上资产的权限转移或分配给程序地址，然后程序可以自行将该权限分配到其他地方。

## 生成方式

由于程序地址不得位于 ed25519 曲线上，因此可能存在无效的种子和程序 ID 组合。 因此，会计算一个额外的种子（凹凸种子），从而产生偏离曲线的点。找到有效程序地址的过程是通过反复试验来实现的，即使在给定一组输入的情况下它是确定性的，但在不同的输入上成功需要不同的时间。 这意味着当从链上程序调用时，可能会产生可变数量的程序计算预算。 想要高性能的程序可能不想使用此函数，因为它可能需要相当长的时间。 已经面临超出计算预算风险的程序应谨慎调用此方法，因为程序的预算有可能偶尔且不可预测地超出。

由于链上 Solana 程序访问的所有账户地址都必须显式传递给该程序，因此 PDA 通常在链外客户端程序中派生，从而避免了生成链上地址的计算成本。 一般的使用分成两种形式：

-   在链外创建 PDA 账号，然后给到合约去用，如 ATA 账号
-   合约内部创建 PDA 账号，只有这个合约可以使用，如存管 NFT 账号

对于链外账号，可以通过 SDK 提供的接口来创建，如 web3.js 提供的:

```ts
/**
* Async version of findProgramAddressSync
* For backwards compatibility
*
* @deprecated Use {@link findProgramAddressSync} instead
*/
static async findProgramAddress(
    seeds: Array<Buffer | Uint8Array>,
    programId: PublicKey,
): Promise<[PublicKey, number]> {
    return this.findProgramAddressSync(seeds, programId);
}
```

来创建。

而合约里面，则可以通过：

```rs
pub fn find_program_address(seeds: &[&[u8]], program_id: &Pubkey) -> (Pubkey, u8) {
    Self::try_find_program_address(seeds, program_id)
        .unwrap_or_else(|| panic!("Unable to find a viable program address bump seed"))
}
```

Rust SDK 中的方法创建。

由于种子的散列方式，同一程序 ID 可能会发生程序地址冲突。 种子按顺序进行散列，这意味着种子 {“abcdef”}、{“abc”、“def”} 和 {“ab”、“cd”、“ef”} 在给定相同程序 ID 的情况下都将产生相同的程序地址。 由于冲突的机会对于给定的程序 ID 而言是局部的，因此该程序的开发人员必须注意选择不会相互冲突的种子。 对于容易受到此类哈希冲突影响的种子方案，常见的补救措施是在种子之间插入分隔符，例如 将 {“abc”, “def”} 转换为 {“abc”, “-”, “def”}。

## 使用场景

PDA 的初衷是设计在执行跨程序调用时，程序可以通过调用 invoke_signed 并传递用于生成地址的相同种子以及计算出的凹凸种子（该函数将其作为第二个元组元素返回）来“签名”密钥。 运行时将验证与该地址关联的程序是否是调用者，从而被授权为签名者。从而实现程序管理特定账号的需求。比如用特定账号作为资管账号，或者 swap 信息存储账号等。

所以在 swap 程序中，会使用到 PDA 账号作为 pool 的信息账号。

另外一种场景，如果给定合约程序和 seed，就可以得到唯一的 PDA 账号，这样类似一个单向 hash 的特性，使得我们可以针对 特定合约，给定参数对输出账号做管理。比如 SPL-Token 中的 ATA 账号。通过已知的固定 SPL-Token 合约地址+用户的 SOL 账号地址，以及代币 Mint 的地址。就可以唯一确定一个地址用来存储该用户的该 Mint Token 的 SPL-Token 账号。从而实现 只需要 SOL 账号地址，就可以进行 SPL-Token 的转账。类似的 NameService，通过 SOL 账号地址，得到唯一存储 Name 的账号 ，然后将名字相关信息存储在该账号中，解析的时候，根据该逻辑即可得到 SOL 账号地址。

## 实例

创建 ATA 账号，我们在命令行中，创建一个代币：

```zsh
spl-token create-token
Creating token EUGfLUCBAMFvEDk1MZ2SbcZQ54mdczFyFkWVYvVVUcdF under program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

Address:  EUGfLUCBAMFvEDk1MZ2SbcZQ54mdczFyFkWVYvVVUcdF
Decimals:  9

Signature: V32Eo2ZQttHRYzUqPgcvnGZGTzsPUDfJCJwxArCtvE372BSMtZQB7UqdJN3HUiJKg1oeQ8EYGuj5oMnFkUmcPcq
```

然后创建我们自己账号在这个 mint 下的 ATA 账号：

```zsh
spl-token create-account EUGfLUCBAMFvEDk1MZ2SbcZQ54mdczFyFkWVYvVVUcdF
Creating account 7X8RKbXhxGATEHwXPVWvZFDL5yZwgf9YyActE93wyhku

Signature: 67JaFzPF6umPu54Sh7xd8V78ECVd8iEtiR7GDLmbXEerXoprAR7vNPcekaahnxgYprbWKnhsyR98omhfjZ8qnZ1b
```

这里的 7X8RKbXhxGATEHwXPVWvZFDL5yZwgf9YyActE93wyhku 账号就是我们的地址子在 EUGfLUCBAMFvEDk1MZ2SbcZQ54mdczFyFkWVYvVVUcdF token 下的 ATA 账号。他是怎么计算得来的呢？

ATA 地址是用 SOL 钱包地址，目标代币地址以及 SPL-Token 地址作为 Seed，在 SPL-Token 合约下生成的。 所以对于 Rust 的调用是：

```rs
Pubkey::find_program_address(
    &[
        &wallet_address.to_bytes(),
        &token_program_id.to_bytes(),
        &token_mint_address.to_bytes(),
    ],
    program_id,
)
```

我们写一个简单的 rust 程序来验证。

```rs
use std::str::FromStr;

use solana_program::pubkey::Pubkey;


fn main() {

    let spl_token_addr : Pubkey= Pubkey::from_str("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA").unwrap();
    let token_addr: Pubkey = Pubkey::from_str("EUGfLUCBAMFvEDk1MZ2SbcZQ54mdczFyFkWVYvVVUcdF").unwrap();
    let sol_addr: Pubkey = Pubkey::from_str("5pWae6RxD3zrYzBmPTMYo1LZ5vef3vfWH6iV3s8n6ZRG").unwrap();
    let ata_program_addr: Pubkey = Pubkey::from_str("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL").unwrap();

    let seeds = [
        &sol_addr.to_bytes()[..],
        &spl_token_addr.to_bytes()[..],
        &token_addr.to_bytes()[..],
    ];
    let (ata_addr ,_seed )= Pubkey::find_program_address(&seeds[..], &ata_program_addr);


    println!("ata_addr is {}", ata_addr);
}
```

运行一下：

```zsh
cargo run
Compiling ata v0.1.0 (./Solana-Asia-Summer-2023/s101/Solana-Program-Part2/demo/ata)
    Finished dev [unoptimized + debuginfo] target(s) in 0.65s
    Running `target/debug/ata`
ata_addr is 7X8RKbXhxGATEHwXPVWvZFDL5yZwgf9YyActE93wyhku
```

可以看到这里的 ata 地址和我们的命令行得出来的是一致的。
