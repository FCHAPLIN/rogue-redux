class SavedGameService {

    constructor() {

    }

    getSavedGame(){
        return JSON.parse(localStorage.getItem('rogueredux'));
    }

    saveGame(game){
        return localStorage.setItem('rogueredux', game);
    }
}
export default SavedGameService;
