//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入vue-resource
import vueResource from 'vue-resource'
//引入store
import store from './store/index.js'
//关闭vue生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)
//创建vm
new Vue({
  el:'#app',
  render: h => h (App),
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  }
})