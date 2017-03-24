class MapUtils {
    static getSquareFromDiagonal(map, topLeftCell, bottomRightCell) {
        var cells = [];
        return cells;
    }

    static getSquareFromCenter(map, centerCell, distance) {
        var cells = [];
        return cells;
    }

    static getSquareFromOrigin(map, topLeftCell, width, height) {
        var cells = [];
        return cells;
    }

    static getDiskFromCenter(map, centerCell, r, bordersOnly) {
        let cells = [];
        const cx = centerCell.posX;
        const cy = centerCell.posY;

        for (let x = cx - r ; x <= cx + r; x++) {
            for (let y = cy - r; y <= cy + r; y++) {
                let isInCircle = false;
                if (bordersOnly){
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

    static getCellById (map, id) {

        return cell;
    }

    static getCellByPos (map2d, posX, posY) {

        return cell;
    }

    static addCells(cellA, cellB, map) {
        const posX = Math.min(cellA.posX + cellB.posX, map.width);
        const posY = Math.min(cellA.posY + cellB.posY, map.height);
        return MapUtils.getCellFromPos(map, posX, posY);
    }

    static substractCells(cellA, cellB, map) {
        const posX = Math.max(cellA.posX - cellB.posX, map.width);
        const posY = Math.max(cellA.posY - cellB.posY, map.height);
        return MapUtils.getCellFromPos(map, posX, posY);
    }

    static multiplyCells(cellA, cellB, map) {
        const posX = Math.min(cellA.posX * cellB.posX, map.width);
        const posY = Math.min(cellA.posY * cellB.posY, map.height);
        return MapUtils.getCellFromPos(map, posX, posY);
    }
}