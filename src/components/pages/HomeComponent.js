import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import logo from 'assets/img/logobig.png';

const HomeComponent = () => (
	<div className="home">
		<img src={logo} alt="logo"/>
		<div className="main-menu">
			<nav>
				<ul>
					<li><Link to='Game'>Start New Game</Link></li>
					<li className="inactive">Continue game</li>
					<li><Link to='About'>About</Link></li>
				</ul>
			</nav>
		</div>
		<div className="social">
			<nav>
				<ul>
					<li><a href="https://twitter.com/fredchaplin" target="_BLANK" alt="FCHAPLIN on Twitter"><i className="icon-twitter"></i></a></li>
					<li><a href="https://fb.me/RogueRedux" target="_BLANK" alt="Rogue Redux page on Facebook"><i className="icon-facebook"></i></a></li>
					<li><a href="https://github.com/FCHAPLIN/rogue-redux" target="_BLANK" alt="Rogue Redux source on Github"><i className="icon-github"></i></a></li>
				</ul>
			</nav>
		</div>
		<footer>Made with React+Redux+Love by @FCHAPLIN</footer>

	</div>

)



export default HomeComponent;
