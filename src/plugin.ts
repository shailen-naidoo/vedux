import { VueConstructor } from "vue"

const Vedux = {
  install(vue: VueConstructor) {
    vue.mixin({
      beforeCreate() {
        // @ts-ignore
        const { store } = this.$options
        
        this.$options.data = {
          store
        }
      }
    })
  }
}

export { Vedux }