import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from 'reducers'
import {screenResizeAction} from 'actions/UIActions'
import 'assets/styles/sass/main.scss';



const initialState = {
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
},
  viewport: {
      width:0,
      height:0,
      posX:1,
      posY:1
  }
};

//listen resize event
window.addEventListener('resize', () => {
    store.dispatch(screenResizeAction(window.innerWidth,window.innerHeight-160,50));
});



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


ReactDOM.render(
  <Provider store={store}>
  <Root />
  </Provider>,
  document.getElementById('app')
);
