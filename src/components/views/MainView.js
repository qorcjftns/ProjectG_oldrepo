import React, { Component } from 'react';
import './MainView.css';

import Map from './Map';

class MainView extends Component {
	
	constructor() {
		super();
		
	}
	
	componentDidMount() {
		
	}
	
	// Define renderer
	render() {
		return (
			<div className="MainView">
				<Map />
			</div>
		);
	};
	
}

export default MainView;
