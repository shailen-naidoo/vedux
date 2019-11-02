import { EventEmitter } from 'events'

interface State {
  [x: string]: any;
}

class Store {
  private state = {}
  private stateObserver = new EventEmitter()
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

    this.stateObserver.emit('subscribe', {
      old: this.state,
      new: mergedState,
    })

    this.state = mergedState

    return mergedState
  }

  subscribe() {
    return {
      result: (handler: (state: State) => void) => {
        this.stateObserver.on('subscribe', handler)
      }
    }
  }
}

export { Store }