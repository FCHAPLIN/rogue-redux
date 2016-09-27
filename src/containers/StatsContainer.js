import { connect } from 'react-redux'
import {CHANGE_VALUE, SELECT_VALUE} from 'actions'
import App from 'components/App'

const mapStateToProps = (state) => {
  return {
    value:state.app.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(CHANGE_VALUE())
    },
    onChange: (e) => {
      dispatch(SELECT_VALUE(e.nativeEvent.target.value))
    }
  }
}

const StatsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default StatsContainer;
