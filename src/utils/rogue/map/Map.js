'use strict';

import CellConstants from 'utils/rogue/map/CellConstants';
import MonsterConstants from 'utils/rogue/map/MonsterConstants';
import Room from 'utils/rogue/map/Room';
import Cell from 'utils/rogue/map/Cell';
import MapGenerator from 'utils/rogue/map/MapGenerator';
import AStar from 'utils/rogue/pathfinding/AStar';

class Map {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.data = {}
    }

    generateMap() {
        let generator = new MapGenerator(this.width, this.height);
        this.data = generator.generateMap();
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
    getCells(cellKeys) {
        let cells= [];
        return cells;
    }

    setCellContent(cell, content) {
        let targetCell= this.getCell(cell.posX,cell.posY);
        targetCell.cellContent = content;
        return targetCell;
    }

    getPath(posX, posY, targetX, targetY){
        let cells= [];
        return cells;
    }

    getCell(posX,posY) {
        return this.data.map2d[posX][posY];
    }

    cellIsOccupied(cell){
        let result=false;

        for (let i=0; i<this.data.livings.length; i++){

            let monst = this.data.livings[i];

            if (monst.cell.posX == cell.posX && monst.cell.posY == cell.posY){
                result=true;
                break;
            }
        }
        return result;
    }

    monstersTurn(playerCell: Cell){
      for (let monster of this.data.livings){
          if (monster.patience>5){
              monster.path = [];
              monster.goalType = MonsterConstants.WANDERING;
              monster.patience=0;
          }
          if (monster.detectPlayer(playerCell)) {
              monster.path = [];
              monster.goal = playerCell;
              monster.goalType = MonsterConstants.ATTACK;
              let aStar = new AStar(this.data.map2d, 80, 80);
              monster.path = aStar.getPath(monster.cell, monster.goal);
              if (!this.cellIsOccupied(monster.path[monster.path.length-1])){
                  monster.advance();
              }else{
                  monster.wait();

              }
          } else {
              if (!monster.path.length || monster.goalType == MonsterConstants.ATTACK) {
                  monster.goal = this.getOpenCell();
                  monster.goalType = MonsterConstants.WANDERING;
                  let aStar = new AStar(this.data.map2d, 80, 80);
                  monster.path = aStar.getPath(monster.cell, monster.goal);
              } else {
                  if (!this.cellIsOccupied(monster.path[monster.path.length-1])){
                      monster.advance();
                  }else{
                      monster.wait();
                  }
              }
          }
      }
      return this.data.livings;
    }

}
export default Map;
