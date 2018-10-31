import React, { Component } from 'react';
import './Map.css';

import Block from '../objects/field/Block';

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
		var pos_1 = {x: 0, y: 0, z: 0};
		var pos_2 = {x: 1, y: 0, z: 0};
		var pos_3 = {x: 0, y: 1, z: 0};
		var pos_4 = {x: -1, y: 0, z: 0};
		var pos_5 = {x: 0, y: -1, z: 0};
		var pos_6 = {x: 0, y: 0, z: 1};
		const blocks = [
			<Block pos={pos_1} topColor="#608038"/>,
			<Block pos={pos_2} topColor="#608038"/>,
			<Block pos={pos_3} topColor="#608038"/>,
			<Block pos={pos_4} topColor="#608038"/>,
			<Block pos={pos_5} topColor="#608038"/>,
			<Block pos={pos_6} topColor="#608038"/>,
		];
		
		return (
			<div className="Map">
				{blocks}
			</div>
		);
	};
	
	state = {
		map_name: "default"
	}
}

export default Map;
