---
id: hos-question
title: 鸿蒙面试题
description: hos Question
---

### 不同类型的 Module 编译后会生成对应的 HAP、HAR、HSP

    entry module => hap

    feature module => hap

    shared module =>hsp

    static module(har) =>har

### 生命周期

-   页面的生命周期(3+2)

    -   onPageShow:页面显示触发(页面特有)
    -   onPageHide：页面隐藏触发(页面特有)
    -   onBackPress：当用户点击返回按钮时触发(页面特有)

-   组件的生命周期(2)

    -   aboutToAppear：组件即将出现时触发
    -   aboutToDisappear：组件即将析构销毁时触发

-   UIAbility 组件生命周期函数

    -   onCreate: UIAbility 实例创建完成时触发
    -   onForeground: 在 UIAbility 的 UI 可见之前
    -   onBackground: 在 UIAbility 的 UI 完全不可见之后
    -   onDestroy: 在 UIAbility 实例销毁时触发

-   WindowStage 窗口生命周期函数

    -   onWindowStageCreate 窗口才能构建
    -   onWindowStageDestroy 窗口销毁

    AbilityStage 回调：onCreate、onNewWant、onAcceptWant、onMemoryLevel、onConfigurationUpdate

### 首选项（Preferences）和长连接（PersistentStorage）的区别

    PersistentStorage将选定的AppStorage属性保留在设备磁盘上；PersistentStorage的持久化变量最好是小于2kb的数据，不要大量的数据持久化，因为PersistentStorage写入磁盘的操作是同步的，大量的数据本地化读写会同步在UI线程中执行，影响UI渲染性能。如果开发者需要存储大量的数据，建议使用数据库api。

    preferences可看做是配置项，为应用提供Key-Value键值型的数据处理能力，支持应用持久化轻量级数据，并对其修改和查询。

    两个区别就是storage建议是页面缓存数据；preferences是应用配置

### 管理组件拥有的状态

    @State装饰器：组件内状态

    @Prop装饰器：父子单向同步

    @Link装饰器：父子双向同步

    @Provide装饰器和@Consume装饰器：与后代组件双向同步

    @Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化

### 管理应用拥有的状态

-   LocalStorage：页面级 UI 状态存储 -> @LocalStorageProp 和@LocalStorageLink。

    -   @Entry(storage) 未被@Entry 装饰的组件不可被独立分配 LocalStorage 实例

-   AppStorage：应用全局的 UI 状态存储 -》 单向: @StorageProp 双向: @StorageLink
-   PersistentStorage:全局持久化状态（磁盘-持久化状态，退出应用数据同样存在）,**与 AppStorage 搭配使用**
-   Environment:应用程序运行的设备的环境参数（可读不可写）,**与 AppStorage 搭配使用**

### 其他状态管理功能

    @Watch：用于监听状态变量的变化

    $$ 运算符：给内置组件提供TS变量的引用，使得TS变量和内置组件的内部状态保持同步。

    @Track：应用于class对象的属性级更新。@Track装饰的属性变化时，只会触发该属性关联的Ul更新。

### UIAbility 组件的启动模式

    singleton
    multiton
    specified

    冷启动：目标UIAbility冷启动时，在目标UIAbility的onCreate()生命周期回调中，接收调用方传过来的参数。然后在目标UIAbility的onWindowStageCreate()生命周期回调中，解析EntryAbility传递过来的want参数，获取到需要加载的页面信息url，传入windowStage.loadContent()方法。

    热启动：在应用开发中，会遇到目标UIAbility实例之前已经启动过的场景，这时再次启动目标UIAbility时，不会重新走初始化逻辑，AbilityStage只会直接触发onNewWant()生命周期方法。为了实现跳转到指定页面，需要在onNewWant()中解析参数进行处理。

-   当被调用方 UIAbility 组件启动模式设置为 multiton 启动模式时，每次启动都会创建一个新的实例，那么 onNewWant()回调就不会被用到。
-   在 HarmonyOS 应用开发中，UIAbilityContext 的 this.context.terminateSelf()方法被用来结束当前的 UIAbility 实例。

