<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <h2>点击鼠标时的坐标{{point.x}} {{point.y}}</h2>


</template>

<script>
import {ref} from 'vue'
import usePoint from '../hooks/usePoint'

export default {
    setup() {
        let sum = ref(0)
        let point = usePoint()

        return {
            sum,
            point
        }
    }
}
</script>