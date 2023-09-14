---
id: solana-Anchor-development-framework
title: 3、Anchor开发框架
---

Anchor 作为一款开发框架，提供了合约开发的基本结构，区别于我们之前介绍"instruction/stat/process" 基本程序结构，同时 Anchor 还提供了客户端相关的 Typescript 相关类库，以及"anchor"命令工具。

Anchor 程序结构
一个 Anchor 工程主要包含了

-   "declare_id"宏声明的合约地址，用于创建对象的 owner
-   #[derive(Accounts)] 修饰的 Account 对象，用于表示存储和指令
-   "program" 模块，这里面写主要的合约处理逻辑

对应到我们之前的 HelloWorld，就是要将 state 和 instruction 部分用 #[derive(Accounts)] 修饰，将 process 逻辑放到 program 模块中，并增加一个合约地址的修饰。

#[program] 修饰的 Module 即为指令处理模块。其中有一个 Context 类型，来存放所有的指令参数。比如

-   ctx.accounts 所有的请求 keys，也就是 AccountMeta 数组
-   ctx.program_id 指令中的 program_id
-   ctx.remaining_accounts 指令中，没有被下面说的"Accounts"修饰的成员的 AccountMeta

## 处理指令

对于指令，我们要通过#[derive(Accounts)]来修饰我们定义的指令部分的定义：

```rs
#[account]
#[derive(Default)]
pub struct MyAccount {
    data: u64
}


#[derive(Accounts)]
pub struct SetData<'info> {
    #[account(mut)]
    pub my_account: Account<'info, MyAccount>
}
```

这里定义了指令结构 "SetData" ， 那么在处理里面我们就要定义相应的处理函数：

```rs
#[program]
mod hello_anchor {
    use super::*;
    pub fn set_data(ctx: Context<SetData>, data: u64) -> Result<()> {
        ctx.accounts.my_account.data = data;
        Ok(())
    }
}
```

函数名固定为结构体名的小写 snake 风格的命名，对应"SetData"也就是"set_data"。类似 process 的函数，这个函数的原型也是固定的

```rs
pub fun xxx_yyy_zzz(ctx: Context<IxData>, data:Data) -> Result<()> {}
```

第一个参数为 Context 其为泛型类型，类型为要处理的指令结构，后续 data 部分的结构定义。 返回值为一个 Result。

同时我们可以给指令增加一些校验，类似我们在 process 里面的相关校验。

```rs
#[account]
#[derive(Default)]
pub struct MyAccount {
    data: u64,
    mint: Pubkey
}


#[derive(Accounts)]
pub struct SetData<'info> {
    #[account(mut)]
    pub my_account: Account<'info, MyAccount>,
    #[account(
        constraint = my_account.mint == token_account.mint,
        has_one = owner
    )]
    pub token_account: Account<'info, TokenAccount>,
    pub owner: Signer<'info>
}
```

在需要增加校验信息的 account 上面增加 #[account()] 修饰，比如这里用

-   "mut"表示 "my_account"为"writeable"，
-   "has_one" 表示 token_account 的 owner 为这里的 owner 成员
-   "constraint" 指定限制条件，类似一个条件表达式，这里意思是 if my_account.mint == token_account.mint
-   "init" account 是否创建了
-   "payer" 为这个账号创建付费的账号
-   "space" 这个账号的 data 部分大小

## 错误处理

在我们之前的结构中，我们专门用了 error.rs 来枚举错误，在 Anchor 中提供了两类错误

Anchor 自身错误

