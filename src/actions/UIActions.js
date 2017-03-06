export const SCREEN_RESIZE = 'SCREEN_RESIZE';
export const SCREEN_INIT = 'SCREEN_INIT';
export const INVENTORY_DROP = 'INVENTORY_DROP';
export const INVENTORY_TOGGLE = 'INVENTORY_TOGGLE';
export const LOG_TOGGLE = 'LOG_TOGGLE';
export const INFOMODAL_CLOSE = 'INFOMODAL_CLOSE';
export const INFOMODAL_OPEN = 'INFOMODAL_OPEN';
export const ENDMODAL_TOGGLE = 'ENDMODAL_TOGGLE';
export const STARTMODAL_TOGGLE = 'STARTMODAL_TOGGLE';
export const CONFIRM_MODAL_OPEN = 'CONFIRM_MODAL_OPEN';
export const CONFIRM_MODAL_CLOSE = 'CONFIRM_MODAL_CLOSE';

export const screenResizeAction = (width, height, playerPosX, playerPosY, mapWidth, mapHeight, cellSize) => {
    const processedWidth = Math.floor(width/cellSize);
    const processedHeight = Math.floor(height/cellSize);
    const posX = Math.ceil(processedWidth * 0.5);
    const posY = Math.ceil(processedHeight * 0.5);
    const originLeft = playerPosX-posX;
    const originTop = playerPosY-posY;
    return {
        type: SCREEN_RESIZE,
        processedWidth,
        processedHeight,
        originLeft,
        originTop,
        posX,
        posY,
        cellSize,
    };
};

export const inventoryDropAction = (item, slot) => {
    return {
        type: INVENTORY_DROP,
        item,
        slot,
    };
};

export const confirmModalCloseAction = () => {
    return {
        type: CONFIRM_MODAL_CLOSE,
    };
};

export const confirmModalCancelAction = () => {
    return (dispatch) => {
        dispatch(confirmModalCloseAction());
    };
};

export const confirmModalConfirmAction = (action) => {
    return (dispatch) => {
        dispatch(confirmModalCloseAction());
        dispatch(action);
    };
};

export const confirmModalAction = (question,content, action) => {
    return {
        type: CONFIRM_MODAL_OPEN,
        payload: { question, content, action }
    };
};

export const inventoryToggleAction = () => {
    return {
        type: INVENTORY_TOGGLE,
    };
};

export const logToggleAction = () => {
	return {
		type: LOG_TOGGLE,
	};
};

export const infoModalCloseAction = () => {
    return {
        type: INFOMODAL_CLOSE,
    };
};

export const startModalToggleAction = (data) => {
	console.log(data);
	return {
		type: STARTMODAL_TOGGLE,
	};
};

export const endModalToggleAction = (data) => {
	return {
		type: ENDMODAL_TOGGLE,
	};
};

export const infoModalOpenAction = (data) => {
    return {
        type: INFOMODAL_OPEN,
        payload: {
            title: data.title,
            content: data.content,
            buttons: data.buttons,
            type: data.type,
        },
    };
};
