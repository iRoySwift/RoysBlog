---
id: install-solana-env
title: A Starter Kit for New Solana Developer
description: 安装Solana环境
---

## A Starter Kit for New Solana Developer

## Install Rust and Solana Cli

### Mac 环境下 rust 的安装

> 在 mac 环境下比较便捷的安装方式主要有两种，一种是直接通过 brew install rust ，另一种方式是通过安装 rustup 来间接安装 rust ，这里推荐使用 安装 rustup 的方式 来间接管理 rust 环境。

1. 首先通过 brew 安装 rustup-init

```sh
brew install rustup-init
```

2. 执行 rustup-init 安装 rust 相关环境

```sh
rustup-init
```

```
Welcome to Rust!

This will download and install the official compiler for the Rust
programming language, and its package manager, Cargo.

Rustup metadata and toolchains will be installed into the Rustup
home directory, located at:

  /Users/roy/.rustup

This can be modified with the RUSTUP_HOME environment variable.

The Cargo home directory located at:

  /Users/roy/.cargo

This can be modified with the CARGO_HOME environment variable.

The cargo, rustc, rustup and other commands will be added to
Cargo's bin directory, located at:

  /Users/roy/.cargo/bin

This path will then be added to your PATH environment variable by
modifying the profile files located at:

  /Users/roy/.profile
  /Users/roy/.bash_profile
  /Users/roy/.bashrc
  /Users/roy/.zshenv

You can uninstall at any time with rustup self uninstall and
these changes will be reverted.

Current installation options:


   default host triple: x86_64-apple-darwin
     default toolchain: stable (default)
               profile: default
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
>

info: profile set to 'default'
info: default host triple is x86_64-apple-darwin
warning: Updating existing toolchain, profile choice will be ignored
info: syncing channel updates for 'stable-x86_64-apple-darwin'
info: default toolchain set to 'stable-x86_64-apple-darwin'

  stable-x86_64-apple-darwin unchanged - rustc 1.63.0 (4b91a6ea7 2022-08-08)


Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload your PATH environment variable to include
Cargo's bin directory ($HOME/.cargo/bin).

To configure your current shell, run:
source $HOME/.cargo/env

```

3. 安装 toolchain , 这里可以直接安装当前系统环境对应的 stable 版本

```sh
rustup toolchain install stable
```

4. 执行 rustup show 可以查看当前安装的 rust 相关环境

```
rustup show
```

### Mac 环境下 solane 的安装

1. 用 brew 安装 solana

```
brew install solana
solana --version
```

2. 用bash

-  用brew安装会丢失solana很多工具
    - cargo-build-sbf
    - solana-test-validator
```bash
sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
solana --version
solana-install update
```
