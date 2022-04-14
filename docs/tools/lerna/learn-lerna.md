---
id: learn-lerna
# sidebar_position: 1
title: 学习Lerna
---

```mdx-code-block
export const Logo = () =>{
  return (
    <div style={{
        backgroundImage: 'linear-gradient(40deg, #00fff0 0%, #677ef8 50%, #cc00ff 100%)'
      }}>
      <p align="center"  >
        <img alt="Lerna" src="https://user-images.githubusercontent.com/645641/79596653-38f81200-80e1-11ea-98cd-1c6a3bb5de51.png" width="480" />
      </p>
      <p align="center">
        A tool for managing JavaScript projects with multiple packages.
      </p>
      <p align="center">
        <a href="https://www.npmjs.com/package/lerna"><img alt="NPM Status" src="https://img.shields.io/npm/v/lerna.svg?style=flat" /></a>
        <a href="https://github.com/lerna/lerna/actions?query=branch%3Amain+workflow%3Aci"><img alt="CI Status" src="https://github.com/lerna/lerna/workflows/ci/badge.svg?branch=main" /></a>
      </p>
    </div>
  )
}

```

<Logo />

## 关于

将大型代码仓库分割成多个独立版本化的 软件包（package）对于代码共享来说非常有用。但是，如果某些更改 跨越了多个代码仓库的话将变得很 麻烦 并且难以跟踪，并且， 跨越多个代码仓库的测试将迅速变得非常复杂。

为了解决这些（以及许多其它）问题，某些项目会将 代码仓库分割成多个软件包（package），并将每个软件包存放到独立的代码仓库中。但是，例如 Babel、 React、Angular、Ember、Meteor、Jest 等项目以及许多其他项目则是在 一个代码仓库中包含了多个软件包（package）并进行开发。

**Lerna 是一种工具，针对 使用 git 和 npm 管理多软件包代码仓库的工作流程进行优化**

### 入门

首先使用 npm 将 Lerna 安装到全局环境中：

```bash npm2yarn
$ npm install --global lerna
```

接下来，我们将创建一个新的 git 代码仓库：

```
$ mkdir lerna-repo && cd $_
$ npx lerna init
```

你的代码仓库目前应该是如下结构：

```
lerna-repo/
  packages/
  package.json
  lerna.json
```

### 开始

- 创建包

```
lerna create swift-g6
```

## 它是如何工作的

Lerna 允许您使用两种模式之一来管理项目：Fixed or Independent。

### Fixed/Locked mode (default)

固定模式 Lerna 项目在单个版本行上运行。该版本保存在项目根目录的 `lerna.json` 文件中，在 `version` 键下。当您运行 `lerna publish` 时，如果自上次发布以来模块已更新，它将更新到您要发布的新版本。这意味着您仅在需要时发布软件包的新版本。

