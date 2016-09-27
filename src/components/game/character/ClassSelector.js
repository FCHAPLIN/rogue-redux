import React, {Component, PropTypes} from 'react'

const ClassSelector = ({onClassChange}) => (
  <select  onChange={onClassChange}>
    <option value="warrior">Warrior</option>
    <option value="Thief">Thief</option>
    <option value="Mage">Mage</option>
  </select>
)

ClassSelector.propTypes = {
  onClassChange: PropTypes.func.isRequired
}

export default ClassSelector;
