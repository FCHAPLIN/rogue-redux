import { combineReducers } from 'redux'
import player from 'reducers/playerReducer'
import map from 'reducers/mapReducer'
import viewport from 'reducers/viewportReducer'
import config from 'reducers/configReducer'
import log from 'reducers/logReducer'


const rootReducer = combineReducers({
  	config,
  	player,
  	map,
  	viewport,
	log
})

export default rootReducer
