import { connect } from 'react-redux'
import {CHANGE_VALUE, SELECT_VALUE} from 'actions'
import MapComponent from 'components/game/map/MapComponent'

const mapStateToProps = (state) => {
  state
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapComponent)

export default GameContainer;
