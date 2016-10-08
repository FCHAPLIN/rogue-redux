export const SCREEN_RESIZE = 'SCREEN_RESIZE';
export const SCREEN_INIT = 'SCREEN_INIT';


export const screenResizeAction = (width, height, playerPosX, playerPosY, mapWidth, mapHeight, cellSize) => {
    let processedWidth = Math.floor(width/cellSize);
    let processedHeight = Math.floor(height/cellSize);
    let posX = Math.ceil(processedWidth * 0.5);
    let posY = Math.ceil(processedHeight * 0.5);
    let originLeft = playerPosX-posX;
    let originTop = playerPosY-posY;
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
