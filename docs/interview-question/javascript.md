---
id: js-question
title: JavaScript
description: JavaScript Question
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
```

## JavaScript Question

### slice 与 splice 区别

-   splice: array.splice(index,howmany,item1,.....,itemX)

        1. 改变原数组
        2. Howmany：***删除多少元素***
        2. 截取原数组，还可以***添加新数据***
        3. 如果删除一个元素，则返回一个元素的数组。 如果未删除任何元素，则返回空数组。

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,1);// 删除一个元素，返回删除的元素数组

fruits.splice(2,1,’ Lemon’)；
console.log(fruits); // 删除一个元素Apple，添加一个Lemon
```

-   slice: array.slice(start, end)

        1. 不改变原数组
        2. start，end都是索引

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); // ***不包含最后一个元素Apple***
console.log(citrus); // ["Orange", "Lemon"]
```

### 防抖与节流区别

    函数节流是：在固定的时间内触发事件，每隔n秒触发一次。
    函数防抖是：当你频繁触发后，n秒内只执行一次。


    防抖与节流都是防止某一时间频繁触发，但是原理不一样

    -  防抖（debounce）: 多次触发，只执行一次

    	鼠标不断点击、search进行防抖进行节流
    	window resize事件

```js
/**
 * 防抖
 */
export function debounce(fn, delay) {
    let timer: NodeJS.Timeout = null;
    delay = delay || 1000;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

window.onresize = debounce(function(){console.log(‘resize’)},500)
```

    - 节流（throttle）: 规定事件内，只能触发一次

        滚动事件
        懒加载

    ```js
    /**
     * 防抖
     */
    /**
     * 函数节流
     * 定时器
     */
    export function throttle(fn, delay) {
    let lastTime;
    let timer;
    delay = delay || 1000;
    return (...args) => {
        // 记录当前函数触发的时间
        const nowTime = Date.now();
        if (lastTime && nowTime - lastTime < delay) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            // 记录上一次函数触发的时间
            lastTime = nowTime;
            // 修正this指向问题
            // @ts-ignore
            fn.apply(this, args);
        }, delay);
        } else {
        lastTime = nowTime;
        // @ts-ignore
        fn.apply(this, args);
        }
    };
    }

    window.onscroll = throttle(function(){console.log(‘resize’)},500)
    ```

    ```js

    //时间戳版本实现节流
    function throttle(func,wait) {
        //定义初始时间
        var oldTime=0;

        return function() {
            var _this=this;
            var args=arguments;

            //当前时间戳
            var newTime=+new Date();

            //判断用当前时间减去旧的时间，如果大于wait指定的时间就会触发
            if(newTime-oldTime>wait) {
                //执行触发的函数
                func.apply(_this,args)
                //将旧时间更新
                oldTime=newTime;
            }

        }
    }

    ```

### 什么是闭包？

闭包（closure）：闭包让开发者可以从内部函数访问外部函数的作用域

```js
function init() {
    var name = "Mozilla"; // name 是一个被 init 创建的局部变量
    function displayName() {
        // displayName() 是内部函数，一个闭包
        alert(name); // 使用了父函数中声明的变量
    }
    displayName();
}
init();
```

### 构造函数、原型对象和实例之间的关系

    ```js
    function F() {}
    var f = new F();
    // 构造器
    F.prototype.constructor === F; // true
    F.__proto__ === Function.prototype; // true
    Function.prototype.__proto__ === Object.prototype; // true
    Object.prototype.__proto__ === null; // true

    // 实例
    f.__proto__ === F.prototype; // true
    F.prototype.__proto__ === Object.prototype; // true
    Object.prototype.__proto__ === null; // true
    ```

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
alt="Docusaurus themed image"
sources={{
    light: useBaseUrl('/img/interview/prototype-proto.png'),
    dark: useBaseUrl('/img/interview/prototype-proto.png'),
}}
/>
```

### JavaScript 实现继承的六种方式

