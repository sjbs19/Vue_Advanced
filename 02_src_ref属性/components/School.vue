<template>
  <div class="demo">
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name:'School',
    data(){
      return {
        name:'lwx',
        address:'南宁'
      }
    }
  }
</script>

<style>
  .demo{
    background-color: rgb(5, 240, 161);
  }
</style>