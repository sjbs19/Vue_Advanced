//该文件用于创建Vuex中最核心的store
//引入Vue
import Vue from'vue'
//引入vuex
import Vuex from 'vuex'

import countOptions from './count.js'

import personOptions from './person.js'

//使用Vuex插件
Vue.use(Vuex)



//准备actions——用于响应组件中的动作
// const actions ={}
//准备mutations——用于操作数据（state）
// const mutations ={}
//准备state——用于存储数据
// const state ={}
//准备getters——用于将state中的数据进行加工
// const getters ={}

//创建store
const store = new Vuex.Store({
  modules:{
    countAbout:countOptions,
    personAbout:personOptions
  }
})

//导出store
export default store