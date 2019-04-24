import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import A from "./views/A.vue"
import text1 from "./views/text1.vue"
import text2 from "./views/text2.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/a',
      component:A,
      children:[
        {
          path:'/a/text1',
          component:text1
        },

        {
          path:'/a/text2',
          component:text2
        }
      ]
    }
  ]
})
