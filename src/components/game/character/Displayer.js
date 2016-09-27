import React, {Component, PropTypes} from 'react'

const Displayer = ({value}) => (
	<div>
		<h2>Value</h2>
		<p>{value}</p>
	</div>
)

Displayer.propTypes = {
  value: PropTypes.string
}

export default Displayer;
