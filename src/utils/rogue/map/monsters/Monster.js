import MonsterConstants from 'utils/rogue/map/monsters/MonsterConstants';
import Parts from 'utils/rogue/map/monsters/Parts';

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
        this.body= {
            leftArm: Parts.OK,
            rightArm: Parts.OK,
            head: Parts.OK,
            leftLeg : Parts.OK,
            rightLeg: Parts.OK,
            torso : Parts.OK,
            abdomen: Parts.OK,
        };
        this.life = 10;
        this.dexterity = 5;
        this.strength = 2;
        this.intelect = 5;
        this.patience = 0;
        this.hunger = 0;
        this.faith = 0;
        this.courage = 0;
        this.fatigue = 0;
        this.difficulty = 0;
        this.weapon = {
        };
        this.armor = {
        };
    }
    wait() {
        this.patience++;
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
        return this.strength;
    }

    detectPlayer(playerCell) {
        if (Math.abs(this.cell.posX - playerCell.posX) < 3 &&
            Math.abs(this.cell.posY - playerCell.posY) < 3) {
            return true;
        } else {
            return false;
        }
    }
}
export default Monster;
