const game = (state = {}, action) => {
    switch (action.type) {
        case 'LEVEL_COMPLETE':
            return Object.assign({}, state, {
                level: state.level + 1,
            });

        default:
            return state;
    }
};

export default game;
