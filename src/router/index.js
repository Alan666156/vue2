import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Ueditor from '@/components/Ueditor'
import Index from '@/page/index'
import Content from '@/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // }
    {
      path: '/',
      component: Index
    },
    {
      //:id 动态路由匹配
      path: '/content/:id',
      component: Content
    }
  ]
})
