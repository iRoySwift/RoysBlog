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

### Object.defineProperty 无法监听数组变化

    在Vue现有阶段中，对响应式处理利用的是Object.defineProperty对数据进行拦截，而这个方法并不能监听到数组内部变化，数组长度变化，数组的截取变化等，所以我们需要对这些操作进行hack，让vue能监听到其中的变化。

    push、pop、shift、unshift、splice、sort、reverse

    - 改变原数组：push、pop、shift、unshift、splice、sort、reverse
    - 不改变原数组：slice、contact、join、map、foreach、filter

### vue3.0 为什么要用 Proxy 替代 defineProperty

    ```js
        var val = 1
        var obj = Object.defineProperty({}, 'sum', {
            enumerable: true,
            configurable: true,
            get() {
                return val
            },
            set(newValue) {
                val += newValue
            }
        })
    ```

    - 正是因为使用defineProperty每次只能绑定一个属性监听，所以Vue在遍历 + 递归时要有更大的性能消耗和更多的代码。

    proxy 不兼容 IE
    Proxy的监听是针对一个对象的，那么对这个对象的所有操作会进入监听操作，这就完全可以代理所有属性了。

    ```js
         var data = {
            sum: 0
        }
        var proxy = new Proxy(data, {
            get(target, property) {
                return target[property]
            },
            set(target, property, value) {
                target[property] += value
            }
        })

    ```
    - Vue3.0中使用Proxy代理将会带来很大的性能提升和更优的代码。
