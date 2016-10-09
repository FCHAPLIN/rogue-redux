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
                <li>
                    <span className="item">Life : 20/20</span>
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
        <div></div>
    </div>
)

export default Interface;
