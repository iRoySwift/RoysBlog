---
id: react-question
title: React
description: React Question
---

### react hooks 可以放到 if 语句中吗？

react 使用链表来保存所有的 hooks，state 的更新与取值是按顺序对应的

### React class 组件 中在哪捕获错误

    ```jsx
    class ErrorBoundary extends React.Component {
     constructor(props) {
       super(props);
       this.state = { hasError: false };
    }
    ​
     static getDerivedStateFromError(error) {
       // 更新 state 使下一次渲染能够显示降级后的 UI
       return { hasError: true };
    }
    ​
     componentDidCatch(error, errorInfo) {
       // 你同样可以将错误日志上报给服务器
       logErrorToMyService(error, errorInfo);
    }
    ​
     render() {
       if (this.state.hasError) {
         // 你可以自定义降级后的 UI 并渲染
         return <h1>Something went wrong.</h1>;
       }
    ​
       return this.props.children;
    }
    }

    ```

    - 使用

    ```jsx
    <ErrorBoundary>
        <MyWidget />
    </ErrorBoundary>
    ```

    - 但是错误边界不会捕获：

    ```js
    try{}catch(err){}
    ///异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）
    ///服务端渲染
    ///它自身抛出来的错误（并非它的子组件)

    ```

### <Fragment> 与 <>...</> 区别

    ```jsx
    如果你要传递 key 给一个 <Fragment>，你不能使用 <>...</>，你必须从 'react' 中导入 Fragment 且表示为<Fragment key={yourKey}>...</Fragment>。
    ```

### 那 React Fiber 是怎么实现的

    主要是通过两个原生的 API 来实现的 requestAnimationFrame 和 requestIdleCallback

    显示器每秒 60 帧我们看着才不会感觉到卡嘛，比如动画的时候，一帧的时间内布局和绘制结束，还有剩余时间，JS 就会拿到主线程使用权，如果 JS 某个任务执行过长，动画下一帧开始时 JS 还没有执行完，就会导致掉帧，出现卡顿。

    所以就通过把 JS 任务分成更小的任务块，分到每一帧上的方式，一帧时间到先暂停 JS 执行，然后下一帧绘制任完成再把主线程交给 JS，在每一帧绘制之前调用 requestAnimationFrame；在每一帧空间阶段，就是一帧动画任务完成，下一帧还没到开始时间，这中间还有时间的话就调用 requetIdleCallback，执行它里面的任务

    requesetIdleCallback是一个属于宏任务的回调，就像setTimeout一样。不同的是，setTimeout的执行时机由我们传入的回调时间去控制，requesetIdleCallback是受屏幕的刷新率去控制。本文不对这部分做深入探讨，只需要知道它每隔16ms会被调用一次，它的回调函数可以获取本次可以执行的时间，每一个16ms除了requesetIdleCallback的回调之外，还有其他工作，所以能使用的时间是不确定的，但只要时间到了，就会停下节点的遍历。

    动画变流畅的根本原因，一定是一秒内可以获得更多动画帧。但是当我们使用react fiber时，并没有减少更新所需要的总时间。

### 什么是高阶组件：

    在函数式编程的概念中，高阶函数是指接受函数作为输入或者输出函数的函数。在React中，高阶组件遵循同样的原则，它是接收组件并返回新组件的函数，这样可以使得我们能够在不修改原始组件代码的情况下为其增加额外的功能。

### React.memo() 和 useMemo() 的用法和区别

    - React.memo() 是一个高阶组件，我们可以使用它来包装我们不想重新渲染的组件，除非其中的 props 发生变化

    - useMemo() 是一个 React Hook，我们可以使用它在组件中包装函数。 我们可以使用它来确保该函数中的值仅在其依赖项之一发生变化时才重新计算
