import {  MAP_REQUEST_START,
          MAP_REQUEST_SUCCESS,
          MAP_REQUEST_ERROR } from 'actions/MapActions'


const map = (state = {}, action) => {
  switch (action.type) {
    case 'MAP_REQUEST_SUCCESS':
        return Object.assign({}, state, {

            mapData: action.mapData
        })

    case 'MAP_REQUEST_ERROR':
        return Object.assign({}, state, {
            error: 'Errorrrrrrr !'
        })
    default:
        return state
    }
}

export default map;
