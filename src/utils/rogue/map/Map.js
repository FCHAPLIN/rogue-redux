'use strict';

import CellConstants from 'utils/rogue/map/CellConstants';
import Room from 'utils/rogue/map/Room';
import Cell from 'utils/rogue/map/Cell';
import MapGenerator from 'utils/rogue/map/MapGenerator';

class Map {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.data = {}
        /*this.cells = [];
        this.openCells = [];
        this.map2d = []
        this.rooms = [];
        this.doors = [];
        this.player = {};
        this.livings = [];
        this.corridors = [];*/
    }

    generateMap() {
        let generator = new MapGenerator(this.width, this.height);
        this.data = generator.generateMap();
        console.log(this.data);
        return this.data;
        /*this.cells =  this.data.cells;
        this.openCells= this.data.openCells,
        this.rooms= this.data.rooms,
        this.doors= this.data.doors,
        this.map2d= this.data.map,
        this.player= this.data.player,
        this.corridors= this.data.corridors,
        this.livings= this.data.livings,
        this.exit = this.data.exit,
        this.start = this.data.start: */
    }

    getFullMap() {
        return this.data;
    }

    getCells(posX, posY, width, height) {
        let cells= [];
        return cells;
    }

    getPath(posX, posY, targetX, targetY){
        let cells= [];
        return cells;
    }

    getCell(posX,posY) {

    }

    isBlocked(posX,posY) {

    }
}
export default Map;
