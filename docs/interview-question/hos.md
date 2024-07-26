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

    页面生命周期： aboutToAppear、onPageShow、onPageHide、aboutToDisappear、onBackPress
    组件生命周期：aboutToAppear、aboutToDisappear
    UIAbility 生命周期：onCreate、onWindowStageCreate、onForeground、onBackground、onWindowStageDestroy、onDestroy
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

-   AppStorage：应用全局的 UI 状态存储
-   PersistentStorage：持久化存储 UI 状态
-   Environment：设备环境查询

### UIAbility 组件的启动模式

    singleton
    multiton
    specified

    冷启动：目标UIAbility冷启动时，在目标UIAbility的onCreate()生命周期回调中，接收调用方传过来的参数。然后在目标UIAbility的onWindowStageCreate()生命周期回调中，解析EntryAbility传递过来的want参数，获取到需要加载的页面信息url，传入windowStage.loadContent()方法。

    热启动：在应用开发中，会遇到目标UIAbility实例之前已经启动过的场景，这时再次启动目标UIAbility时，不会重新走初始化逻辑，AbilityStage只会直接触发onNewWant()生命周期方法。为了实现跳转到指定页面，需要在onNewWant()中解析参数进行处理。

-   当被调用方 UIAbility 组件启动模式设置为 multiton 启动模式时，每次启动都会创建一个新的实例，那么 onNewWant()回调就不会被用到。

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
