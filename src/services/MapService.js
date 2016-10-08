import Map from 'utils/rogue/map/Map'

class MapService{

    constructor(){
        this.map = new Map(80,80);
    }

    getNewMap(param){
        return this.map.generateMap();
    }

    updateCells(posX, posY, width, height) {
        return this.map.getRectangularCells(posX, posY, width, height);
    }
}

export default MapService;
