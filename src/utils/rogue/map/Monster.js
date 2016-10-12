import CellConstants from 'utils/rogue/map/CellConstants';
import MonsterConstants from 'utils/rogue/map/MonsterConstants';
import AStar from 'utils/rogue/pathfinding/AStar';

class Monster {
    constructor(cell, monsterType, monsterLevel) {
        this.cell = cell;
        this.posX = cell.posX;
        this.posY = cell.posY;
        this.key = 'm-' + this.posX + '-' + this.posY;
        this.monsterType = monsterType;
        this.goal = {};
        this.goalType = 'none';
        this.path = [];
        this.life = 10;
        this.dexterity = 5;
        this.strength = 5;
        this.intelect = 5;
    }

    doYourStuff(map, openCells, playerCell) {
        if (this.detectPlayer(playerCell)) {
            this.path = [];
            this.goal = playerCell;
            this.goalType = MonsterConstants.ATTACK;
            let aStar = new AStar(map, 80, 80);
            this.path = aStar.getPath(this.cell, this.goal);
            this.advance();
        } else {
            if (!this.path.length) {
                this.goal = this.getGoal(openCells);
                this.goalType = MonsterConstants.WANDERING;
                let aStar = new AStar(map, 80, 80);
                this.path = aStar.getPath(this.cell, this.goal);
            } else {
                this.advance();
            }
        }
    }

    getGoal(cells) {
        let goodCell = false;
        let cell;
        while (goodCell != true) {
            goodCell = true;
            let rn = Math.floor(Math.random() * cells.length);
            cell = cells[rn];
            if (cell.cellType != CellConstants.FLOOR) {
                goodCell = false;
            }
        }
        return cell;
    }

    advance() {
        let distanceToGoal;
        if (this.goalType == MonsterConstants.WANDERING) {
            if (this.path.length > 0) {
                this.cell = this.path.pop();
                this.posX = this.cell.posX;
                this.posY = this.cell.posY;
            }
        } else if (this.goalType == MonsterConstants.ATTACK) {
            if (this.path.length > 1) {
                this.cell = this.path.pop();
                this.posX = this.cell.posX;
                this.posY = this.cell.posY;
            } else {
                this.attack();
            }
        }
    }

    attack() {
        console.log('I am a ' + this.monsterType + ' ! I attack the player !');
    }

    detectPlayer(playerCell) {
        if (Math.abs(this.cell.posX - playerCell.posX) < 5 &&
            Math.abs(this.cell.posY - playerCell.posY) < 5) {
            return true;
        } else {
            return false;
        }

    }

}
export default Monster;
