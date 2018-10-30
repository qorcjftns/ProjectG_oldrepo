import React, { Component } from 'react';
import './Map.css';

import Panel from '../objects/field/Panel';

import { loadMap } from '../../utils/MapLoader';

class Map extends Component {
	
	constructor() {
		super();
		
	}
	
	componentDidMount() {
		loadMap();
	}
	
	// Define renderer
	render() {
		var pos_1 = {x: 0, y: 0};
		var pos_2 = {x: 1, y: 0};
		var pos_3 = {x: 0, y: 1};
		const panels = [
			<Panel pos={pos_1} topColor="red"/>,
			<Panel pos={pos_2} topColor="red"/>,
			<Panel pos={pos_3} topColor="red"/>
		];
		
		return (
			<div className="Map">
				{panels}
			</div>
		);
	};
	
	state = {
		map_name: "default"
	}
}

export default Map;
