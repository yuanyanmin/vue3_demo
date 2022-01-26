<template>
<!-- <h2>{{person.name}}</h2> -->
<h2>{{name}}</h2>
<!-- <h2>{{salary}}</h2> -->
<h2>{{job.j1.salary}}</h2>


<!-- <button @click="salary++">涨薪</button> -->
<button @click="job.j1.salary++">涨薪</button>

<button @click="name += '!'">修改名字</button>


</template>

<script>
import { reactive, toRef, toRefs } from "vue"

export default {
    setup() {
        let person  = reactive({
            name: '张三',
            job: {
                j1: {
                    salary: '20'
                }
            }
        })

        // let name = toRef(person, 'name')

   

        return {
            ...toRefs(person)
            // person,
            // name,
            // salary: toRef(person.job.j1, 'salary')
        }
    }
}
</script>