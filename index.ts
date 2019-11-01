import Vue, { VueConstructor } from 'vue'

interface State {
  [x: string]: any;
}

class Store {
  private state = {}
  constructor(state: State = {}) {
    this.state = state
  }

  getState(): State {
    return { ...this.state }
  }

  commit(handler: (state: State) => State): State {
    const newState = handler({ ...this.state })

    const mergedState = {
      ...this.state,
      ...newState,
    }

    this.state = mergedState

    return mergedState
  }
}

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

export default { Store, Vedux }