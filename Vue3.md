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