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
git remote －v
git remote rm origin
git remote add origin [url]
如果您想要为此分支创建跟踪信息，您可以执行：
git branch --set-upstream-to=origin/<branch> <branch>
```

## 3、藏存本地代码 stash

```
git stash
git stash drop stash@{1}
```

## 4、切换分支

1. 切换新分支并追踪远程分支

```git
$ git checkout -b <branch> --track <remote>/<branch>
```

2. 以某个 commitid 提交点为基础切换分支，创建新分支

```git
git checkout -b <new-branch> --no-track <commit>
```

3. 以当前分支为基础，创建分支

```git
git checkout -b <new-branch> --no-track <branch>
```

## 5、删除分支

```git
git branch --delete --force <branch>

```

## 6.合并本地仓库与远程仓库

```
git remote add <name> <URL>
git pull <name>
git checkout <name>/<new-branch>
git merge --allow-unrelated-history [--into-name <branch>]
git push
```
