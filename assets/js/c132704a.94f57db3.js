"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[9002],{621:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var o=t(1527),r=t(7279);const c={id:"solana-base-concept",title:"2\u3001Solana\u5408\u7ea6\u57fa\u7840\u6982\u5ff5"},a=void 0,s={id:"solana/solana-bootcamp/5\u3001Solana\u5408\u7ea6\u5f00\u53d1Part1/solana-base-concept",title:"2\u3001Solana\u5408\u7ea6\u57fa\u7840\u6982\u5ff5",description:"1\u3001Solana \u5408\u7ea6\u7ed3\u6784",source:"@site/docs/solana/solana-bootcamp/5\u3001Solana\u5408\u7ea6\u5f00\u53d1Part1/2\u3001Solana\u5408\u7ea6\u57fa\u7840\u6982\u5ff5.md",sourceDirName:"solana/solana-bootcamp/5\u3001Solana\u5408\u7ea6\u5f00\u53d1Part1",slug:"/solana/solana-bootcamp/5\u3001Solana\u5408\u7ea6\u5f00\u53d1Part1/solana-base-concept",permalink:"/docs/solana/solana-bootcamp/5\u3001Solana\u5408\u7ea6\u5f00\u53d1Part1/solana-base-concept",draft:!1,unlisted:!1,editUrl:"https://github.com/iRoySwift/RoysBlog/tree/master/docs/solana/solana-bootcamp/5\u3001Solana\u5408\u7ea6\u5f00\u53d1Part1/2\u3001Solana\u5408\u7ea6\u57fa\u7840\u6982\u5ff5.md",tags:[],version:"current",frontMatter:{id:"solana-base-concept",title:"2\u3001Solana\u5408\u7ea6\u57fa\u7840\u6982\u5ff5"},sidebar:"docs",previous:{title:"1\u3001Hello World",permalink:"/docs/solana/solana-bootcamp/5\u3001Solana\u5408\u7ea6\u5f00\u53d1Part1/solana-hello-world"},next:{title:"3\u3001Solana\u5408\u7ea6\u5904\u7406\u903b\u8f91",permalink:"/docs/solana/solana-bootcamp/5\u3001Solana\u5408\u7ea6\u5f00\u53d1Part1/solana-Contract-processing-logic"}},i={},u=[{value:"1\u3001Solana \u5408\u7ea6\u7ed3\u6784",id:"1solana-\u5408\u7ea6\u7ed3\u6784",level:2},{value:"2\u3001\u83b7\u53d6 Account \u5bf9\u8c61",id:"2\u83b7\u53d6-account-\u5bf9\u8c61",level:2},{value:"3\u3001Account \u6570\u636e\u5b58\u50a8",id:"3account-\u6570\u636e\u5b58\u50a8",level:2},{value:"4\u3001\u5ba2\u6237\u7aef\u8bbf\u95ee",id:"4\u5ba2\u6237\u7aef\u8bbf\u95ee",level:2}];function l(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"1solana-\u5408\u7ea6\u7ed3\u6784",children:"1\u3001Solana \u5408\u7ea6\u7ed3\u6784"}),"\n",(0,o.jsx)(e.p,{children:"\u56de\u5230\u6211\u4eec\u4e4b\u524d\u5728 Playground,\u8fd9\u6b21\u6211\u4eec\u76f4\u63a5\u7528\u5176\u7ed9\u7684\u6a21\u7248\u521b\u5efa\u9879\u76ee\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u91cc\u9762\u770b\u5230\u5408\u7ea6\u4ee3\u7801\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:'use borsh::{BorshDeserialize, BorshSerialize};\nuse solana_program::{\n    account_info::{next_account_info, AccountInfo},\n    entrypoint,\n    entrypoint::ProgramResult,\n    msg,\n    program_error::ProgramError,\n    pubkey::Pubkey,\n};\n\n/// Define the type of state stored in accounts\n#[derive(BorshSerialize, BorshDeserialize, Debug)]\npub struct GreetingAccount {\n    /// number of greetings\n    pub counter: u32,\n}\n\n// Declare and export the program\'s entrypoint\nentrypoint!(process_instruction);\n\n// Program entrypoint\'s implementation\npub fn process_instruction(\n    program_id: &Pubkey, // Public key of the account the hello world program was loaded into\n    accounts: &[AccountInfo], // The account to say hello to\n    _instruction_data: &[u8], // Ignored, all helloworld instructions are hellos\n) -> ProgramResult {\n    msg!("Hello World Rust program entrypoint");\n\n    // Iterating accounts is safer than indexing\n    let accounts_iter = &mut accounts.iter();\n\n    // Get the account to say hello to\n    let account = next_account_info(accounts_iter)?;\n\n    // The account must be owned by the program in order to modify its data\n    if account.owner != program_id {\n        msg!("Greeted account does not have the correct program id");\n        return Err(ProgramError::IncorrectProgramId);\n    }\n\n    // Increment and store the number of times the account has been greeted\n    let mut greeting_account = GreetingAccount::try_from_slice(&account.data.borrow())?;\n    greeting_account.counter += 1;\n    greeting_account.serialize(&mut *account.data.borrow_mut())?;\n\n    msg!("Greeted {} time(s)!", greeting_account.counter);\n\n    Ok(())\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u5408\u7ea6\u7684\u6574\u4f53\u7ed3\u6784\u662f\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"use xxx;\n\nentrypoint!(process_instruction);\n\npub fn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8],\n) -> ProgramResult {\n    ...\n    Ok(())\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u6700\u524d\u9762\u7684 use \u662f rust \u7684\u57fa\u672c\u8bed\u6cd5,\u5bfc\u5165\u76f8\u5173\u5b9a\u4e49\u3002"}),"\n",(0,o.jsx)(e.p,{children:'\u8fd9\u91cc\u901a\u8fc7 entrypoint \u5b8f\u58f0\u660e\u4e86\u4e00\u4e2a\u51fd\u6570"process_instruction"\u4e3a\u6574\u4e2a\u5408\u7ea6\u7684\u5165\u53e3\u51fd\u6570\u3002 \u5728\u524d\u9762\u7684\u8c03\u7528\u6211\u4eec\u77e5\u9053\uff0c\u8c03\u7528\u7684\u57fa\u672c\u5355\u5143\u662f instruction,\u5176\u5b9a\u4e49\u4e3a\uff1a'}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"/**\n* Transaction Instruction class\n*/\nexport class TransactionInstruction {\n    /**\n    * Public keys to include in this transaction\n    * Boolean represents whether this pubkey needs to sign the transaction\n    */\n    keys: Array<AccountMeta>;\n    /**\n    * Program Id to execute\n    */\n    programId: PublicKey;\n    /**\n    * Program input\n    */\n    data: Buffer;\n    constructor(opts: TransactionInstructionCtorFields);\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u8fd9\u91cc\u7684 programId \u6307\u5b9a\u4e86\u548c\u54ea\u4e2a\u5408\u7ea6\u4ea4\u4e92\u3002\u800c\u5177\u4f53\u6267\u884c\u8fd9\u4e2a\u5408\u7ea6\u7684\u54ea\u4e2a\u65b9\u6cd5\u5462\uff1f\u5c31\u662f\u8fd9\u91cc\u7684 entrypoint \u6765\u6307\u5b9a\u7684\u3002\u5176\u539f\u578b\u5fc5\u987b\u4e3a\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"pub fn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8],\n) -> ProgramResult {\n    ...\n    Ok(())\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"program_id \u5bf9\u5e94\u4e86\u8c03\u7528 Instruction \u91cc\u9762\u7684 programId, accounts \u5219\u5bf9\u5e94\u8c03\u7528\u91cc\u9762\u7684 keys\u3002 instruction_data \u5219\u4e3a\u8c03\u7528\u6307\u4ee4\u91cc\u9762\u7684 data\u3002\u8fd9\u6837 solana \u5728\u5904\u7406\u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u5c06\u8c03\u7528\u4e0e \u5408\u7ea6\u903b\u8f91\u4e00\u4e00\u5bf9\u4e0a\u4e86\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u56e0\u4e3a\u51fd\u6570\u8fd4\u56de\u7684\u662f\u4e00\u4e2a Result:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"use {\n    std::{\n        result::Result as ResultGeneric,\n    },\n};\n\npub type ProgramResult = ResultGeneric<(), ProgramError>;\n"})}),"\n",(0,o.jsx)(e.p,{children:'\u6240\u4ee5\u6700\u540e\u8fd4\u56de\u7ed3\u679c\uff0c\u6210\u529f\u7684\u65f6\u5019\u8fd4\u56de Ok(()).\u5982\u679c\u9519\u8bef\uff0c\u9700\u8981\u8fd4\u56de"solana::program_error::ProgramError"'}),"\n",(0,o.jsx)(e.h2,{id:"2\u83b7\u53d6-account-\u5bf9\u8c61",children:"2\u3001\u83b7\u53d6 Account \u5bf9\u8c61"}),"\n",(0,o.jsx)(e.p,{children:"\u5ba2\u6237\u7aef\u901a\u8fc7 RPC \u8c03\u7528\u4f20\u9012\u8fc7\u6765\u7684 Account \u5bf9\u8c61\uff0c\u5728\u5408\u7ea6\u91cc\u9762\u8981\u600e\u4e48\u53bb\u83b7\u53d6\u5462\uff1f"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"// Iterating accounts is safer than indexing\n    let accounts_iter = &mut accounts.iter();\n\n    // Get the account to say hello to\n    let account = next_account_info(accounts_iter)?;\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u56e0\u4e3a\u8fd9\u91cc\uff0caccounts \u662f\u4e00\u4e2a &[AccountInfo] AccountInfo \u7684\u6570\u7ec4\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 iter()\u6765\u5f97\u5230\u5176\u8fed\u4ee3\u5668\uff0c\u5e76\u901a\u8fc7 solana_program::account_info::next_account_info \u89e3\u6790\u51fa solana_program::AccountInfo \u5bf9\u8c61\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"pub fn next_account_info<'a, 'b, I: Iterator<Item = &'a AccountInfo<'b>>>(\n    iter: &mut I,\n) -> Result<I::Item, ProgramError> {\n    iter.next().ok_or(ProgramError::NotEnoughAccountKeys)\n}\n\n\npub struct AccountInfo<'a> {\n    /// Public key of the account\n    pub key: &'a Pubkey,\n    /// The lamports in the account.  Modifiable by programs.\n    pub lamports: Rc<RefCell<&'a mut u64>>,\n    /// The data held in this account.  Modifiable by programs.\n    pub data: Rc<RefCell<&'a mut [u8]>>,\n    /// Program that owns this account\n    pub owner: &'a Pubkey,\n    /// The epoch at which this account will next owe rent\n    pub rent_epoch: Epoch,\n    /// Was the transaction signed by this account's public key?\n    pub is_signer: bool,\n    /// Is the account writable?\n    pub is_writable: bool,\n    /// This account's data contains a loaded program (and is now read-only)\n    pub executable: bool,\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u8fd9\u6837\u5c31\u53ef\u4ee5\u5f97\u5230\u4f20\u9012\u8fc7\u6765\u7684\u6700\u539f\u59cb\u7684 Account \u5bf9\u8c61\u4e86\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u6bd4\u5982\u8fd9\u91cc\u6211\u4eec\u4f20\u9012\u4e86\u4e00\u4e2a owner \u4e3a\u8fd9\u4e2a\u5408\u7ea6\u7684 account \u5bf9\u8c61\uff0c\u5e76\u5728\u5176 data \u90e8\u5206\u5b58\u50a8\u4e86\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"pub struct GreetingAccount {\n    /// number of greetings\n    pub counter: u32,\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u8fd9\u4e2a\u7ed3\u6784\u4f53\u7684\u6570\u636e\uff0c\u4f5c\u4e3a\u8ba1\u6570\u5668\u6765\u4f7f\u7528\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u6240\u4ee5\u5728\u83b7\u5f97\u8be5\u5bf9\u8c61\u540e\uff0c\u53ef\u4ee5\u8fdb\u884c Account \u4fe1\u606f\u7684\u76f8\u5173\u68c0\u67e5\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:'if account.owner != program_id {\n    msg!("Greeted account does not have the correct program id");\n    return Err(ProgramError::IncorrectProgramId);\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"\u5982\u679c Account \u91cc\u9762\u7684 owner \u4e0d\u662f\u6211\u4eec\u7684\u5408\u7ea6\uff0c\u76f4\u63a5\u8fd4\u56de\u51fa\u9519\u3002\u5e76\u4e14\u6307\u5b9a\u4e86\u9519\u8bef\u7801\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"3account-\u6570\u636e\u5b58\u50a8",children:"3\u3001Account \u6570\u636e\u5b58\u50a8"}),"\n",(0,o.jsx)(e.p,{children:"\u4e0a\u9762\u6211\u4eec\u8bfb\u53d6\u4e86\u4f20\u9012\u7684\u5b58\u50a8\u5355\u5143 Account \u7684\u57fa\u7840\u4fe1\u606f\uff0c\u90a3\u4e48\u5177\u4f53\u5b58\u50a8\u7684\u503c\u662f\u5982\u4f55\u64cd\u4f5c\u7684\u5462\uff1f"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"let mut greeting_account = GreetingAccount::try_from_slice(&account.data.borrow())?;\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u8fd9\u91cc\u56e0\u4e3a\u6211\u4eec\u5728\u5b9a\u4e49 GreetingAccount \u7684\u4f7f\u7528\u4e86"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"#[derive(BorshSerialize, BorshDeserialize, Debug)]\npub struct GreetingAccount {\n"})}),"\n",(0,o.jsx)(e.p,{children:"Borsh \u7684\u9ed8\u8ba4\u5b9e\u73b0\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 try_from_slice \u65b9\u6cd5\uff0c\u5c06 Account \u4e2d\u7684 data \u501f\u7528\u51fa\u6765\u505a\u89e3\u6790\u3002"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://borsh.io/",children:"Borsh"})," \u662f\u4e00\u4e2a\u5e8f\u5217\u5316\u6807\u51c6\uff0c\u5176\u6709\u591a\u4e2a\u8bed\u8a00\u7684\u5b9e\u73b0\uff0c\u6bd4\u5982\u6211\u4eec\u8fd9\u91cc\u7684 Rust \u548c\u5ba2\u6237\u7aef\u53ef\u4ee5\u7528 \u7684 Javascript\u3002\u5177\u4f53\u903b\u8f91\u7c7b\u4f3c\u6211\u4eec\u5728\u524d\u7aef web3.js \u8bbf\u95ee\u65f6\u5019\u7684 buffer \u7684\u5b9a\u4e49\u3002\u6211\u4eec\u53ef\u4ee5\u5ffd\u7565\u5176\u5177\u4f53\u5b9e\u73b0\uff0c\u76f4\u63a5\u8fdb\u884c\u4f7f\u7528\u3002"]}),"\n",(0,o.jsx)(e.p,{children:"\u5f53\u7136\u8fd9\u91cc\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u5e8f\u5217\u5316\u5de5\u5177\uff0c\u6bd4\u5982 Anchor\u3002"}),"\n",(0,o.jsx)(e.p,{children:"\u53cd\u5e8f\u5217\u5316\u8fd9\u91cc\u7684 data \u90e8\u5206\u540e\uff0c\u5c31\u53ef\u4ee5\u5f97\u5230 GreetingAccount \u5bf9\u8c61\u4e86\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"greeting_account.counter += 1;\ngreeting_account.serialize(&mut *account.data.borrow_mut())?;\n"})}),"\n",(0,o.jsx)(e.p,{children:'\u8fd9\u91cc\u5148\u4fee\u6539 GreetingAccount \u5bf9\u8c61\uff0c\u7136\u540e\u518d\u5c06\u5176\u5e8f\u5217\u5316\u56de Account \u7684 data \u90e8\u5206\u4e2d\u3002\u5b9e\u9645\u5c31\u662f\u5c06 "greeting_account" \u5e8f\u5217\u5316\u6210\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u7136\u540e\u518d\u586b\u5165 account.data \u90e8\u5206\u7684\u3002'}),"\n",(0,o.jsx)(e.p,{children:"\u56e0\u4e3a\u6211\u4eec\u5728\u524d\u7aef\u4f20\u9012\u7684\u65f6\u5019\uff0c\u7ed9\u8fd9\u4e2a Account \u7684 isWritable \u662f true\uff0c\u6240\u4ee5\u6211\u4eec\u5408\u7ea6\u4e2d\u4fee\u6539\u4e86 Account.data \u90e8\u5206\u5728\u5408\u7ea6\u6267\u884c\u7ed3\u675f\u65f6\uff0c\u5c31\u4f1a\u4fee\u6539\u94fe\u4e0a\u7684\u76f8\u5173\u6570\u636e\u3002"}),"\n",(0,o.jsx)(e.h2,{id:"4\u5ba2\u6237\u7aef\u8bbf\u95ee",children:"4\u3001\u5ba2\u6237\u7aef\u8bbf\u95ee"}),"\n",(0,o.jsx)(e.p,{children:"\u8fd9\u91cc\u8d34\u4e0a\u8bfe\u4e0a\u5ba2\u6237\u7aef\u8bbf\u95ee\u4ee3\u7801\uff1a"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-ts",children:'// No imports needed: web3, borsh, pg and more are globally available\n\n/**\n * The state of a greeting account managed by the hello world program\n */\nclass GreetingAccount {\n    counter = 0;\n    constructor(fields: { counter: number } | undefined = undefined) {\n        if (fields) {\n            this.counter = fields.counter;\n        }\n    }\n}\n\n/**\n * Borsh schema definition for greeting accounts\n */\nconst GreetingSchema = new Map([\n    [GreetingAccount, { kind: "struct", fields: [["counter", "u32"]] }],\n]);\n\n/**\n * The expected size of each greeting account.\n */\nconst GREETING_SIZE = borsh.serialize(\n    GreetingSchema,\n    new GreetingAccount()\n).length;\n\n// Create greetings account instruction\nconst greetingAccountKp = new web3.Keypair();\nconst lamports = await pg.connection.getMinimumBalanceForRentExemption(\n    GREETING_SIZE\n);\nconst createGreetingAccountIx = web3.SystemProgram.createAccount({\n    fromPubkey: pg.wallet.publicKey,\n    lamports,\n    newAccountPubkey: greetingAccountKp.publicKey,\n    programId: pg.PROGRAM_ID,\n    space: GREETING_SIZE,\n});\n\n// Create greet instruction\nconst greetIx = new web3.TransactionInstruction({\n    keys: [\n        {\n            pubkey: greetingAccountKp.publicKey,\n            isSigner: false,\n            isWritable: true,\n        },\n    ],\n    programId: pg.PROGRAM_ID,\n});\n\n// Create transaction and add the instructions\nconst tx = new web3.Transaction();\ntx.add(createGreetingAccountIx, greetIx);\n\n// Send and confirm the transaction\nconst txHash = await web3.sendAndConfirmTransaction(pg.connection, tx, [\n    pg.wallet.keypair,\n    greetingAccountKp,\n]);\nconsole.log(`Use \'solana confirm -v ${txHash}\' to see the logs`);\n\n// Fetch the greetings account\nconst greetingAccount = await pg.connection.getAccountInfo(\n    greetingAccountKp.publicKey\n);\n\n// Deserialize the account data\nconst deserializedAccountData = borsh.deserialize(\n    GreetingSchema,\n    GreetingAccount,\n    greetingAccount.data\n);\n\nconsole.log(\n    `deserializedAccountData.counter :${deserializedAccountData.counter}`\n);\n'})})]})}function d(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},7279:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>a});var o=t(959);const r={},c=o.createContext(r);function a(n){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),o.createElement(c.Provider,{value:e},n.children)}}}]);