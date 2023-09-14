---
id: solana-Contract-Anchor-practice
title: 4、Anchor实践
---

我们将之前的我们的记事本合约改成 Anchor 工程。同时为了模拟 PDA，我们将记事本所在地，按照用户 改成其 PDA 地址。

首先创建工程：

```zsh
anchor init note
```

## 设计指令

定义指令 Account:

```rs
#[derive(Accounts)]
pub struct Create<'info> {
    #[account(
        init,
        payer=user,
        space = 128,
        seeds = [user.key().as_ref()],
        bump
    )]
    pub note: Account<'info, Note>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}
```

其中 State 定义为：

```rs
#[account]
pub struct Note {
    pub message: String
}
```

存储消息。

这里

```rs
#[account(
        init,
        payer=user,
        space = 128,
        seeds = [user.key().as_ref()],
        bump
    )]
```

会新创建一个 Account，该 account 的地址为 seeds 确定的 PDA 地址，空间大小为 128 字节，由 user 来支付 lamports 费用。

## 执行逻辑

```rs
#[program]
pub mod note {
    use super::*;

    pub fn create(ctx: Context<Create>, msg: String) -> Result<()> {
        let note = &mut ctx.accounts.note;

        note.message = msg;
        Ok(())
    }
}
```

这里整个逻辑就非常简单。直接获取相应的 Account 对象，然后将该 state 对象的 message 赋值即可。
