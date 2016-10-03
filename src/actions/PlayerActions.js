import promise from 'services/MapService'

export const PLAYER_DIED = 'PLAYER_DIED';
export const PLAYER_MOVE = 'PLAYER_MOVE';
export const PLAYER_ATTACK = 'PLAYER_ATTACK';

export const playerMoveAction = (keycode) => {
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
