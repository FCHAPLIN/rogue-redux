class FieldOfView {
    constructor(originCell, distance, map) {

    }

    getFieldOfView(originCell, distance, map){

        for (var r=1; r<=R; r++) {
        var neighbors = this._getCircle(x, y, r);
        var neighborCount = neighbors.length;

        for (var i=0;i<neighborCount;i++) {
        cx = neighbors[i][0];
        cy = neighbors[i][1];
        /* shift half-an-angle backwards to maintain consistency of 0-th cells */
        A1 = [i ? 2*i-1 : 2*neighborCount-1, 2*neighborCount];
        A2 = [2*i+1, 2*neighborCount];

        blocks = !this._lightPasses(cx, cy);
        visibility = this._checkVisibility(A1, A2, blocks, SHADOWS);

            if (visibility) {
            callback(cx, cy, r, visibility);
        }

        if (SHADOWS.length == 2 && SHADOWS[0][0] == 0 && SHADOWS[1][0] == SHADOWS[1][1]) {
            return;
        }

    }
}
};
}