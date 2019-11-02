import { VueConstructor } from "vue"

const Vedux = {
	install(vue: any) {
  	vue.mixin({
    	beforeCreate() {
      	const { store: rootStore } = this.$options

        if (rootStore) {
          vue.prototype.$store = rootStore
        }

        const isDataFn = typeof this.$options.data === 'function'

        if (isDataFn) {
          const data = this.$options.data.apply(this)

          this.$options.data = {
            ...data,
            store: vue.prototype.$store,
          }
        } else {
          this.$options.data = {
            ...this.$options.data,
            store: vue.prototype.$store,
          }
        }
      }
    })
  }
}

if (window) {
  // @ts-ignore
  window.VeduxPlugin = Vedux
}

export { Vedux }