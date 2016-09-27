export const PLAYER_CHANGE = 'PLAYER_CHANGE';
export const PLAYER_SUBMIT = 'PLAYER_SUBMIT';
export const GAME_START = 'GAME_START';

export const playerChangeAction = (player) => {
  return {
    type: PLAYER_CHANGE,
    value: player
  }
}

export const playerSubmitAction = () => {
  return {
    type: PLAYER_SUBMIT
  }
}

export const gameStartAction = () => {
  return {
    type: GAME_START
  }
}

export const MAP_REQUEST_START = 'MAP_REQUEST_START';
export const MAP_REQUEST_SUCCESS = 'MAP_REQUEST_SUCCESS';
export const MAP_REQUEST_ERROR = 'MAP_REQUEST_ERROR';

export const mapRequestStartAction = (params) => {
  return {
    type: MAP_REQUEST_START,
    params
  }
}

export const mapRequestSuccessAction = (mapData) => {
  return {
    type: MAP_REQUEST_SUCCESS,
    mapData
  }
}

export const mapRequestErrorAction = (error) => {
  return {
    type: MAP_REQUEST_ERROR,
    error
  }
}

export const LEVEL_SET_UP_START = 'LEVEL_SET_UP_START';
export const LEVEL_SET_UP_SUCCESS = 'LEVEL_SET_UP_SUCCESS';
export const LEVEL_SET_UP_ERROR = 'LEVEL_SET_UP_ERROR';



export const LEVEL_START = 'LEVEL_START';
export const LEVEL_EXIT = 'LEVEL_END';

export const PLAYER_DIED = 'PLAYER_DIED';
export const PLAYER_MOVE = 'PLAYER_DIED';
export const PLAYER_ATTACK = 'PLAYER_DIED';

export const MONSTERS_TURN_START = 'MONSTERS_TURN_START';
export const MONSTERS_TURN_END = 'MONSTERS_TURN_END';



export const CHANGE_VALUE = () => {
  return {
    type: 'CHANGE_VALUE'
  }
}

export const SELECT_VALUE = (value) => {
  return {
    type: 'SELECT_VALUE',
    value: value
  }
}
