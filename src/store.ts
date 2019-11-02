import { EventEmitter } from 'events'

interface State {
  [x: string]: any;
}

class Store {
  debug = false

  private state = {}
  private stateObserver = new EventEmitter()

  constructor(state: State = {}, { debug = true }: { debug: boolean }) {
    this.state = state
    this.debug = debug

    if (this.debug) {
      console.log(`Initialized Store: [${new Date()}]\n`)
      console.log(`Initial State\n`)
      console.log(JSON.stringify(this.state, null, 2))
      console.log('\n')
    }
  }

  getState(objKeys?: string): State {
    const state = { ...this.state }

    if (this.debug) {
      console.log(`State was accessed ${objKeys ? `with ["${objKeys}"]` : ''} at [${new Date()}]`)
    }

    if (objKeys) {
      // @ts-ignore
      return objKeys.split('.').reduce((result, key) => result[key], state)
    }

    return state
  }

  commit(handler: (state: State) => State): State {
    const oldState = this.getState()
    const newState = handler(oldState)

    const mergedState = {
      ...oldState,
      ...newState,
    }

    this.state = mergedState

    this.stateObserver.emit('subscribe', {
      old: oldState,
      new: mergedState
    })

    return mergedState
  }

  module(key: string) {
    return {
      commit: (handler: (state: State) => any): State => {
        const oldState = this.getState()
        const newState = handler(oldState)

        const mergedState = {
          ...oldState,
          [key]: newState
        }

        this.state = mergedState

        return mergedState
      }
    }
  }

  subscribe(handler: (state: State) => void): void {
    this.stateObserver.on('subscribe', handler)
  }
}

export { Store }