1. 原型链继承

    将父类的实例作为子类的原型

    ```javascript
    function Person(name) {
        this.name = name;
        this.say = function () {
            console.log("1 + 1 = 2");
        };
    }

    Person.prototype.listen = function () {
        console.log("エウテルペ");
    };

    function Student() {}

    Student.prototype = new Person(); //关键

    const stu = new Student();

    stu.grade = 3;

    console.log(stu.grade); // 3

    stu.say(); // 1 + 1 = 2
    stu.listen(); // エウテルペ
    ```

-   优点：

    -   简单易实现
    -   父类新增原型方法/原型属性，子类都能访问
    -   实例是子类的实例也是父类的实例

    ```js
    stu instanceof Student; // true
    stu instanceof Person; // true
    ```

-   缺点：

    -   为子类新增属性和方法，不能在构造函数中
    -   无法实现多继承
    -   创建子类实例时，不能向父类构造函数传参数
    -   所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）

-   存在的问题：

    prototype 里有个属性 constructor 指向构造函数本身，但是， Student 的原型已经被父类的实例取代了，所以指向也不正确，所以需要修复构造函数指向(这里网上的教程只是对组合继承、寄生组合式继承进行了修复，不知道是不是因为这个不常用的关系)

    ```js
    function Student() {}
    console.log(Student.prototype.constructor);

    Student.prototype = new Person(); //关键

    const stu = new Student();

    stu.grade = 3;

    console.log(stu.grade); // 3

    stu.say(); // 1 + 1 = 2
    stu.listen(); // エウテルペ
    console.log(Student.prototype.constructor);
    ```

-   解决问题

    Student.prototype.constructor = Student

2. 借用构造函数继承
   在一个类中执行另一个类的构造函数，通过 call 函数设置 this 的指向，这样就可以得到另一个类的所有属性

```js
function WebsiteMaster(site) {
    this.site = site;
}

function Student(name, grade, site) {
    Person.call(this, name);
    WebsiteMaster.call(this, site);
    this.grade = grade;
}

const stu = new Student("clz", 3, "https://clz.vercel.app");

console.log(stu.name, stu.grade, stu.site); // clz, 3, https://clz.vercel.app

stu.say(); // 1 + 1 = 2
stu.listen(); // Uncaught TypeError: stu.listen is not a function
```

-   优点：

    -   创建子类实例时，可以向父类传递参数
    -   可以实现多继承(call 多个对象)
    -   不需要修复构造函数指向

-   缺点：

    -   方法在构造函数中定义，无法复用
    -   只能继承父类的实例属性，不能继承原型属性、方法
    -   实例并不是父类的实例，而只是子类的实例

    -   stu instanceof Student // true
    -   stu instanceof Person // false
    -   继承继着不再是人了(笑)

3. 原型式继承

为父类实例添加属性、方法，作为子类实例。

道格拉斯·克罗克福德在一篇文章中介绍了一种实现继承的方法，这种方法并没有使用严格意义上的构造函数。它的想法是借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。为了达到这个目的，他给出了如下函数。

```js
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

const person = new Person("clz");

const stu = object(person);

stu.grade = 3;
stu.study = function () {
    console.log("FrontEnd");
};

console.log(stu.name, stu.grade); // clz, 3

stu.say(); // 1 + 1 = 2
stu.listen(); // エウテルペ

stu.study(); // FrontEnd
```

-   优点：

    -   感觉没啥优点，不太像继承

-   缺点：

    -   不支持多继承
    -   实例是父类的实例

4. 寄生式继承
   为父类实例添加属性、方法，作为子类实例。(原理和原型式继承一样)

```js
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function Student(name, grade) {
    const person = object(new Person(name));

    person.grade = grade;
    person.study = function () {
        console.log("FrontEnd");
    };

    return person;
}

const stu = new Student("clz", 3);

console.log(stu.name, stu.grade); // clz, 3

stu.say(); // 1 + 1 = 2
stu.listen(); // エウテルペ

stu.study(); // FrontEnd
```

