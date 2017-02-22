import React, {Component, PropTypes} from 'react'
import logo from 'assets/img/logosmall.png';
import {Link} from 'react-router'

class Interface extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
      const props = this.props;
      const inventoryToggle = props.onInventoryClick;
      const startToggle = props.onStartClick;
      const infoModalToggle = props.onInfoClick;
      return(
        <div className="interface-panel">
            <div className="branding">
                <Link to='Home'><img src={logo} alt="logo"/></Link>
            </div>
            <div>
                <ul>
                    <li>
                        <span className="item-important">{props.data.player.name}</span>
                    </li>
                    <li>
                        <span className="item class">{props.data.player.class}</span>
                    </li>

                  </ul>
              </div>
              <div>
                  <ul>
                    <li>
                        <span className="item">Strength: {props.data.player.traits.strength}</span>
                    </li>
                    <li>
                        <span className="item">Intelect: {props.data.player.traits.intelect}</span>
                    </li>
                    <li>
                        <span className="item">Dexterity: {props.data.player.traits.dexterity}</span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                  <li>
                      <span className="item">Life : {props.data.player.life}/{props.data.player.maxLife}</span>
                  </li>
                  <li>
                      <span className="item">Experience : {props.data.player.experience}</span>
                  </li>
                  <li>
                      <span className="item">Gold: {props.data.player.gold}</span>
                  </li>
              </ul>
          </div>
            <ul>
                <li><div><Link className="back-menu" to='Home'><i className="icon-library"></i></Link></div></li>
                <li><div onClick={inventoryToggle}>inventory</div></li>
                <li><div onClick={infoModalToggle}>info</div></li>
                <li><div onClick={startToggle}>start</div></li>
            </ul>
        </div>
      )
    }
}
export default Interface;
