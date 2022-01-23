<template>

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
import { h } from 'vue';
import Base from './components/base.vue'
import HelloWorld from './components/HelloWorld.vue'
import ComputedTest from './components/computed.vue'
import WatchTest from './components/watch.vue'

export default {
  name: 'App',
  components: { HelloWorld, Base, ComputedTest, WatchTest },
  
  setup() {
  
    function sayHelloMsg (value) {
      console.log('hello ' + value);
    }

    return {
      sayHelloMsg
    }

    // return () => h('h1', '您好啊')
  } 
}
</script>

<style>

</style>