> 注意：如果您有一个主要版本零，所有更新都被[视为中断](https://semver.org/#spec-item-4)。因此，运行带有主要版本零的 `lerna publish` 并选择任何非预发布版本号将导致所有软件包发布新版本，即使自上次发布以来并非所有软件包都发生了变化。

这是 [Babel](https://github.com/babel/babel) 当前使用的模式。如果您想自动将所有软件包版本绑定在一起，请使用这个。这种方法的一个问题是，任何软件包的重大更改都将导致所有软件包都具有新的主要版本。

### Independent mode

`lerna init --independent`

独立模式 `Lerna` 项目允许维护人员相互独立增加软件包版本。每次发布时，您都会收到每个已更改的软件包的提示，以指定它是补丁、小的、重大的还是自定义更改。

独立模式允许您更具体地更新每个软件包的版本，并且对一组组件有意义。将这种模式与[语义释放](https://github.com/semantic-release/semantic-release)之类的东西相结合会减轻痛苦。（在 [atlassian/lerna-semantic-release](https://github.com/atlassian/lerna-semantic-release) 上已经有这方面的工作）。

> 将`lerna.json`中的`version`键设置为`independent`，以便在独立模式下运行。

### lerna.json

```json
{
  "version": "1.1.3",
  "npmClient": "npm",
  "command": {
    "publish": {
      "ignoreChanges": ["ignored-file", "*.md"],
      "message": "chore(release): publish",
      "registry": "https://npm.pkg.github.com"
    },
    "bootstrap": {
      "ignore": "component-*",
      "npmClientArgs": ["--no-package-lock"]
    }
  },
  "packages": ["packages/*"]
}
```

- `version`: 存储库的当前版本。
- `npmClient`: 指定要运行命令的特定客户端的选项（也可以根据每个命令指定）。更改为"yarn"以使用纱线运行所有命令。默认为“npm”。
- `command.publish.ignoreChanges`: 一系列不会包含在`lerna changed/publish`中的 glob。使用此功能可防止因更改而不必要地发布新版本，例如修复 README.md 错别字。
- `command.publish.message`:执行发布版本更新时的自定义提交消息。有关更多详细信息，请参阅@lerna/version。
- `command.publish.registry`: 使用它设置自定义注册表网址以发布到 npmjs.org，如果需要，您必须已经进行身份验证。
- `command.bootstrap.ignore`:运行`lerna bootstrap`命令时不会引导的 glob 数组。
- `command.bootstrap.npmClientArgs`: 在`lerna bootstrap`命令期间，将作为参数直接传递给 `npm install` 的字符串数组。
- `command.bootstrap.scope`: 一个 globs 数组，限制在运行`lerna bootstrap`命令时将引导哪些软件包。
- `packages`: 用作包裹位置的 glob 数组。

`lerna.json` 中的软件包配置是匹配包含 `package.json` 目录的 glob 列表，这是 lerna 识别“leaf”软件包的方式（与“root”`package.json`，后者旨在管理整个 repo 的开发依赖项和脚本）。

默认情况下，lerna 将软件包列表初始化为`["packages/*"]`，但您也可以使用另一个目录，如`["modules/*"]`，或`["package1", "package2"]`定义的 glob 相对于 talerna`lerna.json` 所在的目录，该目录通常是存储库根。唯一的限制是，您不能直接嵌套软件包位置，但这是“正常”npm 软件包共享的限制。

例如，`["packages/*", "src/**"]`匹配此树：

```
packages/
├── foo-pkg
│   └── package.json
├── bar-pkg
│   └── package.json
├── baz-pkg
│   └── package.json
└── qux-pkg
    └── package.json
src/
├── admin
│   ├── my-app
│   │   └── package.json
│   ├── stuff
│   │   └── package.json
│   └── things
│       └── package.json
├── profile
│   └── more-things
│       └── package.json
├── property
│   ├── more-stuff
│   │   └── package.json
│   └── other-things
│       └── package.json
└── upload
    └── other-stuff
        └── package.json
```

## 命令

- `lerna init`

  - 常见一个新的 lerna 仓库（repo）或将现有的仓库升级为适配当前 版本的 Lerna。
  - 参数

    --independent/-i – 使用独立的 版本控制模式

- `lerna bootstrap`

  - 在当前 Lerna 仓库中执行引导流程（bootstrap）。安装所有 依赖项并链接任何交叉依赖。
  - 此命令至关重要，因为它让你可以 在 require() 中直接通过软件包的名称进行加载，就好像此软件包已经存在于 你的 node_modules 目录下一样。

- `lerna changed`

  - 检查自上次发布以来哪些软件包被修改过。

- `lerna diff [package?]` or `lerna update`

  - 列出所有或某个软件包自上次发布以来的修改情况。

<details title="lerna run">
  <summary>
    lerna run
  </summary>

```
$ lerna run <script> -- [..args]
```

- 在每一个包含 [script] 脚本的软件包中运行此 npm 脚本。

```
# 例如
$ lerna run test # 运行所有包的 test 命令
$ lerna run build # 运行所有包的 build 命令
$ lerna run --parallel watch # 观看所有包并在更改时发报，流式处理前缀输出
$ lerna run --scope my-component test # 运行 my-component 模块下的 test
```

</details>

- `lerna ls`

  - 列出当前 Lerna 仓库中的所有公共软件包（public packages）。

<details title="lerna version">
  <summary>
  lerna version
  </summary>

- lerna 通过 version 命令来为各个模块进行版本迭代。基本命令如下：

  ```
    $ lerna version [major | minor | patch | premajor | preminor | prepatch | prerelease]
  ```

  如果不选择此次迭代类型，则会进入交互式的提示流程来确定此次迭代类型

  ```
  $ lerna version 1.0.1 # 按照指定版本进行迭代
  $ lerna version patch # 根据 semver 迭代版本号最后一位
  $ lerna version # 进入交互流程选择迭代类型
  ```

  :::warning

  如果你的 lerna 项目中各个模块版本不是按照同一个版本号维护（即创建时选择 independent 模式），那么会分别对各个包进行版本迭代

  :::

  - 当执行此命令时，会发生如下行为:
    - 1. 标记每一个从上次打过 tag 发布后产生更新的包
    - 2. 提示选择此次迭代的新版本号
    - 3. 修改 package.json 中的 version 值来反映此次更新
    - 4. 提交记录此次更新并打 tag
    - 5. 推送到远端仓库

  :::info 小技巧：

  你可以在执行此命令的时候加上 ——no-push 来阻止默认的推送行为，在你检查确认没有错误后再执行 git push 推送

  :::

  - --conventional-changelog

  ```
  $ lerna version --conventional-commits
  ```

  - version 支持根据符合规范的提交记录在每个模块中自动创建和更新 CHANGELOG.md 文件，同时还会根据提交记录来确定此次迭代的类型。只需要在执行命令的时候带上 --conventional-changelog 参数即可

  - --changelog-preset

  ```
  $ lerna version --conventional-commits --changelog-preset angular-bitbucket
  ```

  changelog 默认的预设是`angular`，你可以通过这个参数来选择你想要的预设创建和更新 `CHANGELOG.md`

  预设的名字在解析的时候会被增添 `conventional-changelog-` 前缀，如果你设置的是 `angular`，那么实际加载预设的时候会去找 `conventional-changelog-angular` 这个包，如果是带域的包，则需要按照 `@scope/name` 的规则去指明，最后会被解析成 `@scope/conventional-changelog-name`。

  :::info 小技巧：

  上述 2 个参数也可以直接写在 lerna.json 文件中，这样每次执行 lerna version 命令的时候就会默认采用上面的 2 个参数

  :::

  ```js
  "command": {
    "version": {
      "conventionalCommits": true,
      "changelogPreset": "angular"
    }
  }
  ```

</details>

<details title="lerna exec">
  <summary>
  lerna exec
  </summary>

- 卸载依赖

```
  $ lerna exec -- <command> [..args] # 在所有包中运行该命令
  # 例如
  $ lerna exec --scope=npm-list  yarn remove listr # 将 npm-list 包下的 listr 卸载
  $ lerna exec -- yarn remove listr # 将所有包下的 listr 卸载
```

</details>

<details title="lerna add">
  <summary>
  lerna add
  </summary>

```
$ lerna add <package>[@version] [--dev] [--exact] # 命令签名
```

- 当我们执行此命令后，将会执行下面那 2 个动作：
  - 在每一个符合要求的模块里安装指明的依赖包，类似于在指定模块文件夹中执行 `npm install <package>`。
  - 更新每个安装了该依赖包的模块中的 `package.json` 中的依赖包信息

```
  # 例如
  $ lerna add module-1 --scope=module-2 # 将 module-1 安装到 module-2
  $ lerna add module-1 --scope=module-2 --dev # 将 module-1 安装到 module-2 的 devDependencies 下
  $ lerna add module-1 # 将 module-1 安装到除 module-1 以外的所有模块
  $ lerna add babel-core # 将 babel-core 安装到所有模块

```

</details>

- `lerna clean`

  - 清理依赖包

- `lerna link`

<details>

<summary>
lerna create
</summary>

```
$ lerna create <name> [loc]
```

- name 是模块的名称（必填项，可包含作用域，如 @uedlinker/module-a），必须唯一且可以发布（npm 仓库中无重名已发布包）
- loc 是自定义的包路径（选填）, 会根据你在 lerna.json 文件中的 packages 的值去匹配，默认采用该数组的第一个路径，指定其他路径时只要写明路径中的唯一值即可，例如想选择 /user/lerna-repo/modules 这个路径，只需要执行如下命令即可
  命令执行完后，lerna 会帮我们在指定位置创建模块的文件夹，同时会默认在该文件夹下执行 npm init 的命令，在终端上根据根据提示填写所有信息后会帮我们创建对应的 package.json 文件，大致的结构如下

```

    lerna-repo/
      ┣━ packages/
      ┃     ┗━ package-a/
      ┃            ┣━ ...
      ┃            ┗━ package.json
      ┣━ lerna.json
      ┗━ package.json
```

</details>

<details title="lerna import">

<summary>
lerna import
</summary>

```
lerna import <pathToRepo>
```

- 将本地路径 `<pathToRepo>` 中的软件包导入（import） `packages/<directory-name>` 中并提交 commit。
- pathToRepo 是本项目外的包含 npm 包的 git 仓库路径（相对于本项目根路径的相对路径）
- 执行后会将该模块整体复制到指定的依赖包存放路径下，同时会把该模块之前所有提交记录合并到当前项目提交记录中

</details>

<details title="lerna info">
  <summary>
  lerna info
  </summary>
</details>

<details title="lerna publish">

  <summary>lerna publish</summary>

- 为已经更新过的软件包创建一个新版本。提示 输入新版本号并更新 git 和 npm 上的所有软件包。

- 参数

  - --npm-tag [tagname] — 使用给定的 npm dist-tag （默认为 latest）发布到 npm。

  - --canary/-c – 创建一个 canary 版本。

  - --skip-git – 不要运行任何 git 命令。

  - --force-publish [packages] — 强制发布 指定的一个或多个软件包（以逗号分隔）或使用 \* 表示所有软件包（对于修改过的软件包跳过 git diff 检查）。

- 当执行此命令时，会发生如下行为:
  - 1. 发布自上次发布以来更新的包(在底层执行了 `lerna version`，2.x 版本遗留的行为)
  - 2. 发布当前提交中打了 tag 的包
  - 3. 发布在之前的提交中更新的未经版本化的 “canary” 版本的软件包（及其依赖项）

:::caution 小技巧

Lerna 不会发布在 `package.json` 中将 `private` 属性设置为 `true` 的模块，如果要发布带域的包，你还需要在 'package.json' 中设置如下内容：

:::

```json
  "publishConfig": {
    "access": "public"
  }

```

```json title="lerna.json"
{
  "version": "1.1.3",
  "npmClient": "npm",
  "command": {
    "publish": {
      "ignoreChanges": ["ignored-file", "*.md"]
    },
    "bootstrap": {
      "ignore": "component-*",
      "npmClientArgs": ["--no-package-lock"]
    }
  },
  "packages": ["packages/*"]
}
```

- 配置
  - `version`：当前库的版本
  - `npmClient`： 允许指定命令使用的 client， 默认是 npm， 可以设置成 yarn
  - `command.publish.ignoreChanges`：可以指定那些目录或者文件的变更不会被 publish
  - `command.bootstrap.ignore`：指定不受 bootstrap 命令影响的包
  - `command.bootstrap.npmClientArgs`：指定默认传给 lerna bootstrap 命令的参数
  - `command.bootstrap.scope`：指定那些包会受 lerna bootstrap 命令影响
  - `packages`：指定包所在的目录

</details>

## Lerna 用户列表

- [primer/primer](https://github.com/primer/primer)
- [babel/babel](https://github.com/babel/babel)
- [facebook/create-react-app](https://github.com/facebook/create-react-app)
- [ReactTraining/react-router](https://github.com/ReactTraining/react-router)
- [pugjs/pug](https://github.com/pugjs/pug)
- [facebook/jest](https://github.com/facebook/jest)
- [reactotron/reactotron](https://github.com/reactotron/reactotron)
- [ElemeFE/mint-ui](https://github.com/ElemeFE/mint-ui)
- [devtools-html/debugger.html](https://github.com/devtools-html/debugger.html)
- [alibaba/rax](https://github.com/alibaba/rax)
- [Turfjs/turf](https://github.com/Turfjs/turf)
- [babel/babili](https://github.com/babel/babili)
- [storybooks/storybook](https://github.com/storybooks/storybook)
- [xmppjs/xmpp.js](https://github.com/xmppjs/xmpp.js)
- [wooorm/retext](https://github.com/wooorm/retext)
- [jumpsuit/jumpsuit](https://github.com/jumpsuit/jumpsuit)
- [strapi/strapi](https://github.com/strapi/strapi)
- [cloudflare/cf-ui](https://github.com/cloudflare/cf-ui)
- [colmena/colmena](https://github.com/colmena/colmena)
- [angus-c/just](https://github.com/angus-c/just)
- [cerebral/cerebral](https://github.com/cerebral/cerebral)
- [nteract/nteract](https://github.com/nteract/nteract)
- [wooorm/remark](https://github.com/wooorm/remark)
- [rofrischmann/fela](https://github.com/rofrischmann/fela)
- [tbranyen/diffhtml](https://github.com/tbranyen/diffhtml)
- [ElemeFE/cooking](https://github.com/ElemeFE/cooking)
- [antwarjs/antwar](https://github.com/antwarjs/antwar)
- [apollostack/graphql-server](https://github.com/apollostack/graphql-server)
- [jimpick/lambda-comments](https://github.com/jimpick/lambda-comments)
- [lystable/recon](https://github.com/lystable/recon)
- [marudor/flowInterfaces](https://github.com/marudor/flowInterfaces)
- [GoogleChrome/sw-helpers](https://github.com/GoogleChrome/sw-helpers)
- [webpack-preset/webpack-preset](https://github.com/webpack-preset/webpack-preset)
- [vazco/uniforms](https://github.com/vazco/uniforms)
- [metal/metal.js](https://github.com/metal/metal.js)
- [steelbrain/pundle](https://github.com/steelbrain/pundle)
- [neos/neos-ui](https://github.com/neos/neos-ui)
- [mosjs/mos](https://github.com/mosjs/mos)
- [lore/lore](https://github.com/lore/lore)
- [act-framework/act](https://github.com/act-framework/act)
- [yvele/poosh](https://github.com/yvele/poosh)
- [noderaider/gridiron](https://github.com/noderaider/gridiron)
- [superawesomelabs/leo](https://github.com/superawesomelabs/leo)
- [tocco/tocco-client](https://github.com/tocco/tocco-client)
- [zalando-incubator/tessellate](https://github.com/zalando-incubator/tessellate)
- [sencha/extjs-reactor](https://github.com/sencha/extjs-reactor)
- [DigitalRiver/react-atlas](https://github.com/DigitalRiver/react-atlas)
- [forivall/tacoscript](https://github.com/forivall/tacoscript)
- [Boxable/box-ui](https://github.com/Boxable/box-ui)
- [flux-capacitor/flux-capacitor](https://github.com/flux-capacitor/flux-capacitor)
- [trepo/trepo-js](https://github.com/trepo/trepo-js)
- [spacedoc/spacedoc](https://github.com/spacedoc/spacedoc)
- [oknosoft/metadata.js](https://github.com/oknosoft/metadata.js)
- [uber-web/uber-eslint](https://github.com/uber-web/uber-eslint)
- [brittanica/brittanica](https://github.com/brittanica/brittanica)
- [openzipkin/zipkin-js](https://github.com/openzipkin/zipkin-js)
- [vudash/vudash](https://github.com/vudash/vudash)
- [nteract/commuter](https://github.com/nteract/commuter)
- [frintjs/frint](https://github.com/frintjs/frint)
- [fyndiq/fyndiq-ui](https://github.com/fyndiq/fyndiq-ui)
- [azu/immutable-array-prototype](https://github.com/azu/immutable-array-prototype)
- [TrueCar/gluestick](https://github.com/TrueCar/gluestick)
- [KELiON/create-cerebro-plugin](https://github.com/KELiON/create-cerebro-plugin)
- [phenomic/phenomic](https://github.com/phenomic/phenomic)
- [sterjakovigor/vqua](https://github.com/sterjakovigor/vqua)
- [wireapp/wire-web-packages](https://github.com/wireapp/wire-web-packages)
- [klis87/redux-saga-requests](https://github.com/klis87/redux-saga-requests)
- [WordPress/gutenberg](https://github.com/WordPress/gutenberg)
- [react-cosmos/react-cosmos](https://github.com/react-cosmos/react-cosmos)
- [jsbites/jedifocus-monorepo](https://github.com/jsbites/jedifocus-monorepo)
- [FoalTS/foal](https://github.com/FoalTS/foal)
- [emotion-js/emotion](https://github.com/emotion-js/emotion)
- [Bamieh/reflow](https://github.com/Bamieh/reflow/)
- [transloadit/uppy](https://github.com/transloadit/uppy/)
- [olistic/warriorjs](https://github.com/olistic/warriorjs)
- [gatsbyjs/gatsby](https://github.com/gatsbyjs/gatsby)
- [feathersjs/feathers](https://github.com/feathersjs/feathers)
- [vuejs/vue-cli](https://github.com/vuejs/vue-cli)
- [dvajs/dva](https://github.com/dvajs/dva)
- [umijs/umi](https://github.com/umijs/umi)
- [SBoudrias/Inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- [pedronauck/docz](https://github.com/pedronauck/docz)
- [tasitlabs/tasitsdk](https://github.com/tasitlabs/tasitsdk)
- [zeit/next.js](https://github.com/zeit/next.js)
- [react-bootstrap-table/react-bootstrap-table2](https://github.com/react-bootstrap-table/react-bootstrap-table2)
- [webpack/webpack-cli](https://github.com/webpack/webpack-cli)
- [reakit/reakit](https://github.com/reakit/reakit)
- [webdriverio/webdriverio](https://github.com/webdriverio/webdriverio)
- [graycoreio/daffodil](https://github.com/graycoreio/daffodil)
- [typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- [stoplightio/prism](https://github.com/stoplightio/prism)
