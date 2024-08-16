"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[4226],{6727:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>h,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var s=a(1527),o=a(7279),r=a(7301),t=a(6205),c=a(2379);const i={id:"solana-core",title:"2\u3001Solana\u6838\u5fc3\u6982\u5ff5"},l=void 0,d={id:"solana/solana-bootcamp/1\u3001Solana\u57fa\u7840\u77e5\u8bc6/solana-core",title:"2\u3001Solana\u6838\u5fc3\u6982\u5ff5",description:"spl-token",source:"@site/docs/solana/solana-bootcamp/1\u3001Solana\u57fa\u7840\u77e5\u8bc6/2\u3001Solana\u6838\u5fc3\u6982\u5ff5.md",sourceDirName:"solana/solana-bootcamp/1\u3001Solana\u57fa\u7840\u77e5\u8bc6",slug:"/solana/solana-bootcamp/1\u3001Solana\u57fa\u7840\u77e5\u8bc6/solana-core",permalink:"/docs/solana/solana-bootcamp/1\u3001Solana\u57fa\u7840\u77e5\u8bc6/solana-core",draft:!1,unlisted:!1,editUrl:"https://github.com/iRoySwift/RoysBlog/tree/master/docs/solana/solana-bootcamp/1\u3001Solana\u57fa\u7840\u77e5\u8bc6/2\u3001Solana\u6838\u5fc3\u6982\u5ff5.md",tags:[],version:"current",frontMatter:{id:"solana-core",title:"2\u3001Solana\u6838\u5fc3\u6982\u5ff5"},sidebar:"docs",previous:{title:"1\u3001Solana\u4ecb\u7ecd",permalink:"/docs/solana/solana-bootcamp/1\u3001Solana\u57fa\u7840\u77e5\u8bc6/solana-intro"},next:{title:"3\u3001SPL \u4ee3\u5e01",permalink:"/docs/solana/solana-bootcamp/1\u3001Solana\u57fa\u7840\u77e5\u8bc6/solana-spl"}},h={},u=[{value:"Account",id:"account",level:2},{value:"\u8d26\u53f7\u548c\u7b7e\u540d",id:"\u8d26\u53f7\u548c\u7b7e\u540d",level:2},{value:"\u4ea4\u6613",id:"\u4ea4\u6613",level:2},{value:"\u4ea4\u6613\u6307\u4ee4",id:"\u4ea4\u6613\u6307\u4ee4",level:2},{value:"\u5408\u7ea6",id:"\u5408\u7ea6",level:2},{value:"\u7cfb\u7edf\u5408\u7ea6",id:"\u7cfb\u7edf\u5408\u7ea6",level:2},{value:"\u666e\u901a\u5408\u7ea6",id:"\u666e\u901a\u5408\u7ea6",level:2},{value:"\u5408\u7ea6\u4e0e Account",id:"\u5408\u7ea6\u4e0e-account",level:2},{value:"\u79df\u7ea6",id:"\u79df\u7ea6",level:2},{value:"\u79df\u91d1\u7387",id:"\u79df\u91d1\u7387",level:2},{value:"\u514d\u79df",id:"\u514d\u79df",level:2},{value:"\u5783\u573e\u6536\u96c6",id:"\u5783\u573e\u6536\u96c6",level:2}];function p(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://spl.solana.com/token#example-creating-your-own-fungible-token",children:"spl-token"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://docs.solana.com/api",children:"RPC"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://docs.solana.com/cli/usage#get-pubkey",children:"Solana \u547d\u4ee4\u884c\u5de5\u5177"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://solana-labs.github.io/solana-web3.js/index.html",children:"solana-web3.js"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://solana-labs.github.io/solana-program-library/token/js/index.html",children:"@solana/spl-token"})}),"\n",(0,s.jsx)(e.h2,{id:"account",children:"Account"}),"\n",(0,s.jsx)(e.p,{children:'\u5728 Solana \u4e2d\uff0c"Everythin is an Account" \u7c7b\u4f3c Linux \u4e16\u754c\u91cc\u9762\u628a\u6240\u6709\u7684\u8d44\u6e90\u90fd\u62bd\u8c61\u6210"\u6587\u4ef6"\u4e00\u6837\u3002'}),"\n",(0,s.jsx)(e.p,{children:"Solana \u4f5c\u4e3a\u4e00\u4e2a\u5206\u5e03\u5f0f\u533a\u5757\u94fe\u7cfb\u7edf\uff0c\u6240\u6709\u7684\u4fe1\u606f\u90fd\u5b58\u50a8\u5728 Account \u5bf9\u8c61\u4e2d\uff0c\u5982\u5408\u7ea6\uff08Solana \u53eb Onchain Program\uff09, \u8d26\u53f7\u4fe1\u606f\uff0c\u5408\u7ea6\u4e2d\u5b58\u50a8\u7684\u5185\u5bb9\u7b49\u90fd\u662f\u5b58\u50a8\u5728\u4e00\u4e2a\u4e2a Account \u5bf9\u8c61\u4e2d\u3002"}),"\n",(0,s.jsx)(e.p,{children:"Account \u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'pub struct Account {\n    /// lamports in the account\n    pub lamports: u64,\n    /// data held in this account\n    #[serde(with = "serde_bytes")]\n    pub data: Vec<u8>,\n    /// the program that owns this account. If executable, the program that loads this account.\n    pub owner: Pubkey,\n    /// this account\'s data contains a loaded program (and is now read-only)\n    pub executable: bool,\n    /// the epoch at which this account will next owe rent\n    pub rent_epoch: Epoch,\n}\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u5176\u4e2d\u7684 lamports \u8868\u793a\u8d26\u53f7\u4f59\u989d\uff0cdata \u8868\u793a\u5b58\u50a8\u7684\u5185\u5bb9\uff0cowner \u8868\u793a\u8fd9\u4e2a Account \u53ef\u4ee5\u88ab\u8c01\u6765\u64cd\u4f5c\uff0c\u7c7b\u4f3c\u6587\u4ef6\u6240\u6709\u8005\u3002 \u5982\u679c\u662f\u5408\u7ea6\u8d26\u53f7\uff0c\u8fd9\u91cc data \u7684\u5185\u5bb9\u5c31\u662f\u5408\u7ea6\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\uff0c\u540c\u65f6 executable \u4e3a true\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8d26\u53f7\u548c\u7b7e\u540d",children:"\u8d26\u53f7\u548c\u7b7e\u540d"}),"\n",(0,s.jsxs)(e.p,{children:["Solana \u7684\u7b7e\u540d\u7cfb\u7edf\u4f7f\u7528\u7684\u662f ",(0,s.jsx)(e.a,{href:"https://en.wikipedia.org/wiki/EdDSA#Ed25519",children:"Ed25519"})," ,\u8bf4\u4eba\u8bdd\u5c31\u662f\uff1a Ed25519 \u662f\u4e00\u79cd\u8ba1\u7b97\u5feb\uff0c\u5b89\u5168\u6027\u9ad8\uff0c\u4e14\u751f\u6210\u7684\u7b7e\u540d\u5185\u5bb9\u5c0f\u7684\u4e00\u79cd\u4e0d\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5\u3002\u65b0\u4e00\u4ee3\u516c\u94fe\u51e0\u4e4e\u90fd\u652f\u6301\u8fd9\u4e2a\u7b97\u6cd5\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u6240\u4ee5 Solana \u7684\uff0c\u6211\u4eec\u7528\u6237\u7406\u89e3\u7684\u8d26\u53f7\uff0c\u5c31\u662f\u4e00\u4e32 Ed25519 \u7684\u79c1\u94a5\uff0c\u5404\u79cd\u94b1\u5305\u91cc\u9762\u7684\u52a9\u8bb0\u8bcd\uff0c\u4f1a\u88ab\u8f6c\u6362\u6210\u968f\u673a\u6570\u79cd\u5b50\uff0c \u518d\u7528\u968f\u673a\u6570\u79cd\u5b50\u6765\u751f\u6210\u4e00\u4e2a\u79c1\u94a5\uff0c\u6240\u4ee5\u52a9\u8bb0\u8bcd\u6700\u7ec8\u4e5f\u662f\u6362\u7b97\u6210\u79c1\u94a5\u3002\u6240\u4ee5\u7528\u6237\u8d26\u53f7\u7684\u672c\u8d28\u5c31\u662f\u79c1\u94a5\uff0c\u800c\u7528\u6237\u8d26\u53f7\u7684\u5730\u5740 \u5219\u662f\u8fd9\u79c1\u94a5\u5bf9\u5e94\u7684\u516c\u94a5,\u4f18\u4e8e\u516c\u94a5\u662f\u4e8c\u8fdb\u5236\u7684\uff0c\u4e3a\u4e86\u53ef\u8bfb\u6027\uff0c\u5c06\u5176\u8fdb\u884c Base58 \u7f16\u7801\u540e\u7684\u503c\uff0c\u5c31\u662f\u8fd9\u4e2a\u8d26\u53f7\u7684\u5730\u5740\u3002 \u5982\uff1aHawRVHh7t4d3H3bitWHFt25WhhoDmbJMCfWdESQQoYEy"}),"\n",(0,s.jsx)(e.p,{children:"\u628a\u8fd9\u91cc\u7684\u516c\u94a5\u548c\u79c1\u94a5\u653e\u4e00\u8d77\uff0c\u5c31\u662f\u6240\u8c13\u7684 Keypair\uff0c\u6216\u8005\u53eb\u516c\u79c1\u94a5\u5bf9\u3002\u5047\u8bbe\u8fd9\u91cc\u628a\u79c1\u94a5\u8fdb\u884c\u52a0\u5bc6\uff0c\u5e76\u7531\u7528\u6237\u6765\u8bbe\u7f6e\u5bc6\u7801\uff0c \u516c\u94a5\u4f5c\u4e3a\u8fd9\u4e2a\u79c1\u94a5\u7684\u7d22\u5f15\u3002\u5c31\u5b9e\u73b0\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u94b1\u5305\u7cfb\u7edf\u4e86\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u7528\u6237\u9009\u62e9\u7684\u516c\u94a5\uff0c\u52a0\u4e0a\u5bc6\u7801\uff0c\u5f97\u5230\u5bf9\u5e94\u7684\u79c1\u94a5\uff0c\u518d\u7528\u79c1\u94a5\u53bb\u64cd\u4f5c\u7684\u4ed6\u7684\u8d26\u53f7"}),"\n",(0,s.jsx)(e.h2,{id:"\u4ea4\u6613",children:"\u4ea4\u6613"}),"\n",(0,s.jsx)(e.p,{children:"\u4ea4\u6613\u5c31\u662f\u94fe\u5916\u6570\u636e\u548c\u94fe\u4e0a\u6570\u636e\u4ea7\u751f\u7684\u4e00\u6b21\u4ea4\u4e92\u3002\u6bd4\u5982\u53d1\u8d77\u4e00\u7b14\u8f6c\u8d26\uff0c\u5728 StepN \u91cc\u9762\u53d1\u8d77\u4e00\u6b21 Claim \u52a8\u4f5c\u3002 \u4ea4\u6613\u662f\u5bf9\u591a\u4e2a\u4ea4\u6613\u6307\u4ee4\u7684\u6253\u5305\uff0c\u6240\u4ee5\u8d77\u5185\u5bb9\u4e3b\u8981\u5c31\u662f\u5404\u4e2a\u4ea4\u6613\u6307\u4ee4\uff0c\u4ee5\u53ca\u76f8\u5e94\u6307\u4ee4\u5bf9\u5e94\u7684\u53d1\u8d77\u4eba\u548c\u7b7e\u540d\u3002"}),"\n",(0,s.jsx)(e.p,{children:"Transaction \u7684\u5b9a\u4e49\u4e3a\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'pub struct Message {\n    /// The message header, identifying signed and read-only `account_keys`.\n    /// Header values only describe static `account_keys`, they do not describe\n    /// any additional account keys loaded via address table lookups.\n    pub header: MessageHeader,\n\n    /// List of accounts loaded by this transaction.\n    #[serde(with = "short_vec")]\n    pub account_keys: Vec<Pubkey>,\n\n    /// The blockhash of a recent block.\n    pub recent_blockhash: Hash,\n\n    /// Instructions that invoke a designated program, are executed in sequence,\n    /// and committed in one atomic transaction if all succeed.\n    ///\n    /// # Notes\n    ///\n    /// Program indexes must index into the list of message `account_keys` because\n    /// program id\'s cannot be dynamically loaded from a lookup table.\n    ///\n    /// Account indexes must index into the list of addresses\n    /// constructed from the concatenation of three key lists:\n    ///   1) message `account_keys`\n    ///   2) ordered list of keys loaded from `writable` lookup table indexes\n    ///   3) ordered list of keys loaded from `readable` lookup table indexes\n    #[serde(with = "short_vec")]\n    pub instructions: Vec<CompiledInstruction>,\n\n    /// List of address table lookups used to load additional accounts\n    /// for this transaction.\n    #[serde(with = "short_vec")]\n    pub address_table_lookups: Vec<MessageAddressTableLookup>,\n}\n\npub enum VersionedMessage {\n    Legacy(LegacyMessage),\n    V0(v0::Message),\n}\n\npub struct VersionedTransaction {\n    /// List of signatures\n    #[serde(with = "short_vec")]\n    pub signatures: Vec<Signature>,\n    /// Message to sign.\n    pub message: VersionedMessage,\n}\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4ece\u4e2d\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u4e3a\uff0c\u4ea4\u6613\u5c31\u662f\u4e00\u8fde\u4e32\u7684\u4ea4\u6613\u6307\u4ee4\uff0c\u4ee5\u53ca\u9700\u8981\u7b7e\u540d\u7684\u6307\u4ee4\u7684\u7b7e\u540d\u5185\u5bb9\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u4ea4\u6613\u6307\u4ee4",children:"\u4ea4\u6613\u6307\u4ee4"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4e0a\u9762\u8bf4\u5230\u7684\u4ea4\u6613\u6307\u4ee4\u53c8\u662f\u4ec0\u4e48\u5462\uff1f\u5148\u6765\u770b\u4e0b\u5b9a\u4e49\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'pub struct CompiledInstruction {\n    /// Index into the transaction keys array indicating the program account that executes this instruction.\n    pub program_id_index: u8,\n    /// Ordered indices into the transaction keys array indicating which accounts to pass to the program.\n    #[serde(with = "short_vec")]\n    pub accounts: Vec<u8>,\n    /// The program input data.\n    #[serde(with = "short_vec")]\n    pub data: Vec<u8>,\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u4ece\u8fd9\u4e9b\u6210\u5458\u53d8\u91cf\u540d\u5c31\u53ef\u4ee5\u731c\u5230\u3002\u4ea4\u6613\u6307\u4ee4\u5c31\u662f \u6267\u884c\u54ea\u4e2a\u5408\u7ea6(program_id_index),\u8f93\u5165\u4e3a\u6570\u636e data,\u6267\u884c\u8fc7\u7a0b \u4e2d\u9700\u8981\u7528\u5230\u54ea\u4e9b Account: accounts"}),"\n",(0,s.jsx)(e.p,{children:"\u7c7b\u4f3c\u51fd\u6570\u8c03\u7528\u4e00\u6837\uff0cprogram_id_index \u662f\u51fd\u6570\u540d\uff0c\u56e0\u4e3a\u5408\u7ea6\u90fd\u662f\u7528\u5730\u5740\u6807\u8bc6\u7684\uff0c\u6240\u4ee5\u8fd9\u91cc\u6307\u5728 accounts \u6570\u7ec4\u4e2d \u7684\u7b2c\u51e0\u4e2a\u5730\u5740\u3002\u4f20\u5165\u7684\u53c2\u6570\u5305\u542b\u4e24\u90e8\u5206\uff0c\u4e8c\u8fdb\u5236\u6570\u636e data \u548c\u9700\u8981\u4f7f\u7528\u5230\u7684 Account \u8d44\u6e90\uff1aaccounts\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5408\u7ea6",children:"\u5408\u7ea6"}),"\n",(0,s.jsx)(e.p,{children:'\u5408\u7ea6\u5206\u4e3a\u4e24\u7c7b\uff0c\u4e00\u7c7b\u662f\u666e\u901a\u5408\u7ea6\u4e00\u7c7b\u662f\u7cfb\u7edf\u5408\u7ea6\uff0c\u524d\u8005\u5728 Solana \u4e2d\u79f0\u4e3a"On Chain Program" \u540e\u8005\u79f0\u4e3a"Native Program" \u5176\u5b9e\u672c\u8d28\u90fd\u662f\u7c7b\u4f3c\u5176\u4ed6\u516c\u94fe\u4e0a\u6240\u8bf4\u7684\u5408\u7ea6\u3002'}),"\n",(0,s.jsx)(e.h2,{id:"\u7cfb\u7edf\u5408\u7ea6",children:"\u7cfb\u7edf\u5408\u7ea6"}),"\n",(0,s.jsx)(e.p,{children:"\u7cfb\u7edf\u5408\u7ea6\u662f\u7531\u8282\u70b9\u5728\u90e8\u7f72\u7684\u65f6\u5019\u751f\u6210\u7684\uff0c\u666e\u901a\u7528\u6237\u65e0\u6cd5\u66f4\u65b0\uff0c\u4ed6\u4eec\u50cf\u666e\u901a\u5408\u7ea6\u4e00\u6837\uff0c\u53ef\u4ee5\u88ab\u5176\u4ed6\u5408\u7ea6\u6216\u8005 RPC \u8fdb\u884c\u8c03\u7528"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u7cfb\u7edf\u5408\u7ea6\u6709","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"System Program: \u521b\u5efa\u8d26\u53f7\uff0c\u8f6c\u8d26\u7b49\u4f5c\u7528"}),"\n",(0,s.jsx)(e.li,{children:"BPF Loader Program: \u90e8\u7f72\u548c\u66f4\u65b0\u5408\u7ea6"}),"\n",(0,s.jsx)(e.li,{children:"Vote program: \u521b\u5efa\u5e76\u7ba1\u7406\u7528\u6237 POS \u4ee3\u7406\u6295\u7968\u7684\u72b6\u6001\u548c\u5956\u52b1"}),"\n",(0,s.jsx)(e.li,{children:"..."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u666e\u901a\u5408\u7ea6",children:"\u666e\u901a\u5408\u7ea6"}),"\n",(0,s.jsx)(e.p,{children:'\u4e00\u822c\u6211\u4eec\u8bf4\u7684\u5408\u7ea6\u90fd\u662f\u666e\u901a\u5408\u7ea6\uff0c\u6216\u8005\u53eb "On Chain Program"\u3002\u666e\u901a\u5408\u7ea6\u662f\u7531\u7528\u6237\u5f00\u53d1\u5e76\u90e8\u7f72\uff0cSolana \u5b98\u65b9\u4e5f\u6709 \u4e00\u4e9b\u5b98\u65b9\u5f00\u53d1\u7684\u5408\u7ea6\uff0c\u5982 Token\u3001ATA \u8d26\u53f7\u7b49\u5408\u7ea6\u3002'}),"\n",(0,s.jsx)(e.p,{children:'\u5f53\u7528\u6237\u901a\u8fc7"BPF Loader Program"\u90e8\u7f72\u4e00\u4e2a\u65b0\u5408\u7ea6\u7684\u65f6\u5019\uff0c\u65b0\u5408\u7ea6 Account \u4e2d\u7684\u88ab\u6807\u8bb0\u4e3a true\uff0c\u8868\u793a\u4ed6\u662f\u4e00\u4e2a\u53ef\u4ee5 \u88ab\u6267\u884c\u7684\u5408\u7ea6\u8d26\u53f7\u3002\u4e0d\u540c\u4e8e\u6709\u4e9b\u516c\u94fe\uff0cSolana \u4e0a\u7684\u5408\u7ea6\u662f\u53ef\u4ee5\u88ab\u66f4\u65b0\u7684\uff0c\u4e5f\u53ef\u4ee5\u88ab\u9500\u6bc1\u3002\u5e76\u4e14\u5f53\u9500\u6bc1\u7684\u65f6\u5019\uff0c\u7528\u4e8e\u5b58\u50a8 \u4ee3\u7801\u7684\u8d26\u53f7\u6240\u6d88\u8017\u7684\u8d44\u6e90\u4e5f\u4f1a\u5f52\u8fd8\u7ed9\u90e8\u7f72\u8005\u3002'}),"\n",(0,s.jsx)(e.h2,{id:"\u5408\u7ea6\u4e0e-account",children:"\u5408\u7ea6\u4e0e Account"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u4e0a\u9762\u7684 Account \u4ecb\u7ecd\u4e2d\uff0c\u6211\u4eec\u6709\u4e2a owner \u7684\u6210\u5458\uff0c\u8fd9\u4e2a\u5c31\u8868\u793a\u8fd9\u4e2a Account \u662f\u88ab\u54ea\u4e2a\u5408\u7ea6\u7ba1\u7406\u7684\uff0c\u6216\u8005\u8bf4\u54ea\u4e2a \u5408\u7ea6\u53ef\u4ee5\u5bf9\u8fd9\u4e2a Account \u8fdb\u884c\u8bfb\u5199\uff0c\u7c7b\u4f3c Linux \u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u6587\u4ef6\u5c5e\u4e8e\u54ea\u4e2a\u7528\u6237\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6bd4\u5982\u4e00\u822c\u5408\u7ea6\uff0c\u4ed6\u7684 Owner \u90fd\u662f BPF Loader\uff1a"}),"\n",(0,s.jsx)(c.Z,{minHeight:240,children:(0,s.jsx)(t.Z,{alt:"Docusaurus themed image",sources:{light:(0,r.ZP)("/img/solana/a_program.png"),dark:(0,r.ZP)("/img/solana/a_program.png")}})}),"\n",(0,s.jsx)(e.p,{children:"\u800c\u5b58\u653e\u6211\u4eec\u4ee3\u5e01\u4f59\u989d\u7684\u5185\u5bb9\u7684 ower \u90fd\u662f Token \u5408\u7ea6\uff1a"}),"\n",(0,s.jsx)(c.Z,{minHeight:240,children:(0,s.jsx)(t.Z,{alt:"Docusaurus themed image",sources:{light:(0,r.ZP)("/img/solana/a_program_curl.png"),dark:(0,r.ZP)("/img/solana/a_program_curl.png")}})}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u5e94\u7684\u4ee3\u5e01\u4e3a\uff1a"}),"\n",(0,s.jsx)(c.Z,{minHeight:240,children:(0,s.jsx)(t.Z,{alt:"Docusaurus themed image",sources:{light:(0,r.ZP)("/img/solana/spl_account.png"),dark:(0,r.ZP)("/img/solana/spl_account.png")}})}),"\n",(0,s.jsx)(e.h2,{id:"\u79df\u7ea6",children:"\u79df\u7ea6"}),"\n",(0,s.jsx)(e.p,{children:"Solana \u7684\u8d44\u91d1\u6a21\u578b\u4e2d\uff0c\u6bcf\u4e2a Solana \u8d26\u6237\u5728\u533a\u5757\u94fe\u4e0a\u5b58\u50a8\u6570\u636e\u7684\u8d39\u7528\u79f0\u4e3a\u201c\u79df\u91d1\u201d\u3002 \u8fd9\u79cd\u57fa\u4e8e\u65f6\u95f4\u548c\u7a7a\u95f4\u7684\u8d39\u7528\u6765\u4fdd\u6301\u8d26\u6237\u53ca\u5176\u6570\u636e\u5728\u533a\u5757\u94fe\u4e0a\u7684\u6d3b\u52a8\u4e3a\u8282\u70b9\u63d0\u4f9b\u76f8\u5e94\u7684\u6536\u5165\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6240\u6709 Solana \u8d26\u6237\uff08\u4ee5\u53ca\u8ba1\u5212\uff09\u90fd\u9700\u8981\u4fdd\u6301\u8db3\u591f\u9ad8\u7684 LAMPORT \u4f59\u989d\uff0c\u624d\u80fd\u514d\u9664\u79df\u91d1\u5e76\u4fdd\u7559\u5728 Solana \u533a\u5757\u94fe\u4e0a\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5f53\u5e10\u6237\u4e0d\u518d\u6709\u8db3\u591f\u7684 LAMPORTS \u6765\u652f\u4ed8\u79df\u91d1\u65f6\uff0c\u5b83\u5c06\u901a\u8fc7\u79f0\u4e3a\u5783\u573e\u6536\u96c6\u7684\u8fc7\u7a0b\u4ece\u7f51\u7edc\u4e2d\u5220\u9664\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6ce8\u610f\uff1a\u79df\u91d1\u4e0e\u4ea4\u6613\u8d39\u7528\u4e0d\u540c\u3002 \u652f\u4ed8\u79df\u91d1\uff08\u6216\u4fdd\u5b58\u5728\u8d26\u6237\u4e2d\uff09\u4ee5\u5c06\u6570\u636e\u5b58\u50a8\u5728 Solana \u533a\u5757\u94fe\u4e0a\u3002 \u800c\u4ea4\u6613\u8d39\u7528\u662f\u4e3a\u4e86\u5904\u7406\u7f51\u7edc\u4e0a\u7684\u6307\u4ee4\u800c\u652f\u4ed8\u7684\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u79df\u91d1\u7387",children:"\u79df\u91d1\u7387"}),"\n",(0,s.jsx)(e.p,{children:"Solana \u79df\u91d1\u7387\u662f\u5728\u7f51\u7edc\u8303\u56f4\u5185\u8bbe\u7f6e\u7684\uff0c\u4e3b\u8981\u57fa\u4e8e\u6bcf\u5e74\u6bcf\u5b57\u8282\u8bbe\u7f6e\u7684 LAMPORTS\u3002 \u76ee\u524d\uff0c\u79df\u91d1\u7387\u4e3a\u9759\u6001\u91d1\u989d\u5e76\u5b58\u50a8\u5728 Rent \u7cfb\u7edf\u53d8\u91cf\u4e2d\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u514d\u79df",children:"\u514d\u79df"}),"\n",(0,s.jsx)(e.p,{children:"\u4fdd\u6301\u6700\u4f4e LAMPORT \u4f59\u989d\u8d85\u8fc7 2 \u5e74\u79df\u91d1\u7684\u8d26\u6237\u88ab\u89c6\u4e3a\u201c\u514d\u79df\u91d1\u201d\uff0c\u4e0d\u4f1a\u4ea7\u751f\u79df\u91d1\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6bcf\u6b21\u8d26\u6237\u4f59\u989d\u51cf\u5c11\u65f6\uff0c\u90fd\u4f1a\u68c0\u67e5\u8be5\u8d26\u6237\u662f\u5426\u4ecd\u514d\u79df\u91d1\u3002 \u5bfc\u81f4\u8d26\u6237\u4f59\u989d\u4f4e\u4e8e\u79df\u91d1\u8c41\u514d\u9608\u503c\u7684\u4ea4\u6613\u5c06\u4f1a\u5931\u8d25\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u5783\u573e\u6536\u96c6",children:"\u5783\u573e\u6536\u96c6"}),"\n",(0,s.jsx)(e.p,{children:"\u672a\u4fdd\u6301\u79df\u91d1\u8c41\u514d\u72b6\u6001\u6216\u4f59\u989d\u4e0d\u8db3\u4ee5\u652f\u4ed8\u79df\u91d1\u7684\u5e10\u6237\u5c06\u901a\u8fc7\u79f0\u4e3a\u5783\u573e\u6536\u96c6\u7684\u8fc7\u7a0b\u4ece\u7f51\u7edc\u4e2d\u5220\u9664\u3002 \u5b8c\u6210\u6b64\u8fc7\u7a0b\u662f\u4e3a\u4e86\u5e2e\u52a9\u51cf\u5c11\u4e0d\u518d\u4f7f\u7528/\u7ef4\u62a4\u7684\u6570\u636e\u7684\u7f51\u7edc\u8303\u56f4\u5b58\u50a8\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5173\u4e8e\u79df\u7ea6\u7684\u63d0\u6848"})]})}function x(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},2379:(n,e,a)=>{a.d(e,{Z:()=>r});a(959);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var o=a(1527);function r(n){let{children:e,minHeight:a,url:r="http://localhost:3000"}=n;return(0,o.jsxs)("div",{className:s.browserWindow,style:{minHeight:a},children:[(0,o.jsxs)("div",{className:s.browserWindowHeader,children:[(0,o.jsxs)("div",{className:s.buttons,children:[(0,o.jsx)("span",{className:s.dot,style:{background:"#f25f58"}}),(0,o.jsx)("span",{className:s.dot,style:{background:"#fbbe3c"}}),(0,o.jsx)("span",{className:s.dot,style:{background:"#58cb42"}})]}),(0,o.jsx)("div",{className:s.browserWindowAddressBar,children:r}),(0,o.jsx)("div",{className:s.browserWindowMenuIcon,children:(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:s.bar}),(0,o.jsx)("span",{className:s.bar}),(0,o.jsx)("span",{className:s.bar})]})})]}),(0,o.jsx)("div",{className:s.browserWindowBody,children:e})]})}},7279:(n,e,a)=>{a.d(e,{Z:()=>c,a:()=>t});var s=a(959);const o={},r=s.createContext(o);function t(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);