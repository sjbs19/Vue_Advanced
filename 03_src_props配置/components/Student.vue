<template>
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>学生姓名:{{name}}</h2>
    <h2>学生性别:{{sex}}</h2>
    <h2>学生年龄:{{myAge+1}}</h2>
    <button @click="updateAge">尝试修改接收到的年龄</button>
  </div>
</template>

<script>
  export default {
    name:'Student',
    data(){
      return {
        msg:'你好啊',
        myAge:this.age
      }
    },
    methods: {
      updateAge(){
        this.myAge++
        console.log(this.myAge);
      }
    },
    props:['name','sex','age']//简单声明接收
    //接收的同时对数据进行类型限制
    // props:{
    //   name:String,
    //   sex:String,
    //   age:Number
    // }

    //接收的同时对数据进行类型限制+默认值的指定+必要性的的限制
    // props:{
    //   name:{
    //     type:String,  //name的类型是字符串
    //     required:true, //name是必要的
    //   },
    //   age:{
    //     type:Number,
    //     default:99  //默认值
    //   },
    //   sex:{
    //     type:String,
    //     required:true
    //   }
    // }
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