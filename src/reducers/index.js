import { combineReducers } from 'redux'
import player from 'reducers/playerReducer'
import map from 'reducers/mapReducer'
import viewport from 'reducers/viewportReducer'
import config from 'reducers/configReducer'
import game from 'reducers/gameReducer'
import log from 'reducers/logReducer'
import modals from 'reducers/modalsReducer'


const rootReducer = combineReducers({
  config,
  player,
  map,
  viewport,
  log,
  game,
  modals
})

export default rootReducer
