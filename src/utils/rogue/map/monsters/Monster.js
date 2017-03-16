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
        this.body = monsterValues.parts;
        this.description = monsterValues.description;
        this.life = monsterValues.life;
        this.dexterity = monsterValues.dexterity;
        this.strength = monsterValues.strength;
        this.intellect = monsterValues.intellect;
        this.patience = monsterValues.patience;
        this.hunger = monsterValues.hunger;
        this.faith = monsterValues.faith;
        this.smell = monsterValues.smell;
        this.view = monsterValues.view;
        this.courage = monsterValues.courage;
        this.fatigue = monsterValues.fatigue;
        this.difficulty = monsterValues.difficulty;
        this.weapon = monsterValues.weapon;
        this.armor = monsterValues.armor;
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
        return (Math.abs(this.cell.posX - playerCell.posX) < 3 &&
            Math.abs(this.cell.posY - playerCell.posY) < 3)
    }
}
export default Monster;
