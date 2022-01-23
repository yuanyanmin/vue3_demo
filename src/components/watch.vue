<template>
<h2>当前求和为 {{sum}}</h2>
<button @click="sum++">点我加一</button>

<h2>当前信息为 {{msg}}</h2>
<button @click="msg+='!'">点我加!</button>

<h2>{{person.name}}</h2>
<h2>{{person.age}}</h2>
<h2>{{person.job.j1.salary}}K</h2>

<button @click="person.name+='~'">修改姓名</button>
<button @click="person.age++">增长年龄</button>
<button @click="person.job.j1.salary++">增长薪资</button>



</template>

<script>
import { ref, watch, reactive, watchEffect } from "vue";
export default {
    name: 'watch',
    // watch: {
    //     // sum(newval, oldval) {
    //     //     console.log(newval, oldval);
    //     // }

    //     // sum: {
    //     //     immediate: true,
    //     //     deep: true,
    //     //     handler(newValue, oldValue) {
    //     //         console.log('sum值变化了', newValue, oldValue);
    //     //     }
    //     // }
    // },
    setup() {
        // let sum = ref(0)
        // let msg = ref('您好')
        // let person = ref({
        //     name: "张三",
        //     age: 18,
        //     job: {
        //         j1: {
        //             salary: 20
        //         }
        //     }
        // })

        // 情况一：监视ref所定义的响应式数据
        // watch(sum, (newValue, oldValue) => {
        //     console.log('sum值变化了', newValue, oldValue);
        // })

        // 情况二：监视ref所定义的多个响应式数据
        // watch(sum, (newValue, oldValue) => {
        //     console.log('sum值变化了', newValue, oldValue);
        // })
        // watch(msg, (newValue, oldValue) => {
        //     console.log('msg值变化了', newValue, oldValue);
        // })

        // watch([sum, msg], (newValue, oldValue) => {
        //     console.log('sum或者msg变化了', newValue, oldValue);
        // })

        // watch([sum, msg], (newValue, oldValue) => {
        //     console.log('sum或者msg变化了', newValue, oldValue);
        // },{immediate: true, deep: true})

        // watch(person.value, (newValue, oldValue) => {
        //     console.log('person变化了', newValue, oldValue);
        // })

        // watch(person, (newValue, oldValue) => {
        //     console.log('person变化了', newValue, oldValue);
        // }, {deep: true})


        // let person = reactive({
        //     name: "张三",
        //     age: 18,
        //     job: {
        //         j1: {
        //             salary: 20
        //         }
        //     }
        // })

        /**
         * 情况三：监视reactive所定义的响应式数据,
         * 1.注意：此处无法正确的获取oldValue
         * 2.注意：强制开启了深度监视（deep配置无效）
         *  */ 
        // watch(person, (newValue, oldValue) => {
        //     console.log('person变化了', newValue, oldValue);
        // }, {deep: false})

        // 情况四：监视reactive所定义的一个响应式数据中的某个属性
        // watch(() => person.age, (newValue, oldValue) => {
        //     console.log('person变化了', newValue, oldValue);
        // })

        // 情况五：监视reactive所定义的一个响应式数据中的某些属性
        // watch([() => person.age, () => person.name], (newValue, oldValue) => {
        //     console.log('person变化了', newValue, oldValue);
        // })

        // 特殊情况:监视reactive所定义的对象中的某个属性，所以deep配置有效
        // watch(() => person.job, (newValue, oldValue) => {
        //     console.log('person变化了', newValue, oldValue);
        // },{deep: true})

        let sum = ref(0)
        let msg = ref('您好啊')
        let person = reactive({
            name: '战三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })

        // 监视
        watchEffect(() => {
            let x1 = sum.value
            let x2 = msg.value
            let x3 = person.job.j1.salary
            console.log('执行了');
        })


        return {
            sum,
            msg,
            person,
        }

        

    }
}
</script>