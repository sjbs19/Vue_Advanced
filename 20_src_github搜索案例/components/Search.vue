<template>
  <section class="jumbotron" style="text-align: center;">
    <h3 class="jumbotron-heading">搜索 Github 用户</h3>
    <div>
      <input
        type="text"
        placeholder="输入你要搜索的用户名"
        v-model="keyWord"
      />&nbsp;
      <button @click="searchUsers">搜索</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "Search",
  data() {
    return {
      keyWord:''
    }
  },
  methods:{
    searchUsers(){
      //请求前更新List的数据
      this.$bus.$emit('updateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
      //发送请求
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        response =>{
          console.log('请求成功了');
          //请求成功后更新List的数据
          this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
        },
        error => {
          console.log('请求失败了');
          //请求失败后更新List的数据
          this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
        }
      )
    }
  }
};
</script>

<style>
</style>