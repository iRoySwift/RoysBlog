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

-   原型修改、重写

    ```js
    javascript
    复制代码function Person(name) {
       this.name = name
    }
    // 修改原型
    Person.prototype.getName = function() {}
    var p = new Person('hello')
    console.log(p.__proto__ === Person.prototype) // true
    console.log(p.__proto__ === p.constructor.prototype) // true
    // 重写原型
    Person.prototype = {
       getName: function() {}
    }
    var p = new Person('hello')
    console.log(p.__proto__ === Person.prototype)        // true
    console.log(p.__proto__ === p.constructor.prototype) // false

    ```

    可以看到修改原型的时候 p 的构造函数不是指向 Person 了，因为直接给 Person 的原型对象直接用对象赋值时，它的构造函数指向的了根构造函数 Object，所以这时候 p.constructor === Object ，而不是 p.constructor === Person。要想成立，就要用 constructor 指回来：

    ```js
    Person.prototype = {
        getName: function () {},
    };
    var p = new Person("hello");
    p.constructor = Person;
    console.log(p.__proto__ === Person.prototype); // true
    console.log(p.__proto__ === p.constructor.prototype); // true
    ```

### JavaScript 实现继承的五种方式

1. 原型链继承

原型链继承通过修改子类的原型为父类的实例，从而实现子类可以访问到父类构造函数以及原型上的属性或者方法。

-   让我们来实现一下：

    ```js
    function Parent() {
        this.name = "fedaily";
    }

    Parent.prototype.getName = function () {
        return this.name;
    };

    function Child() {}
    // 这里也可以直接写出Child.prototype = Parent.prototype
    // 但是这样就不能访问到父类的构造函数的属性了，即this.name
    Child.prototype = new Parent();

    var child = new Child();
    child.getName(); // fedaily
    ```

    -   优点

        实现逻辑简单

    -   缺点

        父类构造函数中的引用类型（比如对象/数组），会被所有子类实例共享。其中一个子类实例进行修改，会导致所有其他子类实例的这个值都会改变

2. 构造函数继承

构造函数继承其实就是通过修改父类构造函数 this 实现的继承。我们在子类构造函数中执行父类构造函数，同时修改父类构造函数的 this 为子类的 this。

-   我们直接看如何实现：

    ```js
    function Parent() {
        this.name = ["fedaily"];
    }

    function Child() {
        Parent.call(this);
    }

    var child = new Child();
    child.name.push("fe");

    var child2 = new Child(); // child2.name === ['fedaily']
    ```

    -   优点

        解决了原型链继承中构造函数引用类型共享的问题，同时可以向构造函数传参（通过 call 传参）

    -   缺点

        所有方法都定义在构造函数中，每次都需要重新创建（对比原型链继承的方式，方法直接写在原型上，子类创建时不需要重新创建方法）

3. 组合继承

-   同时结合原型链继承、构造函数继承就是组合继承了。

    ```js
    function Parent() {
        this.name = "fedaily";
    }

    Parent.prototype.getName = function () {
        return this.name;
    };

    function Child() {
        Parent.call(this);
        this.topic = "fe";
    }

    Child.prototype = new Parent();
    // 需要重新设置子类的constructor，Child.prototype = new Parent()相当于子类的原型对象完全被覆盖了
    Child.prototype.constructor = Child;
    ```

    -   优点

    同时解决了构造函数引用类型的问题，同时避免了方法会被创建多次的问题

    -   缺点

    父类构造函数被调用了两次。同时子类实例以及子类原型对象上都会存在 name 属性。虽然根据原型链机制，并不会访问到原型对象上的同名属性，但总归是不美。

4. 寄生组合继承

-   寄生组合继承其实就是在组合继承的基础上，解决了父类构造函数调用两次的问题。我们来看下如何解决的：

    ```js
    function Parent() {
        this.name = "fedaily";
    }

    Parent.prototype.getName = function () {
        return this.name;
    };

    function Child() {
        Parent.call(this);
        this.topic = "fe";
    }

    // 仔细看这个函数的实现
    inherit(Child, Parent);
    function inherit(child, parent) {
        var prototype = object(parent.prototype);
        prototype.constructor = child;
        child.prototype = prototype;
    }

    // 这个函数的作用可以理解为复制了一份父类的原型对象
    // 如果直接将子类的原型对象赋值为父类原型对象
    // 那么修改子类原型对象其实就相当于修改了父类的原型对象
    function object(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }
    ```

    -   优点

    这种方式就解决了组合继承中的构造函数调用两次，构造函数引用类型共享，以及原型对象上存在多余属性的问题。是推荐的最合理实现方式（排除 ES6 的 class extends 继承哈哈哈）。

    -   缺点

    没有啥特别的缺点

