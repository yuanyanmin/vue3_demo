<template>
  <h1>{{person.name}}</h1>
  <h1>{{person.age}}</h1>
  <h1>{{person.job.type}}</h1>
  <h1>{{person.job.salary}}</h1>

  <button @click="changeInfo">按钮</button>


</template>

<script>
import { h, reactive, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  setup() {
    // let name = ref("张三")
    // let age = ref(13)
    // let job = ref({
    //   type: '前端',
    //   salary: 20
    // })
    // console.log(job);
    // console.log(job.value);

    // let job = reactive({
    //   type: '前端',
    //   salary: 20
    // })
    // console.log(job);
    function changeInfo() {
      // name.value = '李四'
      // age.value = 20

      // job.type = '后端'
      person.name = '李四'
      person.age = 20
      person.job.type = '后端'

    }

    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: '前端',
        salary: 20
      }
    })



    return {
      // name,
      // age,
      // job,
      changeInfo,
      person
    }

    
    

    // return () => h('h1', '您好啊')
  } 
}
</script>

<style>

</style>
