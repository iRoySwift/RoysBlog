---
id: solana-bootcamp-Contract-read
title: 1、TokenSwap合约走读
---

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import BrowserWindow from '@site/src/components/BrowserWindow';
```

Solana 官方在 SPL 里面给了一个 AMM 的参考实现，其代码在 [Token Swap](https://github.com/solana-labs/solana-program-library/tree/master/token-swap) 相应的文档在 [Token Swap Program](https://spl.solana.com/token-swap)。

这个 Swap 合约允许在没有集中限价订单簿的情况下进行代币对的简单交易。该程序使用称为“curve”的数学公式来计算所有交易的价格。曲线旨在模仿正常的市场动态：例如，当交易者大量购买一种代币类型时，另一种代币类型的价值就会上涨。

Pool 中的存款人为代币对提供流动性。这种流动性使得交易能够以现货价格执行。作为流动性的交换，储户收到矿池代币，代表他们在矿池中的部分所有权。在每次交易期间，程序都会扣留一部分输入代币作为费用。该费用通过存储在池中而增加了池代币的价值。

## 基本操作

### 创建新的代币 Pair

Pool 的创建展示了 Solana 上的帐户、指令和授权模型，这与其他区块链相比可能有很大不同。

两种代币类型之间的池的初始化（为简单起见，我们将其称为“A”和“B”）需要以下帐户：

-   empty pool state account
-   pool authority
-   token A account
-   token B account
-   pool token mint
-   pool token fee account
-   pool token recipient account
-   token program

只需使用 system_instruction::create_account 正确的大小和足够的 lamport 来创建池状态帐户即可免租金。

Pool 权限是一个 PDA 地址 ，可以“签署”针对其他程序的指令。这是令牌交换计划铸造池令牌并从其令牌 A 和 B 账户转移令牌所必需的。

代币 A / B 账户、矿池代币铸造和矿池代币账户都必须创建（使用 system_instruction::create_account）并初始化（使用 spl_token::instruction::initialize_mint 或 spl_token::instruction::initialize_account）。代币 A 和 B 账户必须由代币资助，其所有者设置为交换机构，并且铸币厂也必须由交换机构拥有。

创建所有这些帐户后，代币交换 initialize 指令将正确设置所有内容并允许立即交易。请注意，池状态帐户不需要是 的签名者，因此在与其 相同的交易中 initialize 执行指令非常重要。initializesystem_instruction::create_account

### Swapping

创建池后，用户可以立即使用 swap 指令开始对其进行交易。交换指令将代币从用户的源账户转移到交换的源代币账户，然后将代币从其目标代币账户转移到用户的目标代币账户。

由于 Solana 程序要求在指令中声明所有账户，因此用户需要从池状态账户收集所有账户信息：代币 A 和 B 账户、池代币铸造和费用账户。

此外，用户必须允许从其源代币账户转移代币。最佳实践是向 spl_token::instruction::approve 新的一次性密钥对输入精确的金额，然后让该新密钥对签署交换交易。这限制了程序可以从用户帐户中获取的代币数量。

### Depositing liquidity

为了允许任何交易，矿池需要外部提供的流动性。使用 deposit_all_token_types 或 deposit_single_token_type_exact_amount_in 指令，任何人都可以为其他人提供流动性进行交易，作为交换，储户收到代表池中所有 A 和 B 代币部分所有权的池代币。

此外，用户需要批准委托人从其 A 和 B 代币账户转移代币。这限制了程序可以从用户帐户中获取的代币数量。

### Withdrawing liquidity

池代币持有者可以随时赎回其池代币以换取代币 A 和 B，并按曲线确定的当前“公平”利率返回。在 withdraw_all_token_types 和 withdraw_single_token_type_exact_amount_out 指令中，池代币被销毁，代币 A 和 B 被转入用户的账户。

此外，用户需要批准委托人从其代币池账户转移代币。这限制了程序可以从用户帐户中获取的代币数量。

## 前端部分

官方的实现中，同时为这个合约程序提供了一个参考的前端实现。因为后续 Serum/Raydium 等项目的原因，这个参考 实现后续没有再更新了。但是通过这个参考的前端已经包含了对这个 Swap 合约的全部交互。我们将代码拉下来：

```zsh
git clone https://github.com/solana-labs/oyster-swap.git
```

因为年久失修的原因，目前这个前端不一定能运行，但是我们可以从其代码中，了解以上的操作。

在"src/models/tokenSwap.ts"文件中，定义了上面说的几个功能的指令：

```ts
createInitSwapInstruction,
  TokenSwapLayout,
  depositInstruction,
  withdrawInstruction,
  TokenSwapLayoutLegacyV0,
  swapInstruction,
