---
id: typescript-question
title: Typescript
description: Typescript Question
---

### Typescript 中的 interface 和 type 到底有什么区别

-   interface 和 type 都可以继承

```js
interface PartialPointX {
    x: number;
}
interface Point extends PartialPointX {
    y: number;
}

interface PartialPointX {
    x: number;
}
type Point = PartialPointX & { y: number };
```

-   type 可以声明基本类型别名，联合类型，元组等类型
-   type 语句中还可以使用 typeof 获取实例的 类型进行赋值
