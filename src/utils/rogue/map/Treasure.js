import CellConstants from 'utils/rogue/map/CellConstants';
import TreasureConstants from 'utils/rogue/map/TreasureConstants';


class Treasure {
    constructor(treasureType, treasureLevel) {
        this.key = "t"+Math.floor(Math.random()*999999999);
        this.type = treasureType;
    }
}
export default Treasure;
