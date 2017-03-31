import { TreasureConstants } from 'utils/rogue/map/treasures';

class Treasure {
    constructor(treasureType, treasureLevel) {
        this.key = "t"+Math.floor(Math.random()*999999999);
        this.type = treasureType;
    }
}
export { Treasure };
