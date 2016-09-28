import React, {Component, PropTypes} from 'react'
import {changevalue} from 'actions'
import { dispatch } from 'react-redux'

const TriggerButton = ({onClick}) => (
  <button  onClick={onClick}>Go !</button>
)

TriggerButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default TriggerButton;
