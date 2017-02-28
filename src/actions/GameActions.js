import SavedGameService from 'services/SavedGameService';
import { store } from 'react-redux';
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
	savedGameService.saveGame(JSON.stringify(store));
    return {
        type: SAVE_GAME
    }
}
export const loadGameAction = (store) => {
    store.game.isLoadingSavedGame = true;
	return {
        type: LOAD_GAME,
        payload: store,
    }
}