-   自定义错误
-   Anchor 自身错误，可以参考具体的[错误码](https://docs.rs/anchor-lang/latest/anchor_lang/error/enum.ErrorCode.html)

自定义错误通过"err!"和"error_code!"宏来抛出和定义：

```rs
#[program]
mod hello_anchor {
    use super::*;
    pub fn set_data(ctx: Context<SetData>, data: MyAccount) -> Result<()> {
        if data.data >= 100 {
            return err!(MyError::DataTooLarge);
        }
        ctx.accounts.my_account.set_inner(data);
        Ok(())
    }
}

#[error_code]
pub enum MyError {
    #[msg("MyAccount may only hold data below 100")]
    DataTooLarge
}
```

Anchor 提供了一个类似 assert 的 requre!宏，用于判断条件，并打印错误码，返回错误：

```rs
require!(data.data < 100, MyError::DataTooLarge);
```

如果条件不满足，则返回后面的错误。

## 合约间调用

在前面介绍的 CPI，我们主要是通过 invoke 和 invoke_signed 来实现。在 Anchor 中，也可以 用这两个函数，同时如果两个合约都是 anchor 工程，anchor 还提供了一个 cpi 模块来实现更方便的操作。

此时在主调项目中引入被调用项目的代码，并添加特性 features = ["cpi"]：

```rs
puppet = { path = "../puppet", features = ["cpi"]}
```

这样在主调用合约工程里面，anchor 会自动生成 "puppet::cpi" 模块，该模块下的 accounts 既可以访问到 被调用合约工程的 accounts 定义。而"cpi"模块下，有别调用合约的 #[program] 修饰的模块的方法

当调用时，通过

```rs
被调用合约::cpi::被调用指令方法(CpiContext类型ctx, data)
```

来进行调用，比如：

```rs
let cpi_program = self.puppet_program.to_account_info();
let cpi_accounts = SetData {
    puppet: self.puppet.to_account_info()
};
let ctx = CpiContext::new(cpi_program, cpi_accounts)
puppet::cpi::set_data(ctx, data)
```

在主调合约中，先通过传递过来的被调用合约地址构造"cpi_program",然后再构造需要调用的指令结构， 用这个地址和指令结构构造 CpiContext。

接着使用 cpi 调用即可。

当进行调用完成后，我们也可以像"invoke"一样来调用"get_return_data"获取返回值，而在 Anchor 中， 通过上面的介绍，我们知道，可以直接在指令函数的返回结果中从 Result 中获得：

```rs
puppet:

    pub fn set_data(ctx: Context<SetData>, data: u64) -> Result<u64> {

puppet master:

    let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
    let result = puppet::cpi::set_data(cpi_ctx, data)?;
```

这里既可以获得结果值。

## PDA 生成

在前面，我们介绍的 PDA 生成，是通过 Pubkey::find_program_address 方法，该方法，返回一个 key 和一个 bump，Anchor 将这个过程封装了一下，但是这里好像不是那么丝滑。

```rs
let pda = hash(seeds, bump, program_id);
```

需要自己来提供这个 bump，为了寻找 bump 就得进行循环查找：

```rs
fn find_pda(seeds, program_id) {
  for bump in 0..256 {
    let potential_pda = hash(seeds, bump, program_id);
    if is_pubkey(potential_pda) {
      continue;
    }
    return (potential_pda, bump);
  }
  panic!("Could not find pda after 256 tries.");
}
```

或者由用户提供。但是实际上在 Anchor 中使用的时候，是不需要显式的去调用的，Anchor 通过 在#[account(中添加 seeds = [b"user-stats", user.key().as_ref()], bump = user_stats.bump) 来指定 seeds 和 bump。

这样结合本合约的地址，就可以推导出这个 account 的 Pubkey 了。

在合约里面通过 ctx.bumps.get("user_stats")既可以获得对应#[account] 修饰的指令成员 Account 的

如果 bump 不赋值，比如：

```rs
seeds = [b"user-stats", user.key().as_ref()], bump]
```

在调用 ctx.bumps.get("user_stats")则由合约去用上面的循环来找到第一个可用的 bump。

那如果需要做签名的 PDA 要怎么调用，也就是在 CPI 中如何使用 PDA 签名。

这个时候我们需要将

```rs
CpiContext::new(cpi_program, cpi_accounts)

修改成

CpiContext::new_with_signer(cpi_program, cpi_accounts, seeds)
```

这里"seeds"即为生成 PDA 时候的 Seeds。此时调用的时候，会检查 所有的 cpi_accounts 都符合：

```rs
hash(seeds, current_program_id) == account address
```

除非该成员 Account 是"UncheckedAccount"类型。

## 参考示例

Anchor 官方提供了 [一些例子](https://github.com/coral-xyz/anchor/tree/master/examples/tutorial)
