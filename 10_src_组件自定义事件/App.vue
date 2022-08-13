<template>
  <div class="app">
    <h1>{{msg}},{{studentName}}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
    <School :getSchooolName="getSchooolName"></School><hr>
    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第一种写法，使用v-on或@) -->
    <!-- <Student @atguigu="getStudentName" ></Student> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第二种写法，使用ref) -->
    <Student ref="student" @click.native="show"></Student>

  </div>
</template>

<script>
  //引入Student组件 
  import Student from './components/Student.vue'
  //引入School组件
  import School from './components/School.vue'

  export default {
    name:'App',
    data() {
      return {
        msg:'你好啊',
        studentName:''
      }
    },
    components:{
      Student,
      School
    },
    mounted(){
      this.$refs.student.$on('atguigu',this.getStudentName)
      //只触发一次(一次性)
      // this.$refs.student.$once('atguigu',this.getStudentName)
    },
    methods:{
      getSchooolName(name){
        console.log('App收到了school传递过来的数据,',name);
      },
      getStudentName(name,...ary){
        console.log('App收到了Student传递过来的数据',name,ary);
        this.studentName = name
      },
      m1(){
        // console.log('demo被调用了');
      },
      show(){
        alert(123)
      }
    }
  }
</script>
<style>
  .app{
    color: antiquewhite;
    background-color:aqua;
  }
</style>