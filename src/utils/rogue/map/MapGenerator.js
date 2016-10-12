'use strict';

import CellConstants from 'utils/rogue/map/CellConstants';
import MonsterConstants from 'utils/rogue/map/MonsterConstants';
import Monster from 'utils/rogue/map/Monster';
import Room from 'utils/rogue/map/Room';
import Cell from 'utils/rogue/map/Cell';
import CorridorMaker from 'utils/rogue/map/CorridorMaker';



class MapGenerator {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.cells = [];
        this.openCells = [];
        this.map = []
        this.rooms = [];
        this.doors = [];
        this.player = {};
        this.livings = [];
        this.corridors = [];
    }

    generateMap() {
        this.createMap();
        this.setContiguousCells(false);
        this.generateRooms();
        this.generateDoors();
        this.generateCorridors();
        this.cleanBlindRooms();
        this.setContiguousCells(true);
        this.startCell = this.setStartCell(true);
        this.exitCell = this.setExitCell();
        this.generatePopulation();
        this.data = {
            cells: this.cells,
            openCells: this.openCells,
            rooms: this.rooms,
            doors: this.doors,
            map2d: this.map,
            player: this.player,
            corridors: this.corridors,
            livings: this.livings,
            exit: {
                posX: this.exitCell.posX,
                posY: this.exitCell.posY
            },
            start: {
                posX: this.startCell.posX,
                posY: this.startCell.posY
            }
        }
        return this.data;
    }

    createMap() {
        for (let x = 0; x < this.width; x++) {
            this.map[x] = [];
            for (let y = 0; y < this.height; y++) {
                let cellType = CellConstants.EMPTY;
                let cell = new Cell(x, y, cellType);
                this.cells.push(cell);
                this.map[x].push(cell);
            }
        }
    }

    setContiguousCells(final) {

        for (let x = 0; x < this.width; x++) {
            let row = this.map[x];
            for (let y = 0; y < this.height; y++) {
                let myCell = row[y];
                myCell.contiguousCells = [];
                if (final) {
                    if (x > 0) {
                        if (this.openCells.indexOf(this.map[x - 1][y]) >= 0) {
                            myCell.contiguousCells.push(this.map[x - 1][y].key);
                        }
                    }
                    if (x < this.width - 1) {
                        if (this.openCells.indexOf(this.map[x + 1][y]) >= 0) {
                            myCell.contiguousCells.push(this.map[x + 1][y].key);
                        }
                    }
                    if (y > 0) {
                        if (this.openCells.indexOf(this.map[x][y - 1]) >= 0) {
                            myCell.contiguousCells.push(this.map[x][y - 1].key);
                        }
                    }
                    if (y < this.height - 1) {
                        if (this.openCells.indexOf(this.map[x][y + 1]) >= 0) {
                            myCell.contiguousCells.push(this.map[x][y + 1].key);
                        }
                    }
                } else {
                    if (x > 0) {
                        myCell.contiguousCells.push(this.map[x - 1][y].key);
                    }
                    if (x < this.width - 1) {
                        myCell.contiguousCells.push(this.map[x + 1][y].key);
                    }
                    if (y > 0) {
                        myCell.contiguousCells.push(this.map[x][y - 1].key);
                    }
                    if (y < this.height - 1) {
                        myCell.contiguousCells.push(this.map[x][y + 1].key);
                    }
                }

            }
        }
    }

    getCellByKey(key){
        let pos = key.split('-');
        let c = this.getCell(pos[0], pos[1]);
        return c;
    }

    generateRooms() {
        let roomCreationComplete = false;
        let roomWidth;
        let roomHeight;
        let posX;
        let posY;
        while (!roomCreationComplete) {
            let goodRoom = false;
            let count = 0;
            let selection;
            while (!goodRoom) {
                goodRoom = true;
                roomWidth = this.randomize(4, 12);
                roomHeight = this.randomize(4, 12);

                posX = this.randomize(1, this.width - 1);
                posY = this.randomize(1, this.height - 1);
                selection = this.getRectangularCells(posX, posY, roomWidth, roomHeight);
                if (roomWidth > 2 * roomHeight || roomHeight > 2 * roomWidth || posX + roomWidth > this.width - 1 || posY + roomHeight > this.height - 1) {
                    goodRoom = false;
                }
                if (roomWidth < 5 || roomHeight < 5) {
                    goodRoom = false;
                }
                if (selection.length < 20 || selection.length > 100) {
                    goodRoom = false;
                }
                for (let cell of selection) {
                    if (cell.room != false) {
                        goodRoom = false;
                    }
                }
                count++;
                if (count > 50) {
                    roomCreationComplete = true;
                }
            }
            //Store ref of the selection rather than plain cell Object
            let selectionRefs = [];
            for (let c of selection) {
                selectionRefs.push(c.key);
            }
            let room = new Room(posX, posY, roomWidth, roomHeight, selectionRefs);
            this.makeRectanglarRoom(posX, posY, roomWidth, roomHeight, room);
            this.rooms.push(room);
        }
    }
    cleanBlindRooms(){
      for (let room of this.rooms){
        if (room.doors.length == 0){
          let cells = this.getRectangularCells(room.posX, room.posY, room.roomWidth, room.roomHeight);
          for (let c of cells){
            c.cellType = CellConstants.EMPTY;
            c.obst = true;
          }
        }
      }
    }
    generateCorridors() {
        //S'assurer que toutes les rooms sont connectées
        let cellsToCompute = [];
        let doorsToConnect = [];
        doorsToConnect = this.doors.slice();

        while (doorsToConnect.length > 0) {
            let d = doorsToConnect.pop();
            let e;
            if (doorsToConnect.length > 0) {
                let goodDoor = false;
                let nbTry = 0;
                let rn;
                while (!goodDoor) {
                    goodDoor = true;
                    rn = Math.floor(Math.random() * doorsToConnect.length);
                    e = doorsToConnect[rn];

                    if (d.room == e.room) {
                        goodDoor = false;
                    }
                    nbTry++;
                    if (nbTry > 500) {
                        break;
                    }
                }

                e = doorsToConnect.splice(rn, 1)[0];
                e.connected = true;
            } else {
                break;
            }

            let path = new CorridorMaker(this.map, this.width, this.height);
            let newCorridor = path.getPath(d, e);
            for (let c of newCorridor) {
                if (c.cellType != CellConstants.DOOR) {
                    c.obst = false;
                    c.cellType = CellConstants.FLOOR;
                }
            }
            this.corridors.push(newCorridor);

        }
        this.openCells = this.getOpenCells();
    }

    getOpenCells() {
        let result = [];
        for (let c of this.cells) {
            if (!c.obst) result.push(c);
        }
        return result;
    }
    generateDoors() {
        for (let c of this.cells) {
            if (c.cellType == CellConstants.WALL) {
                var owner = c.room;
                var numDoor = owner.doors.length;

                if (numDoor < owner.doorsLimit && c.posX > 5 && c.posY > 5 && this.width - c.posX > 5 && this.height - c.posY > 5) {
                    if (Math.random() > 0.95 || numDoor == 0) {
                        //create a door
                        var isThereaDoorNearby = false;
                        for (let cellkey of c.contiguousCells) {
                            let cell = this.getCellByKey(cellkey);
                            if (cell.cellType == CellConstants.DOOR) isThereaDoorNearby = true;
                        }
                        for (var ct of this.doors) {
                            if (c.posX == ct.posY && c.posY == ct.posY) isThereaDoorNearby = true;
                        }
                        if (isThereaDoorNearby == false) {
                            c.cellType = CellConstants.DOOR;
                            c.obst = false;
                            c.canBeCorridor = true;
                            c.movement = 1;
                            c.pathFindingEnabled = true;
                            this.doors.push(c);
                            owner.doors.push(c);
                        }
                    }
                }
            }
        }
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

    makeRectanglarRoom(rectX, rectY, rectWidth, rectHeight, owner) {

        for (let c of this.cells) {

            if (c.posX > rectX && c.posX < rectX + rectWidth && c.posY > rectY && c.posY < rectY + rectHeight) {
                c.cellType = CellConstants.FLOOR;
                c.obst = false;
                c.canBeCorridor = false;
                c.movement = 1;
                c.pathFindingEnabled = true;
                if (c.posX == rectX + 1 || c.posY == rectY + 1 || c.posX == rectX + rectWidth - 1 || c.posY == rectY + rectHeight - 1) {
                    if (c.posX == rectX + 1 && c.posY == rectY + 1 || c.posX == rectX + 1 && c.posY == rectY + rectHeight - 1 || c.posX == rectX + rectWidth - 1 && c.posY == rectY + 1 || c.posX == rectX + rectWidth - 1 && c.posY == rectY + rectHeight - 1) {
                        c.cellType = CellConstants.CORNER;
                    } else {
                        c.cellType = CellConstants.WALL;
                    }
                    c.obst = true;
                    c.canBeCorridor = false;
                    c.movement = Infinity;
                    c.pathFindingEnabled = false;
                }
                c.room = owner;

            }
        }
    }

    setExitCell() {
        let goodCell = false;
        let exitCell;
        while (goodCell != true) {
          goodCell = true;
          let rn = Math.floor(Math.random() * this.openCells.length);
          exitCell = this.openCells[rn];
          if (exitCell.cellType != CellConstants.FLOOR){
            goodCell = false;
          }
        }
        exitCell.cellType = CellConstants.EXIT
        return exitCell;
    }

    setStartCell(player) {
      let goodCell = false;
      let startCell;
      while (goodCell != true) {
        goodCell = true;
        let rn = Math.floor(Math.random() * this.openCells.length);
        startCell = this.openCells[rn];
        if (startCell.cellType != CellConstants.FLOOR){
          goodCell = false;
        }
      }
      if (player){
        startCell.cellType = CellConstants.START;
      }
      return startCell;
    }

    getCell(posX, posY) {
        let resultCell;
        if (posX >= 0 && posX < this.width && posY >= 0 && posY < this.height) {
            resultCell = this.map[posX][posY];
        } else {
            resultCell = null;
        }
        return resultCell;
    }

    getCellInfo(posX, posY) {
        var info = '';
        if (posX >= 0 && posX < this.width && posY >= 0 && posY < this.height) {
            var c: Cell = map[posX][posY];
            info = "Type : " + c.cellType + "<br>";
            info += "posX : " + c.x + "<br>";
            info += "posY : " + c.y + "<br>";
            info += "Obstacle : " + c.obst + "<br>";
            info += "Mouvement : " + c.movement + "<br>";
            info += "Connected : " + c.connected + "<br>";
            if (c.room != null) {
                info += "Room : " + c.room.roomName + "<br>";
            }
        } else {
            info = "";
        }
        return info;
    }

    randomize(min, max) {
        return Math.floor((max - min + 1) * Math.random() + min);
    }

    generatePopulation(level) {
        let livingsLevel = 40;
        while (livingsLevel > 0){
          let cell = this.setStartCell();
          let monster;
          let monsterType;
          let monsterLevel = 1;
          let rnd = this.randomize(1,3);
          switch (rnd){
            case 1:
              monsterType = MonsterConstants.ORC;
              break;
            case 2:
              monsterType = MonsterConstants.CYCLOP;
              break;
            case 3:
              monsterType = MonsterConstants.GOBLIN;
              break;
          }
          monster = new Monster(cell, monsterType,monsterLevel);
          //cell.content = monster;
          this.livings.push(monster);
          livingsLevel -=monsterLevel;

        }

    }
}

export default MapGenerator;
