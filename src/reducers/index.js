import { combineReducers } from 'redux'
import player from 'reducers/playerReducer'
import map from 'reducers/mapReducer'
import viewport from 'reducers/viewportReducer'
import config from 'reducers/configReducer'


const rootReducer = combineReducers({
  config,
  player,
  map,
  viewport
})

export default rootReducer
