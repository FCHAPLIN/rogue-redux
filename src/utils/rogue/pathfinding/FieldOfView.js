// Took it from https://github.com/ondras/rot.js/blob/master/src/fov/precise-shadowcasting.js
// Thanks for saving my time.

import MapUtils from 'utils/rogue/map/MapUtils';

class FieldOfView {

    static getFieldOfView(originCell, distance, map, setVisibility) {
        let result = [];
        let shadows = [];
        result.push(originCell);
        if (setVisibility) {
            originCell.visible = true;
        }

        for (let r = 1; r <= distance ; r++) {
            var cells = MapUtils.getCircle(originCell, r, map);
            var cellsCount = cells.length;
            for (let i = 0; i < cellsCount; i++) {
                const cell = cells[i];
                const cx = cell.posX;
                const cy = cell.posY;

                /* shift half-an-angle backwards to maintain consistency of 0-th cells */
                const A1 = [i ? 2 * i - 1 : 2 * cellsCount - 1, 2 * cellsCount];
                const A2 = [2 * i + 1, 2 * cellsCount];
                const blocks = cell.opaque;
                const visibility = this.checkVisibility(A1, A2, blocks, shadows);
                if (visibility) {
                    result.push(cell);
                    if (setVisibility) {
                        cell.visible = true;
                    }
                }

                if (shadows.length == 2 && shadows[0][0] == 0 && shadows[1][0] == shadows[1][1]) {
                    return;
                }
            }
        }

        return result;
    };

    static checkVisibility(A1, A2, blocks, shadows) {
        if (A1[0] > A2[0]) { /* split into two sub-arcs */
            let v1 = this.checkVisibility(A1, [A1[1], A1[1]], blocks, shadows);
            let v2 = this.checkVisibility([0, 1], A2, blocks, shadows);
            return (v1 + v2) / 2;
        }

        /* index1: first shadow >= A1 */
        let index1 = 0;
        let edge1 = false;

        while (index1 < shadows.length) {
            let old = shadows[index1];
            let diff = old[0] * A1[1] - A1[0] * old[1];
            if (diff >= 0) { /* old >= A1 */
                if (diff == 0 && !(index1 % 2)) {
                    edge1 = true;
                }

                break;
            }

            index1++;
        }

        /* index2: last shadow <= A2 */
        let index2 = shadows.length;
        let edge2 = false;
        while (index2--) {
            let old = shadows[index2];
            let diff = A2[0] * old[1] - old[0] * A2[1];
            if (diff >= 0) { /* old <= A2 */
                if (diff == 0 && (index2 % 2)) {
                    edge2 = true;
                }

                break;
            }
        }

        let visible = true;
        if (index1 == index2 && (edge1 || edge2)) {  /* subset of existing shadow, one of the edges match */
            visible = false;
        } else if (edge1 && edge2 && index1 + 1 == index2 && (index2 % 2)) { /* completely equivalent with existing shadow */
            visible = false;
        } else if (index1 > index2 && (index1 % 2)) { /* subset of existing shadow, not touching */
            visible = false;
        }

        if (!visible) { return 0; } /* fast case: not visible */

        let visibleLength;
        let P;

        /* compute the length of visible arc, adjust list of shadows (if blocking) */
        let remove = index2 - index1 + 1;
        if (remove % 2) {
            if (index1 % 2) { /* first edge within existing shadow, second outside */
                let P = shadows[index1];
                visibleLength = (A2[0] * P[1] - P[0] * A2[1]) / (P[1] * A2[1]);
                if (blocks) { shadows.splice(index1, remove, A2); }
            } else { /* second edge within existing shadow, first outside */
                let P = shadows[index2];
                visibleLength = (P[0] * A1[1] - A1[0] * P[1]) / (A1[1] * P[1]);
                if (blocks) { shadows.splice(index1, remove, A1); }
            }
        } else {
            if (index1 % 2) { /* both edges within existing shadows */
                let P1 = shadows[index1];
                let P2 = shadows[index2];
                visibleLength = (P2[0] * P1[1] - P1[0] * P2[1]) / (P1[1] * P2[1]);
                if (blocks) { shadows.splice(index1, remove); }
            } else { /* both edges outside existing shadows */
                if (blocks) { shadows.splice(index1, remove, A1, A2); }
                return 1; /* whole arc visible! */
            }
        }

        const arcLength = (A2[0] * A1[1] - A1[0] * A2[1]) / (A1[1] * A2[1]);

        return visibleLength / arcLength;
    };
}
export default FieldOfView;
