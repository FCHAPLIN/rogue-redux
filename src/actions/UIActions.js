export const SCREEN_RESIZE = 'SCREEN_RESIZE';
export const SCREEN_INIT = 'SCREEN_INIT';
export const INVENTORY_DROP = 'INVENTORY_DROP';
export const INVENTORY_TOGGLE = 'INVENTORY_TOGGLE';

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
        cellSize
    }
}
export const inventoryDropAction = (item, slot) => {
    return {
        type: INVENTORY_DROP,
        item,
        slot
    }
}

export const inventoryToggleAction = () => {
    return {
        type: INVENTORY_TOGGLE
    }
}
