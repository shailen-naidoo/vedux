# Vedux

A ultra-lightweight state management library for Vue.js, it just does enough to help you manage state without locking you in

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
After you have setup your `store`, you now have access to 3 methods:

* `getState()` - Clones and returns the current instance of the `state` 
* `commit()` - Creates and returns a new instance of the state with your new values
* `module()` - Allows you to create a module from a property on the state

#### `getState()`

```javascript
const cloneOfTheState = store.getState()

cloneOfTheState.counter = 10 // Will mutate the cloned state not the original state
```

#### `commit()`

```javascript
const { counter: currentCounter } = store.getState() // currentCounter: 0

const { counter: newCounter } = store.commit(({ counter }) => ({ 
  counter: counter + 5
})) // newCounter: 5
``` 