'use strict';

class Room {
    constructor(posX,posY,roomWidth,roomHeight) {
        this.posX = posX;
        this.posY = posY;
        this.roomWidth = roomWidth;
        this.roomHeight = roomHeight;
        this.cells=[];
        this.doors=[];
        this.doorsLimit = 2;
        this.description = "";
    }
}
export default Room;
