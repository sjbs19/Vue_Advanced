<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="show">点我输出元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import { ref } from 'vue'
  //引入School组件 
  import School from './components/School.vue'

  export default {
    name:'App',
    data() {
      return {
        msg:'欢迎学习Vue'
      }
    },
    methods:{
      show(){
        console.log(this.$refs.title);  //真实DOM元素
        console.log(this.$refs.btn);  //真实DOM元素
        console.log(this.$refs.sch);  //School组件的实例对象 (vc)
      }
    },
    components:{
      School
    }
  }
</script>

<style>

</style>