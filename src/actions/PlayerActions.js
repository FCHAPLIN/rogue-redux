import MapService from 'services/MapService'
export const PLAYER_DIED = 'PLAYER_DIED';
export const PLAYER_MOVE = 'PLAYER_MOVE';
export const PLAYER_ATTACK = 'PLAYER_ATTACK';

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
        if (!targetCell.obst) {
            dispatch(playerMoveProcessAction(keycode));
        }
    }
}

export const playerMoveProcessAction = (keycode) => {
    return {
        type: PLAYER_MOVE,
        keycode
    }
}

export const mapRequestErrorAction = (error) => {
    return {
        type: MAP_REQUEST_ERROR,
        error
    }
}
