// import Vue from 'vue'

import { Store } from 'veduxjs'

export const store = new Store({
  text: null,
})

// // export const store = Vue.observable({
// //   text: null
// // })

// class Store {
//   constructor(state = {}) {
//     this.root = Vue.observable({ state })
//   }

//   commit(handler) {
//     const newState = handler({ ...this.root.state })
    
//     const mergedState = {
//       ...this.root.state,
//       ...newState
//     }

//     this.root.state = mergedState
//   }
// }

// export const store = new Store({
//   text: null
// })
