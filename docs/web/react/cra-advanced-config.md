---
id: cra-advanced-config
title: 高级配置
description: 高级配置
---

## create-react-app 静态资源根路径

### 1. 使用 customize-cra 修改静态资源根路径

修改.env 文件 中 public

```js title=".env.development"
# 页面标题
REACT_APP_WEBSITE_NAME = React Example DEV

# 静态资源打包路径
PUBLIC_URL=''
```

```js title=".env.production"
# 页面标题
REACT_APP_WEBSITE_NAME = React Example PRD

# 静态资源打包路径
PUBLIC_URL='/websit'
```

```js title="config-overrides.js"
const { setWebpackPublicPath } = require('customize-cra');
module.exports = {
  webpack: override(setWebpackPublicPath(process.env.PUBLIC_URL))
};
```

```html title="/build/index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/websit/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Web site created using create-react-app" />
    <link rel="apple-touch-icon" href="/websit/logo192.png" />
    <link rel="manifest" href="/websit/manifest.json" />
    <title>React Example PRD</title>
    <script defer="defer" src="/websit/static/js/main.6d7f20c0.js"></script>
    <link href="/websit/static/css/main.28a4e04b.css" rel="stylesheet" />
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

### 2. 修改 package.json

```json title="package.json"
{
  "homepage": "/websit"
}
```

> 以上设置会将 index.html 中的%PUBLIC_URL%替换为 /websit,从而拼接为：/websit/static/js/main.6d7f20c0.js 这样的一个 index.html 的资源绝对路径；

> "homepage": ".",会将%PUBLIC_URL%替换为 .，引用资源都是相对路径

:::tip
使用`./websit`会导致获取不到文件，会在当前目前下面找相对路径;
直接使用`/websit`，会直接去根路径下面找资源
:::

:::caution
使用`./websit`会导致获取不到文件，会在当前目前下面找相对路径;
直接使用`/websit`，会直接去根路径下面找资源
:::

## 静态服务器访问打包资源

### 1. react 使用的 browserHistory 模式项目，部署到服务器上的子目录中，访问时页面空白没有报错

```
原因：我们使用react-router-dom里的BrowserRouter as Router时，是用浏览器history对象的方法去请求服务器，如果服务器没有相对于的路由去指向对应的页面路由会找不到资源。
解决： 两种方案：要么改用HashRouter,要么让运维对nginx.conf进行新的配置（其他代理服务器同理）

```

### 2. 使用 HashRouter 解决

> 从 react-router-dom 升级到 v4 后，官方文档中推荐使用的是 BrowserRouter（常见 URL 格式 com/home/xxx），但是此方式需要服务器配合，且重定向只能到首页，无法停留在当前页。

- **BrowserRouter**：使用于现代浏览器，支持 H5 history API，但使用它还需要和服务器部署联系，修改对应的服务器配置
- **HashRouter**：常用于旧款浏览器（兼容性更好），格式如`come/index.html#/home`

```jsx
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
<Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/graph" element={<Graph />} />
    <Route path="/404" element={<NotFoundPage />} />
    {/* {RouteConfig.map((item) => {
          <Route path={item.path} element={<item.comp />}></Route>;
        })} */}
    <Route path="*" element={<Navigate to="/404" />} />
  </Routes>
</Router>;
```

### 仍使用 BrowserRouter，但配合服务端改配置

以 nginx 为例：
假设部署到 `www.test.com` 域名下，项目文件目录：/mnt/h5/reactApp,reactApp就是npm run build 生成的 build 文件夹

```json
server {
    listen 80;
    server_name  test.com;
    root /mnt/h5/reactApp;
    index index.html;
    location ~ ^/favicon\.ico$ {
        root /mnt/h5/reactApp;
    }

    location / {
        try_files $uri $uri/ @fallback;
        index index.html;
        proxy_set_header   Host             $host;
        proxy_set_header   X-Real-IP        $remote_addr;
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto  $scheme;
    }
    location @fallback {
        rewrite ^.*$ /index.html break;
    }
    access_log  /mnt/logs/nginx/access.log  main;
}
```

