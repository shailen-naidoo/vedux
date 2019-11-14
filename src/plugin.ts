import { Store } from './store'

const Vedux = {
	install(vue: any, { store }: { store: Store }) {
  	vue.prototype.$store = store
  }
}

export { Vedux }