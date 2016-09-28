import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'redux'
import {mapRequestStartAction} from 'actions'
import MapComponent from 'components/game/map/MapComponent'

class GameContainer extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(mapRequestStartAction())
    }
    componentWillReceiveProps(nextProps) {

    }

    render() {
        const { data } = this.props
        return (
            <MapComponent data={ data }/>
        )
    }
}

const mapStateToProps = (store) => {
    console.log(`mapStateToProps ${store}`);
    return {
        player: store.player
    };
}


export default connect(mapStateToProps)(GameContainer)
