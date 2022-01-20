// 引用的不再是vue的构造函数了，引入的是一个名为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

// 创建应用实例对象
const app = createApp(App)
// 挂载
app.mount('#app')

// v2
// const vm = new Vue({
//     render: h => h(App)
// })

// vm.$mount('#app')
