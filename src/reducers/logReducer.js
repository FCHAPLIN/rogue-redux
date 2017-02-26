import { LOG_TOGGLE } from 'actions/UIActions'
import { LOG_ENTRY } from 'actions/LogActions'
import * as uuid from 'node-uuid';
import moment from 'moment';

const log = (state = {}, action) => {
    switch (action.type) {
        case LOG_TOGGLE:
            return Object.assign({}, state, {
				visible: !state.visible
            })
        case LOG_ENTRY:
            console.log(moment);
            const id = uuid.v4();
            const time = moment().format('dd/MM, h:mm:ss a')
            const newEntry = action.payload;
            newEntry.time = time;
            newEntry.id = id;
            return Object.assign({}, state, {
                entries: [newEntry, ...state.entries]
            })
        default:
            return state
    }
}

export default log;
