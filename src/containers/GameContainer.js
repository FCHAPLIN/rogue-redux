import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'redux'
import {mapRequestStartAction} from 'actions/MapActions'
import {playerMoveAction} from 'actions/PlayerActions'
import MapComponent from 'components/game/map/MapComponent'

class GameContainer extends Component{
    constructor(props){
        super(props);

        this.command= this.command.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;

        if (Event.prototype.initEvent) {
          var evt = window.document.createEvent('UIEvents');
          evt.initUIEvent('resize', true, false, window, 0);
          window.dispatchEvent(evt);
        } else {
          window.dispatchEvent(new Event('resize'));
        }
        dispatch(mapRequestStartAction());
        document.querySelectorAll('.command-input')[0].focus();
    }

    command(event){
        this.props.dispatch(playerMoveAction(event.key));
        console.log(event.key);
    }

    render() {
        const { data } = this.props
        return (
            <div>
              <input className="command-input" onKeyDown={this.command}></input>
              <MapComponent data={ this.props } />
            </div>
        )
    }
}

const mapStateToProps = (store) => {

    return {
        player: store.player,
        map:store.map
    };
}


export default connect(mapStateToProps)(GameContainer)