```

其主要是对 "Token Swap"提供的 JS SDK 的封装，在 SDK

比如创建 pair 的指令：

```rs
static createInitSwapInstruction(
    tokenSwapAccount: Account,
    authority: PublicKey,
    tokenAccountA: PublicKey,
    tokenAccountB: PublicKey,
    tokenPool: PublicKey,
    feeAccount: PublicKey,
    tokenAccountPool: PublicKey,
    tokenProgramId: PublicKey,
    swapProgramId: PublicKey,
    nonce: number,
    tradeFeeNumerator: number,
    tradeFeeDenominator: number,
    ownerTradeFeeNumerator: number,
    ownerTradeFeeDenominator: number,
    ownerWithdrawFeeNumerator: number,
    ownerWithdrawFeeDenominator: number,
    hostFeeNumerator: number,
    hostFeeDenominator: number,
    curveType: number,
  ): TransactionInstruction {
    const keys = [
      {pubkey: tokenSwapAccount.publicKey, isSigner: false, isWritable: true},
      {pubkey: authority, isSigner: false, isWritable: false},
      {pubkey: tokenAccountA, isSigner: false, isWritable: false},
      {pubkey: tokenAccountB, isSigner: false, isWritable: false},
      {pubkey: tokenPool, isSigner: false, isWritable: true},
      {pubkey: feeAccount, isSigner: false, isWritable: false},
      {pubkey: tokenAccountPool, isSigner: false, isWritable: true},
      {pubkey: tokenProgramId, isSigner: false, isWritable: false},
    ];
    const commandDataLayout = BufferLayout.struct([
      BufferLayout.u8('instruction'),
      BufferLayout.u8('nonce'),
      BufferLayout.nu64('tradeFeeNumerator'),
      BufferLayout.nu64('tradeFeeDenominator'),
      BufferLayout.nu64('ownerTradeFeeNumerator'),
      BufferLayout.nu64('ownerTradeFeeDenominator'),
      BufferLayout.nu64('ownerWithdrawFeeNumerator'),
      BufferLayout.nu64('ownerWithdrawFeeDenominator'),
      BufferLayout.nu64('hostFeeNumerator'),
      BufferLayout.nu64('hostFeeDenominator'),
      BufferLayout.u8('curveType'),
      BufferLayout.blob(32, 'curveParameters'),
    ]);
    let data = Buffer.alloc(1024);
    {
      const encodeLength = commandDataLayout.encode(
        {
          instruction: 0, // InitializeSwap instruction
          nonce,
          tradeFeeNumerator,
          tradeFeeDenominator,
          ownerTradeFeeNumerator,
          ownerTradeFeeDenominator,
          ownerWithdrawFeeNumerator,
          ownerWithdrawFeeDenominator,
          hostFeeNumerator,
          hostFeeDenominator,
          curveType,
        },
        data,
      );
      data = data.slice(0, encodeLength);
    }
    return new TransactionInstruction({
      keys,
      programId: swapProgramId,
      data,
    });
  }
```

这里因为之前的系统中，没有 Borsh 也没有 Anchor，通过手动的方式，排列了这里要用到的 keys 和各个参数。 具体参数的意义，我们在下面的合约部分会做详细介绍。

## 合约部分

我们按照上面的代码地址，找到 TokenSwap 的代码，然后这里我们 checkout 到上面的前端对应的合约的版本，也就是 2020 年 11 月 17 日的提交：

```zsh
git checkout d46f010195c461108030e25f1808126baf1ae810
```

首先看到的是，这个 Swap 合约，跟我们之前介绍的非 anchor 项目是类似的：

```zsh
.
├── Cargo.toml
├── Xargo.toml
├── cbindgen.toml
├── fuzz
│   ├── Cargo.toml
│   └── src
├── inc
│   └── token-swap.h
├── sim
│   ├── Cargo.lock
│   ├── Cargo.toml
│   ├── simulation.py
│   └── src
└── src
    ├── constraints.rs
    ├── curve
    ├── entrypoint.rs
    ├── error.rs
    ├── instruction.rs
    ├── lib.rs
    ├── processor.rs
    └── state.rs
