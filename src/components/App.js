import React, {Component, PropTypes} from 'react'
import TriggerButton from 'components/game/character/TriggerButton'
import Displayer from 'components/game/character/Displayer'
import Selector from 'components/game/character/Selector'
import Header from 'components/pages/partials/Header'


const App = ({onClick, onChange, value}) => (

  <div>
    <Header/>
    <TriggerButton onClick={onClick}/>
    <Selector onChange={onChange}/>
    <Displayer value={value}/>
  </div>
)

App.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default App;
