import React, {Component, PropTypes} from 'react'
import TriggerButton from 'components/game/character/TriggerButton'
import Displayer from 'components/game/character/Displayer'
import NameSelector from 'components/game/character/NameSelector'
import TraitsSelector from 'components/game/character/TraitsSelector'
import ClassSelector from 'components/game/character/ClassSelector'
import Header from 'components/pages/partials/Header'


const PlayerCreationComponent = ({onClick,
                                  onNameChange,
                                  onClassChange,
                                  state}) => (

  <div>
    <Header/>
    <div className="title">PLAYER CREATION</div>
    <NameSelector onNameChange={onNameChange}/>
    <ClassSelector onClassChange={onClassChange}/>
    <TraitsSelector state={state}/>
    <hr/>
    <TriggerButton onClick={onClick}/>
  </div>
)

PlayerCreationComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onClassChange: PropTypes.func.isRequired,
  traitsValue: PropTypes.object
}

export default PlayerCreationComponent;
