class Monster {
    constructor(posX, posY, monsterType, monsterLevel) {

        this.key = 'm-' + posX + '-' + posY;
        this.posX = posX;
        this.posY = posY;
        this.monsterType = monsterType;
        this.movement = 1;
    }
}
export default Monster;
