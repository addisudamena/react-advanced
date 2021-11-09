const redux = require('redux');

function increment(amount) {
  return {
    type: 'INCREMENT',
    payload: amount,
  };
}

function decrement() {
  return {
    type: 'DECREMENT',
  };
}

function reducer(state = { count: 0 }, action) {
  // return new state based on the incoming action.type
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload,
      };
    case 'DECREMENT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment(5));
