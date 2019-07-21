import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 使用插件
Vue.use(Vuex)

// 暴露 store 的实例对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
