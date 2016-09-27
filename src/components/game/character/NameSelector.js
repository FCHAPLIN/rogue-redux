import React, {Component, PropTypes} from 'react'
import {changevalue} from 'actions'
import { dispatch } from 'react-redux'

const NameSelector = ({onChange}) => (
    <div>
        <label>Type in your character name :</label>
        <input onChange={onChange}/>
    </div>
)

NameSelector.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default NameSelector;
