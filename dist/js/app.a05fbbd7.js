(function(){"use strict";var t={8721:function(t,e,i){var n=i(6369),r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row"},[e("Banner")],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-2 col-xs-offset-2"},[e("div",{staticClass:"list-group"},[e("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/about"}},[t._v("About")]),e("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/home"}},[t._v("Home")])],1)]),e("div",{staticClass:"col-xs-6"},[e("div",{staticClass:"panel"},[e("div",{staticClass:"panel-body"},[e("router-view")],1)])])])])},a=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-xs-offset-2 col-xs-8"},[e("div",{staticClass:"page-header"},[e("h2",[t._v("Vue Router Demo")]),e("button",{on:{click:t.back}},[t._v("后退")]),e("button",{on:{click:t.forward}},[t._v("前进")]),e("button",{on:{click:t.test}},[t._v("测试一下go")])])])},s=[],l={name:"Banner",methods:{back(){this.$router.back()},forward(){this.$router.forward()},test(){this.$router.go(-2)}}},u=l,c=i(1001),v=(0,c.Z)(u,o,s,!1,null,null,null),p=v.exports,f={name:"App",components:{Banner:p}},h=f,m=(0,c.Z)(h,r,a,!1,null,null,null),d=m.exports,_=i(2631),g=function(){var t=this,e=t._self._c;return e("h2",[t._v("我是About的内容")])},b=[],w={name:"About",beforeRouteEnter(t,e,i){t.meta.isAuth?"atguigu"===localStorage.getItem("school")?i():alert("学校名不对，没有权限访问"):i()},beforeRouteLeave(t,e,i){i()}},y=w,x=(0,c.Z)(y,g,b,!1,null,null,null),k=x.exports,C=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v("Home组件内容")]),e("div",[e("ul",{staticClass:"nav nav-tabs"},[e("li",[e("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/home/news"}},[t._v("News")])],1),e("li",[e("router-link",{staticClass:"list-group-item",attrs:{replace:"","active-class":"active",to:"/home/message"}},[t._v("Message")])],1)]),e("keep-alive",{attrs:{include:"News"}},[e("router-view")],1)],1)])},Z=[],O={name:"Home"},A=O,q=(0,c.Z)(A,C,Z,!1,null,null,null),j=q.exports,S=function(){var t=this,e=t._self._c;return e("ul",[e("li",{style:{opacity:t.opacity}},[t._v("欢迎学习Vue")]),t._m(0),t._m(1),t._m(2)])},$=[function(){var t=this,e=t._self._c;return e("li",[t._v("news001 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news002 "),e("input",{attrs:{type:"text"}})])},function(){var t=this,e=t._self._c;return e("li",[t._v("news003 "),e("input",{attrs:{type:"text"}})])}],P={name:"News",data(){return{opacity:1}},activated(){this.timer=setInterval((()=>{this.opacity=this.opacity-.01,this.opacity<=0&&(this.opacity=1)}),16)},deactivated(){clearInterval(this.timer)}},E=P,I=(0,c.Z)(E,S,$,!1,null,null,null),B=I.exports,H=function(){var t=this,e=t._self._c;return e("div",[e("ul",t._l(t.messageList,(function(i){return e("li",{key:i.id},[e("router-link",{attrs:{to:{name:"qingqiu",params:{id:i.id,title:i.title}}}},[t._v(" "+t._s(i.title)+" ")]),t._v("   "),e("button",{on:{click:function(e){return t.pushShow(i)}}},[t._v("push查看")]),e("button",{on:{click:function(e){return t.replaceShow(i)}}},[t._v("replace查看")])],1)})),0),e("hr"),e("router-view")],1)},L=[],M={name:"Message",data(){return{messageList:[{id:"001",title:"消息001"},{id:"002",title:"消息002"},{id:"003",title:"消息003"}]}},methods:{pushShow(t){this.$router.push({name:"qingqiu",params:{id:t.id,title:t.title}})},replaceShow(t){this.$router.replace({name:"qingqiu",params:{id:t.id,title:t.title}})}}},N=M,R=(0,c.Z)(N,H,L,!1,null,null,null),T=R.exports,D=function(){var t=this,e=t._self._c;return e("ul",[e("li",[t._v("消息编号:"+t._s(t.id))]),e("li",[t._v("消息标题:"+t._s(t.title))])])},V=[],z={name:"Detail",props:["id","title"],mounted(){console.log(this.$route)}},F=z,G=(0,c.Z)(F,D,V,!1,null,null,null),J=G.exports;const K=new _.Z({mode:"history",routes:[{name:"guanyu",path:"/about",component:k,meta:{isAuth:!0,title:"关于"}},{name:"zhuye",path:"/home",component:j,meta:{title:"主页"},children:[{name:"xinwen",path:"news",component:B,meta:{isAuth:!0,title:"新闻"},beforeEnter:(t,e,i)=>{t.meta.isAuth?"atguigu"===localStorage.getItem("school")?i():alert("学校名不对，没有权限访问"):i()}},{name:"xiaoxi",path:"message",component:T,meta:{isAuth:!0,title:"消息"},children:[{name:"qingqiu",path:"detail/:id/:title",component:J,meta:{isAuth:!0,title:"详情"},props(t){return{id:t.params.id,title:t.params.title}}}]}]}]});K.afterEach(((t,e)=>{document.title=t.meta.title||"系统"}));var Q=K;n.ZP.config.productionTip=!1,n.ZP.use(_.Z),new n.ZP({el:"#app",render:t=>t(d),router:Q})}},e={};function i(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,i),a.exports}i.m=t,function(){var t=[];i.O=function(e,n,r,a){if(!n){var o=1/0;for(c=0;c<t.length;c++){n=t[c][0],r=t[c][1],a=t[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||o>=a)&&Object.keys(i.O).every((function(t){return i.O[t](n[l])}))?n.splice(l--,1):(s=!1,a<o&&(o=a));if(s){t.splice(c--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[n,r,a]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,a,o=n[0],s=n[1],l=n[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(l)var c=l(i)}for(e&&e(n);u<o.length;u++)a=o[u],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(c)},n=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(8721)}));n=i.O(n)})();
//# sourceMappingURL=app.a05fbbd7.js.map