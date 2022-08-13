<template>
  <div class="demo">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
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
  }
</script>

<style scoped>
  .demo{
    background-color: rgb(245, 187, 240);
    width: 200px;
    height: 300px;
    border: 1px solid red;
  }
</style>