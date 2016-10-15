import React, {Component, PropTypes} from 'react'
import logo from 'assets/img/logosmall.png';
import {Link} from 'react-router'

const Interface = (props) => (
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
        <div><Link className="back-menu" to='Home'><i className="icon-library"></i></Link></div>
    </div>
)

export default Interface;
