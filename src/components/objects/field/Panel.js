import React, { Component } from 'react';

import './Panel.css';

class Panel extends Component {
	
	constructor() {
		super();
	}
	
	// Define renderer
	render() {
		const {pos, topColor} = this.props;
		
		const topstyle = {
			background: topColor
		};
		
		const panelstyle = {
			top: 	(pos.x * 100),
		};
		
		return (
			<div className="Panel" style={panelstyle}>
				<div className="Block">
					<div className="PanelTop" style={topstyle}></div>
					<div className="PanelBottom"></div>
					<div className="PanelLeft"></div>
					<div className="PanelRight"></div>
					<div className="PanelFront"></div>
					<div className="PanelBack"></div>
				</div>
			</div>
		);
	};
}

export default Panel;
