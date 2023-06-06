---
id: git-tutorial
# sidebar_position: 1
title: Git教程
---

## 1、查看 git 配置

```
git config --list --查看配置
```

## 2、切换本地仓库源

```
git remote －v 查看远程 origin
git remote rm origin 删除源 origin
git remote add origin [url]
如果您想要为此分支创建跟踪信息，您可以执行：
git branch --set-upstream-to=origin/<分支> <分支>
```

## 3、藏存本地代码 stash

```
git stash
git stash drop stash@{1}
```

## 4、切换分支

1. 切换新分支并追踪远程分支

```git
git checkout --track -b <分支> origin/<分支>
```

2. 以某个 commitid 提交点为基础切换分支，创建新分支

```git
git checkout --no-track -b <new_Branch_name> ae0aabaff1e7d9b10da955d2c50e866fa9e8d583
```

3. 以当前分支为基础，创建分支

```git
git checkout --no-track -b <new_Branch_name> refs/heads/<分支>
```

## 5、删除分支

```git
git branch --delete --force test3

```

## 6.合并本地仓库与远程仓库

```
git remote add <Other> <url>
git pull <Other>
git checkout <Other>/<Branch>
git merge --allow-unrelated-history origin/<Branch>
git push
```
