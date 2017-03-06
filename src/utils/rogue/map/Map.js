'use strict';

import CellConstants from 'utils/rogue/map/CellConstants';
import MonsterConstants from 'utils/rogue/map/MonsterConstants';
import MapGenerator from 'utils/rogue/map/MapGenerator';
import AStar from 'utils/rogue/pathfinding/AStar';

class Map {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.data = {}
    }

    generateMap(level) {
        let generator = new MapGenerator(this.width, this.height);
        this.data = generator.generateMap(level);
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
    getOpenCell() {
        let goodCell = false;
        let cell;
        while (goodCell != true) {
            goodCell = true;
            let rn = Math.floor(Math.random() * this.data.openCells.length);
            cell = this.data.openCells[rn];
            if (cell.cellType != CellConstants.FLOOR) {
                goodCell = false;
            }
        }
        return cell;
    }

    setCellContent(cell, content) {
        let targetCell = this.getCell(cell.posX, cell.posY);
        targetCell.cellContent = content;
        return targetCell;
    }

    getCell(posX, posY) {
        return this.data.map2d[posX][posY];
    }

    cellIsOccupied(cell) {
        let result = false;
        if (cell) {

            for (let i = 0; i < this.data.livings.length; i++) {

                let monst = this.data.livings[i];

                if (monst.cell.posX == cell.posX && monst.cell.posY == cell.posY) {
                    result = true;
                    break;
                }
            }
            return result;
        }
    }
    getMonsterByKey(key) {
        for (let monster of this.data.livings) {
            if (monster.key == key) {
                return monster;
            }
        }
    }

    playerAttack(key) {
        let monster = this.getMonsterByKey(key);
        monster.life = monster.life - 5;
        if (monster.life <= 0) {
            this.killMonster(monster);
        }
    }

    killMonster(monster) {
        monster.cell.occupant = false;
        this.data.livings.splice(this.data.livings.indexOf(monster), 1);
    }

    moveMonster(monster) {
        let attack;
        if (monster.goalType == MonsterConstants.WANDERING) {
            if (monster.path.length > 0) {
                monster.cell.occupant = false;
                monster.cell = monster.path.pop();
                monster.posX = monster.cell.posX;
                monster.posY = monster.cell.posY;
                monster.cell.occupant = monster.key;
            }
        } else if (monster.goalType == MonsterConstants.ATTACK) {
            if (monster.path.length > 1) {
                monster.cell.occupant = false;
                monster.cell = monster.path.pop();
                monster.posX = monster.cell.posX;
                monster.posY = monster.cell.posY;
                monster.cell.occupant = monster.key;
            } else {
                attack = monster.attack();
            }
        }
        return attack;
    }
    monstersTurn(playerCell) {
        this.data.attacks = [];
        for (let monster of this.data.livings) {
            let attack;
            if (monster.patience > 5) {
                monster.path = [];
                monster.goalType = MonsterConstants.WANDERING;
                monster.patience = 0;
            }
            if (monster.detectPlayer(playerCell)) {
                monster.path = [];
                monster.goal = playerCell;
                monster.goalType = MonsterConstants.ATTACK;
                let aStar = new AStar(this.data.map2d, this.width, this.height);
                monster.path = aStar.getPath(monster.cell, monster.goal);
                if (!this.cellIsOccupied(monster.path[monster.path.length - 1])) {
                    attack = this.moveMonster(monster);
                } else {
                    monster.wait();

                }
            } else {
                if (!monster.path.length || monster.goalType == MonsterConstants.ATTACK) {
                    monster.goal = this.getOpenCell();
                    monster.goalType = MonsterConstants.WANDERING;
                    let aStar = new AStar(this.data.map2d, this.width, this.height);
                    monster.path = aStar.getPath(monster.cell, monster.goal);
                } else {
                    if (!this.cellIsOccupied(monster.path[monster.path.length - 1])) {
                        attack = this.moveMonster(monster);
                    } else {
                        monster.wait();
                    }
                }
            }
            if (attack) {
                this.data.attacks.push(attack)
            }
        }
        return [
            this.data.livings,
            this.data.attacks
        ]

    }
  }
    export default Map;
