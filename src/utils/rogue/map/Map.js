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
    }

    generateMap() {
        let generator = new MapGenerator(this.width, this.height);
        this.data = generator.generateMap();
        return this.data;
    }

    getFullMap() {
        return this.data;
    }

    getRectangularCells(rectX, rectY, rectWidth, rectHeight) {
        var result = [];
        for (let c of this.cells) {
            if (c.posX >= rectX && c.posX <= rectX + rectWidth && c.posY >= rectY && c.posY <= rectY + rectHeight) {
                result.push(c);
            }
        }
        return result;
    }

    getCells(cellKeys) {
        let cells= [];

        return cells;
    }

    getPath(posX, posY, targetX, targetY){
        let cells= [];
        return cells;
    }

    getCell(posX,posY) {
        return this.data.map2d[posX][posY];
    }

    monstersTurn(playerCell){
    
      for (let monster of this.data.livings){
        monster.doYourStuff(this.data.map2d, this.data.openCells, playerCell );
      }
      return this.data.livings;
    }
}
export default Map;
