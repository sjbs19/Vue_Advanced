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
        name:'lsdjka',
        address:'南宁'
      }
    },
    methods:{
      getStudentName(data){
        console.log('收到了',data);
      }
    },
    mounted(){
      this.$bus.$on('hello',this.getStudentName)
    },
    beforeDestroy(){
      this.$bus.$off('hello')
    }
  }
</script>

<style>
  .demo{
    background-color: rgb(19, 77, 56);
    padding: 5px;
  }
</style>