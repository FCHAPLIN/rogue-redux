import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from 'reducers'
import config from 'config'
import {screenResizeAction} from 'actions/UIActions'
import 'assets/styles/sass/main.scss'

const initialState = {
    player: {
        name: 'Grûh the Great',
        class: 'warrior',
        traits: {
            strength : 15,
            intelect : 5,
            dexterity : 10
        },
        posX: 1,
        posY: 1
    },
    viewport: {
        width: 0,
        height: 0,
        posX: 1,
        posY: 1
    },
    config:{
        mapWidth:config.mapWidth,
        mapHeight:config.mapHeight,
        cellSize:config.cellSize
    }
};

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
