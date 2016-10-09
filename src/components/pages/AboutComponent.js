import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import logo from 'assets/img/logosmall.png';

const AboutComponent = () => (
	<div className="about">
		<img src={logo} alt="logo"/>
		<div className="intro">
			<h2>A roguelike build with Webpack/React/Redux</h2>
			<p>Why the hell would you build a project like this ? Well... Why not ?</p>

			<h2>There will be a ton of interesting things here, soon.</h2>
			<p></p>
			<h2>Thanks to the sprites designers : </h2>
			<p><a href="http://hanatoa.deviantart.com/">Hanatoa: </a><a href="http://hanatoa.deviantart.com/art/Random-Enemies-Sprites-vx-ace-558695978">the foes and heroe sprites</a></p>
			<p><a href="http://ayene-chan.deviantart.com/">Ayene-chan: </a><a href="http://ayene-chan.deviantart.com/art/RPG-Maker-VX-Gate-IV-290332458">the doors sprites</a></p>
			<p>I didn't found the author of the floor and wall sets. If he recognize it's work, i'll make him somme room here :)</p>
		</div>
		<div className="description">
			<p></p>
		</div>
		<Link to='Home'>Back</Link>
	</div>
)

export default AboutComponent;