```

主要看 src 目录。这里有"entrypoint"/"error"/"instruction"/"processor"以及"state"。

这里我们能看到：

```zsh
169 constraints.rs
      21 entrypoint.rs
     104 error.rs
     721 instruction.rs
      18 lib.rs
    6658 processor.rs
     228 state.rs
    7919 total
```

那是不是这个合约有 7k 代码量的复杂呢？其实不是的，我们前面学习过 rust 的单元测试，其实在 processor 里面 其实只有一千多一点的核心代码，其余部分都是测试代码。

我们从指令开始看起来，总共定义了：

```rs
pub enum SwapInstruction {
    ///   Initializes a new SwapInfo.
    ///
    ///   0. `[writable, signer]` New Token-swap to create.
    ///   1. `[]` $authority derived from `create_program_address(&[Token-swap account])`
    ///   2. `[]` token_a Account. Must be non zero, owned by $authority.
    ///   3. `[]` token_b Account. Must be non zero, owned by $authority.
    ///   4. `[writable]` Pool Token Mint. Must be empty, owned by $authority.
    ///   5. `[]` Pool Token Account to deposit trading and withdraw fees.
    ///   Must be empty, not owned by $authority
    ///   6. `[writable]` Pool Token Account to deposit the initial pool token
    ///   supply.  Must be empty, not owned by $authority.
    ///   7. '[]` Token program id
    Initialize(Initialize),

    ///   Swap the tokens in the pool.
    ///
    ///   0. `[]` Token-swap
    ///   1. `[]` $authority
    ///   2. `[writable]` token_(A|B) SOURCE Account, amount is transferable by $authority,
    ///   3. `[writable]` token_(A|B) Base Account to swap INTO.  Must be the SOURCE token.
    ///   4. `[writable]` token_(A|B) Base Account to swap FROM.  Must be the DESTINATION token.
    ///   5. `[writable]` token_(A|B) DESTINATION Account assigned to USER as the owner.
    ///   6. `[writable]` Pool token mint, to generate trading fees
    ///   7. `[writable]` Fee account, to receive trading fees
    ///   8. '[]` Token program id
    ///   9. `[optional, writable]` Host fee account to receive additional trading fees
    Swap(Swap),

    ///   Deposit both types of tokens into the pool.  The output is a "pool"
    ///   token representing ownership in the pool. Inputs are converted to
    ///   the current ratio.
    ///
    ///   0. `[]` Token-swap
    ///   1. `[]` $authority
    ///   2. `[writable]` token_a $authority can transfer amount,
    ///   3. `[writable]` token_b $authority can transfer amount,
    ///   4. `[writable]` token_a Base Account to deposit into.
    ///   5. `[writable]` token_b Base Account to deposit into.
    ///   6. `[writable]` Pool MINT account, $authority is the owner.
    ///   7. `[writable]` Pool Account to deposit the generated tokens, user is the owner.
    ///   8. '[]` Token program id
    DepositAllTokenTypes(DepositAllTokenTypes),

    ///   Withdraw both types of tokens from the pool at the current ratio, given
    ///   pool tokens.  The pool tokens are burned in exchange for an equivalent
    ///   amount of token A and B.
    ///
    ///   0. `[]` Token-swap
    ///   1. `[]` $authority
    ///   2. `[writable]` Pool mint account, $authority is the owner
    ///   3. `[writable]` SOURCE Pool account, amount is transferable by $authority.
    ///   4. `[writable]` token_a Swap Account to withdraw FROM.
    ///   5. `[writable]` token_b Swap Account to withdraw FROM.
    ///   6. `[writable]` token_a user Account to credit.
    ///   7. `[writable]` token_b user Account to credit.
    ///   8. `[writable]` Fee account, to receive withdrawal fees
    ///   9. '[]` Token program id
    WithdrawAllTokenTypes(WithdrawAllTokenTypes),

