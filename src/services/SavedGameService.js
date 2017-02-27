class SavedGameService {

    constructor() {

    }

    getSavedGame(){
        return localStorage.getItem('rogueredux');
    }

    saveGame(game){
        return localStorage.setItem('rogueredux', game);
    }
}
export default SavedGameService;
