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

export default { Store }