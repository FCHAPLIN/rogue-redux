export const SCREEN_RESIZE = 'SCREEN_RESIZE';
export const SCREEN_INIT = 'SCREEN_INIT';


export const screenResizeAction = (width, height, cellSize) => {
    let processedWidth = Math.ceil(width/cellSize);
    let processedHeight = Math.ceil(height/cellSize);
    let originLeft = Math.floor(processedWidth*0.5);
    let originTop = Math.floor(processedHeight*0.5)
    return {
        type: SCREEN_RESIZE,
        processedWidth,
        processedHeight,
        originLeft,
        originTop,
        cellSize
    }
}
