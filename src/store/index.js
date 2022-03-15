import Vue from 'vue'
import Vuex from 'vuex'
import persist from '@/plugins/vuex-persist'
import authenticationModule from '@/modules/authentication/store'
import categoriesModule from '@/modules/categories/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authenticationModule,
    categoriesModule
  },
  plugins: [persist.plugin]
})
