---
id: zsh_theme
# sidebar_position: 1
title: ZSH Theme
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
```

## 安装 Oh-My-Zsh

```zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

```

## 安装字体

终端的一些 iconfont 需要一些特殊字体才能完美显示，
推荐使用 Nerd 字体，官网：nerdfonts.com/
powerlevel10k 主题推荐使用 MesloLGS-Nerd 字体，
一般在初次安装配置主题的时候会默认提示安装，
但是如果没有正常安装的话也可以使用下面的内容来手动安装一下：
MesloLGS 字体 ttf 文件下载地址：

```zsh
wget https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf &&
wget https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf  &&
wget https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf  &&
wget https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf
```

或者 Mac 也可以使用 Homebrew 来安装

```zsh
# Mac homebrew
brew tap homebrew/cask-fonts
  brew install --cask font-sauce-code-pro-nerd-font

```

vscode 配置字体

```json
    "editor.fontFamily": "Consolas, 'Courier New', monospace,Hack Nerd Font",
```

terminal 字体

```
SauceCodePro NF 11
```

**安装完成之后再系统设置或者各个软件比如终端或者 VSCode 上把字体设置为 MesloLGS NF 就可以了。**

如果是没有安装 KDE 或者 Gnome 图形界面的 Linux 的话，可以使用下面的命令来设置一下：

```zsh
# Linux安装字体
sudo cp ttf/*.ttf /usr/share/fonts/truetype/
# 安装fontconfig
sudo apt install fontconfig
# 刷新字体缓存
fc-cache -fv
```

## 安装 Zsh 主题和插件

可以查看自带主题[Theme](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

[第三方主题](https://github.com/robbyrussell/oh-my-zsh/wiki/External-themes)

```zsh
cd themes
# powerlevel10k主题
git clone https://github.com/romkatv/powerlevel10k.git

cd plugins
# zsh-autosuggestions自动提示插件
git clone https://github.com/zsh-users/zsh-autosuggestions
# zsh-syntax-highlighting语法高亮插件
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git

# 在此之前需要将终端字体设置成 上面安装的字体(MesloLGS NF,Nerd等字体)，
# 后续配置主题时，图标才能正常显示
p10k configure
```

## 编辑~/.zshrc 文件启用插件和主题

```zsh
# 修改主题
ZSH_THEME="powerlevel10k/powerlevel10k"

# 启用插件
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
)
```

## 修改 terminal 自定义主题色

下载[one dark 主题](https://github.com/mbadolato/iTerm2-Color-Schemes/blob/master/terminal/OneHalfDark.terminal)

在 Terminal 中使用 import 匯入：

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="Docusaurus themed image"
  sources={{
    light: useBaseUrl('/img/tools/zsh_theme.png'),
    dark: useBaseUrl('/img/tools/zsh_theme.png'),
  }}
/>
```
