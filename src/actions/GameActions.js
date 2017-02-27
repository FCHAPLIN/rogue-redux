import SavedGameService from 'services/SavedGameService';
import store from '';
export const LEVEL_COMPLETE = 'LEVEL_COMPLETE';
export const SAVE_GAME = 'SAVE_GAME';
export const LOAD_GAME = 'LOAD_GAME';

const savedGameService = new SavedGameService();

export const levelCompleteAction = () => {
    return {
        type: LEVEL_COMPLETE,
    };
};
export const saveGameAction = () => {
    try {
        savedGameService.saveGame(JSON.stringify(store.getState()));
    } catch(error) {
        throw new Error(error);
    }
    return {
        type: SAVE_GAME,
        name,
    };
};
export const loadGameAction = () => {
    console.log(savedGameService.getSavedGame());
    return {
        type: LOAD_GAME,
        name,
    };
};
