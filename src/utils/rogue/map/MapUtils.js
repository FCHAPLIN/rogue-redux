class MapUtils {
    static getSquareFromDiagonal(map, topLeftCell, bottomRightCell) {
        const offsetX = bottomRightCell.posX - topLeftCell.posX;
        const offsetY = bottomRightCell.posY - topLeftCell.posY;
        return MapUtils.getSquareFromOrigin(map, topLeftCell, offsetX, offsetY);
    }

    static getSquareFromCenter(map, centerCell, d) {
        const cx = centerCell.posX;
        const cy = centerCell.posY;

        for (let x = cx - d; x <= cx + d; x++) {
            for (let y = cy - d; y <= cy + d; y++) {
                cells.push(map[x][y]);
            }
        }

        return cells;
    }

    static getSquareFromOrigin(topLeftCell, width, height, map) {
        const cx = topLeftCell.posX;
        const cy = topLeftCell.posY;

        for (let x = cx; x <= cx + width; x++) {
            for (let y = cy; y <= cy + height; y++) {
                cells.push(map[x][y]);
            }
        }

        return cells;
    }

    static getDiskFromCenter(centerCell, r, map, bordersOnly) {
        let cells = [];
        const cx = centerCell.posX;
        const cy = centerCell.posY;

        for (let x = cx - r; x <= cx + r; x++) {
            for (let y = cy - r; y <= cy + r; y++) {
                let isInCircle = false;
                if (bordersOnly) {
                    isInCircle = (y - cy) * (y - cy) + (x - cx) * (x - cx) == r * r;
                } else {
                    isInCircle = (y - cy) * (y - cy) + (x - cx) * (x - cx) < r * r;
                }

                if (isInCircle)
                    cells.push(map[x][y]);
            }
        }

        return cells;
    }

    static getCircle(centerCell, radius, map){
        let result = [];
        let dirs;
        let countFactor;
        let startOffset;
        let cx = centerCell.posX;
        let cy = centerCell.posY;

        dirs = [
            [0, -1],
            [1,  0],
            [0,  1],
            [-1,  0],
        ];
        countFactor = 2;
        startOffset = [-1, 1];

        /* starting neighbor */
        var x = cx + startOffset[0] * radius;
        var y = cy + startOffset[1] * radius;

        /* circle */
        for (var i = 0; i < dirs.length; i++) {
            for (var j = 0; j < radius * countFactor; j++) {
                if (x < map.length && x >= 0 && y < map[x].length && y >= 0) {
                    result.push(map[x][y]);
                }

                x += dirs[i][0];
                y += dirs[i][1];

            }
        }

        return result;
    }

    static getLine(map, startCell, endCell) {
        let cells = [];
        const sx = startCell.posX;
        const sy = startCell.posY;
        const ex = endCell.posX;
        const ey = endCell.posY;
        const deltaX = Math.floor(Math.abs(ex - sx));
        const deltaY = Math.floor(Math.abs(ey - sy));
        const xStep = (ex >= sx) ? 1 : -1;
        const yStep = (ey >= sy) ? 1 : -1;
        let error = deltaX - deltaY;
        let xGrid = sx;
        let yGrid = sy;

        function hasNext() {
            return !(xGrid == ex && yGrid == ey);
        }

        function next() {
            let result = { x: xGrid, y: yGrid };
            let twoError = 2 * error;
            if (twoError > (-1 * deltaY)) {
                error -= deltaY;
                xGrid += xStep;
            }

            if (twoError < deltaX) {
                error += deltaX;
                yGrid += yStep;
            }

            return result;
        }

        while (hasNext()) {
            nextCell = next();
            cells.push(map[x][y]);
        }

        return cells;
    }

    static getCellByKey(key) {
        let pos = key.split('-');
        return this.getCell(pos[0], pos[1]);
    }

    static getCell(posX, posY, map) {
        let resultCell;
        if (posX >= 0 && posX < this.width && posY >= 0 && posY < this.height) {
            resultCell = map[posX][posY];
        } else {
            resultCell = null;
        }

        return resultCell;
    }

    static addCells(cellA, cellB, map) {
        const posX = Math.min(cellA.posX + cellB.posX, map.width);
        const posY = Math.min(cellA.posY + cellB.posY, map.height);
        return MapUtils.getCell(map, posX, posY);
    }

    static substractCells(cellA, cellB, map) {
        const posX = Math.max(cellA.posX - cellB.posX, map.width);
        const posY = Math.max(cellA.posY - cellB.posY, map.height);
        return MapUtils.getCell(map, posX, posY);
    }

    static multiplyCells(cellA, cellB, map) {
        const posX = Math.min(cellA.posX * cellB.posX, map.width);
        const posY = Math.min(cellA.posY * cellB.posY, map.height);
        return MapUtils.getCell(map, posX, posY);
    }
}
export default MapUtils;