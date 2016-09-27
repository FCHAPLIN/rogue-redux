import { connect } from 'react-redux'
import {  playerClassChangeAction,
          playerNameChangeAction,
          playerSubmitAction} from 'actions'
import PlayerCreationComponent from 'components/game/character/PlayerCreationComponent'

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(playerSubmitAction())
    },
    onClassChange: (e) => {
      dispatch(playerClassChangeAction(e.nativeEvent.target.value))
    },
    onNameChange: (e) => {
      dispatch(playerNameChangeAction(e.nativeEvent.target.value))
    }
  }
}

const PlayerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerCreationComponent)

export default PlayerContainer;
