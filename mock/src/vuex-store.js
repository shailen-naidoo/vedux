import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    UPDATE_COUNTER(state) {
      state.counter = state.counter + 1
    }
  }
})

export { store }