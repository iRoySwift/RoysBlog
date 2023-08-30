---
id: solana-rust-lang
title: 2、Rust基本语法
---

## 1、变量和类型

### 基本数据类型

基本数据类型主要有整形、浮点、布尔以及字符类型。

整形按照所占空间大小被分为 1、2、4、8、16 字节大小的整数。每个大小又有有符号和无符号的差别。 具体的定义如下：

| Length  | Signed | Unsigned |
| ------- | ------ | -------- |
| 8-bit   | i8     | u8       |
| 16-bit  | i16    | u16      |
| 32-bit  | i32    | u32      |
| 64-bit  | i64    | u64      |
| 128-bit | i128   | u128     |
| arch    | isize  | usize    |

而浮点型包括 f32 和 f64 两个分别使用 4 字节和 8 字节的 IEEE-754 浮点格式的浮点数。

布尔类型和其他语言的布尔类型类似，用 true 和 false 来表示。

字符类型是用''单引号括起来的字符。rust 天生支持 utf-8,所以任何单引号括起来的 utf-8 字符都是合法的字符类型变量。

## 2、复合类型

复合类型是基本类型和复合类型的组合，典型的有

元组：

```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);
```

单纯的把几个类型放在一起。访问的时候通过下标索引来访问 比如 这里的 500：tup.0

数组：

```rust
let arr = [1, 2, 3, 4, 5];
```

和元组不通的是，这里每个元素的类型必须是同样的。访问的时候，下标用中括号表示: arr[0]

```rust
struct:

    struct User {
        active: bool,
        username: String,
        email: String,
        sign_in_count: u64,
    }

    let user = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };
```

struct 类似 C 语言里的 struct，将多个类型组合在一起，通过成员名进行访问：user.email

## 变量

变量定义为：

```rust
let x = 5;
```
