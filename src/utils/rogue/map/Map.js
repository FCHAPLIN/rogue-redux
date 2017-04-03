'use strict'

import { CellConstants } from 'utils/rogue/map/cells';
import { MonsterConstants } from 'utils/rogue/map/monsters';
import MapGenerator from 'utils/rogue/map/MapGenerator';
import { MonsterUtils } from 'utils/rogue/map/monsters';
import { BehaviorResolver } from 'utils/rogue/map/monsters';
import FieldOfView from 'utils/rogue/pathfinding/FieldOfView';

class Map {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.data = {};
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
            if (c.posX >= rectX && c.posX <= rectX + rectWidth &&
                c.posY >= rectY && c.posY <= rectY + rectHeight) {
                result.push(c);
            }
        }

        return result;
    }

    setCellContent(cell, content) {
        let targetCell = this.getCell(cell.posX, cell.posY);
        targetCell.cellContent = content;
        return targetCell;
    }

    getCell(posX, posY) {
        return this.data.map2d[posX][posY];
    }

    playerAttack(monsterKey) {
        MonsterUtils.playerAttack(this.data.livings, monsterKey);
    }

    monstersTurn(playerCell) {
        for (let cell of this.data.cells) {
            cell.colored = ' none';
        }

        var test = FieldOfView.getFieldOfView(playerCell, 5, this.data.map2d, true);
        this.data.attacks = [];
        for (let monster of this.data.livings) {
            let monsterActions = BehaviorResolver.resolveBehavior(
                monster,
                this.data.map2d,
                this.data.livings,
                playerCell
            );

            /*if (monsterActions.attacks.length) {
                for (let attack of monsterActions.attacks){
                    this.data.attacks.push(attack);
                }
            }*/
        }

        return [
            this.data.livings,
            this.data.attacks,
        ];
    }
}
export default Map;
