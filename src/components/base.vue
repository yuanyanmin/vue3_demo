<template>
    <h1>{{person.name}}</h1>
    <h1>{{person.age}}</h1>
    <h1>{{person.job.type}}</h1>
    <h1>{{person.job.salary}}</h1>
    <button @click="changeInfo">按钮</button>
</template>

<script>
import { ref, reactive } from "vue";

export default {
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
            person.age = 25
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
            person,
            changeInfo
        }
    }
}
</script>