5. ES6 继承

    ES6 提供了 class 语法糖，同时提供了 extends 用于实现类的继承。这也是项目开发中推荐使用的方式。

    使用 class 继承很简单，也很直观：

    ```js
    class Parent {
        constructor() {
            this.name = "fedaily";
        }

        getName() {
            return this.name;
        }
    }

    class Child extends Parent {
        constructor() {
            // 这里很重要，如果在this.topic = 'fe'后面调用，会导致this为undefined，具体原因可以详细了解ES6的class相关内容，这里不展开说明
            super();
            this.topic = "fe";
        }
    }

    const child = new Child();
    child.getName(); // fedaily
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

    可以看到，instanceof 只能正确判断引用数据类型，而不能判断基本数据类型、null、undefind。instanceof 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

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

### 请简述 JavaScript 中的 this

this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模式来判断。

-   第一种是函数调用模式，当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。
-   第二种是方法调用模式，如果一个函数作为一个对象的方法来调用时，this 指向这个对象。
-   第三种是构造器调用模式，如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。
-   第四种是 apply 、 call 和 bind 调用模式，这三个方法都可以显示的指定调用函数的 this 指向。其中 apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。

这四种方式，使用构造器调用模式的优先级最高，然后是 apply、call 和 bind 调用模式，然后是方法调用模式，然后是函数调用模式。

-   箭头函数与普通函数有什么区别

    -   箭头函数比普通函数更加简洁

        -   如果没有参数，就直接写一个空括号即可
        -   如果只有一个参数，可以省去参数的括号
        -   如果有多个参数，用逗号分割
        -   如果函数体的返回值只有一句，可以省略大括号
        -   如果函数体不需要返回值，且只有一句话，可以给这个语句前面加一个 void 关键字。最常见的就是调用一个函数：

        ```js
        let fn = () => void doesNotReturn();
        ```

    -   箭头函数没有自己的 this

        箭头函数不会创建自己的 this， 所以它没有自己的 this，它只会在自己作用域的上一层继承 this。所以箭头函数中 this 的指向在它在定义时已经确定了，之后不会改变。

    -   箭头函数继承来的 this 指向永远不会改变

        ```js
        var id = "GLOBAL";
        var obj = {
            id: "OBJ",
            a: function () {
                console.log(this.id);
            },
            b: () => {
                console.log(this.id);
            },
        };
        obj.a(); // 'OBJ'
        obj.b(); // 'GLOBAL'
        new obj.a(); // undefined
        new obj.b(); // Uncaught TypeError: obj.b is not a constructor
        ```

        对象 obj 的方法 b 是使用箭头函数定义的，这个函数中的 this 就永远指向它定义时所处的全局执行环境中的 this，即便这个函数是作为对象 obj 的方法调用，this 依旧指向 Window 对象。需要注意，定义对象的大括号{}是无法形成一个单独的执行环境的，它依旧是处于全局执行环境中。

    -   call()、apply()、bind()等方法不能改变箭头函数中 this 的指向

        ```js
        var id = "Global";
        let fun1 = () => {
            console.log(this.id);
        };
        fun1(); // 'Global'
        fun1.call({ id: "Obj" }); // 'Global'
        fun1.apply({ id: "Obj" }); // 'Global'
        fun1.bind({ id: "Obj" })(); // 'Global'
        ```

    -   箭头函数不能作为构造函数使用

            构造函数在new的步骤在上面已经说过了，实际上第二步就是将函数中的this指向该对象。 但是由于箭头函数时没有自己的this的，且this指向外层的执行环境，且不能改变指向，所以不能当做构造函数使用。

    -   箭头函数没有自己的 arguments

            箭头函数没有自己的arguments对象。在箭头函数中访问arguments实际上获得的是它外层函数的arguments值。

    -   箭头函数没有 prototype

    -   箭头函数不能用作 Generator 函数，不能使用 yeild 关键字

### AMD 和 CommonJS 的区别

    它们都是实现模块体系的方式，直到 ES2015 出现之前，JavaScript 一直没有模块体系。CommonJS 是同步的，而 AMD（Asynchronous Module Definition） 从全称中可以明显看出是异步的。CommonJS 的设计是为服务器端开发考虑的，而 AMD 支持异步加载模块，更适合浏览器。
    我发现 AMD 的语法非常冗长，CommonJS 更接近其他语言 import 声明语句的用法习惯。大多数情况下，我认为 AMD 没有使用的必要，因为如果把所有 JavaScript 都捆绑进一个文件中，将无法得到异步加载的好处。此外，CommonJS 语法上更接近 Node 编写模块的风格，在前后端都使用 JavaScript 开发之间进行切换时，语境的切换开销较小。
    我很高兴看到 ES2015 的模块加载方案同时支持同步和异步，我们终于可以只使用一种方案了。虽然它尚未在浏览器和 Node 中完全推出，但是我们可以使用代码转换工具进行转换。

### ES6 模块与 CommonJS 模块有什么异同？

    ES6 Module和CommonJS模块的区别：

    CommonJS是对模块的浅拷⻉，ES6 Module是对模块的引⽤，即ES6 Module只存只读，不能改变其值，也就是指针指向不能变，类似const；
    import的接⼝是read-only（只读状态），不能修改其变量值。 即不能修改其变量的指针指向，但可以改变变量内部指针指向，可以对commonJS对重新赋值（改变指针指向），但是对ES6 Module赋值会编译报错。

    ES6 Module和CommonJS模块的共同点：

    CommonJS和ES6 Module都可以对引⼊的对象进⾏赋值，即对对象内部属性的值进⾏改变。

### let、const、var 的区别

1. 块级作用域： 块作用域由 { }包括，let 和 const 具有块级作用域，var 不存在块级作用域。块级作用域解决了 ES5 中的两个问题：
   内层变量可能覆盖外层变量
   用来计数的循环变量泄露为全局变量

2. 变量提升： var 存在变量提升，let 和 const 不存在变量提升，即在变量只能在声明之后使用，否在会报错。
3. 给全局添加属性： 浏览器的全局对象是 window，Node 的全局对象是 global。var 声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是 let 和 const 不会。
4. 重复声明： var 声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。const 和 let 不允许重复声明变量。
5. 暂时性死区： 在使用 let、const 命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区。使用 var 声明的变量不存在暂时性死区。
6. 初始值设置： 在变量声明时，var 和 let 可以不用设置初始值。而 const 声明变量必须设置初始值。
7. 指针指向： let 和 const 都是 ES6 新增的用于创建变量的语法。 let 创建的变量是可以更改指针指向（可以重新赋值）。但 const 声明的变量是不允许改变指针的指向。

    | 区别               | var | let | const |
    | ------------------ | --- | --- | ----- |
    | 是否有块级作用域   | ×   | ✔️  | ✔️    |
    | 是否存在变量提升   | ✔️  | ×   | ×     |
    | 是否添加全局属性   | ✔️  | ×   | ×     |
    | 能否重复声明变量   | ✔️  | ×   | ×     |
    | 是否存在暂时性死区 | ×   | ✔️  | ✔️    |
    | 是否必须设置初始值 | ×   | ×   | ✔️    |
    | 能否改变指针指向   | ✔️  | ✔️  | ×     |

### new 操作符的实现原理

new 操作符的执行过程：

1. 首先创建了一个新的空对象
2. 设置原型，将对象的原型设置为函数的 prototype 对象。
3. 让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）
4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。

    具体实现：

    ```js
    function objectFactory() {
        let newObject = null;
        let constructor = Array.prototype.shift.call(arguments);
        let result = null; // 判断参数是否是一个函数
        if (typeof constructor !== "function") {
            console.error("type error");
            return;
        } // 新建一个空对象，对象的原型为构造函数的 prototype 对象
        newObject = Object.create(constructor.prototype); // 将 this 指向新建对象，并执行函数
        result = constructor.apply(newObject, arguments); // 判断返回对象
        let flag =
            result &&
            (typeof result === "object" || typeof result === "function"); // 判断返回结果
        return flag ? result : newObject;
    }
    // 使用方法
    objectFactory(构造函数, 初始化参数);
    ```

### for in 和 for of 的区别

    for…of 是ES6新增的遍历方式，允许遍历一个含有iterator接口的数据结构（数组、对象等）并且返回各项的值，和ES3中的for…in的区别如下

    for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名；
    for… in 会遍历对象的整个原型链，性能非常差不推荐使用，而 for … of 只遍历当前对象不会遍历原型链；
    对于数组的遍历，for…in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，for…of 只返回数组的下标对应的属性值；

    总结：
        for...in 循环主要是为了遍历对象而生，不适用于遍历数组；for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象。

### 实现 call、apply 及 bind 函数

-   call 函数的实现步骤

    -   判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
    -   判断传入上下文对象是否存在，如果不存在，则设置为 window 。
    -   处理传入的参数，截取第一个参数后的所有参数。
    -   将函数作为上下文对象的一个属性。
    -   使用上下文对象来调用这个方法，并保存返回结果。
    -   删除刚才新增的属性。
    -   返回结果。

    ```js
    Function.prototype.myCall = function (context) {
        // 判断调用对象
        if (typeof this !== "function") {
            console.error("type error");
        } // 获取参数
        let args = [...arguments].slice(1),
            result = null; // 判断 context 是否传入，如果未传入则设置为 window
        context = context || window; // 将调用函数设为对象的方法
        context.fn = this; // 调用函数
        result = context.fn(...args); // 将属性删除
        delete context.fn;
        return result;
    };
    ```

-   apply 函数的实现步骤

    -   判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
    -   判断传入上下文对象是否存在，如果不存在，则设置为 window 。
    -   将函数作为上下文对象的一个属性。
    -   判断参数值是否传入
    -   使用上下文对象来调用这个方法，并保存返回结果。
    -   删除刚才新增的属性
    -   返回结果

    ```js
    Function.prototype.myApply = function (context) {
        // 判断调用对象是否为函数
        if (typeof this !== "function") {
            throw new TypeError("Error");
        }
        let result = null; // 判断 context 是否存在，如果未传入则为 window
        context = context || window; // 将函数设为对象的方法
        context.fn = this; // 调用方法
        if (arguments[1]) {
            result = context.fn(...arguments[1]);
        } else {
            result = context.fn();
        } // 将属性删除
        delete context.fn;
        return result;
    };
    ```

-   bind 函数的实现步骤

    -   判断调用对象是否为函数，即使是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
    -   保存当前函数的引用，获取其余传入参数值。
    -   创建一个函数返回
    -   函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象

    ```js
    Function.prototype.myBind = function (context) {
        // 判断调用对象是否为函数
        if (typeof this !== "function") {
            throw new TypeError("Error");
        } // 获取参数
        var args = [...arguments].slice(1),
            fn = this;
        return function Fn() {
            // 根据调用方式，传入不同绑定值
            return fn.apply(
                this instanceof Fn ? this : context,
                args.concat(...arguments)
            );
        };
    };
    ```

### js 设计模式有哪些？

总体来说设计模式分为三大类：(C5S7B11)

创建型模式，共五种：工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式。
结构型模式，共七种：适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式。
行为型模式，共十一种：策略模式、模板方法模式、观察者模式/发布订阅模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式。

-   手写单例模式（创建模式）

        ```js
        let CreateSingleton = (function () {
            let instance;
            return function (name) {
                if (instance) {
                    return instance;
                }
                this.name = name;
                return (instance = this);
            };
        })();
        CreateSingleton.prototype.getName = function () {
            console.log(this.name);
        };
        ```

    代码测试

        ```js
        let Winner = new CreateSingleton('Winner');
        let Looser = new CreateSingleton('Looser');
        ​
        console.log(Winner === Looser); // true
        console.log(Winner.getName());  // 'Winner'
        console.log(Looser.getName());  // 'Winner'

        ```

-   手写观察者模式（行为模式）

    ```js
    // 定义 observe
    const queuedObservers = new Set();
    const observe = fn => queuedObservers.add(fn);
    ​
    ​
    const observable = obj => new Proxy(obj, {
     set(target, key, value, receiver) {
       const result = Reflect.set(target, key, value, receiver);
       // notify
       queuedObservers.forEach(observer => observer());
       return result;
    }
    });

    ```

    代码测试

        ```js
        obj = observable({
        name:'789'
        })
        ​
        observe(function test(){
        console.log('触发了')
        })
        ​
        obj.name ="前端柒八九"
        // 触发了
        // 前端柒八九
        ```

-   手写发布订阅 （行为模式）

    ```js
    class Observer {
     caches = {}; // 事件中心
     
     // eventName事件名-独一无二, fn订阅后执行的自定义行为
     on (eventName, fn){
       this.caches[eventName] = this.caches[eventName] || [];
       this.caches[eventName].push(fn);
    }
     
     // 发布 => 将订阅的事件进行统一执行
     emit (eventName, data) {
       if (this.caches[eventName]) {
         this.caches[eventName]
         .forEach(fn => fn(data));
       }
    }
     // 取消订阅 => 若fn不传, 直接取消该事件所有订阅信息
     off (eventName, fn) {
       if (this.caches[eventName]) {
         const newCaches = fn
           ? this.caches[eventName].filter(e => e !== fn)
           : [];
         this.caches[eventName] = newCaches;
       }
    }
    ​
    }

    ```

    代码测试

        ```js
        ob = new Observer();

        l1 = (data) => console.log(`l1_${data}`)
        l2 = (data) => console.log(`l2_${data}`)
        ​
        ob.on('event1',l1)
        ob.on('event1',l2)
        ​
        //发布订阅
        ob.emit('event1',789)
        // l1_789
        // l2_789
        ​
        // 取消，订阅 l1
        ob.off('event1',l1)
        ​
        ob.emit('event1',567)
        //l2_567

        ```

-   观察者模式 VS 发布订阅模式

-   从表面上看：

    -   观察者模式里，只有两个角色 —— 观察者 + 被观察者
    -   而发布订阅模式里，却不仅仅只有发布者和订阅者两个角色，还有一个经常被我们忽略的 —— 经纪人|Broker

-   往更深层次讲：

-   观察者和被观察者，是松耦合的关系 -发布者和订阅者，则完全不存在耦合

-   从使用层面上讲：
