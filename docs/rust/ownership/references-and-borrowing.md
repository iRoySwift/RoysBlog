---
id: references-and-borrowing
title: 引用与借用
description: 引用与借用
---

## 所有权

```rust
fn main() {
    let a = 10u32;
    let b = a;
    println!("{a}");
    println!("{b}");
}
```

```rust
fn main() {
    let s1 = String::from("I am a superman.");
    let s2 = s1;
    //println!("{s1}");
    println!("{s2}");
}
```

-   理解：

    1. 对于存储在栈中的数据(整数、布尔、浮点数、char 等)，将变量 a 赋值给另一个变量 b 时会复制一份数据，新变量 b 也会拥有对新复制数据 10u32 的所有权，而且不会影响原来 a 的所有权。所以打印 a、b 变量都可以正常打印。等 main 函数结束，a、b 都离开了作用域，对应的栈数据内存使用也会被回收；

    2. (only one ownership in a scope)对于存储在堆中的数据，将变量 s1 赋值给另一个变量 s2 时， Rust 同时会使第一个变量 s1 无效了，所以 s1 不可打印。直到花括号结束 s2 及 s2 所拥有的字符串内存也会被回收，栈结束时，s1 所对应的局部变量内存也会被回收。

## immutable refrences 与 mutable refrences

```rust
fn main() {
    let mut a = 10u32;
    let _c = &a; // &a 多个引用
    let _e = &a;
    let b = &mut a;
    // let f = &a; //&mut a与&a 一个资源的immutable refrences于mutable refrences作用域不可以重叠，不可以同时存在
    *b = 20;
    // let d = &mut a; // 一个资源的mutable refrences与另一个mutable refrences的作用域不可以重叠
    println!("{b}");
}

```

-   理解：
    1. 引用的作用域是从它定义到它最后一次使用时结束！
    2. 引用的作用域不可能长于所有权作用域（悬垂引用）
    3. 一个资源的 immutable refrences，可以同时存在多个;(**multiple immutable references**)
    4. 一个资源的 immutable refrences 于 mutable refrences 作用域不可以重叠，不可以同时存在(**only one immutable reference or mutable reference in scope**)
    5. 一个资源的 mutable refrences 与另一个 mutable refrences 的作用域不可以重叠(**only one mutable reference**)

## mutable refrences 排它性

```rust
fn main() {
    let mut a = 10u32;
    let r1 = &mut a;
    let r2 = r1; // r1的所有权被move
    println!("{r1}")
}
```

-   理解
    1. immutable refrences 可以被复制
    2. mutable refrences 不可以被复制，只能被 move