-   优点：

    -   有了子类的雏形，但是换汤不换药，原理和原型式继承一样

-   缺点：

    -   不支持多继承
    -   实例是父类的实例，不是子类的实例(因为只是在父类的实例上添加属性、方法而已)

```js
stu instanceof Student; // false
stu instanceof Person; // true
```

5. 组合继承
   原型链继承+借用构造函数继承

```js
function WebsiteMaster(site) {
    this.site = site;
}

function Student(name, grade, site) {
    Person.call(this, name); // 继承属性
    WebsiteMaster.call(this, site);
    this.grade = grade;
}

Student.prototype = new Person(); // 继承方法
Student.prototype.constructor = Student;

const stu = new Student("clz", 3, "https://clz.vercel.app");

console.log(stu.name, stu.grade, stu.site); // clz, 3, https://clz.vercel.app

stu.say(); // 1 + 1 = 2
stu.listen(); // エウテルペ

console.log(stu.constructor);
```

-   优点：

    -   可以继承实例属性、方法，也可以继承原型属性、方法
    -   可传参、可复用
    -   实例既是子类的实例，也是父类的实例

-   缺点：

    -   调用了两次父类构造函数，耗内存
    -   需要修复构造函数指向

6. 寄生组合式继承
   通过 Object.create()来代替给子类原型赋值的过程，解决了两次调用父类构造函数的问题

```js
function WebsiteMaster(site) {
    this.site = site;
}

function Student(name, grade, site) {
    Person.call(this, name); // 继承属性
    WebsiteMaster.call(this, site);
    this.grade = grade;
}

Student.prototype = Object.create(Person.prototype); // 继承方法
Student.prototype.constructor = Student; // 修复构造函数指向

const stu = new Student("clz", 3, "https://clz.vercel.app");

console.log(stu.name, stu.grade, stu.site); // clz, 3, https://clz.vercel.app

stu.say(); // 1 + 1 = 2
stu.listen(); // エウテルペ
```

有人可能会提出：为什么不可以直接把父类原型赋值给子类原型来实现呢？

这是因为直接赋值的话，那就是引用关系。下面就来看看

```js
function WebsiteMaster(site) {
    this.site = site;
}
function Student(name, grade, site) {
    Person.call(this, name); // 继承属性
    WebsiteMaster.call(this, site);
    this.grade = grade;
}

Student.prototype = Person.prototype; // 继承方法
Student.prototype.constructor = Student; // 修复实例

const stu = new Student("clz", 3, "https://clz.vercel.app");

console.log(stu.name, stu.grade, stu.site); // clz, 3, https://clz.vercel.app

stu.say(); // 1 + 1 = 2
stu.listen(); // エウテルペ

Student.prototype.listen = function () {
    console.log("EGOIST");
};

console.log(Person.prototype.listen);
```

可以看到，修改 Student 原型上的方法时， Person 的原型上的也会跟着变化。

Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的 **proto**。
所以，此时修改 Student 原型上的方法时， Person 的原型上的不会跟着变化。
es6 之前没有 Object.create()方法，可以自己实现(实际就是原型式继承的关键函数)

-   关键：
    -   接受一个对象 obj
    -   返回一个新对象 newObj
    -   让 newObj.**proto** === obj

```js
function object(obj) {
    function F() {} // 新的构造函数
    F.prototype = obj; // 继承传入的参数obj
    return new F(); // 返回新的函数对象
}
```

### 函数声明会覆盖变量声明，但不会覆盖变量赋值

```js
function value() {
    return 1;
}
var value;
alert(typeof value); //"function"
```

```js
function value() {
    return 1;
}
var value = 1;
alert(typeof value); //"number"
```

### this 指向问题

这题考察的就是 this 的指向，函数作为对象本身属性调用的时候，this 指向对象，作为普通函数调用的时候，就指向全局了。

```js
var baz = 3;
var bazz = {
    baz: 2,
    getbaz: function () {
        return this.baz;
    },
};
console.log(bazz.getbaz()); // 2
var g = bazz.getbaz;
console.log(g()); // 3
```

