// 该文件专门用于创建整个应用的路由器

//引入vue-router
import vueRouter from 'vue-router'
//引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';


//创建并暴露一个路由器
const router = new vueRouter({
  routes:[
    {
      name:'guanyu',
      path:'/about',
      component:About,
      meta:{title:'关于'}
    },
    {
      name:'zhuye',
      path:'/home',
      component:Home,
      meta:{title:'主页'},
      children:[
        {
          name:'xinwen',
          path:'news',
          component:News,
          meta:{isAuth:true,title:'新闻'},
          //独享路由守卫
          /* beforeEnter:(to,from,next)=>{
            if(to.meta.isAuth){//判断是否需要鉴权
              if(localStorage.getItem('school') === 'atguigu'){
                next()
              }else{
                alert('学校名不对，没有权限访问')
              }
            }else{
              next()
            }
          } */
        },
        {
          name:'xiaoxi',
          path:'message',
          component:Message,
          meta:{isAuth:true,title:'消息'},
          children:[
            {
              name:'qingqiu',
              path:'detail/:id/:title',
              component:Detail,
              meta:{isAuth:true,title:'详情'},
              //props的第一种写法，值为对象,该对象中的所有key-value都会以props的形式传给Detail组件。
              /* props:{
                a:1,
                b:'hello'
              } */
              // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
              // props:true

              // props的第三种写法，值为函数,该函数返回的对象中每一组key-value都会通过props传给Detail组件
              props($route){
                return {
                  id:$route.params.id,title:$route.params.title
                }
              }
            }
          ]
        }
      ]
    }
  ]
})
//全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用
/* router.beforeEach((to,from,next)=>{
  if(to.meta.isAuth){//判断是否需要鉴权
    if(localStorage.getItem('school') === 'atguigu'){
      next()
    }else{
      alert('学校名不对，没有权限访问')
    }
  }else{
    next()
  }
}) */

//全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用
/* router.afterEach((to,from)=>{
  // console.log(to,from);
  document.title = to.meta.title || '系统'
}) */


export default router