备注：react-router 有一个 basename:string 属性，用于为所有位置添加一个基准 URL。使用场景：假如你需要把页面部署到服务器的二级目录，你可以使用 basename 设置到此目录。

```jsx
<BrowserRouter basename="/websit">
<Link to="/today" />将渲染为<a href="/websit/today">
```

## 配置

您可以通过在 shell 中或使用.env 设置环境变量来调整各种开发和生产设置。

> 注意：您不需要像使用自定义环境变量那样在以下变量之前声明 REACT*APP*。

| 变量                      | 开发    | 生产    | 使用                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BROWSER                   | ✅ 使用 | 🚫 忽略 | 默认情况下，Create React 应用程序将打开默认系统浏览器，在 macOS 上支持 Chrome。指定浏览器来覆盖此行为，或将其设置为 none 完全禁用它。如果您需要自定义浏览器的启动方式，您可以指定节点脚本。传递给 npm start 的任何参数也将传递到此脚本中，您的应用程序所在的网址将是最后一个参数。脚本的文件名必须具有.js 扩展名。                                           |
| BROWSER_ARGS              | ✅ 使用 | 🚫 忽略 | 默认情况下，Create React 应用程序将打开默认系统浏览器，在 macOS 上支持 Chrome。指定浏览器来覆盖此行为，或将其设置为 none 完全禁用它。如果您需要自定义浏览器的启动方式，您可以指定节点脚本。传递给 npm start 的任何参数也将传递到此脚本中，您的应用程序所在的网址将是最后一个参数。脚本的文件名必须具有.js 扩展名。                                           |
| HOST                      | ✅ 使用 | 🚫 忽略 | 默认情况下，开发 Web 服务器绑定到设备上的所有主机名（localhost、局域网网络地址等）。您可以使用此变量来指定不同的主机。                                                                                                                                                                                                                                       |
| PORT                      | ✅ 使用 | 🚫 忽略 | 默认情况下，开发 Web 服务器将尝试在端口 3000 上监听或提示您尝试下一个可用端口。您可以使用此变量指定其他端口。                                                                                                                                                                                                                                                |
| HTTPS                     | ✅ 使用 | 🚫 忽略 | 当设置为 true，Create React App 将在 https 模式下运行开发服务器。                                                                                                                                                                                                                                                                                            |
| WDS_SOCKET_HOST           | ✅ 使用 | 🚫 忽略 | 设置后，Create React App 将使用自定义 websocket 主机名运行开发服务器，以便重新加载热模块。通常，webpack-dev-server 默认为 SockJS 主机名的 window.location.hostname。您可以使用此变量一次在多个 Create React App 项目上开始本地开发。有关更多详细信息，请参阅 [webpack-dev-server](https://webpack.js.org/configuration/dev-server/#devserversockhost) 文档。 |
| WDS_SOCKET_PATH           | ✅ 使用 | 🚫 忽略 | 设置后，Create React App 将使用自定义 websocket 路径运行开发服务器，用于热模块重新加载。通常，webpack-dev-server 默认为 SockJS 路径名的/ws。您可以使用此变量一次在多个 Create React App 项目上开始本地开发。有关更多详细信息，请参阅 [webpack-dev-server](https://webpack.js.org/configuration/dev-server/#devserversockhost) 文档。                         |
| WDS_SOCKET_PORT           | ✅ 使用 | 🚫 忽略 | 设置后，Create React App 将使用自定义 websocket 端口运行开发服务器，用于重新加载热模块。通常，对于 SockJS 端口，webpack-dev-server 默认为 window.location.port。您可以使用此变量一次在多个 Create React App 项目上开始本地开发。有关更多详细信息，请参阅 [webpack-dev-server](https://webpack.js.org/configuration/dev-server/#devserversockhost) 文档。     |
| PUBLIC_URL                | ✅ 使用 | ✅ 使用 | 创建 React 应用程序假设您的应用程序托管在服务 Web 服务器的根或 package.json（homepage 中指定的子路径上。通常，Create React 应用程序会忽略主机名。您可以使用此变量强制逐字引用资产到您提供的网址（包括主机名）。当使用 CDN 托管您的应用程序时，这可能特别有用。                                                                                               |
| BUILD_PATH                | 🚫 忽略 | ✅ 使用 | 默认情况下，Create React 应用程序将编译的资产输出到与您的/src 相邻的/build 目录。您可以使用此变量为 Create React App 指定输出资产的新路径。BUILD_PATH 应指定为相对于项目根的路径。                                                                                                                                                                           |
| CI                        | ✅ 使用 | ✅ 使用 | 当设置为 true，Create React 应用程序会将警告视为构建中的失败。它还使测试运行者不观看。大多数 CI 默认设置此标志。                                                                                                                                                                                                                                             |
| REACT_EDITOR              | ✅ 使用 | 🚫 忽略 | 当应用程序在开发中崩溃时，您将看到一个带有可单击堆栈跟踪的错误叠加。当您单击它时，Create React App 将尝试根据当前运行的进程确定您正在使用的编辑器，并打开相关的源文件。您可以发送拉取请求来检测您选择的编辑器。设置此环境变量会覆盖自动检测。如果您这样做，请确保您的系统 PATH 环境变量指向编辑器的 bin 文件夹。您也可以将其设置为 none 完全禁用它。         |
| CHOKIDAR_USEPOLLING       | ✅ 使用 | 🚫 忽略 | 当设置为 true 时，观察者在虚拟机内必要时以轮询模式运行。如果 npm start 没有检测到更改，请使用此选项。                                                                                                                                                                                                                                                        |
| GENERATE_SOURCEMAP        | 🚫 忽略 | ✅ 使用 | 当设置为 false，不会为生产构建生成源映射。这解决了一些较小机器上的内存不足（OOM）问题。                                                                                                                                                                                                                                                                      |
| INLINE_RUNTIME_CHUNK      | 🚫 忽略 | ✅ 使用 | 默认情况下，Create React 应用程序将在生产构建期间将运行时脚本嵌入 index.html 中。当设置为 false 时，脚本将不会嵌入，并将像往常一样导入。在处理 CSP 时，这通常是必需的。                                                                                                                                                                                      |
| IMAGE_INLINE_SIZE_LIMIT   | ✅ 使用 | ✅ 使用 | 默认情况下，小于 10,000 字节的图像在 base64 中编码为数据 URI，并在 CSS 或 JS 构建工件中内联。设置这个来控制以字节为单位的大小限制。将其设置为 0 将禁用图像的内衬。                                                                                                                                                                                           |
| FAST_REFRESH              | ✅ 使用 | 🚫 忽略 | 默认情况下，小于 10,000 字节的图像在 base64 中编码为数据 URI，并在 CSS 或 JS 构建工件中内联。设置这个来控制以字节为单位的大小限制。将其设置为 0 将禁用图像的内衬。                                                                                                                                                                                           |
| TSC_COMPILE_ON_ERROR      | ✅ 使用 | ✅ 使用 | 当设置为 true，即使存在 TypeScript 类型检查错误，您也可以运行和正确构建 TypeScript 项目。这些错误在终端和/或浏览器控制台中打印为警告。                                                                                                                                                                                                                       |
| ESLINT_NO_DEV_ERRORS      | ✅ 使用 | 🚫 忽略 | 当设置为 true，ESLint 错误在开发过程中转换为警告。因此，ESLint 输出将不再出现在错误叠加中。                                                                                                                                                                                                                                                                  |
| DISABLE_ESLINT_PLUGIN     | ✅ 使用 | ✅ 使用 | 当设置为 true，eslint-webpack-plugin 将被完全禁用。                                                                                                                                                                                                                                                                                                          |
| DISABLE_NEW_JSX_TRANSFORM | ✅ 使用 | ✅ 使用 | 设置为 true 时，禁用 React 17 中引入的新 JSX 转换，并反向移植到 React 16.14.0、15.7.0 和 0.14.10。新项目将默认使用支持此功能的 React 版本，但如果您无法升级 React，您可能需要在现有项目中禁用它。                                                                                                                                                            |
