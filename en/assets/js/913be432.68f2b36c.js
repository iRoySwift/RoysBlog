"use strict";(self.webpackChunkroys_blog=self.webpackChunkroys_blog||[]).push([[2865],{9213:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/2021/11/21/algolia-docsearch-migration","metadata":{"permalink":"/RoysBlog/en/blog/2021/11/21/algolia-docsearch-migration","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-11-21-algolia-docsearch-migration/index.md","source":"@site/blog/2021-11-21-algolia-docsearch-migration/index.md","title":"\u6587\u6863\u641c\u7d22","description":"DocSearch \u6b63\u5728\u8fc1\u79fb\u5230\u4e00\u4e2a\u65b0\u7684\u3001\u66f4\u5f3a\u5927\u7684\u7cfb\u7edf\uff0c\u8fd9\u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u81ea\u5df1\u7684 Algolia \u5e94\u7528\u7a0b\u5e8f\u548c\u65b0\u51ed\u636e\u3002","date":"2021-11-21T00:00:00.000Z","formattedDate":"November 21, 2021","tags":[{"label":"search","permalink":"/RoysBlog/en/blog/tags/search"}],"readingTime":1.8533333333333333,"truncated":true,"authors":[{"name":"Cle\u0301ment Vannicatte","title":"\u8f6f\u4ef6\u5de5\u7a0b\u5e08@ Algolia","url":"https://github.com/shortcuts","image_url":"https://github.com/shortcuts.png","twitter":"sh0rtcts","imageURL":"https://github.com/shortcuts.png"},{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"title":"\u6587\u6863\u641c\u7d22","authors":[{"name":"Cle\u0301ment Vannicatte","title":"\u8f6f\u4ef6\u5de5\u7a0b\u5e08@ Algolia","url":"https://github.com/shortcuts","image_url":"https://github.com/shortcuts.png","twitter":"sh0rtcts","imageURL":"https://github.com/shortcuts.png"},{"key":"slorber"}],"tags":["search"],"image":"./img/social-card.png"},"nextItem":{"title":"Welcome","permalink":"/RoysBlog/en/blog/welcome"}},"content":"[DocSearch](https://docsearch.algolia.com/) \u6b63\u5728\u8fc1\u79fb\u5230\u4e00\u4e2a\u65b0\u7684\u3001\u66f4\u5f3a\u5927\u7684\u7cfb\u7edf\uff0c\u8fd9\u5c06\u4e3a\u7528\u6237\u63d0\u4f9b\u81ea\u5df1\u7684 Algolia \u5e94\u7528\u7a0b\u5e8f\u548c\u65b0\u51ed\u636e\u3002\\n\\nDocusaurus site owners should upgrade their configuration with [their new credentials](#im-using-docusaurus-and-docsearch-can-i-migrate) **by February 1, 2022**, existing search indexes will be frozen and become read-only after this date.\\n\\n\x3c!--truncate--\x3e\\n\\n## Upgrading your Docusaurus site\\n\\nIn the next few weeks, Docusaurus site owners will receive an email inviting them to join their personal Algolia application.\\n\\nThis email will include a new `appId` and `apiKey` to use in your Docusaurus configuration.\\n\\nThe only things you have to do:\\n\\n- Join the Algolia application (eventually creating a new Algolia account)\\n- Update your site configuration.\\n\\n```js title=\\"docusaurus.config.js\\"\\nconst config = {\\n  themeConfig: {\\n    algolia: {\\n      // highlight-start\\n      appId: \'<NEW_APP_ID>\',\\n      apiKey: \'<NEW_SEARCH_API_KEY>\',\\n      // highlight-end\\n    },\\n  },\\n};\\n\\nmodule.exports = config;\\n```\\n\\n:::info \u4fe1\u606f\\n\\n`appId` is now **required**.\\n\\nThese keys are not secrets and can be added to your Git repository.\\n\\n:::\\n\\n## DocSearch has a new home!\\n\\n### What is DocSearch?\\n\\n[DocSearch](https://docsearch.algolia.com/) is a program created by [Algolia](http://algolia.com/), which offers search to technical documentation of Open Source projects and technical blogs **for free**.\\n\\nYou can [read more here](https://docsearch.algolia.com/docs/what-is-docsearch/), and [apply](https://docsearch.algolia.com/apply) if you\'d like to give it a try!\\n\\n## What is this migration about?\\n\\n### Motivation\\n\\nWith the upcoming stable release of [DocSearch UI](https://docsearch.algolia.com/docs/DocSearch-v3), we wanted to go further and provide better tooling for our users to improve their search, but also leverage the full potential of Algolia.\\n\\n### What\'s new?\\n\\nDocSearch now leverages the [Algolia Crawler](https://www.algolia.com/products/search-and-discovery/crawler/), which includes a web interface that will allow you to:\\n\\n- Start, schedule and monitor your crawls\\n- Edit your config file from a live editor\\n- Test your results with DocSearch v3\\n\\n![Algolia crawler overview](./img/crawler-overview.png)\\n\\n![Algolia config editor](./img/editor.png)\\n\\nBut also, more Algolia features in **your own Algolia app**:\\n\\n- Team management\\n- Browse and see how your records are indexed in Algolia\\n- Try other Algolia features with free trials\\n\\n![Algolia index overview](./img/index-overview.png)\\n\\n![Algolia index analytics](./img/index-analytics.png)\\n\\nAnd of course, **a lot more, for free**.\\n\\n## FAQ\\n\\n### I\'m using Docusaurus and DocSearch, can I migrate?\\n\\nAt the time we are writing this, we are still at an early stage of the migration. We are doing small batches every week but will increase the load shortly, so please be patient and keep an eye out in your mailbox, you\'ll be contacted as soon as your Algolia app is ready!\\n\\n### Where can I read more about this?\\n\\nWe wrote a small [migration guide](https://docsearch.algolia.com/docs/migrating-from-legacy) but you\'ll have more detailed information in the migration email.\\n\\n### I received the migration email but the invite expired\\n\\nPlease contact us via either [email](mailto:docsearch@algolia.com) or [DocSearch\'s Discord](https://discord.gg/bRTacwYrfX) or on [Docusaurus\'s Discord #algolia channel](https://discordapp.com/invite/docusaurus)\\n\\n### I have feedback!\\n\\nFor any feedback regarding our documentation or the DocSearch UI component, you can open an issue [on our GitHub repository](https://github.com/algolia/docsearch/issues), but also contact us via the methods above.\\n\\n### Can I still run my own DocSearch instance?\\n\\nIn favor of the new infrastructure and DocSearch v3, we will no longer maintain our beloved [DocSearch scraper](https://github.com/algolia/docsearch-scraper) and [DocSearch v2](https://github.com/algolia/docsearch/tree/master), but the repositories will still be available and open to pull requests.\\n\\nThe previous documentation (now called `legacy`) remains available as well as our [`run your own`](https://docsearch.algolia.com/docs/legacy/run-your-own) guide."},{"id":"welcome","metadata":{"permalink":"/RoysBlog/en/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/RoysBlog/en/blog/tags/facebook"},{"label":"hello","permalink":"/RoysBlog/en/blog/tags/hello"},{"label":"docusaurus","permalink":"/RoysBlog/en/blog/tags/docusaurus"}],"readingTime":0.27,"truncated":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"\u6587\u6863\u641c\u7d22","permalink":"/RoysBlog/en/blog/2021/11/21/algolia-docsearch-migration"},"nextItem":{"title":"\u521b\u5efaSolana\u94b1\u5305","permalink":"/RoysBlog/en/blog/create-my-solana-wallet"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"create-my-solana-wallet","metadata":{"permalink":"/RoysBlog/en/blog/create-my-solana-wallet","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-create-my-solana-wallet/index.md","source":"@site/blog/2021-08-01-create-my-solana-wallet/index.md","title":"\u521b\u5efaSolana\u94b1\u5305","description":"\ud83d\udcb8 \u4ec0\u4e48\u662f Solana?","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"Solana","permalink":"/RoysBlog/en/blog/tags/solana"},{"label":"Wallet","permalink":"/RoysBlog/en/blog/tags/wallet"}],"readingTime":1.9933333333333334,"truncated":true,"authors":[{"name":"Roy Swift","title":"A @ReactJs Developer","url":"https://github.com/iRoySwift","imageURL":"https://github.com/iRoySwift.png","key":"roy"}],"frontMatter":{"title":"\u521b\u5efaSolana\u94b1\u5305","slug":"create-my-solana-wallet","authors":"roy","tags":["Solana","Wallet"],"image":"https://explorer.solana.com/favicon.ico","hide_table_of_contents":true},"prevItem":{"title":"Welcome","permalink":"/RoysBlog/en/blog/welcome"}},"content":"## \ud83d\udcb8 \u4ec0\u4e48\u662f Solana?\\n\\nSolana \u662f\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u5b9e\u73b0\u4e86\u4e00\u4e2a\u65b0\u7684\u3001\u9ad8\u6027\u80fd\u7684\u3001\u65e0\u9700\u8bb8\u53ef\u7684\u533a\u5757\u94fe\u3002 Solana \u57fa\u91d1\u4f1a\u4f4d\u4e8e\u745e\u58eb\u65e5\u5185\u74e6\uff0c\u8d1f\u8d23\u7ef4\u62a4\u5f00\u6e90\u9879\u76ee\u3002\\n\\n**\u5982\u679c\u60a8\u60f3\u5728 Solana \u533a\u5757\u94fe\u4e0a\u63a5\u6536 SOL \u4ee4\u724c\uff0c\u60a8\u9996\u5148\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u94b1\u5305\u3002**\\n\\n\x3c!--truncate--\x3e\\n\\n## \ud83d\udcb0 \u4ec0\u4e48\u662f\u94b1\u5305\uff1f\\n\\n\u52a0\u5bc6\u94b1\u5305\u662f\u4e00\u79cd\u5b58\u50a8\u5bc6\u94a5\u96c6\u5408\u7684\u8bbe\u5907\u6216\u5e94\u7528\u7a0b\u5e8f\uff0c\u53ef\u7528\u4e8e\u53d1\u9001\u3001\u63a5\u6536\u548c\u8ddf\u8e2a\u52a0\u5bc6\u8d27\u5e01\u7684\u6240\u6709\u6743\u3002\u94b1\u5305\u53ef\u4ee5\u91c7\u53d6\u591a\u79cd\u5f62\u5f0f\u3002\u94b1\u5305\u53ef\u80fd\u662f\u8ba1\u7b97\u673a\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u76ee\u5f55\u6216\u6587\u4ef6\uff0c\u4e00\u5f20\u7eb8\uff0c\u4e5f\u53ef\u80fd\u662f\u79f0\u4e3a\u786c\u4ef6\u94b1\u5305\u7684\u4e13\u7528\u8bbe\u5907\u3002\u8fd8\u6709\u5404\u79cd\u667a\u80fd\u624b\u673a\u5e94\u7528\u7a0b\u5e8f\u548c\u8ba1\u7b97\u673a\u7a0b\u5e8f\uff0c\u4e3a\u521b\u5efa\u548c\u7ba1\u7406\u94b1\u5305\u63d0\u4f9b\u4e86\u4e00\u79cd\u7528\u6237\u53cb\u597d\u7684\u65b9\u5f0f\u3002\\n\\n\u5bc6\u94a5\u5bf9\u662f\u5b89\u5168\u751f\u6210\u7684\u79c1\u94a5\u53ca\u5176\u52a0\u5bc6\u6d3e\u751f\u7684\u516c\u94a5\u3002\u79c1\u94a5\u53ca\u5176\u76f8\u5e94\u7684\u516c\u94a5\u4e00\u8d77\u88ab\u79f0\u4e3a\u5bc6\u94a5\u5bf9\u3002\u94b1\u5305\u5305\u542b\u4e00\u4e2a\u6216\u591a\u4e2a\u5bc6\u94a5\u5bf9\u7684\u96c6\u5408\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e9b\u4e0e\u5b83\u4eec\u4ea4\u4e92\u7684\u65b9\u5f0f\u3002\\n\\n\u516c\u94a5\uff08\u901a\u5e38\u7f29\u5199\u4e3a pubkey\uff09\u88ab\u79f0\u4e3a\u94b1\u5305\u7684\u63a5\u6536\u5730\u5740\u6216\u7b80\u79f0\u4e3a\u5176\u5730\u5740\u3002\u94b1\u5305\u5730\u5740**\u53ef\u4ee5\u514d\u8d39\u5171\u4eab\u548c\u663e\u793a**\u3002\u5f53\u53e6\u4e00\u65b9\u8981\u5411\u94b1\u5305\u53d1\u9001\u4e00\u5b9a\u6570\u91cf\u7684\u52a0\u5bc6\u8d27\u5e01\u65f6\uff0c\u4ed6\u4eec\u9700\u8981\u77e5\u9053\u94b1\u5305\u7684\u63a5\u6536\u5730\u5740\u3002\u6839\u636e\u533a\u5757\u94fe\u7684\u5b9e\u73b0\uff0c\u8be5\u5730\u5740\u4e5f\u53ef\u4ee5\u7528\u4e8e\u67e5\u770b\u6709\u5173\u94b1\u5305\u7684\u67d0\u4e9b\u4fe1\u606f\uff0c\u4f8b\u5982\u67e5\u770b\u4f59\u989d\uff0c\u4f46\u65e0\u6cd5\u66f4\u6539\u94b1\u5305\u7684\u4efb\u4f55\u5185\u5bb9\u6216\u63d0\u53d6\u4efb\u4f55\u4ee4\u724c\u3002\\n\\n\u79c1\u94a5\u9700\u8981\u5bf9\u4efb\u4f55\u4ea4\u6613\u8fdb\u884c\u6570\u5b57\u7b7e\u540d\uff0c\u4ee5\u4fbf\u5c06\u52a0\u5bc6\u8d27\u5e01\u53d1\u9001\u5230\u53e6\u4e00\u4e2a\u5730\u5740\u6216\u5bf9\u94b1\u5305\u8fdb\u884c\u4efb\u4f55\u66f4\u6539\u3002**\u7edd\u4e0d\u80fd\u5171\u4eab\u79c1\u94a5**\u3002\u5982\u679c\u6709\u4eba\u53ef\u4ee5\u8bbf\u95ee\u94b1\u5305\u7684\u79c1\u94a5\uff0c\u4ed6\u4eec\u53ef\u4ee5\u63d0\u53d6\u5176\u4e2d\u5305\u542b\u7684\u6240\u6709\u4ee3\u5e01\u3002\u5982\u679c\u94b1\u5305\u7684\u79c1\u94a5\u4e22\u5931\uff0c\u53d1\u9001\u5230\u8be5\u94b1\u5305\u5730\u5740\u7684\u4efb\u4f55\u4ee3\u5e01\u90fd\u5c06**\u6c38\u4e45\u4e22\u5931**\u3002\\n\\n\u4e0d\u540c\u7684\u94b1\u5305\u89e3\u51b3\u65b9\u6848\u63d0\u4f9b\u4e86\u4e0d\u540c\u7684\u5bc6\u94a5\u5bf9\u5b89\u5168\u6027\u65b9\u6cd5\uff0c\u4e0e\u5bc6\u94a5\u5bf9\u4ea4\u4e92\uff0c\u4ee5\u53ca\u7b7e\u7f72\u4ea4\u6613\u4ee5\u4f7f\u7528/\u82b1\u8d39\u4ee4\u724c\u3002\u6709\u4e9b\u6bd4\u5176\u4ed6\u7684\u66f4\u5bb9\u6613\u4f7f\u7528\u3002\u6709\u4e9b\u53ef\u4ee5\u66f4\u5b89\u5168\u5730\u5b58\u50a8\u548c\u5907\u4efd\u79c1\u94a5\u3002Solana \u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u94b1\u5305\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u9009\u62e9\u5b89\u5168\u6027\u548c\u4fbf\u5229\u6027\u7684\u6b63\u786e\u5e73\u8861\u3002"}]}')}}]);