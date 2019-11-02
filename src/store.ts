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
    const newState = handler(this.getState())

    const mergedState = {
      ...this.getState(),
      ...newState,
    }

    this.state = mergedState

    return mergedState
  }

  module(key: string) {
    return {
      commit: (handler: (state: State) => State | number): State => {
        const newState = handler(this.getState())

        const mergedState = {
          ...this.getState(),
          [key]: newState
        }

        this.state = mergedState

        return mergedState
      }
    }
  }
}

export { Store }