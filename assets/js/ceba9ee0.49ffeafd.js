"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[2040],{6126:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(1527),a=t(7279);const r={id:"solana-part2-exercise",title:"5\u3001\u8bfe\u540e\u7ec3\u4e60"},i=void 0,o={id:"solana/solana-bootcamp/6\u3001Solana\u5408\u7ea6\u5f00\u53d1Part2/solana-part2-exercise",title:"5\u3001\u8bfe\u540e\u7ec3\u4e60",description:"\u8bfe\u540e\u7ec3\u4e60",source:"@site/docs/solana/solana-bootcamp/6\u3001Solana\u5408\u7ea6\u5f00\u53d1Part2/5\u3001\u8bfe\u540e\u7ec3\u4e60.md",sourceDirName:"solana/solana-bootcamp/6\u3001Solana\u5408\u7ea6\u5f00\u53d1Part2",slug:"/solana/solana-bootcamp/6\u3001Solana\u5408\u7ea6\u5f00\u53d1Part2/solana-part2-exercise",permalink:"/docs/solana/solana-bootcamp/6\u3001Solana\u5408\u7ea6\u5f00\u53d1Part2/solana-part2-exercise",draft:!1,unlisted:!1,editUrl:"https://github.com/iRoySwift/RoysBlog/tree/master/docs/solana/solana-bootcamp/6\u3001Solana\u5408\u7ea6\u5f00\u53d1Part2/5\u3001\u8bfe\u540e\u7ec3\u4e60.md",tags:[],version:"current",frontMatter:{id:"solana-part2-exercise",title:"5\u3001\u8bfe\u540e\u7ec3\u4e60"},sidebar:"docs",previous:{title:"4\u3001\u7cfb\u7edf\u53d8\u91cf",permalink:"/docs/solana/solana-bootcamp/6\u3001Solana\u5408\u7ea6\u5f00\u53d1Part2/solana-var"},next:{title:"7\u3001Solana\u5408\u7ea6\u5f00\u53d1\u8fdb\u9636",permalink:"/docs/category/7solana\u5408\u7ea6\u5f00\u53d1\u8fdb\u9636"}},c={},l=[{value:"\u8bfe\u540e\u7ec3\u4e60",id:"\u8bfe\u540e\u7ec3\u4e60",level:2},{value:"\u53c2\u8003\u7b54\u6848",id:"\u53c2\u8003\u7b54\u6848",level:2}];function p(n){const e={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u8bfe\u540e\u7ec3\u4e60",children:"\u8bfe\u540e\u7ec3\u4e60"}),"\n",(0,s.jsx)(e.p,{children:"\u6269\u5145 Token \u5408\u7ea6\uff0c\u4e3a Token \u5408\u7ea6\u589e\u52a0 Meta \u4fe1\u606f\uff0c\u5982"}),"\n",(0,s.jsx)(e.p,{children:"icon: \u4ee3\u5e01\u56fe\u6807\nname: \u4ee3\u5e01\u540d\u79f0\nsymbol: \u4ee3\u5e01\u7b26\u53f7\u7f29\u5199\nhome: \u4ee3\u5e01\u4e3b\u9875\n\u63d0\u793a\uff1a"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u589e\u52a0\u4e00\u4e2a Token \u7ba1\u7406\u5408\u7ea6"}),"\n",(0,s.jsx)(e.li,{children:"\u5f53\u901a\u8fc7 Token \u5408\u7ea6 Mint \u65b0 SPL Token \u7684\u65f6\u5019\uff0c\u540c\u65f6\u5728\u8fd9\u4e2a\u65b0\u5408\u7ea6\u91cc\u9762\u6ce8\u518c Token \u5408\u7ea6\u5730\u5740 \u4ee5\u53ca\u5bf9\u5e94\u7684 Meta \u4fe1\u606f"}),"\n",(0,s.jsx)(e.li,{children:"\u7528 Mint \u7684 SPL Token \u7684\u5730\u5740\u53bb\u8fd9\u4e2a\u5408\u7ea6\u4e2d\u53bb\u67e5\u8be2 Meta \u4fe1\u606f"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u53c2\u8003\u7b54\u6848",children:"\u53c2\u8003\u7b54\u6848"}),"\n",(0,s.jsx)(e.p,{children:"\u6211\u4eec\u5b9e\u73b0\u4e00\u4e2a\u5408\u7ea6\uff0c\u8fd9\u4e2a\u5408\u7ea6\u8f93\u5165\u4e3a\u4e00\u4e2a Mint \u7684 token \u5730\u5740\uff0c\u7136\u540e\u6211\u4eec\u5728\u8fd9\u4e2a\u5408\u7ea6\u4e2d\u7528 SPL Token \u5730\u5740\u8fd9\u4e2a Mint \u7684\u5730\u5740\u4e3a seed \u751f\u6210\u4e00\u4e2a PDA\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",metastring:'title="solana-program-part2/mint-token-info/program/src/processor.rs"',children:"let (gen_ext_mint_key, bump) = Pubkey::find_program_address(\n    &[\n        ExtMint::SEED_PREFIX.as_bytes(),\n        program_id.as_ref(),\n        mint.key.as_ref(),\n    ],\n    program_id,\n);\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u8fd9\u4e2a\u63a8\u5bfc\u51fa\u6765\u7684\u5730\u5740\u4f5c\u4e3a Token \u7684 Meta \u4fe1\u606f\uff0c\u7136\u540e\u5b9a\u4e49\u5176\u4e2d\u683c\u5f0f\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rs",metastring:'title="solana-program-part2/mint-token-info/program/src/state.rs"',children:'use borsh::{BorshDeserialize, BorshSerialize};\n// use solana_program::pubkey::Pubkey;\n\n#[derive(BorshSerialize, BorshDeserialize, Debug)]\npub struct ExtMint {\n    /// number of greetings\n    pub mint: String,\n    pub name: String,\n    pub symbol: String,\n    pub icon: String,\n}\n\nimpl ExtMint {\n    pub const SEED_PREFIX: &str = "ext_mint3";\n\n    pub fn new(mint: String, name: String, symbol: String, icon: String) -> ExtMint {\n        ExtMint {\n            mint,\n            name,\n            symbol,\n            icon,\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u4e3a\u8fd9\u4e2a\u5408\u7ea6\u5b9a\u4e49\u4e00\u4e2a mint \u7684 instruction\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rs",metastring:'title="solana-program-part2/mint-token-info/program/src/instruction.rs"',children:"use borsh::{BorshDeserialize, BorshSerialize};\n\n#[derive(Debug, BorshDeserialize, BorshSerialize)]\npub enum ExtMintInstruction {\n    Mint {\n        name: String,\n        symbol: String,\n        icon: String,\n    },\n}\n\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5904\u7406\u91cc\u9762\uff0c\u9996\u5148\u521b\u5efa\u8fd9\u4e2a Meta \u4fe1\u606f\u7684 Account\uff0c\u7136\u540e\u5c06\u8fd9\u4e9b\u5185\u5bb9\u5e8f\u5217\u5316\u8fdb\u53bb\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rs",children:' let ext_mint = ExtMint::new(mint.key.to_string(), name, symbol, icon);\n\nlet space = ext_mint.try_to_vec()?.len() as usize;\nlet lamports = Rent::get()?.minimum_balance(space);\n\nlet instruction = &system_instruction::create_account(\n    signer.key,\n    page_visits_pda.key,\n    lamports,\n    space as u64,\n    program_id,\n);\nlet account_infos = &[\n    signer.clone(),\n    system_program.clone(),\n    page_visits_pda.clone(),\n    mint.clone(),\n];\nlet signers_seeds: &[&[_]] = &[&[\n    ExtMint::SEED_PREFIX.as_bytes(),\n    program_id.as_ref(),\n    mint.key.as_ref(),\n    &[bump],\n]];\n\ninvoke_signed(instruction, account_infos, signers_seeds)?;\nmsg!("ext_mint: {:?}", ext_mint);\next_mint.serialize(&mut *page_visits_pda.data.borrow_mut())?;\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5ba2\u6237\u7aef\u8bbf\u95ee\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u77e5\u9053\u662f\u90a3\u4e2a Token \u7684 Mint \u5730\u5740\u3002\u5c31\u53ef\u4ee5\u6784\u9020\u51fa Meta \u4fe1\u606f\u7684 Account\uff0c\u7136\u540e\u8bf7\u6c42 Account \u5e76\u505a\u89e3\u6790\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rs",metastring:'title="solana-program-part2/mint-token-info/cli/src/main.rs"',children:'// \u6784\u5efainstructions\n    let ix = ExtMintInstruction::Mint {\n        name: String::from("SOLO"),\n        symbol: String::from("SOLO"),\n        icon: String::from("https://solo.com"),\n    };\n// *  Generate instruction\n    let ixs = instruction::Instruction::new_with_bytes(\n        program_id,\n        &ix.try_to_vec().unwrap(),\n        vec![\n            AccountMeta::new(page_visits_pda, false),\n            AccountMeta::new(mint, false),\n            AccountMeta::new(signer.pubkey(), true),\n            AccountMeta::new_readonly(system_program::ID, false),\n        ],\n    );\n\n    let sig = utils::create_and_send_tx(&signer, &client, ixs).await;\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rs",metastring:'title="solana-program-part2/mint-token-info/native/cli/src/utils.rs"',children:'use solana_program::instruction::Instruction;\nuse solana_rpc_client::rpc_client::RpcClient;\nuse solana_sdk::{signature::Signature, signer::Signer, transaction};\n\n#[warn(dead_code)]\npub async fn create_and_send_tx(\n    signer: &dyn Signer,\n    client: &RpcClient,\n    ixs: Instruction,\n) -> Signature {\n    // * Step 1 - Fetch Latest Blockhash\n    let recent_blockhash = client.get_latest_blockhash().unwrap();\n    println!(\n        "   \u2705 - 1. Fetched latest blockhash. Last valid height: {:?}",\n        recent_blockhash\n    );\n\n    // * Step 2 - Generate Transaction\n    let txs = transaction::Transaction::new_signed_with_payer(\n        &[ixs],\n        Some(&signer.pubkey()),\n        &[signer],\n        recent_blockhash,\n    );\n    println!("   \u2705 - 2. Transaction Signed:{:?}", txs);\n\n    // * Step 3 - Send our v0 transaction to the cluster\n    let sig = client.send_and_confirm_transaction(&txs).unwrap();\n    println!("   \u2705 - 3. Transaction sent to network:{:?}", sig);\n    sig\n}\n\n'})})]})}function m(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},7279:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>i});var s=t(959);const a={},r=s.createContext(a);function i(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);