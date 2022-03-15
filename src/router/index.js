import Vue from 'vue'
import VueRouter from 'vue-router'
import goTo from 'vuetify/es5/services/goto'
import store from '@/store'
import authentication from '@/modules/authentication/router'
import categories from '@/modules/categories/router'
import catalogs from '@/modules/catalogs/router'

Vue.use(VueRouter)

const routes = [
  authentication,
  categories,
  catalogs,
  {
    path: '*',
    redirect: {name: 'Categories'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0
    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }
    return goTo(scrollTo)
  },
  routes
})

router.beforeEach((to, from, next) => {
  console.log('to.matched.some(record => record.meta.requiredAuth)', to)
  if (store.state.authenticationModule.emprendedora) {
    if(to.name === 'Login'){
      next({ name: 'Categories' })
    } else {
      next()
    }
  } else {
    if(to.name === 'Login'){
      next()
    } else {
      next({ name: 'Login' })
    }
  }
})

export default router
