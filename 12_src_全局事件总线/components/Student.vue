<template>
  <div class="demo">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <button @click="sendStudentName">点我向School组件发送学生姓名</button>
  </div>
</template>

<script>
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
        this.$bus.$emit('hello',this.name)
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