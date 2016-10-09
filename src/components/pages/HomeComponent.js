import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import logo from 'assets/img/logobig.png';

const HomeComponent = () => (
	<div className="home">
		<img src={logo} alt="logo"/>
		<div className="main-menu">
			<nav>
				<ul>
					<li><Link to='Player'>Start New Game</Link></li>
					<li className="inactive">Continue game</li>
					<li><Link to='About'>About</Link></li>
				</ul>
			</nav>
		</div>
		<div className="social">
			<nav>
				<ul>
					<li><i className="icon-twitter"></i></li>
					<li><i className="icon-facebook"></i></li>
					<li><i className="icon-github"></i></li>
				</ul>
			</nav>
		</div>
		<footer>Made with React+Redux+Love by @FCHAPLIN</footer>
	</div>
)



export default HomeComponent;
