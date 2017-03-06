import SavedGameService from 'services/SavedGameService';
import stringify from 'json-stringify-safe';
export const LEVEL_COMPLETE = 'LEVEL_COMPLETE';
export const SAVE_GAME = 'SAVE_GAME';
export const LOAD_GAME = 'LOAD_GAME';

const savedGameService = new SavedGameService();

export const levelCompleteAction = () => {
    return {
        type: LEVEL_COMPLETE
    }
}
export const saveGameAction = (store) => {
	let test = stringify(store);
	savedGameService.saveGame(test);
    return {
        type: SAVE_GAME
    }
}
export const loadGameAction = (store) => {
	return {
        type: LOAD_GAME,
        payload: store,
    }
}
