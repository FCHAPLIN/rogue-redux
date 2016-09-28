import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
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
const store = createStore(rootReducer, initialState, applyMiddleware(thunk), window.devToolsExtension && window.devToolsExtension());


ReactDOM.render(
  <Provider store={store}>
  <Root />
  </Provider>,
  document.getElementById('app')
);
