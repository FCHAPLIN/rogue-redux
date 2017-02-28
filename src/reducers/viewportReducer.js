import { SET_START_CELL} from 'actions/MapActions'
import { PLAYER_MOVE, PLAYER_MESSAGE } from 'actions/PlayerActions'
import { SCREEN_RESIZE } from 'actions/UIActions'
import { LOAD_GAME } from 'actions/GameActions';

const viewport = (state = {}, action) => {
    switch (action.type) {
        case SET_START_CELL:
            return Object.assign({}, state, {
                posX: action.startCell.posX,
                posY: action.startCell.posY
            })
        case SCREEN_RESIZE:
            return Object.assign({}, state, {
                width: action.processedWidth,
                height: action.processedHeight,
                originLeft: action.originLeft,
                originTop: action.originTop
            })
        case 'PLAYER_MESSAGE':
            return Object.assign({}, state, {
                notification: {
                    notify: true,
                    text: action.message,
                }
            })

        case 'REMOVE_MESSAGE':
            return Object.assign({}, state, {
                notification: {
                    notify: false,
                    message: ''
                }
            })
        case 'PLAYER_MOVE':
            switch (action.keycode) {
                case 'ArrowDown':
                    return Object.assign({}, state, {
                        posY: state.posY + 1,
                        originTop: state.originTop + 1
                    })
                case 'ArrowUp':
                    return Object.assign({}, state, {
                        posY: state.posY - 1,
                        originTop: state.originTop - 1
                    })
                case 'ArrowLeft':
                    return Object.assign({}, state, {
                        posX: state.posX - 1,
                        originLeft: state.originLeft - 1
                    })
                case 'ArrowRight':
                    return Object.assign({}, state, {
                        posX: state.posX + 1,
                        originLeft: state.originLeft + 1
                    })
            }
        case 'INVENTORY_TOGGLE':
            return Object.assign({}, state, {
                inventory: !state.inventory
            })
        case LOAD_GAME:
            return Object.assign({}, state, action.payload.viewPort)
        default:
            return state
    }
}

export default viewport;
