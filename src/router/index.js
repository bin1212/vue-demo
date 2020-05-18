import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import PageA from '@/pages/PageA'
import PageB from '@/pages/PageB'
import notFound from '@/pages/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '登录',
      hidden:true,
      component: Login
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      hidden:true,
      component: HelloWorld,
      meta:{code:0,requiresAuth:true},
    },
    {
      path: '/PageA',
      name: '页面A',
      component: PageA,
      meta:{code:1,requiresAuth:true},
      children:[
        {
          path: '/PageB',
          name: '页面A/页面B',
          component: PageB,
          meta:{code:10,requiresAuth:false}
        }
      ]
    },
    {
      path: '/PageB',
      name: '页面B',
      component: PageB,
      meta:{code:2,requiresAuth:true}
    },
    {
      path: '/404',
      name: '404',
      hidden:true,
      component: notFound,
    },
  ]
})
