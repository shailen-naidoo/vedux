import { store } from "./store"

export class AppViewModel {
  static data = () => ({

  })

  static computed = {
    text: () => store.getState('text'),
  }

  static methods = {
    updateText: (vm, e) => store.commit(() => ({ text: e }))
  }
}
