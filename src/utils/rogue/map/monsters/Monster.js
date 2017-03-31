import MonsterConstants from 'utils/rogue/map/monsters/MonsterConstants';
import Utils from 'utils/Utils';

class Monster {
    constructor(cell, monsterType, monsterValues) {
        this.cell = cell;
        this.posX = cell.posX;
        this.posY = cell.posY;
        this.key = 'm-' + this.posX + '-' + this.posY;
        this.monsterType = monsterType;
        this.goal = {};
        this.goalType = 'none';
        this.path = [];
        this.maxValues = {};
        Object.assign(this, monsterValues);
        Object.assign(this.maxValues, monsterValues);
    }

    wait() {
        this.patience--;
    }

    advance() {
        if (this.goalType == MonsterConstants.WANDERING) {
            if (this.path.length > 0) {
                this.cell.occupant = false;
                this.cell = this.path.pop();
                this.posX = this.cell.posX;
                this.posY = this.cell.posY;
                this.cell.occupant = this.key;
            }
        } else if (this.goalType == MonsterConstants.ATTACK) {
            if (this.path.length > 1) {
                this.cell.occupant = false;
                this.cell = this.path.pop();
                this.posX = this.cell.posX;
                this.posY = this.cell.posY;
                this.cell.occupant = this.key;
            } else {
                this.attack();
            }
        }
    }

    attack() {
        let attack = this.strength + 2 + Utils.randomize(1, 10);
        let damage = this.strength + 2;
        return { attack, damage };
    }

    detectPlayer(playerCell) {
        return (Math.abs(this.cell.posX - playerCell.posX) < 3 &&
            Math.abs(this.cell.posY - playerCell.posY) < 3)
    }
}
export default Monster;