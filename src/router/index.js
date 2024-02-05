import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Hello from '/src/page/holle'  //引入根目录下的Hello.vue组件
import test from '/src/page/test'  //引入根目录下的Hello.vue组件
import elm from '/src/page/elm'  //引入根目录下的Hello.vue组件
 
Vue.use(Router)  //Vue全局使用Router
 
export default new Router({
  routes: [              //配置路由，这里是个数组
    {                    //每一个链接都是一个对象
      path: '/',         //链接路径
      name: 'Hello',     //路由名称，
      component: Hello   //对应的组件模板
    },
    {                    //每一个链接都是一个对象
      path: '/test',         //链接路径
      name: 'test',     //路由名称，
      component: test
    },
    {                    //每一个链接都是一个对象
      path: '/elm',         //链接路径
      name: 'elm',     //路由名称，
      component: elm
    },
  ]
})