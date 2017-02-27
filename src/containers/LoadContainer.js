import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'redux'
import { loadGameAction } from 'actions/GameActions'

class LoadContainer extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const {dispatch} = this.props;

		dispatch(loadGameAction());


	}


	render() {
		const {data} = this.props;

		return (
			<div>

			</div>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		player: store.player,
		map: store.map,
		viewport: store.viewport,
		modals: store.modals,
		game: store.game,
		log: store.log
	};
}

export default connect(mapStateToProps)(LoadContainer)
