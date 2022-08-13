<template>
  <div class="demo">
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
    <button @click="sendSchooolName">点我传递学校名字</button>
  </div>
</template>

<script>
  export default {
    name:'School',
    props:['getSchooolName'],
    data(){
      return {
        name:'lsdjka',
        address:'南宁'
      }
    },
    methods:{
      sendSchooolName(){
        this.getSchooolName(this.name)
      }
    }
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