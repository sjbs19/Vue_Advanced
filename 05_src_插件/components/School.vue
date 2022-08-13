<template>
  <div class="demo">
    <h2>学校名称:{{name | mySlice}}</h2>
    <h2>学校地址:{{address}}</h2>
    <button @click="test">点我弹窗</button>
  </div>
</template>

<script>
  export default {
    name:'School',
    data(){
      return {
        name:'lsdjka',
        address:'南宁'
      }
    },
    methods: {
      test(){
        this.hello()
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