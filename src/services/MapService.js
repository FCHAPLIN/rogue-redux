import Map from 'utils/rogue/map/Map'
let mapServiceInstance = null;

class MapService {

    constructor() {
        if (!mapServiceInstance) {
            mapServiceInstance = this;
            this.map = new Map(80, 80);
        }
        return mapServiceInstance;
    }

    getNewMap(param) {
        return this.map.generateMap();
    }

    monstersTurn(playerCell) {
    
        return this.map.monstersTurn(playerCell);
    }

    getPath() {
        return this.map.getPath(posX, posY, targetX, targetY);
    }

    getCell(posX, posY) {
        return this.map.getCell(posX, posY);
    }

    updateCells(posX, posY, width, height) {
        return this.map.getRectangularCells(posX, posY, width, height);
    }
}

export default MapService;
