# 一、创建Vue3.0工程

> 1. 使用 Vue-cli 创建

官方文档（https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create）


```
// 查看 @vue/cli 版本，确保在4.5.0 以上
vue --version 

// 安装或者升级@vue/cli
npm install -g @vue/cli

// 创建
vue create vue_test

// 启动
cd vue_test
npm run serve
```

> 2. 使用 Vite 创建

官方文档（http://v3.cn.vuejs.org/guide/Installation.html#vite）

vite官网（https://vitejs.cn）

```
// 创建工程
npm init vite-app <project-name>

// 进入工程目录
cd <project-name>

// 安装依赖
npm install


// 运行
npm run dev
```

# 二、常用 Composition API

> 1. 拉开序幕的setup

1. 理解：Vue3.0 中一个新的配置项，值是一个函数
2. setup 是所有 Composition API “表演的舞台”
3. 组件中所用到的：数据、方法等等，均要配置在 setup 中
4. setup 函数的返回值有两种

    * 若返回一个对象，则对象中的属性、方法、在模板中均可直接使用

    * 若返回一个渲染函数，则可以自定义渲染内容

> ref 函数

1. 作用：定义一个响应式数据
2. 语法：const xxx = ref(initValue)

    * 创建一个包含响应式数据的引用对象（reference对象）
    * JS 中操作数据：`xxx.value`
    * 模板中读取数据：不需要 .value 直接 `<div>{{xxx}}</div>`

3. 备注：

    * 接收的数据可以是：基本类型，也可以是对象类型
    * 基本数据类型的数据：响应式依然是靠 `Object.defineProperty()`的`get`与`set`完成的
    * 对象类型的数据：内部 "求助" 了 vue3.0 的一个新函数 `reactive` 函数


> reactive 函数

1. 作用：定义一个对象类型的响应式数据
2. 语法：`const 代理对象 = reactive(被代理的对象)` 接收一个对象或者数组，返回一个代理对象（proxy对象）
3. reactive 定义的响应式数据是“深层次的”
4. 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作

> 响应式

1. vue2.x 响应式

* 实现原理

    * 对象类型：通过 `object.defineProperty()` 对属性的读取、修改进行拦截（数据劫持）
    * 数组类型：通过重写更新数组的一系列方法来实现拦截。

    ```
    Object.defineProperty(data, 'count', {
        get () {},
        set () {}
    })
    ```
* 存在问题

    * 新增属性、删除属性，界面不会更新
    * 直接通过下标修改数组，界面不会自动更新

2. Vue3.0 的响应式

* 实现原理

    * 通过 Proxy (代理)：拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等。

    * 通过 Reflect (反射)：对原对象的属性进行操作。

    ```
    new Proxy(data, {
        // 拦截器读取属性值
        get (target, prop) {
            return Reflect.get(target, prop)
        },
        // 拦截设置属性值或者添加新属性
        set (target, prop, value) {
            return Reflect.set(target prop, value)
        },
        // 拦截器删除属性
        deleteProperty(target, prop) {
            return Reflect.deleteProperty(target, prop)
        }
    })
    ```
    
> reactive 对比 ref

* 从定义数据角度对比 

    * ref用来定义：基本类型数据
    * reactive用来定义：对象或者数据 类型数据
    * 备注：ref 也可以定义对象或者数组 类型数据，他内部会自动通过 reactive 转为 代理对象

* 从原理角度对比

    * ref 通过 `Object.defineProperty()` 的 `get` 与 `set` 来实现响应式（数据劫持）
    * reactive 通过使用 `Proxy` 来实现响应式（数据劫持），并通过 `Reflect` 来操作源对象内部的数据

* 从使用角度对比

    * ref定义的数据：操作数据需要 `.value`,读取数据时模板中直接读取不需要`.value`
    * reactive定义的数据：操作数据与读取数据均不需要`.value`

> setup 的两个注意点

* setup 执行的时机

    * 在 beforeCreate 之前执行一次，this 是 undefined

* setup 的参数

    * props: 值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性
    * context: 上下文对象

        * attrs: 值对为对象。包含：组件外部传递过来，但没有在 props配置中声明的属性。相当于 `this.$attrs`
        * slots: 收到的插槽内容，相当于 `this.$slots`
        * emit: 分发自定义事件的函数，相当于 `this.$emit`

> 计算属性与监视

* computed 函数

    * 与 Vue2.x 中 computed 配置功能一致
    * 写法

    ```
    import {computed} from 'vue

    setup() {
        // 计算属性 -- 简写
        let fullName = compted(() => {
            return person.firstName + '-' + person.lastName
        })

        // 计算属性 -- 完整
        let fullName = compputed({
            get() {
                return person.firstName + '-' + person.lastName
            },
            set(value) {
                const nameArr = value.split('-')
                person.firstName = nameArr[0]
                person.firstName = nameArr[1]
            }
        })
    }
    ```

* watch 函数

    * 与 vue2.x 中 watch 配置功能一致
    * 两个小坑

        * 监视 reactive 定义的响应式数据时：oldValue 无法正确获取，强制开启了深度监视（deep配置失效）
        * 监视 reactive 定义的响应式数据中某个属性时：deep配置有效

        ```
        // 情况一：监视ref所定义的响应式数据
        watch(sum, (newValue, oldValue) => {
            console.log('sum值变化了', newValue, oldValue);
        })

        // 情况二：监视ref所定义的多个响应式数据
        watch([sum, msg], (newValue, oldValue) => {
            console.log('sum或者msg变化了', newValue, oldValue);
        })

        /**
         * 情况三：监视reactive所定义的响应式数据,
         * 1.注意：此处无法正确的获取oldValue
         * 2.注意：强制开启了深度监视（deep配置无效）
         *  */ 
        watch(person, (newValue, oldValue) => {
            console.log('person变化了', newValue, oldValue);
        }, {deep: false})

        // 情况四：监视reactive所定义的一个响应式数据中的某个属性
        watch(() => person.age, (newValue, oldValue) => {
            console.log('person变化了', newValue, oldValue);
        })

        // 情况五：监视reactive所定义的一个响应式数据中的某些属性
        watch([() => person.age, () => person.name], (newValue, oldValue) => {
            console.log('person变化了', newValue, oldValue);
        })

        // 特殊情况:监视reactive所定义的对象中的某个属性，所以deep配置有效
        // watch(() => person.job, (newValue, oldValue) => {
        //     console.log('person变化了', newValue, oldValue);
        // },{deep: true})
        ```

* watchEffect函数

    * watch套路是：既要指明监视的属性，也要指明监视的回调
    * watchEffect套路深：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性
    * wathEffect 与 computed 相似：

        * 但computed注重的是计算出来的值（回调函数的返回值），所以必须写返回值
        * 而 watchEffect 注重的是过程（回调函数的函数体），所以不用写返回值

    ```
    // watchEffect所指定的回调函数只要发生变化，则直接重新执行回调
    watchEffect(() => {
        const x1 = sum.value
        const x2 = person.age
        console.log('watchEffect配置的回调执行了')
    })
    ```
> 声明周期



