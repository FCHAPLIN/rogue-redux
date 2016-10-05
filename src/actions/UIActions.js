export const SCREEN_RESIZE = 'SCREEN_RESIZE';
export const SCREEN_INIT = 'SCREEN_INIT';


export const screenResizeAction = (width, height, cellSize) => {
    console.log ('resize');
    let processedWidth = Math.floor(width/cellSize);
    let processedHeight = Math.floor(height/cellSize);
    let originLeft = Math.ceil(processedWidth*0.5);
    let originTop = Math.ceil(processedHeight*0.5)
    return {
        type: SCREEN_RESIZE,
        processedWidth,
        processedHeight,
        originLeft,
        originTop,
        cellSize
    }
}
