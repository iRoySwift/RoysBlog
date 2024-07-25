---
id: git-tutorial
# sidebar_position: 1
title: Git教程
---

### 查询 DNS

https://www.ipaddress.com/

### 设置代理

```zsh

#Github host
140.82.113.3 github.com
151.101.1.194  github.global.ssl.fastly.net
140.82.112.10 codeload.Github.com


mac：sudo vim /etc/hosts
window： C:\Windows\System32\drivers\etc

# 设置ss
git config --global http.proxy 'socks5://127.0.0.1:1080'

git config --global https.proxy 'socks5://127.0.0.1:1080'

# 设置代理
git config --global https.proxy http://127.0.0.1:1080

git config --global https.proxy https://127.0.0.1:1080

# 取消代理
git config --global --unset http.proxy

git config --global --unset https.proxy


npm config delete proxy
```

## 查看 git 配置

```zsh
git config --list --查看配置
```

## 切换本地仓库源

```zsh
git remote －v
git remote rm origin
git remote add origin [url]
如果您想要为此分支创建跟踪信息，您可以执行：
git branch --set-upstream-to=origin/<branch> <branch>
```

## 查询分支列表

```zsh
git branch

* Ft_Dev_PAAS_V11.1
  master
```

## 创建新分支 & PUSH

-   创建分支并切换分支

```zsh
git branch  <branch>
git checkout <branch>
```

```zsh
git checkout -b <branch>
```

-   以当前分支为基础，创建分支,并且将新分支 push 到 github

    -   The current branch master has no upstream branch.
        To push the current branch and set the remote as upstream, use

```zsh
    git checkout -b <new_branch> --no-track <origin/branch>
    git push --set-upstream origin <new_branch>
```

-   以某个 commitid 提交点为基础，创建新分支,并且将新分支 push 到 github

```zsh
    git checkout -b <new-branch> --no-track <commit>
    git push --set-upstream origin <new_branch>
```

## 切换分支

1. 切换新分支并追踪远程分支

```zsh
$ git checkout -b <branch> --track <remote>/<branch>
```

## 删除分支

```zsh
git branch -d --force <branch>

```

## 合并本地仓库与远程仓库

```zsh
git remote add <name> <URL>
git pull <name>
git checkout <name>/<new-branch>
git merge --allow-unrelated-history [--into-name <branch>]
git push
```

## 藏存本地代码 stash

```zsh
git stash
git stash drop stash@{1}
```
