import React, {Component} from 'react'
import { Router, Route, browserHistory, Redirect } from 'react-router';
import PlayerContainer from 'containers/PlayerContainer'
import GameContainer from 'containers/GameContainer'
import StatsContainer from 'containers/StatsContainer'
import HomeContainer from 'containers/HomeContainer'
import AboutComponent from 'components/pages/AboutComponent'

class Root extends Component {
	render() {
		return(
			<Router history={browserHistory}>
				<Redirect from="/" to="Home" />
              	<Route name="Player" path="/player" component={PlayerContainer} />
              	<Route name="Game" path="/game" component={GameContainer} />
              	<Route name="Stats" path="/statistics" component={StatsContainer} />
				<Route name="About" path="/about" component={AboutComponent} />
				<Route name="Home" path="/home" component={HomeContainer} />
    	</Router>
		);
	}
}

export default Root;
