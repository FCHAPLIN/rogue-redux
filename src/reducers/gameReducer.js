import { SAVE_GAME } from 'actions/GameActions';
import { LOAD_GAME } from 'actions/GameActions';


const game = (state = {}, action) => {
    switch (action.type) {
        case 'LEVEL_COMPLETE':
            return Object.assign({}, state, {
                level: state.level + 1,
            });
        case LOAD_GAME:
            return Object.assign({}, state, action.payload.game);
        case SAVE_GAME:
            console.log('save');


        default:
            return state;
    }
};

export default game;
