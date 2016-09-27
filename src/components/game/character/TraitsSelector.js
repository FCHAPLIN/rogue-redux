import React, {Component, PropTypes} from 'react'
import {changevalue} from 'actions'
import { dispatch } from 'react-redux'

const TraitsSelector = ({state}) => (

  <div className="traits-container">
    <div className="trait"><span className="trait-name">Strength : </span><span>{state.player.traits.strength}</span></div>
    <div className="trait"><span className="trait-name">Intelect : </span><span>{state.player.traits.intelect}</span></div>
    <div className="trait"><span className="trait-name">Dexterity : </span><span>{state.player.traits.dexterity}</span></div>
  </div>
)

TraitsSelector.propTypes = {
  values: PropTypes.object
}

export default TraitsSelector;
