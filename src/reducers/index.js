import { combineReducers } from 'redux'
import player from 'reducers/playerReducer'
import map from 'reducers/mapReducer'


const rootReducer = combineReducers({
  player,
  map
})

export default rootReducer
