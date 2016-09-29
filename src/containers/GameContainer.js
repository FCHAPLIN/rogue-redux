import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'redux'
import {mapRequestStartAction} from 'actions/MapActions'
import MapComponent from 'components/game/map/MapComponent'

class GameContainer extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(mapRequestStartAction())
    }

    render() {
        
        const { data } = this.props
        return (
            <MapComponent data={ this.props }/>
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
