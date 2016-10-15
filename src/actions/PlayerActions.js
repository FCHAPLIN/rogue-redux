import MapService from 'services/MapService';
import { SET_START_CELL, mapRequestStartAction } from 'actions/MapActions';

export const PLAYER_DIED = 'PLAYER_DIED';
export const PLAYER_MOVE = 'PLAYER_MOVE';
export const PLAYER_GET_ITEM = 'PLAYER_GET_ITEM';
export const PLAYER_GET_POTION = 'PLAYER_GET_POTION';
export const PLAYER_GET_GOLD = 'PLAYER_GET_GOLD';
export const PLAYER_ATTACK = 'PLAYER_ATTACK';
export const TURN_RESULT = 'TURN_RESULT';
let mapService = new MapService();

export const inputKeyAction = (keycode, posX, posY) => {
    return (dispatch) => {
        let targetCell;
        switch (keycode) {
            case 'ArrowDown':
                targetCell = mapService.getCell(posX, posY + 1);
                break;
            case 'ArrowUp':
                targetCell = mapService.getCell(posX, posY - 1);
                break;
            case 'ArrowLeft':
                targetCell = mapService.getCell(posX - 1, posY);
                break;
            case 'ArrowRight':
                targetCell = mapService.getCell(posX + 1, posY);
                break;
        }

        if (targetCell && !targetCell.obst) {
            if (targetCell.cellContent.length) {
                console.log(targetCell.cellContent);
                for (let content of targetCell.cellContent) {
                    switch (content.type) {
                        case 'potion':
                            dispatch(playerGetPotionAction(5));
                            break;
                        case 'gold':
                            dispatch(playerGetGoldAction(20));
                            break;
                        case 'chest':
                            dispatch(playerGetGoldAction(100));
                            break;
                    }
                }
                mapService.setCellContent(targetCell, []);
            }
            dispatch(playerMoveProcessAction(keycode));
            dispatch(monstersTurnAction(targetCell));
            if (targetCell.cellType == 'exit'){
                dispatch(mapRequestStartAction());
            }
        }
    }
}

export const playerGetPotionAction = (value) => {
    return {
        type: PLAYER_GET_POTION,
        value
    }
}

export const playerGetGoldAction = (value) => {
    console.log('playerGetGoldAction');
    return {
        type: PLAYER_GET_GOLD,
        value
    }
}

export const monstersTurnAction = (targetCell) => {
    return (dispatch) => {
        let results = mapService.monstersTurn(targetCell);
        dispatch(turnResultsAction(results));
    }
}

export const playerMoveProcessAction = (keycode) => {
    return {
        type: PLAYER_MOVE,
        keycode
    }
}

export const turnResultsAction = (results) => {
    return {
        type: TURN_RESULT,
        results
    }
}

export const mapRequestErrorAction = (error) => {
    return {
        type: MAP_REQUEST_ERROR,
        error
    }
}
