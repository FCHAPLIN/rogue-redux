import promise from 'services/MapService'

export const MAP_REQUEST_START = 'MAP_REQUEST_START';
export const MAP_REQUEST_SUCCESS = 'MAP_REQUEST_SUCCESS';
export const MAP_REQUEST_ERROR = 'MAP_REQUEST_ERROR';

export const mapRequestStartAction = () => {
    return (dispatch) => {
        return promise.then(
            data => {
                dispatch(mapRequestSuccessAction(data))
            },
            error => dispatch(mapRequestErrorAction(error))
        );
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
