import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'

Vue.use(Router)
/* eslint-disable */

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        abc:resolve => { return require([ '@/views/Home.vue' ], resolve) }
      }
    },
    {
      path: '/about',
      name: 'about',
      components:  {
        abc:resolve => { return require([ '@/views/About.vue' ], resolve) }
      }
    }
  ]
})
