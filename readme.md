# @acutejs/plugin-redux

A plugin for Acute to use [Redux](https://redux.js.org/).

## Usage

First, install the plugin and its peer-dependency, `redux`.

```shell
npm install @acutejs/plugin-redux redux
```

Then, use Redux’s helpers to create a store.

__store.js__

```javascript
import { createStore, combineReducers } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'DECREMENT_COUNTER':
      return state - 1;
    case 'INCREMENT_COUNTER':
      return state + 1;
    default:
      return state;
  }
};

export default createStore(combineReducers({
  counter,
}));
```

Next, pass the plugin and a reference to the store to Acute’s `createApp()`.

```javascript
import redux from '@acutejs/plugin-redux';
import store from './store.js';

createApp({
  // ...
  plugins: [
    redux({
      store,
    }),
  ],
});
```

Finally, use the store’s methods to add interactivity to your Acute components.

```javascript
import store from './store.js';

export default {
  events: {
    click() {
      store.dispatch({ type: 'INCREMENT_COUNTER' });
    }
  },
  render() {
    const { counter } = store.getState();
    const plural = counter === 1 ? 'time' : 'times';
    return `<button> You’ve clicked me ${message} ${plural} </button>`;
  },
};
```
