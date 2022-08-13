// 该文件专门用于创建整个应用的路由器

//引入vue-router
import vueRouter from 'vue-router'
//引入组件
import About from "../components/About";
import Home from "../components/Home";

//创建并暴露一个路由器
export default new vueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home
    }
  ]
})