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
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{code:0,requiresAuth:true}
    },
    {
      path: '/PageA',
      name: 'PageA',
      component: PageA,
      meta:{code:1,requiresAuth:true}
    },
    {
      path: '/PageB',
      name: 'PageB',
      component: PageB,
      meta:{code:2,requiresAuth:true}
    },
    {
      path: '/404',
      name: '404',
      component: notFound,
    },
  ]
})
