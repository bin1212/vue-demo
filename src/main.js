// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

const initPage = ['/PageA','/PageB']
Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log(to)
  if(!to.matched.length){
    next({
      path: '/404',
    })
  }else if(to.meta && to.meta.requiresAuth){
    const path = to.path
    if(initPage.find(item => item.includes(path))){
      next()
    }else{
      next({
        path: '/404',
      })
    }
  }else{
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
