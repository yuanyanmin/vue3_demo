<template>
  <br>
  <input type="text" v-model="personComputed.firstName">
  <br>
  <input type="text" v-model="personComputed.lastName">
  <br>
  <p>{{personComputed.fullName}}</p>
  <input type="text" v-model="personComputed.fullName">

  <br>
</template>

<script>
import {reactive, computed} from 'vue'
export default {
    // computed: {
    //   fullName() {
    //     return this.personComputed.firstName + this.personComputed.lastName
    //   }
    // },
    setup() {
        let personComputed = reactive({
            firstName: '张',
            lastName: "三"
        })

        // personComputed.fullName = computed(() => {
        //   return personComputed.firstName + personComputed.lastName
        // })

        personComputed.fullName = computed({
            get() {
                return personComputed.firstName + '-' + personComputed.lastName
            },
            set(value) {
                const nameArr = value.split('-')
                personComputed.firstName = nameArr[0]
                personComputed.lastName = nameArr[1]

            }
        })
        return {
            personComputed
        }
    }
}
</script>