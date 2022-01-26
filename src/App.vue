<template>

  <toRefTest/>
  <p>-------------------------</p>

  <button @click="isshow = !isshow">点击隐藏or显示</button>
  <HookTest v-if="isshow"/>
  <p>-------------------------</p>
  <WatchTest/>

  <ComputedTest/>

  <HelloWorld @hello="sayHelloMsg" msg="您好啊" school="尚硅谷">
    <template v-slot:asd>
      <span>尚硅谷aaa</span>
    </template>
  </HelloWorld>

  <Base/>
  


</template>

<script>
import { h, ref } from 'vue';
import Base from './components/base.vue'
import HelloWorld from './components/HelloWorld.vue'
import ComputedTest from './components/computed.vue'
import WatchTest from './components/watch.vue'
import HookTest from './components/HookTest.vue'
import toRefTest from './components/toRefTest.vue'

export default {
  name: 'App',
  components: { HelloWorld, Base, ComputedTest, WatchTest, HookTest, toRefTest },
  
  setup() {
  
    let isshow = ref(true)

    function sayHelloMsg (value) {
      console.log('hello ' + value);
    }

    return {
      isshow,
      sayHelloMsg
    }

    // return () => h('h1', '您好啊')
  } 
}
</script>

<style>

</style>
