//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入vue-router
import vueRouter from 'vue-router'
//引入路由器
import router from './router/index'
//关闭vue生产提示
Vue.config.productionTip = false

//使用vue-router插件
Vue.use(vueRouter)

//创建vm
const vm = new Vue({
  el:'#app',
  render: h => h (App),
  router:router
})
console.log(vm);