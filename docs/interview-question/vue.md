---
id: vue-question
title: Vue
description: Vue Question
---

## vue router 传参 query 与 params 区别

    - 用法
        - query

            ```js
            this.$router.push({ path: "", query: { name: "ss" } });
            this.$route.query.name;
            ```

        - params

            ```js
            `字符串传params： /:name`
            this.$router.push({ name: "", params: { name: "ss" } });
            this.$route.params.name;
            ```

    - 大小区别

        query: 大多数浏览器对URL长度的限制大约是2000个字符
        params: 没有限制

### Vue2 与 vue3 template 可以有多个跟节点吗

vue2 只能有一个根节点，一个 vue 实例只能有一个入口

vue3 使用了 fragment 编译机制，每个根节点都会被编译成单独的标记片段，然后这些标记片段将作为一个数组，一起创建实际的渲染函数。

### vuex 持久化方案

localStorage

### vue 中数组支持响应的方法

    在Vue现有阶段中，对响应式处理利用的是Object.defineProperty对数据进行拦截，而这个方法并不能监听到数组内部变化，数组长度变化，数组的截取变化等，所以我们需要对这些操作进行hack，让vue能监听到其中的变化。

    push、pop、shift、unshift、splice、sort、reverse



    - 改变原数组：push、pop、shift、unshift、splice、sort、reverse
    - 不改变原数组：slice、contact、join、map、foreach、filter
