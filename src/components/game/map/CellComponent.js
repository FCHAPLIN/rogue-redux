import React, {Component, PropTypes} from 'react'
import {changevalue} from 'actions'
import { dispatch } from 'react-redux'

const CellComponent = ({onCellClick, cellType, cellKey, poxX, posY, blocking, cellContent}) => (
    <div key="cellKey" className="cell-container">
        <div  className="cell {cellType}"
              data-type="{cellType}"
              data-posX="{posX}"
              data-posY="{posY}"
              blocking="{blocking}">
              <CellContent cellContents="{cellContents}"></CellContent>
        </div>
    </div>
)

CellComponent.propTypes = {
  onCellClick: PropTypes.func.isRequired
  cellType: PropTypes.string.isRequired
  cellKey: PropTypes.string.isRequired
  posY: PropTypes.string.isRequired
  posY: PropTypes.string.isRequired
  blocking: PropTypes.bool.isRequired
  cellContent: PropTypes.array.isRequired
}

export default CellComponent;