-   为了证明 this 就是全局对象，我对代码做一些改变：

    ```js
    var x = 1;
    function test() {
        this.x = 0;
    }
    test();
    alert(x); // 0
    ```

    ```js
    var x = 2;
    function Test() {
        this.x = 1;
    }
    var o = new Test();
    alert(x); // 2
    ```

### 数据类型检测的方式有哪些

-   通过 instanceof 判断

    instanceof 可以正确判断对象的类型，其内部运行机制是判断在其原型链中能否找到该类型的原型。

    ```js
    console.log(2 instanceof Number); // false
    console.log(true instanceof Boolean); // false
    console.log("str" instanceof String); // false
    console.log([] instanceof Array); // true
    console.log(function () {} instanceof Function); // true
    console.log({} instanceof Object); // true
    ```

    可以看到，instanceof 只能正确判断引用数据类型，而不能判断基本数据类型。instanceof 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

-   通过 constructor 判断

    ```js
    console.log((2).constructor === Number); // true
    console.log(true.constructor === Boolean); // true
    console.log("str".constructor === String); // true
    console.log([].constructor === Array); // true
    console.log(function () {}.constructor === Function); // true
    console.log({}.constructor === Object); // true
    ```

    constructor 有两个作用，一是判断数据的类型，二是对象实例通过 constrcutor 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，constructor 就不能用来判断数据类型了：

    ```javascript
    function Fn() {}

    Fn.prototype = new Array();

    var f = new Fn();

    console.log(f.constructor === Fn); // false
    console.log(f.constructor === Array); // true
    ```

-   typeof

    其中数组、对象、null 都会被判断为 object，其他判断都正确。

    ```js
    console.log(typeof 2); // number
    console.log(typeof true); // boolean
    console.log(typeof "str"); // string
    console.log(typeof []); // object
    console.log(typeof function () {}); // function
    console.log(typeof {}); // object
    console.log(typeof undefined); // undefined
    console.log(typeof null); // object
    ```

-   Object.prototype.toString.call()

        Object.prototype.toString.call() 使用 Object 对象的原型方法 toString 来判断数据类型：

        ```js
        var a = Object.prototype.toString;

        console.log(a.call(2)); // [object Number]
        console.log(a.call(true)); // [object Boolean]
        console.log(a.call("str")); // [object String]
        console.log(a.call([])); // [object Array]
        console.log(a.call(function () {})); // [object Function]
        console.log(a.call({})); // [object Object]
        console.log(a.call(undefined)); // [object Undefined]
        console.log(a.call(null)); // [object Null]
        ```

        同样是检测对象obj调用toString方法，obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样，这是为什么？

        这是因为 toString 是 Object 的原型方法，而 Array、function 等类型作为 Object 的实例，都重写了 toString 方法。不同的对象类型调用     toString 方法时，根据原型链的知识，调用的是对应的重写之后的 toString 方法（function 类型返回内容为函数体的字符串，Array 类型返回元素组成的字符串…），而不会去调用 Object 上原型 toString 方法（返回对象的具体类型），所以采用 obj.toString()不能得到其对象类型，只能将 obj 转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用 Object 原型上的 toString 方法。

### 判断数组的方式有哪些

-   通过 Object.prototype.toString.call()做判断

    ```js
    Object.prototype.toString.call(obj).slice(8, -1) === "Array";
    ```

-   通过原型链做判断

    ```js
    obj.__proto__ === Array.prototype;
    ```

-   通过 ES6 的 Array.isArray()做判断

    ```js
    Array.isArrray(obj);
    ```

-   通过 instanceof 做判断

    ```js
    obj instanceof Array;
    ```

-   通过 Array.prototype.isPrototypeOf

    ```js
    Array.prototype.isPrototypeOf(obj);
    ```

