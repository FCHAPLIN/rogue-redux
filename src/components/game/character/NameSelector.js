import React, {Component, PropTypes} from 'react'
import {changevalue} from 'actions'
import { dispatch } from 'react-redux'

const NameSelector = ({onNameChange}) => (
    <div>
        <label>Type in your character name :</label>
        <input onChange={onNameChange}/>
    </div>
)

NameSelector.propTypes = {
  onNameChange: PropTypes.func.isRequired
}

export default NameSelector;
