<template>
  <div class="demo">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
  export default {
    name:'Student',
    data(){
      return {
        msg:'你好啊',
        name:'张三',
        sex:'男'
      }
    },
  }
</script>

<style>
  .demo{
    background-color: rgb(187, 245, 225);
    width: 200px;
    height: 300px;
    border: 1px solid red;
  }
</style>