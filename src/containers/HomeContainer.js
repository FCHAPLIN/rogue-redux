import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { dispatch } from 'redux';
import { Link } from 'react-router';
import logo from 'assets/img/logobig.png';
import {loadGameAction} from 'actions/GameActions'
import SavedGameService from 'services/SavedGameService';
import { browserHistory } from 'react-router';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.loadGame = this.loadGame.bind(this);
    }
    loadGame(){
    	debugger;
        this.props.dispatch(loadGameAction(this.savedGame));
		browserHistory.push('/game');
    }
    componentWillMount(){
        this.loadButtonClass = "inactive";
        let savedGameService = new SavedGameService();
        this.savedGame = savedGameService.getSavedGame();

        if (this.savedGame){
            this.loadButtonClass = "active";
        }
        debugger;
    }
    render() {
        return (
            <div className="home">
                <img src={logo} alt="logo"/>
                <div className="main-menu">
                    <nav>
                        <ul>
                            <li><Link to='Game'>Start New Game</Link></li>
                            <li className="{`load-game-button ${loadButtonClass}`}"
                                onClick={this.loadGame}>Continue game</li>
                            <li><Link to='About'>About</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="social">
                    <nav>
                        <ul>
                            <li><a href="https://twitter.com/fredchaplin" target="_BLANK" alt="FCHAPLIN on Twitter"><i
                                className="icon-twitter"/></a></li>
                            <li><a href="https://fb.me/RogueRedux" target="_BLANK" alt="Rogue Redux page on Facebook"><i
                                className="icon-facebook"/></a></li>
                            <li><a href="https://github.com/FCHAPLIN/rogue-redux" target="_BLANK"
                                   alt="Rogue Redux source on Github"><i className="icon-github"/></a></li>
                        </ul>
                    </nav>
                </div>
                <footer>Made with React+Redux+Love by @FCHAPLIN</footer>
            </div>
        );
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

export default connect(mapStateToProps)(HomeContainer)
