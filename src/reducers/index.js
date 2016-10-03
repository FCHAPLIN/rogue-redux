import { combineReducers } from 'redux'
import player from 'reducers/playerReducer'
import map from 'reducers/mapReducer'
import viewport from 'reducers/viewportReducer'


const rootReducer = combineReducers({
  player,
  map,
  viewport
})

export default rootReducer
