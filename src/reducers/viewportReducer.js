import { SET_START_CELL} from 'actions/MapActions'
import { PLAYER_MOVE, PLAYER_MESSAGE } from 'actions/PlayerActions'
import { SCREEN_RESIZE } from 'actions/UIActions'

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
		case 'STARTMODAL_TOGGLE':
			return Object.assign({}, state, {
				startmodal: {
					isOpen: !state.startmodal.isOpen,
				}
			})
		case 'ENDMODAL_TOGGLE':
			return Object.assign({}, state, {
				endmodal: {
					isOpen: !state.endmodal.isOpen,
				}
			})
        case 'INFOMODAL_CLOSE':
            return Object.assign({}, state, {
                infoModal: {
                    isOpen: false,
                }
            })
        case 'INFOMODAL_OPEN':
            return Object.assign({}, state, {
                infoModal: {
                    isOpen: true,
                    title: action.payload.title,
                    content: action.payload.content,
                    buttons: action.payload.buttons,
                    type: action.payload.type,
                }
            })
        default:
            return state
    }
}

//Todo :
//
//Init the viewport :
//number of cell shown :
//  width in pixel / cellSize (rounded up)
//  height in pixel / cellSize (rounded up)
//  ajouter 3 ou 4 row ou columns pour securiser le scroll
//
//  prendre le nombre de case restante* cellSize en padding
//
//  En divisant par deux, on a le milieu


export default viewport;
