import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from 'reducers'
import 'assets/styles/sass/main.scss';
import { screenResizeAction } from 'actions/UIActions'

const initialState = {
  config: {
    cellSize: '50'
  },
  viewport: {},
  map: {},
  player: {
    name: '',
    class: 'warrior',
    traits: {
      strength: 15,
      intelect: 5,
      dexterity: 10
    },
    posX:1,
    posY:1
  }
};

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(
            thunk
        ),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
window.addEventListener('resize', () => {
    console.log(store.getState().config.cellSize);
    store.dispatch(screenResizeAction(window.innerWidth,window.innerHeight,store.getState().config.cellSize));
});

ReactDOM.render(
  <Provider store={store}>
  <Root />
  </Provider>,
  document.getElementById('app')
);
