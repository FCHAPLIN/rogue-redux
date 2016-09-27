import React, {Component, PropTypes} from 'react'
import TriggerButton from 'components/TriggerButton'
import Displayer from 'components/Displayer'
import Selector from 'components/Selector'
import Header from 'components/partials/Header'


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
