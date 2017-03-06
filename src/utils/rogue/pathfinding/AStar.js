class AStar {
    constructor(map, gridWidth, gridHeight) {
        this.mapArray = map;
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;

        this.MAX_ITERATIONS = 4000;

        this.originCell;
        this.destinationCell;
        this.currentCell;

        this.openList = [];
        this.closedList = [];

    }
    getCell(posX, posY) {
        let resultCell;
        if (posX >= 0 && posX < this.gridWidth && posY >= 0 && posY < this.gridHeight) {
            resultCell = this.mapArray[posX][posY];
        } else {
            resultCell = null;
        }
        return resultCell;
    }
    reset() {
        for (let xx = 0; xx < this.gridWidth; xx++) {
            for (var yy = 0; yy < this.gridHeight; yy++) {
                var row = this.mapArray[xx];
                var myCell = row[yy];
                myCell.parentCell = null;
                myCell.g = 0;
                myCell.f = 0;
            }
        }
        this.openList = [];
        this.closedList = [];

        this.currentCell = this.originCell;
        this.closedList.push(this.originCell);
    }


    getPath(startCell, endCell) {
        this.reset();
        this.originCell = startCell;
        this.destinationCell = endCell;
        this.currentCell = this.originCell;
        this.closedList.push(this.originCell);

        let isSolved = false;
        let iter = 0;

        isSolved = this.stepPathfinder();

        while (!isSolved) {
            isSolved = this.stepPathfinder();
            if (iter++ > this.MAX_ITERATIONS) return null;
        }
        let solutionPath = [];
        let count = 0;
        let cellPointer = this.closedList[this.closedList.length - 1];

        while (cellPointer != this.originCell) {
            if (count++ > 1400) return null;
            solutionPath.push(cellPointer);
            cellPointer = cellPointer.parentCell;
        }

        return solutionPath;
    }

    getCellByKey(key){
        let pos = key.split('-');
        return this.getCell(pos[0], pos[1]);
    }

    stepPathfinder() {
        if (this.currentCell == this.destinationCell) {
            this.closedList.push(this.destinationCell);
            return true;
        }
        this.openList.push(this.currentCell);

        let adjacentCell = [];
        for (let adjCellKey of this.currentCell.contiguousCells) {
            let adjCell = this.getCellByKey(adjCellKey);
            if (!adjCell.obst && this.closedList.indexOf(adjCell) == -1) {
                adjacentCell.push(adjCell);
            }
        }

        let g;
        let h;
        for (let ii = 0; ii < adjacentCell.length; ii++) {
            let myCell = adjacentCell[ii];
            g = this.currentCell.g + 1;
            h = Math.abs(myCell.posX - this.destinationCell.posX) * 2 + Math.abs(myCell.posY - this.destinationCell.posY) * 3;

            if (this.openList.indexOf(myCell) == -1) {
                myCell.f = g + h;
                myCell.parentCell = this.currentCell;
                myCell.g = g;
                this.openList.push(myCell);
            } else {
                if (myCell.g < this.currentCell.parentCell.g) {
                    this.currentCell.parentCell = myCell;
                    this.currentCell.g = myCell.g + 1;
                    this.currentCell.f = myCell.g + h;
                }
            }
        }
        let indexOfCurrent = this.openList.indexOf(this.currentCell);
        this.closedList.push(this.currentCell);
        this.openList.splice(indexOfCurrent, 1);
        this.openList.sort(function(a, b) {
            return b.f - a.f;
        });

        if (this.openList.length == 0) return true;
        this.currentCell = this.openList.pop();
        return false;
    }
}

export default AStar;