-   通过 Array.isArray()判断

    ```js
    Array.isArray()用于确定传递的值是否是一个数组，返回一个布尔值

    let a = [7,8,9];
    Array.isArray(a); //true
    ```

    有个问题是 Array.isArray()是 ES5 新增的方法，目的就是提供一个稳定可用的数组判断方法，对于 ES5 之前不支持此方法的问题，我们其实可以做好兼容进行自行封装，如下：

    ```js
    if (!Array.isArray) {
        Array.isArray = function (argument) {
            return (
                Object.prototype.toString.call(argument) === "[object Array]"
            );
        };
    }
    ```

### js 深拷贝与浅拷贝

-   浅拷贝是拷贝一层，属性为对象时，浅拷贝是复制，两个对象指向同一个地址

-   深拷贝是递归拷贝深层次，属性为对象时，深拷贝是新开栈，两个对象指向不同的地址

```mdx-code-block
<BrowserWindow minHeight={240} >
    <ThemedImage
    alt="Docusaurus themed image"
    sources={{
        light: useBaseUrl('/img/interview/clone-deep.png'),
        dark: useBaseUrl('/img/interview/clone-deep.png'),
    }}
    />
</BrowserWindow>
```

-   浅拷贝方法：

    -   Object.assign

        ```js
        const obj = {
            name: "lin",
        };

        const newObj = Object.assign({}, obj);

        obj.name = "xxx"; // 改变原来的对象

        console.log(newObj); // { name: 'lin' } 新对象不变

        console.log(obj == newObj); // false 两者指向不同地址
        ```

    -   Array.prototype.slice(), Array.prototype.concat()

        ```js
        const arr = ["lin", "is", "handsome"];
        const newArr = arr.slice(0);

        arr[2] = "rich"; // 改变原来的数组

        console.log(newArr); // ['lin', 'is', 'handsome']

        console.log(arr == newArr); // false 两者指向不同地址
        ```

        ```javascript
        const arr = ["lin", "is", "handsome"];
        const newArr = [].concat(arr);

        arr[2] = "rich"; // 改变原来的数组

        console.log(newArr); // ['lin', 'is', 'handsome'] // 新数组不变

        console.log(arr == newArr); // false 两者指向不同地址
        ```

    -   数组静态方法 Array.from

        ```js
        const arr = ["lin", "is", "handsome"];
        const newArr = Array.from(arr);

        arr[2] = "rich"; // 改变原来的数组

        console.log(newArr); // ['lin', 'is', 'handsome']

        console.log(arr == newArr); // false 两者指向不同地址
        ```

    -   使用拓展运算符实现的复制

    ```js
    const arr = ["lin", "is", "handsome"];
    const newArr = [...arr];

    arr[2] = "rich"; // 改变原来的数组

    console.log(newArr); // ['lin', 'is', 'handsome'] // 新数组不变

    console.log(arr == newArr); // false 两者指向不同地址
    ```

-   深拷贝方法：

    -   JSON.parse(JSON.stringify(obj))

        -   但是这种方式存在弊端，会忽略 undefined、symbol 和函数
        -   NaN、Infinity、-Infinity 会被序列化为 null
        -   而且还不能解决循环引用的问题：

        ```js
        const obj = {
            a: 1,
        };

        obj.obj = obj;

        const newObj = JSON.parse(JSON.stringify(obj)); // 报错
        ```

    -   lodash \_.cloneDeep()
    -   jQuery.extend()
    -   JSON.stringify()
    -   手写循环递归

    ```js
    function deepClone(obj, hash = new WeakMap()) {
        if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
        if (obj instanceof Date) return new Date(obj);
        if (obj instanceof RegExp) return new RegExp(obj);
        // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
        if (typeof obj !== "object") return obj;
        // 是对象的话就要进行深拷贝
        if (hash.get(obj)) return hash.get(obj);
        let cloneObj = new obj.constructor();
        // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
        hash.set(obj, cloneObj);
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // 实现一个递归拷贝
                cloneObj[key] = deepClone(obj[key], hash);
            }
        }
        return cloneObj;
    }
    ```
