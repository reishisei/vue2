import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Index from '/src/page/index'  //引入根目录下的Hello.vue组件
import login from '/src/page/login'  //引入根目录下的Hello.vue组件
import Detail from '/src/page/detail'  //引入根目录下的Hello.vue组件
import List from '/src/page/list'  //引入根目录下的Hello.vue组件
import elm from '/src/page/elm'  //引入根目录下的Hello.vue组件
 
Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Index',     //路由名称，
      component: Index,   //对应的组件模板
      children: [
        { name: 'list', path: '/list', component: List },
        { name: 'login', path: '/login', component: login },
        { name: 'detail', path: '/Detail', component: Detail },
      ]
    },
    {                    //每一个链接都是一个对象
      path: '/login',         //链接路径
      name: 'login',     //路由名称，
      component: login
    },
    {                    //每一个链接都是一个对象
      path: '/elm',         //链接路径
      name: 'elm',     //路由名称，
      component: elm
    },
  ]
})