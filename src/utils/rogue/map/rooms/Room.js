class Room {
    constructor(posX, posY, roomWidth, roomHeight, type, values, refs) {
        this.posX = posX;
        this.posY = posY;
        this.roomWidth = roomWidth;
        this.roomHeight = roomHeight;
        this.cells = refs;
        this.doors = [];
        this.doorsLimit = 2;
        this.description = "";
        this.type = type;
        Object.assign(this, values);
    }
}
export default Room;
//# sourceMappingURL=Room.js.map