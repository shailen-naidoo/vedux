import { EventEmitter } from 'events'

interface State {
  [x: string]: any;
}

interface Config {
  debug: boolean
}

class Store {
  debug = false

  private state = {}
  private stateObserver = new EventEmitter()

  constructor(state: State = {}, config?: Config) {
    this.state = state
    this.debug = config ? config.debug : false

    if (this.debug) {
      console.log(`Initialized Store: [${new Date()}]\n`)
      console.log(`Initial State\n`)
      console.log(JSON.stringify(this.state, null, 2))
      console.log('\n')
    }
  }

  getState(objKeys?: string | string[]): State {
    const state: State = { ...this.state }

    if (this.debug) {
      console.log(`State was accessed ${objKeys ? `with ["${Array.isArray(objKeys) ? objKeys.join('.') : objKeys}"]` : ''} at [${new Date()}]`)
    }

    if (Array.isArray(objKeys)) {
      return objKeys.reduce((result, key) => result[key], state)
    }

    if (objKeys) {
      return objKeys.split('.').reduce((result, key) => result[key], state)
    }

    return state
  }

  commit(handler: (state: State) => State): State {
    const oldState: State = this.getState()
    const newState: State = handler(oldState)

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
        const oldState: State = this.getState()
        const newState: State = handler(oldState)

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