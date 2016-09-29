import React, {Component, PropTypes} from 'react'
import {changevalue} from 'actions'
import { dispatch } from 'react-redux'

const CellComponent = ({onCellClick, cellType, cellKey, posX, posY, cellContent}) => (
    <div key="cellKey" className="cell-container">
        <div
            key={cellKey}
            data-type={cellType}
            data-posX={posX}
            data-posY={posY}>
        </div>
    </div>
)



export default CellComponent;
