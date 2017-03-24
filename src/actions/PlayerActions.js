import MapService from 'services/MapService';
import {
    SET_START_CELL,
    mapRequestStartAction
} from 'actions/MapActions';
import * as log from 'actions/LogActions';

import { levelCompleteAction} from 'actions/GameActions';

export const PLAYER_DIED = 'PLAYER_DIED';
export const PLAYER_MOVE = 'PLAYER_MOVE';
export const PLAYER_GET_ITEM = 'PLAYER_GET_ITEM';
export const PLAYER_GET_POTION = 'PLAYER_GET_POTION';
export const PLAYER_GET_GOLD = 'PLAYER_GET_GOLD';
export const PLAYER_ATTACK = 'PLAYER_ATTACK';
export const TURN_RESULT = 'TURN_RESULT';
export const PLAYER_MESSAGE = 'PLAYER_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

let mapService = new MapService();

export const inputKeyAction = (keycode, posX, posY) => {
    return (dispatch) => {
        let targetCell;
        let originCell = mapService.getCell(posX, posY);
        switch (keycode) {
            case 'ArrowDown':
                targetCell = mapService.getCell(posX, posY + 1);
                dispatch(log.logEntryAction('You walked south', 'info'));
                break;
            case 'ArrowUp':
                targetCell = mapService.getCell(posX, posY - 1);
                dispatch(log.logEntryAction('You walked north', 'info'));
                break;
            case 'ArrowLeft':
                targetCell = mapService.getCell(posX - 1, posY);
                dispatch(log.logEntryAction('You walked west', 'info'));
                break;
            case 'ArrowRight':
                targetCell = mapService.getCell(posX + 1, posY);
                dispatch(log.logEntryAction('You walked east', 'info'));
                break;
            default:
                break;
        }

        if (targetCell && !targetCell.obst) {
            if (targetCell.occupant) {
                mapService.playerAttack(targetCell.occupant);
                targetCell = originCell;
                dispatch(log.logEntryAction('You attacked a monster', 'notify'));
                dispatch(playerMessageAction('YOU\'RE GOING TO DIIIIIE !'));
                setTimeout(function() {
                    dispatch(removeMessageAction());
                },3000);
            } else {
                if (targetCell.cellContent.length) {
                    for (let content of targetCell.cellContent) {
                        switch (content.type) {
                            case 'potion':
                                dispatch(playerGetPotionAction(5));
                                dispatch(playerMessageAction('Let\'s drink !'));
                                dispatch(log.logEntryAction(`You drank a minor health potion and gained ${5} life points`, 'notify'));
                                setTimeout(function() {
                                    dispatch(removeMessageAction());
                                },3000);
                                break;
                            case 'gold':
                                dispatch(playerGetGoldAction(20));
                                dispatch(playerMessageAction('Gooooold !'));
                                dispatch(log.logEntryAction(`You found ${20} gold pieces`, 'notify'));
                                setTimeout(function() {
                                    dispatch(removeMessageAction());
                                },3000);
                                break;
                            case 'chest':
                                dispatch(playerGetGoldAction(100));
                                dispatch(playerMessageAction('Mmmmh... What\s \n inside this thing ?'));
                                dispatch(log.logEntryAction(`You found ${100} gold pieces`, 'notify'));
                                setTimeout(function() {
                                    dispatch(removeMessageAction());
                                },3000);
                                break;
                        }
                    }
                    mapService.setCellContent(targetCell, []);
                }
                dispatch(playerMoveProcessAction(keycode));

                if (targetCell.cellType == 'exit') {
                	dispatch(levelCompleteAction());
                    dispatch(mapRequestStartAction(1));
                }
            }
            dispatch(monstersTurnAction(targetCell));
        }else{
            dispatch(playerMessageAction('Ouch ! Hey !!! It\'s no so dark !'));
            setTimeout(function() {
                dispatch(removeMessageAction());
            },3000);
        }
    }
}
export const removeMessageAction = () => {
    return {
        type: REMOVE_MESSAGE
    }
}
export const playerMessageAction = (message) => {
    return {
        type: PLAYER_MESSAGE,
        message
    }
}

export const playerGetPotionAction = (value) => {
    return {
        type: PLAYER_GET_POTION,
        value
    }
}

export const playerGetGoldAction = (value) => {
    return {
        type: PLAYER_GET_GOLD,
        value
    }
}

export const monstersTurnAction = (targetCell) => {
    return (dispatch) => {
        let results = mapService.monstersTurn(targetCell);
        console.log(results);
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
    return (dispatch) => {
        let totalDamage = 0;
        for (let damage of results[1]) {
            totalDamage += damage;
        }
        if (totalDamage>0){
            dispatch(log.logEntryAction(`You got hit for ${totalDamage}`, 'alert'));
        }
        dispatch(turnResultsDamageAction(totalDamage));
    }
}
export const turnResultsDamageAction = (totalDamage) => {
    return {
        type: TURN_RESULT,
        totalDamage
    }
}

export const mapRequestErrorAction = (error) => {
    return {
        type: 'MAP_REQUEST_ERROR',
        error
    }
}
