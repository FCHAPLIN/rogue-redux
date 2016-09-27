import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'

const Header = () => (
  <div>
    <span><Link to='Home'>Title</Link></span>
    <nav>
      <ul>
        <li><Link to='Home'>Home</Link></li>
        <li><Link to='Player'>Player</Link></li>
        <li><Link to='Game'>Game</Link></li>
        <li><Link to='About'>About</Link></li>
      </ul>
    </nav>
  </div>
)

export default Header;
