import { LOAD_GAME } from 'actions/GameActions';

const map = (state = {}, action) => {
  switch (action.type) {
    case 'MAP_REQUEST_SUCCESS':
        return Object.assign({}, state, {
            mapData: action.mapData
        })
      case LOAD_GAME:
          return Object.assign({}, state, action.payload.map);
    case 'MAP_REQUEST_ERROR':
        return Object.assign({}, state, {
            error: 'Errorrrrrrr !'
        })
    default:
        return state
    }
}

export default map;
