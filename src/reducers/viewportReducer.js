
import { SET_START_CELL } from 'actions/MapActions'
import { PLAYER_MOVE } from 'actions/PlayerActions'
import { SCREEN_RESIZE } from 'actions/UIActions'

const viewport = (state = {}, action) => {
  switch (action.type) {
      case SET_START_CELL :
        return Object.assign({}, state, {
          posX: action.startCell.posX,
          posY: action.startCell.posY
        })
      case SCREEN_RESIZE :
        return Object.assign({}, state, {
          width : action.processedWidth,
          height : action.processedHeight
        })
      case PLAYER_MOVE :
      case 'PLAYER_MOVE':
          switch (action.keycode) {
            case 'ArrowDown':
              return Object.assign({}, state, {
                  posY:state.posY+1
              })
            case 'ArrowUp':
              return Object.assign({}, state, {
                  posY:state.posY-1
              })
            case 'ArrowLeft':
              return Object.assign({}, state, {
                  posX:state.posX-1
              })
            case 'ArrowRight':
              return Object.assign({}, state, {
                  posX:state.posX+1
              })
          }
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
