import Vue from 'vue'
// import { Vedux } from 'veduxjs'
import App from './App.vue'
import { store } from './store'
// import { store } from './vuex-store'

Vue.config.productionTip = false

// Vue.use(Vedux)
// Vue.use(Vuex)

// Vue.prototype.$store = store

Vue.use({
  install(vue) {
    vue.prototype.$store = store
  }
})

new Vue({
  render: h => h(App),
  // store,
}).$mount('#app')