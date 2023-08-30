---
id: solana-Contract-error
title: 4、Solana合约错误定义
---

在前面的指令处理函数中，我们需要返回 ProgramResult 类型，其定义为：

```rust
use {
    std::{
        result::Result as ResultGeneric,
    },
};

pub type ProgramResult = ResultGeneric<(), ProgramError>;
```

其实就是一个使用了 ProgramError 作为 Err 部分的 Result 类型枚举。

## 1、系统错误

上面提到的 ProgramError 的定义为：

```rust
/// Reasons the program may fail
#[derive(Clone, Debug, Deserialize, Eq, Error, PartialEq, Serialize)]
pub enum ProgramError {
    /// Allows on-chain programs to implement program-specific error types and see them returned
    /// by the Solana runtime. A program-specific error may be any type that is represented as
    /// or serialized to a u32 integer.
    #[error("Custom program error: {0:#x}")]
    Custom(u32),
    #[error("The arguments provided to a program instruction were invalid")]
    InvalidArgument,
    #[error("An instruction's data contents was invalid")]
    InvalidInstructionData,
    #[error("An account's data contents was invalid")]
    InvalidAccountData,
    #[error("An account's data was too small")]
    AccountDataTooSmall,
    #[error("An account's balance was too small to complete the instruction")]
    InsufficientFunds,
    #[error("The account did not have the expected program id")]
    IncorrectProgramId,
    #[error("A signature was required but not found")]
    MissingRequiredSignature,
    #[error("An initialize instruction was sent to an account that has already been initialized")]
    AccountAlreadyInitialized,
    #[error("An attempt to operate on an account that hasn't been initialized")]
    UninitializedAccount,
    #[error("The instruction expected additional account keys")]
    NotEnoughAccountKeys,
    #[error("Failed to borrow a reference to account data, already borrowed")]
    AccountBorrowFailed,
    #[error("Length of the seed is too long for address generation")]
    MaxSeedLengthExceeded,
    #[error("Provided seeds do not result in a valid address")]
    InvalidSeeds,
    #[error("IO Error: {0}")]
    BorshIoError(String),
    #[error("An account does not have enough lamports to be rent-exempt")]
    AccountNotRentExempt,
    #[error("Unsupported sysvar")]
    UnsupportedSysvar,
    #[error("Provided owner is not allowed")]
    IllegalOwner,
    #[error("Accounts data allocations exceeded the maximum allowed per transaction")]
    MaxAccountsDataAllocationsExceeded,
    #[error("Account data reallocation was invalid")]
    InvalidRealloc,
    #[error("Instruction trace length exceeded the maximum allowed per transaction")]
    MaxInstructionTraceLengthExceeded,
    #[error("Builtin programs must consume compute units")]
    BuiltinProgramsMustConsumeComputeUnits,
}
```

因此我们的 process 函数里面必须要返回这里的一个值枚举值。

上面的错误枚举，基本意义还是比较明确的。比如参数不对，Gas 不够。相当于系统已经把错误进行了分类。

但是我们合约中的错误其实是每个逻辑不一样的，那么要如何去定义他呢？

这里上面的分类中有一类

```rust
Custom(u32)
```

这个就是专门给应用合约定义其错误用的，每个错误用一个 u32 来表示

## 2、合约错误定义

既然是用 u32 类区别合约错误，自然我们想到了 Rust 里面的 enum 来定义错误：

```rust
#[derive(Clone, Debug, Eq, Error, FromPrimitive, PartialEq)]
pub enum HelloWorldError {
    #[error("Not owned by HelloWolrd Program")]
    NotOwnedByHelloWrold,
}
```

但是这是我们自定义的枚举，要如何让他变成上面的 Custom(u32) 呢？因此需要定义转换函数：

```rust
impl From<HelloWorldError> for ProgramError {
    fn from(e: HelloWorldError) -> Self {
        ProgramError::Custom(e as u32)
    }
}
```

直接将枚举的值，转换成了 Custom 里面的错误码。

错误码有了，但是错误码对应的意义是什么呢？

```rust
impl PrintProgramError for HelloWorldError {
    fn print<E>(&self)
    where
        E: 'static + std::error::Error + DecodeError<E> + PrintProgramError + FromPrimitive,
    {
        match self {
            HelloWorldError::NotOwnedByHelloWrold => msg!("Error: Greeted account does not have the correct program id!"),
        }
    }
}
```

这里通过 PrintProgramError trate 的实现，来定义其错误消息。

这样在出错的时候，返回相应错误。

```rust
if greeting_account.owner != program_id {
    msg!("Greeted account does not have the correct program id");
    return Err(HelloWorldError::NotOwnedByHelloWrold.into());
}
```

通过 into 直接转换。
