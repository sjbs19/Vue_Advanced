<template>
  <div>
    <button @click="show">显示/隐藏</button>
    <transition appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
  export default {
    name:'Test',
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
  @keyframes test {
    from{
      transform: translateX(-100%);
    }
    to{
      transform: translateX(0px);
    }
  }
  .v-enter-active{
    animation: test 0.5s linear;
  }
  .v-leave-active{
    animation: test 0.5s linear reverse;
  }
</style>