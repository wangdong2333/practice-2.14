import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:111,
  },
  mutations: {
    add(state,num){
      state.count+=num;
    },
  },
  actions: {

  }
})
