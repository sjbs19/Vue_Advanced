<template>
  <div class="demo">
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>当前的n值为{{n}}</h2>
    <button @click="add">点我n++</button>
    <button @click="sendStudentName">点我传递学校名字</button>
    <button @click="unbind">解绑事件</button>
    <button @click="death">销毁student组件的实例</button>
  </div>
</template>

<script>
  export default {
    name:'Student',
    data(){
      return {
        name:'张三',
        sex:'男',
        n:0
      }
    },
    methods:{
      add(){
        console.log('add被调用了');
        this.n++
      },
      sendStudentName(){
        //触发Student组件实例身上的atguigu事件
        this.$emit('atguigu',this.name,666,888,999)
        this.$emit('demo')
      },
      unbind(){
        // this.$off('atguigu')  //解绑一个自定义事件
        // this.$off(['atguigu','demo'])  //解绑多个自定义事件
        this.$off()  //解绑所有的自定义事件
      },
      death(){
        //销毁了当前组件的实例，销毁后所有的Student组件实例的自定义事件全部不奏效了
        this.$destroy()
      }
    }
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