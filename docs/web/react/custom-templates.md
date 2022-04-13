---
id: custom-templates
title: 自定义模板
---

> Note: 注意：此功能适用于`react-scripts@3.3.0`及更高版本。

自定义模板使您能够选择要创建项目的模板，同时仍然保留 Create React App 的所有功能。

您会注意到，自定义模板总是以`cra-template-[template-name]`格式命名，但您只需要向创建命令提供`[template-name]`。

还支持范围模板，名称为`@[scope-name]/cra-template`或`@[scope-name]/cra-template-[template-name]`，这些模板可以分别通过`@[scope]`和`@[scope]/[template-name]`安装。

```sh
npx create-react-app my-app --template cra-template-framework
```

## 查找自定义模板

默认情况下，我推荐下面模板：

- [`cra-template-framework`](https://github.com/iRoySwift/cra-template-framework.git)

但是，您可以通过在 npm 上搜索["cra-template-\*"](https://www.npmjs.com/search?q=cra-template-*)找到许多很棒的社区模板。

## 构建模板

模板必须具有以下结构：

```
cra-template-[template-name]/
  README.md (for npm)
  template.json
  package.json
  template/
    README.md (for projects created from this template)
    gitignore
    public/
      index.html
    src/
      index.js (or index.tsx)
```

### 测试模板

要在本地测试模板，请使用`file:`前缀将文件路径传递给模板源目录。

```sh
npx create-react-app react-framework --template file:./cra-template-framework
```

### `template`文件夹

此文件夹在 Create React App 安装时复制到用户的应用程序目录中。在此过程中，文件`gitignore`被重命名为`.gitignore`。
您可以在这里添加您想要的任何文件，但您必须至少拥有上面指定的文件。

### `template.json` 文件

这是您的模板的配置文件。由于这是一项新功能，随着时间的推移，将添加更多选项。目前，仅支持一个`package`密钥。

`package`密钥允许您提供要添加到新项目的`package.json`中的任何键/值，例如依赖项和模板依赖的任何自定义脚本。

下面是 `template.json` 例子:

```json
{
  "package": {
    "dependencies": {
      "eslint-plugin-jsx-a11y": "^6.2.3",
      "serve": "^11.2.0"
    },
    "scripts": {
      "serve": "serve -s build",
      "build-and-serve": "npm run build && npm run serve"
    },
    "eslintConfig": {
      "extends": ["react-app", "plugin:jsx-a11y/recommended"],
      "plugins": ["jsx-a11y"]
    }
  }
}
```

您为`"dependencies"`和`"scripts"`添加的任何值都将与 Create React App 默认值合并。任何其他键的值将按原样使用，取代任何匹配的 Create React App 默认值。

为了方便起见，我们总是在您的自定义`"scripts"`中用纱线替换 `npm run` 并在用纱线初始化项目时在 README 中替换 npm 运行。
