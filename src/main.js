import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';
import config from 'config/config';
import { screenResizeAction } from 'actions/UIActions';
import { initialState } from 'config/initialState';
import 'assets/styles/sass/main.scss';

//TO DO for install app locally
//Register service worker
//Check registration point and listen install event
//In callback, set up cache manifest
//listen fetch events to get content from the cache

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f));

window.addEventListener('resize', () => {
    let currentState = store.getState();
    store.dispatch(screenResizeAction(window.innerWidth,
                                      window.innerHeight - 160,
                                      currentState.player.posX,
                                      currentState.player.posY,
                                      currentState.config.mapWidth,
                                      currentState.config.mapHeight,
                                      currentState.config.cellSize));
  });

ReactDOM.render(
    <Provider store={store}>
    <Root/>
</Provider>, document.getElementById('app'));
