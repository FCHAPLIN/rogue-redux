export const SCREEN_RESIZE = 'SCREEN_RESIZE';
export const SCREEN_INIT = 'SCREEN_INIT';


export const screenResizeAction = (width, height, cellSize) => {
  return {
    type: SCREEN_RESIZE,
    width,
    height,
    cellSize
  }
}
