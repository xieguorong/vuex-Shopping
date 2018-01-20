import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)
const state = {
  shoppingData: localStorage["shoppingData"] ? JSON.parse(localStorage["shoppingData"]) : [], //商品信息
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
