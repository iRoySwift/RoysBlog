---
id: uniapp-question
title: Uniapp
description: Uniapp Question
---

### 小程序里面如何与 h5 页面通信

    小程序里面可以通过webview嵌入h5页面，通过url给h5页面传参
    h5页面通过uni.postMessage给小程序传参

    ```js
        uniapp.postMessage({
            data:{
                action:'message'
            }
        })
        <webview src="h5" @message="getMessage"></webview>
    ```
