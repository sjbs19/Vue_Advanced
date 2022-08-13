<template>
  <div class="demo">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <button @click="sendStudentName">点我向School组件发送学生姓名</button>
  </div>
</template>

<script>
  //引入消息与订阅js库
  import pubsub from 'pubsub-js'
  export default {
    name:'Student',
    data(){
      return {
        name:'张三',
        sex:'男'
      }
    },
    methods:{
      sendStudentName(){
        pubsub.publish('hello',666)
      }
    }
  }
</script>

<style scoped>
  .demo{
    background-color: rgb(172, 21, 159);
    padding: 5px;
    margin-top: 30px;
  }
</style>