# Vedux

Is an ultra lightweight centralized state management library that is just under  _27 lines_

### Installation

```shell
$ yarn add vedux
```

```javascript
import Vue from 'vue'
import { Vedux } from 'veduxjs'

Vue.use(Vedux)
```

### Setup

```javascript
import { Store } from 'veduxjs'

const store = new Store({ counter: 0 })
```

Here we created an instance of the `Store` with a property of `counter`, we cannot mutate state, we can only derive new state from it. Like this

```javascript
store.state.counter = 10 // won't work

const currentState = store.getState()

const newState = store.commit(({ counter }) => ({ counter: counter + 1 }))

console.log(currentStateState) // { counter: 0 }
console.log(newState) // { counter: 1 }
```