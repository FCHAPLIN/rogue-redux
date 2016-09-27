import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from 'reducers/rootReducer'

let store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());


ReactDOM.render(
  <Provider store={store}>
  <Root />
  </Provider>,
  document.getElementById('app')
);
