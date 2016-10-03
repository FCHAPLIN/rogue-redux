
import { SET_START_CELL } from 'actions/MapActions'

const viewport = (state = {}, action) => {
  switch (action.type) {
      case SET_START_CELL :
        return Object.assign({}, state, {
          posX: action.startCell.posX,
          posY: action.startCell.posY
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