    ///   Deposit one type of tokens into the pool.  The output is a "pool" token
    ///   representing ownership into the pool. Input token is converted as if
    ///   a swap and deposit all token types were performed.
    ///
    ///   0. `[]` Token-swap
    ///   1. `[]` $authority
    ///   2. `[writable]` token_(A|B) SOURCE Account, amount is transferable by $authority,
    ///   3. `[writable]` token_a Swap Account, may deposit INTO.
    ///   4. `[writable]` token_b Swap Account, may deposit INTO.
    ///   5. `[writable]` Pool MINT account, $authority is the owner.
    ///   6. `[writable]` Pool Account to deposit the generated tokens, user is the owner.
    ///   7. '[]` Token program id
    DepositSingleTokenTypeExactAmountIn(DepositSingleTokenTypeExactAmountIn),

    ///   Withdraw one token type from the pool at the current ratio given the
    ///   exact amount out expected.
    ///
    ///   0. `[]` Token-swap
    ///   1. `[]` $authority
    ///   2. `[writable]` Pool mint account, $authority is the owner
    ///   3. `[writable]` SOURCE Pool account, amount is transferable by $authority.
    ///   4. `[writable]` token_a Swap Account to potentially withdraw from.
    ///   5. `[writable]` token_b Swap Account to potentially withdraw from.
    ///   6. `[writable]` token_(A|B) User Account to credit
    ///   7. `[writable]` Fee account, to receive withdrawal fees
    ///   8. '[]` Token program id
    WithdrawSingleTokenTypeExactAmountOut(WithdrawSingleTokenTypeExactAmountOut),
}
```

总共有 6 个指令。分别是创建 pair,swap，抵押和提取 pair 以及抵押和提取单个 token。我们主要来看前四种。

在 state 里面定义了一个存储：

```rs
pub struct SwapInfo {
    /// Initialized state.
    pub is_initialized: bool,
    /// Nonce used in program address.
    /// The program address is created deterministically with the nonce,
    /// swap program id, and swap account pubkey.  This program address has
    /// authority over the swap's token A account, token B account, and pool
    /// token mint.
    pub nonce: u8,

    /// Program ID of the tokens being exchanged.
    pub token_program_id: Pubkey,

    /// Token A
    pub token_a: Pubkey,
    /// Token B
    pub token_b: Pubkey,

    /// Pool tokens are issued when A or B tokens are deposited.
    /// Pool tokens can be withdrawn back to the original A or B token.
    pub pool_mint: Pubkey,

    /// Mint information for token A
    pub token_a_mint: Pubkey,
    /// Mint information for token B
    pub token_b_mint: Pubkey,

    /// Pool token account to receive trading and / or withdrawal fees
    pub pool_fee_account: Pubkey,

    /// All fee information
    pub fees: Fees,

    /// Swap curve parameters, to be unpacked and used by the SwapCurve, which
    /// calculates swaps, deposits, and withdrawals
    pub swap_curve: SwapCurve,
}
```

这个就类似 univ2 里面的 pair。其表示 token_a_mint 和 token_b_mint 的一个 pair。pool 中相应的 token 存放在 token account 中也就是上面的 token_a 和 token_b,对应的 LP Token 为 pool_mint。swap_curve 用于记录 curve 数据信息。其定义为：

```rs
pub struct SwapCurve {
    /// The type of curve contained in the calculator, helpful for outside
    /// queries
    pub curve_type: CurveType,
    /// The actual calculator, represented as a trait object to allow for many
    /// different types of curves
    pub calculator: Box<dyn CurveCalculator>,
}
```

这里 CurveCalculator 主要有四种实现：

-   impl CurveCalculator for ConstantPriceCurve /// Constant price curve always returns 1:1
-   impl CurveCalculator for ConstantProductCurve /// Constant product swap ensures x \_ y = constant
-   impl CurveCalculator for StableCurve /// Stable curve
-   impl CurveCalculator for OffsetCurve /// Constant product swap ensures token a \_ (token b + offset) = constant /// This is guaranteed to work for all values such that: /// - 1 <= source_amount <= u64::MAX /// - 1 <= (swap_source_amount \* (swap_destination_amount + token_b_offset)) <= u128::MAX /// If the offset and token B are both close to u64::MAX, there can be /// overflow errors with the invariant.

    类比到最容易理解的 UniV2，我们这里主要来看"ConstantProductCurve"。

所以整体结构就是这样的：

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/solana/swap_process.png'),
        dark: useBaseUrl('/img/solana/swap_process.png'),
    }}
    />
</BrowserWindow>
```

以 process 为入口，然后读取 swapinfo 中的 token 信息以及数量等，最后通过选定的 curve 做计算。

### process_initialize

首先解析各个 key：

