import React, { Component } from 'react';

import './Block.css';

class Block extends Component {
	
	constructor() {
		super();
	}
	
	// Define renderer
	render() {
		const {pos, topColor} = this.props;
		
		const topstyle = {
			background: topColor
		};
		
		var top = ((pos.x + pos.y) * 35) - (pos.z * 71) - 25;
		var left = ((pos.x - pos.y) * 70) - 50;
		var zindex = ((pos.x + pos.y) + 150) + (pos.z * 2);
		
		const blockstyle = {
			top: 		"calc(50% + " + top + "px)",
			left: 		"calc(50% + " + left + "px)",
			zIndex:		zindex,
		};
		
		return (
			<div className="Block" style={blockstyle}>
				<div className="PanelTop"><div className="PanelTopReal" style={topstyle}></div></div>
				<div className="PanelLeftRotate"><div className="PanelLeft"></div></div>
				<div className="PanelRightRotate"><div className="PanelRight"></div></div>
			</div>
		);
	};
}

export default Block;
