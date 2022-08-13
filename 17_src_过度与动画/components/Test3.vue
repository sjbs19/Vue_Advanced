<template>
  <div>
    <button @click="show">显示/隐藏</button>
    <transition-group appear 
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">atguigu</h1>
    </transition-group>
  </div>
</template>

<script>
  //引入外部css库
  import 'animate.css'
  export default {
    name:'Test3',
    data() {
      return {
        isShow:true
      }
    },
    methods:{
      show(){
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style>
  h1 {
    background-color: orange;
  }
  
</style>