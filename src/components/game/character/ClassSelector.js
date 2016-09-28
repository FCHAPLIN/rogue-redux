import React, {Component, PropTypes} from 'react'

const ClassSelector = ({onClassChange}) => (
  <div>
    <span>Class : </span>
    <select  onChange={onClassChange}>
      <option value="warrior">Warrior</option>
      <option value="Thief">Thief</option>
      <option value="Mage">Mage</option>
    </select>
  </div>
)

ClassSelector.propTypes = {
  onClassChange: PropTypes.func.isRequired
}

export default ClassSelector;
