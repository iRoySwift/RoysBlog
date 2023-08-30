---
id: solana-Contract-processing-logic
title: 3、Solana合约处理逻辑
---

我们这里说的处理逻辑，并不是 Runtime 是如何去处理逻辑的。而是在我们的合约里面，要 怎么安排逻辑。

在前面的文章中，我们已经规划了一个合约的代码结构，其中在"process.rs"文件中来放我们的 处理逻辑，每个处理逻辑处理对应的 Instruction。并且 Instruction 的 data 部分是通过 Borsh 来进行序列化的。

那么我们一个合约中怎么根据用户的输入来执行不同的逻辑呢？在前面我们知道一个合约只有通过 "entrypoint"宏定义的一个入口。那么我们是怎么区分不同的 Instruction 的呢？

本质上来说，只有一个 Instruction，在客户端的不同的 Instruction 其实只是 data 部分存放的 数据不同而已。这里如果有应用开发经验的同学，立马就会联想到 Protobuf 里面定义的各种消息。 其实这里我们也是用类似的方法，在 data 部分的最开始，我们用来放 cmd，cmd 来表示后面的内容要按照 什么结构来解析。

## 1、结构化工程

上面我们在同一个文件中，安排了一个合约的各个部分。当合约逻辑复杂的时候，我们可以将其一一拆分， 在书写的时候更清晰。来看 token 合约的结构：

```zsh
├── src
│   ├── entrypoint.rs
│   ├── error.rs
│   ├── instruction.rs
│   ├── lib.rs
│   ├── processor.rs
│   └── state.rs
```

其中"entrypoint" 专门用来定义合约入口函数。

在 entrypoint 中，最终会调用"processor"里面定义的具体逻辑。对不同的命令进行处理。

在链上要存储的结构数据，如 Token 账号 pub struct Account, Token 信息 pub struct Mint 放在 "state"中，有点类似 MVC 结构里面的 model。

相关错误，定义在"error"里面，在"processor"中处理出错的是，直接进行返回。

"lib"作为 rust 工程的基本结构而存在，里面也可以定义一些脚手架工具函数。

## 2、定义指令

在 Rust 中，我们天然的可以用 enum 来模拟 Protobuf 中的 Message，或者 Oneof。

这里我们专门用一个"instruction.rs"文件来定义各个指令，类似 pb 文件定义消息：

```rust
/// Instructions supported by the generic Name Registry program
#[derive(Clone, Debug, BorshSerialize, BorshDeserialize, PartialEq)]
pub enum HelloWorldInstruction {
    /// Greeting to a account
    ///
    /// Accounts expected by this instruction:
    ///   0. `[writeable]` the account to greet
    ///
    Greeting {
        /// greet count
        counter: u32,
    },
}
```

比如这里定义了"HelloWorldInstruction"指令集，其中有一个 "Greeting" 指令。 这个指令的 data 部分为包含“counter”成员的 struct。

因为这里通过 derive 来默认实现了 Borsh 的序列化和反序列化逻辑。当我们调用 "HelloWorldInstruction"的 try_to_vec 的方法的时候，就可以得到序列化后的结果。

同时对于我们这个指令，还有配套使用的 Account，要将他们放入到 accounts 数组中。

因此如果要在 Rust 里面构造这样的一个指令（通常在用 Rust 写合约调用的时候）：

```rust
#[allow(clippy::too_many_arguments)]
pub fn greeting(
    helloworld_program_id: Pubkey,
    instruction_data: HelloWorldInstruction,
    name_greeting: Pubkey,
) -> Result<Instruction, ProgramError> {
    let data = instruction_data.try_to_vec().unwrap();
    let mut accounts = vec![
        AccountMeta::new(name_greeting, false),
    ];


    Ok(Instruction {
        program_id: helloworld_program_id,
        accounts,
        data,
    })
}
```

可以这样来实现，将相关的 AccountMeta push 到 accounts 部分。然后就构建了一个 Instruction 对象。

这个一般用于在 Rust 调用合约，或者写单元测试的时候。

## 3、指令解析

上面我们构建了指令，当前端调用合约的时候，RPC 会讲相应的值转换成这里的 Instruction,那么我们要怎么去 理解他呢？按照上面的逻辑，我们执行反逻辑就可以了：

```rust
pub fn process_instruction(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    instruction_data: &[u8],
) -> ProgramResult {
    msg!("Beginning processing");
    let instruction = HelloWorldInstruction::try_from_slice(instruction_data)
        .map_err(|_| ProgramError::InvalidInstructionData)?;
    msg!("Instruction unpacked");

    match instruction {
        HelloWorldInstruction::Greeting {
            counter,
        } => {
            msg!("Instruction: Greeting");
            Processor::process_greeting(program_id, accounts, counter)?;
        }
    }
    Ok(())
}
```

这里在合约入口里面，首先通过 Borsh 的 try_from_slice 既可以将其转换成对应的指令枚举结构。对应到这里就是 我们上面定义的 HelloWorldInstruction。

