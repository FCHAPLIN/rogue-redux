import React, {Component, PropTypes} from 'react'
import {changevalue} from 'actions'
import { dispatch } from 'react-redux'

const CellContent = ({cellContent}) => (
    <div>
        {cellContent}
    </div>
)

CellContent.propTypes = {
  cellContent: PropTypes.array.isRequired
}

export default CellContent;
