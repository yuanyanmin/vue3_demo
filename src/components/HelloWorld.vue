<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>年龄：{{msg}}</h2>
  <h2>年龄：{{school}}</h2>

  <button @click="test">测试Hello事件</button>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['msg', 'school'],
  emits: ['hello'],
  setup(props, context) {
    console.log(props, context, context.slots);
    let person = {
      name: '小明',
      age: 12
    }
    function test () {
      context.emit('hello', 666)
    }

    return {
      person,
      test
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
