---
id: brew_cmd
# sidebar_position: 1
title: Homebrew命令
---

## [Homebrew](https://formulae.brew.sh/)

![Homebrew](https://brew.sh/assets/img/homebrew-256x256.png)

## 1. 介绍

[Homebrew](https://formulae.brew.sh/)是一款包管理工具，目前支持 macOS 和 Linux 系统。主要有四个部分组成：brew、homebrew-core 、homebrew-cask、homebrew-bottles。

## 2. 安装

### 2.1 执行安装脚本

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2.2 安装验证

```bash
brew --version
```

### 2.3 更新软件包

```bash
brew update
```

## 3. 常用命令

### 3.1 安装软件

```bash
  brew install node 默认安装最新版本
  brew install node@14 安装指定版本
```

### 3.2 切换 node 版本

```bash
  brew unlink node 解除原链接
  brew link --overwrite node@16 链接新版本
```

### 3.3 更新软件包

```bash
   brew upgrade node@14
```

### 3.4 卸载软件包

```bash
   brew uninstall node@14
```

### 3.5 服务相关

-   获取 services 列表

```bash
    brew services list
```

-   启动 mysql

```bash
    brew services start mysql
```

-   停止 mysql

```bash
   brew services stop mysql
```

-   重启 mysql

```bash
   brew services restart mysql
```

### 3.6 其它常用命令

-   查看配置

```bash
brew config
```

-   查看 node 安装信息

```bash
brew info node
```

-   查看已安装软件

```bash
brew list
```

-   查看已安装软件版本号

```bash
brew list --versions
```

-   搜索可用 node 相关软件

```bash
brew search node
```

-   brew 自身更新

```bash
brew update
```

-   清除下载的缓存

```bash
brew cleanup
```

-   诊断 brew，并给出修复命令

```bash
brew doctor
```
