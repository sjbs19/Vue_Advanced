<template>
  <div class="demo">
    <h2>学校名称:{{name}}</h2>
    <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
  //引入消息与订阅js库
  import pubsub from 'pubsub-js'
  export default {
    name:'School',
    data(){
      return {
        name:'lsdjka',
        address:'南宁'
      }
    },
    methods:{
      demo(msgName,data){
        console.log('回调执行了',msgName,data);
      }
    },
    mounted(){
      this.pubId = pubsub.subscribe('hello',this.demo)
    },
    beforeDestroy(){
      //取消消息订阅
      pubsub.unsubscribe(this.pubId)
    }
  }
</script>

<style>
  .demo{
    background-color: rgb(19, 77, 56);
    padding: 5px;
  }
</style>