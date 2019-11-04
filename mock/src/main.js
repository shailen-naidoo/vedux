import Vue from 'vue'
import { Vedux } from 'veduxjs'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
