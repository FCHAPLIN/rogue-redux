import React, {Component, PropTypes} from 'react'
import {changevalue} from 'actions'
import { dispatch } from 'react-redux'

const CellContent = (props) => (
    <div className={props.contentType} ></div>
)

export default CellContent;
