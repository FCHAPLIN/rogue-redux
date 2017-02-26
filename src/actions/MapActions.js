import MapService from 'services/MapService'
import { startModalToggleAction } from 'actions/UIActions';
import config from 'config/config';
import * as log from 'actions/LogActions';
export const MAP_REQUEST_START = 'MAP_REQUEST_START';
export const MAP_REQUEST_SUCCESS = 'MAP_REQUEST_SUCCESS';
export const MAP_REQUEST_ERROR = 'MAP_REQUEST_ERROR';

export const SET_START_CELL = 'SET_START_CELL';

const mapService = new MapService();

export const mapRequestStartAction = () => {
    return (dispatch) => {
        let data = mapService.getNewMap();
		let modalData= {
			content: 'start',
			//buttons: ['ok'],
			type: 'fullbrick',
		}
        dispatch(mapRequestSuccessAction(data));
        dispatch(setStartCellAction(data.start));
        window.dispatchEvent(new Event('resize'));
        dispatch(startModalToggleAction(modalData));
        dispatch(log.logEntryAction(`Welcome to Rogue Redux ${config.version}. Have an happy death ! :p`, 'info'));
    }
}

export const setStartCellAction = (startCell) => {
    return {
        type: SET_START_CELL,
        startCell
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
