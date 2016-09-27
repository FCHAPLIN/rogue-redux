import React, {Component, PropTypes} from 'react'
import {changevalue} from 'actions'
import { dispatch } from 'react-redux'

const ClassSelector = ({onChange}) => (
  <select  onChange={onChange}>
    <option value="1">Un</option>
    <option value="2">Deux</option>
    <option value="3">Trois</option>
  </select>
)

ClassSelector.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default ClassSelector;
