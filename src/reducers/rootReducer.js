import { combineReducers } from 'redux'
import { CHANGE_VALUE, SELECT_VALUE } from 'actions'

const app = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        value: 'clicked'
      }
    case 'SELECT_VALUE':
        return {
          value: action.value
        }
    default:
      return state
    }
}


const rootReducer = combineReducers({
  app
})

export default rootReducer
