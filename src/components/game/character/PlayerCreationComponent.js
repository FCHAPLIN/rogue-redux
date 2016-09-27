import React, {Component, PropTypes} from 'react'
import TriggerButton from 'components/game/character/TriggerButton'
import Displayer from 'components/game/character/Displayer'
import NameSelector from 'components/game/character/NameSelector'
import TraitsSelector from 'components/game/character/TraitsSelector'
import ClassSelector from 'components/game/character/ClassSelector'
import Header from 'components/pages/partials/Header'


const PlayerCreationComponent = ({onClick, onChange, value}) => (

  <div>
    <Header/>
    <div class="title">PLAYER CREATION</div>
    <NameSelector onChange={onChange}/>
    <ClassSelector onChange={onChange}/>
    <TraitsSelector onChange={onChange}/>
    <hr/>
    <TriggerButton onClick={onClick}/>
  </div>
)

PlayerCreationComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default PlayerCreationComponent;
