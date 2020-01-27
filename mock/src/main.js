import Vue from 'vue'
import { ViewModelPlugin } from '@lumkani/view-model-api'
import { Vedux } from 'veduxjs'
import App from './App.vue'
import { store } from './store'

Vue.config.productionTip = false

Vue.use(ViewModelPlugin)
Vue.use(Vedux, { store })

new Vue({
  render: h => h(App),
}).$mount('#app')