import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from 'reducers'

const initialState = {
  player: {
    name: '',
    class: 'warrior',
    traits: {
      strength: 15,
      intelect: 5,
      dexterity: 10
    }
  }
};
let store = createStore(rootReducer, initialState,window.devToolsExtension && window.devToolsExtension());


ReactDOM.render(
  <Provider store={store}>
  <Root />
  </Provider>,
  document.getElementById('app')
);
