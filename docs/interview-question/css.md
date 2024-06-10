---
id: css-question
title: Css
description: Css Question
---

## Css Question

### Less sass 定义变量区别

    less使用@
    sass使用$

### 常见的盒子垂直居中的方法有哪些请举例几种？

-   position + margin

```css
 <style>
        .container{
            width: 300px;
            height: 300px;
            position: relative;
        }
        .conter{
            width: 100px;
            height: 100px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -50px;
            margin-left: -50px;
        }
    </style>
```

-   position + transform

```css
 <style>
        .container{
            position: relative;
        }
        .conter{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    </style>
```

-   position

```css
 <style>
        .container{
            position: relative;
        }
        .conter{
            position: absolute;
               left:0;
            right:0;
            top:0,
            bottom:0
             margin:auto
        }
    </style>
```

-   flex 弹性布局来实现

```css
<style>
        .container{
         display: flex;
         justify-content: center;
         align-items: center;
        }
        .conter{

        }
    </style>
```

-   使用 grid

```css
    <style>
        .container{
                display: grid;
        }
        .conter{
             justify-self: center;
             align-self: center;
        }
    </style>
```

-   使用 table

    ```css
    .container {
        display: table;
    }
    .conter {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
    }
    ```

-   使用伪类

    ```css
    .container {
        font-size: 0;
        text-align: center;
    }
    .container::before {
        content: "";
        display: inline-block;
        width: 0;
        height: 100%;
        vertical-align: middle;
    }
    .conter {
        display: inline-block;
        vertical-align: middle;
    }
    ```

### 如何解决盒子塌陷?

父盒子设置上边距
overflow：hidden
子盒子脱标
父盒子上 padding

### 清楚浮动的方法?

父盒子设置高度
overflow：hidden
伪元素
双伪元素
在父盒子末尾添加一个空盒子，设置 clear:both