```rs
let account_info_iter = &mut accounts.iter();
        let swap_info = next_account_info(account_info_iter)?;
        let authority_info = next_account_info(account_info_iter)?;
        let token_a_info = next_account_info(account_info_iter)?;
        let token_b_info = next_account_info(account_info_iter)?;
        let pool_mint_info = next_account_info(account_info_iter)?;
        let fee_account_info = next_account_info(account_info_iter)?;
        let destination_info = next_account_info(account_info_iter)?;
        let token_program_info = next_account_info(account_info_iter)?;

        let token_program_id = *token_program_info.key;
        let token_swap = SwapInfo::unpack_unchecked(&swap_info.data.borrow())?;
```

然后用 Self::unpack_token_account 将需要读取 data 部分的 account 做解析。

接着是一对的安全值 check。如

```rs
if *authority_info.key != token_a.owner {
            return Err(SwapError::InvalidOwner.into());
        }
```

检查完了以后，初始化 curve:

```rs
swap_curve
            .calculator
            .validate_supply(token_a.amount, token_b.amount)?;

        ...
        swap_curve.calculator.validate()?;
        ....
```

最后将 pair 的信息记录下来：

```rs
let obj = SwapInfo {
            is_initialized: true,
            nonce,
            token_program_id,
            token_a: *token_a_info.key,
            token_b: *token_b_info.key,
            pool_mint: *pool_mint_info.key,
            token_a_mint: token_a.mint,
            token_b_mint: token_b.mint,
            pool_fee_account: *fee_account_info.key,
            fees,
            swap_curve,
        };
        SwapInfo::pack(obj, &mut swap_info.data.borrow_mut())?;
```

将 SwapInfo 信息写入。

### process_deposit_all_token_types

首先也是解析 key 部分的 Account 和相应的 data 部分的 unpack,这里就不截代码了。

然后将 check 部分封装在 check_accounts 函数中，做检查。

然后就是真正的逻辑部分，通过 curve 计算可以的输出数量：

```rs
let calculator = token_swap.swap_curve.calculator;

        let results = calculator
            .pool_tokens_to_trading_tokens(
                pool_token_amount,
                new_pool_mint_supply,
                to_u128(token_a.amount)?,
                to_u128(token_b.amount)?,
            )
            .ok_or(SwapError::ZeroTradingTokens)?;
```

算好了相关的输出，收取 token A/B，并给用户发送 LP:

```rs
Self::token_transfer(
            swap_info.key,
            token_program_info.clone(),
            source_a_info.clone(),
            token_a_info.clone(),
            authority_info.clone(),
            token_swap.nonce,
            token_a_amount,
        )?;
        Self::token_transfer(
            swap_info.key,
            token_program_info.clone(),
            source_b_info.clone(),
            token_b_info.clone(),
            authority_info.clone(),
            token_swap.nonce,
            token_b_amount,
        )?;
        Self::token_mint_to(
            swap_info.key,
            token_program_info.clone(),
            pool_mint_info.clone(),
            dest_info.clone(),
            authority_info.clone(),
            token_swap.nonce,
            to_u64(pool_token_amount)?,
        )?;
```

### process_swap

首先也是对 Key 和 data 部分做解析。然后做相应的信息检查。检查完后，通过 SwapInfo 中的 Curve 进行计算：

```rs
let result = token_swap
            .swap_curve
            .swap(
                to_u128(amount_in)?,
                to_u128(source_account.amount)?,
                to_u128(dest_account.amount)?,
                trade_direction,
                &token_swap.fees,
            )
            .ok_or(SwapError::ZeroTradingTokens)?;
```

计算完成后，做 Token A/B 的交换

```rs
Self::token_transfer(
            swap_info.key,
            token_program_info.clone(),
            source_info.clone(),
            swap_source_info.clone(),
            authority_info.clone(),
            token_swap.nonce,
            to_u64(result.source_amount_swapped)?,
        )?;
        Self::token_transfer(
            swap_info.key,
            token_program_info.clone(),
            swap_destination_info.clone(),
            destination_info.clone(),
            authority_info.clone(),
            token_swap.nonce,
            to_u64(result.destination_amount_swapped)?,
        )?;
```

最后是做 fee 的计算和分配。

另外三个指令的操作，基本类似。整个逻辑可以类比 [UniV2](https://uniswap.org/) 和 [Banlancer](https://balancer.finance/) 的算法
