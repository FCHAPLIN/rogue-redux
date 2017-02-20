import { LOG_TOGGLE} from 'actions/UIActions'

const log = (state = {}, action) => {
    switch (action.type) {
        case LOG_TOGGLE:
            return Object.assign({}, state, {
				visible: !state.visible
            })
        default:
            return state
    }
}

export default log;