然后通过 match 语法，将其一一匹配。

```rust
match instruction {
    HelloWorldInstruction::Greeting {
        counter,
    }
```

是一个解包语法糖。意思就是将 enum 中定义的无名 struct 的成员一一借用到这里的和成员同名的变量。方便后面使用。

## 4、执行指令

在上面的解析中，我们已经得到了 accounts 的 AccountMeta 数组，以及要处理的 Create 的指令的三个成员变量。

这样我们就可以把他们传递给我们要处理的逻辑，所以我们定义处理函数：

```rust
pub fn process_greeting(
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    counter: u32,
) -> ProgramResult
```

这里传入即为上面解析出来的内容。意义相对明确。并且该函数返回了 ProgramResult 类型。

在实现中，我们通过：

```rust
let accounts_iter = &mut accounts.iter();

    let greeting_account = next_account_info(accounts_iter)?;
```

用 next_account_info 来依次取出 AccountInfo 对象。

```rust
pub struct AccountInfo<'a> {
    /// Public key of the account
    pub key: &'a Pubkey,
    /// The lamports in the account.  Modifiable by programs.
    pub lamports: Rc<RefCell<&'a mut u64>>,
    /// The data held in this account.  Modifiable by programs.
    pub data: Rc<RefCell<&'a mut [u8]>>,
    /// Program that owns this account
    pub owner: &'a Pubkey,
    /// The epoch at which this account will next owe rent
    pub rent_epoch: Epoch,
    /// Was the transaction signed by this account's public key?
    pub is_signer: bool,
    /// Is the account writable?
    pub is_writable: bool,
    /// This account's data contains a loaded program (and is now read-only)
    pub executable: bool,
}
```

可以对这个对象的 is_signer/is_writeable/owner 等做一些校验。

这里我们的逻辑中要修改 data 部分的内容。

## 5、Model 层

因为要修改 data 部分，而 data 部分本质上是一段二进制内容。因此我们这里类同指令部分。借助 Borsh 做序列化。 将结构化数据序列化成一段二进制数据，在存入这里的 data。

```rust
/// Define the type of state stored in accounts
#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct GreetingInfo{
    /// number of greetings
    pub counter: u32,
}
```

定义的 struct 加上 BorshSerialize, BorshDeserialize 的 derive 即可。

这样便可以跟指令部分一样，调用 try_from_slice 做反序列化，得到结构体的内容。 在通过 serialize 将其序列化到&mut [u8]这样的 buffer 中去。通过对 data 部分做 borrow_mut 可以得到这样的类型。因此，我们在 process 里面增加：

```rust
// Increment and store the number of times the account has been greeted
    let mut greeting_info= GreetingInfo::try_from_slice(&greeting_account.data.borrow())?;
    greeting_info.counter += 1;
    greeting_info.serialize(&mut *greeting_account.data.borrow_mut())?;
```

先将 data 部分反序列化出来，修改后，在序列化存回去。

## 5、客户端访问

这里贴上客户端示例代码：

```ts
// No imports needed: web3, borsh, pg and more are globally available
import { serialize, deserialize, deserializeUnchecked } from "borsh";
import { Buffer } from "buffer";
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

class Assignable {
    constructor(properties) {
        Object.keys(properties).map(key => {
            return (this[key] = properties[key]);
        });
    }
}

// Our instruction payload vocabulary
class HelloWorldInstruction extends Assignable {}

// Borsh needs a schema describing the payload
const helloWorldInstructionSchema = new Map([
    [
        HelloWorldInstruction,
        {
            kind: "struct",
            fields: [
                ["id", "u8"],
                ["counter", "u32"],
            ],
        },
    ],
]);

// Instruction variant indexes
enum InstructionVariant {
    Greeting = 0,
}

/**
 * The expected size of each greeting account.
 */
const GREETING_SIZE = borsh.serialize(
    GreetingSchema,
    new GreetingAccount()
).length;

// Create greetings account instruction
const greetingAccountKp = new web3.Keypair();
const lamports = await pg.connection.getMinimumBalanceForRentExemption(
    GREETING_SIZE
);
const createGreetingAccountIx = web3.SystemProgram.createAccount({
    fromPubkey: pg.wallet.publicKey,
    lamports,
    newAccountPubkey: greetingAccountKp.publicKey,
    programId: pg.PROGRAM_ID,
    space: GREETING_SIZE,
});

const helloIx = new HelloWorldInstruction({
    id: InstructionVariant.Greeting,
    counter: 2,
});

// Serialize the payload
const helloSerBuf = Buffer.from(
    serialize(helloWorldInstructionSchema, helloIx)
);

// Create greet instruction
const greetIx = new web3.TransactionInstruction({
    data: helloSerBuf,
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

// Deserialize the account data
const deserializedAccountData = borsh.deserialize(
    GreetingSchema,
    GreetingAccount,
    greetingAccount.data
);

console.log(
    `deserializedAccountData.counter ${deserializedAccountData.counter}`
);
```