### 启动 UIAbility 有显式 Want 启动和隐式 Want 启动两种方式。

-   配置 skills 标签的 entities 字段和 actions 字段

    ```json
    {
        "module": {
            "abilities": [
            {
                ...
                "skills": [
                {
                    "entities": [
                    ...
                    "entity.system.default"
                    ],
                    "actions": [
                    ...
                    "ohos.want.action.viewData"
                    ]
                }
                ]
            }
            ]
        }
    }
    ```

-   在调用方 want 参数中的 entities 和 action 需要被包含在待匹配 UIAbility 的 skills 配置的 entities 和 actions 中。系统匹配到符合 entities 和 actions 参数条件的 UIAbility 后，会弹出选择框展示匹配到的 UIAbility 实例列表供用户选择使用。示例中的 context 的获取方式请参见获取 UIAbility 的上下文信息。

    ```js
    let context: common.UIAbilityContext = getContext(this) as common.UIAbilityContext; // UIAbilityContext
    let want: Want = {
        deviceId: '', // deviceId为空表示本设备
        // uncomment line below if wish to implicitly query only in the specific bundle.
        // bundleName: 'com.samples.stagemodelabilityinteraction',
        action: 'ohos.want.action.viewData',
        // entities can be omitted.
        entities: ['entity.system.default']
    };
    // context为调用方UIAbility的UIAbilityContext
    context.startAbility(want).then(() => {
        hilog.info(DOMAIN_NUMBER, TAG, 'Succeeded in starting FuncAbility.');
    }).catch((err: BusinessError) => {
        hilog.error(DOMAIN_NUMBER, TAG, `Failed to start FuncAbility. Code is ${err.code}, message is ${err.message}`);
    });
    ```

-   在文档应用使用完成之后，如需要停止当前 UIAbility 实例，通过调用 terminateSelf()方法实现。

    ```js
    let context: common.UIAbilityContext = getContext(this) as common.UIAbilityContext; // UIAbilityContext
    // context为需要停止的UIAbility实例的AbilityContext
    context.terminateSelf((err) => {
        if (err.code) {
            hilog.error(DOMAIN_NUMBER, TAG, `Failed to terminate self. Code is ${err.code}, message is ${err.message}`);
            return;
        }
    });
    ```

### 栅格布局 (GridRow/GridCol)与网格布局 （Grid/GridItem） 区别

-   栅格

    -   栅格系统断点：breakpoints
    -   GridRow 中通过 columns 设置栅格布局的总列数 12。

-   网格布局
    -   栅格系统断点：breakpoints

### TaskPool 和 Worker 的对比 (TaskPool 和 Worker)

    TaskPool和Worker都基于Actor并发模型实现

-   TaskPool

    -   序列化传输的数据量大小限制为 16MB
    -   实现任务的函数需要使用装饰器@Concurrent 标注，且仅支持在.ets 文件中使用
    -   创建 TaskGroup 并通过 addTask()添加对应的任务，通过 execute()执行任务组，并指定为高优先级
    -   支持取消任务 taskpool.cancel(taskGroup2);

-   Worker
    -   DevEco Studio 提供了 Worker 创建的模板，新建一个 Worker 线程，例如命名为“MyWorker”
    -   销毁 Worker 线程

| 实现             | Taskpoll                                           | Worker                             |
| ---------------- | -------------------------------------------------- | ---------------------------------- |
| 生命周期         | TaskPool 自行管理生命周期，无需关心任务负载高低    | 开发者自行管理                     |
| 任务池个数上限   | 自动管理，无需配置                                 | 最多支持同时开启 64 个 Worker 线程 |
| 任务执行时长上限 | 3 分钟（不包含 Promise），长时任务无执行时长上限。 | 无限制                             |
| 设置任务的优先级 | 支持配置任务优先级。                               | 不支持。                           |
| 执行任务的取消   | 支持取消已经发起的任务                             | 不支持。                           |

### TaskPool 里面是否可以使用 EventHub

    目前EventHub只能在主线程使用，不支持在TaskPool中使用。

$$
$$
