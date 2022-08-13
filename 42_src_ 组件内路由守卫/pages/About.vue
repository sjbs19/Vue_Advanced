<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  /* mounted(){
      console.log('About组件挂载完毕了');
    },
    beforeDestroy(){
      console.log('About组件即将被销毁了');
    } */

  //通过路由规则,进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      //判断是否需要鉴权
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名不对，没有权限访问");
      }
    } else {
      next();
    }
  },
  //通过路由规则,离和该组件时被调用
  beforeRouteLeave(to, from, next) {
    next()
  },
};
</script>
<style>
</style>