<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="inputValue" @keyup.enter="add"/>
  </div>
</template>

<script>
  //引入nanoid
  import {nanoid} from 'nanoid'
  export default {
    name: "MyHeader",
    // props:['addTodo','todos'],
    data() {
      return {
        inputValue:''
      }
    },
    methods:{
      add(){
        //校验数据
        if(!this.inputValue.trim()) return alert("输入的任务名称不能为空")
        // this.todos.forEach((todo)=>{
        //   if(this.inputValue.trim() === todo.title) 
        //   alert("输入的任务已经存在，请重新输入!")
        // })
        
        //将用户的输入包装成一个todo对象
        const todoObj = {id:nanoid(),title:this.inputValue,done:false}
        //通知App组件添加一个todo对象
        // this.addTodo(todoObj)
        this.$emit('addTodo',todoObj)
        //回车后清空输入框
        this.inputValue = ''
      }
    }
  };
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>