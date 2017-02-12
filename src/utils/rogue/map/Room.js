"use strict";
var Room = (function () {
    function Room(posX, posY, roomWidth, roomHeight) {
        this.posX = posX;
        this.posY = posY;
        this.roomWidth = roomWidth;
        this.roomHeight = roomHeight;
        this.cells = [];
        this.doors = [];
        this.doorsLimit = 2;
        this.description = "";
    }
    return Room;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Room;
