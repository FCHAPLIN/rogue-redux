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

//TO DO for install app locally
//Register service worker
//Check registration point and listen install event
//In callback, set up cache manifest
//listen fetch events to get content from the cache

const initialState = {
    player: {
        name: 'Grûh the Great',
        class: 'warrior',
        traits: {
            strength : 15,
            intelect : 5,
            dexterity : 10
        },
        gold:0,
        maxLife:20,
        life:20,
        experience:0,

        inventory:{
            equipedArmor : 'k15',
            equipedWeapon: 'k14',
            maxSlots : 30,
            content:[{
                key:'k14',
                type: 'sword',
                name: 'sword',
                bonus: 0,
                damageMin: 4,
                damageMax: 8
            },{
                key:'k15',
                type: 'leather armor',
                name: 'leather armor',
                bonus: 0,
                ac: 6
            },{
                key:'k16',
                type: 'scroll',
                name: 'Magic Scroll',
                effect: 0,
                damageMin: 4,
                damageMax: 8
            },{
                key:'k17',
                type: 'scroll',
                name: 'Magic Scroll',
                effect: 0,
                damageMin: 4,
                damageMax: 8
            },{
                key:'k18',
                type: 'scroll',
                name: 'Magic Scroll',
                effect: 0,
                damageMin: 4,
                damageMax: 8
            }]
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
