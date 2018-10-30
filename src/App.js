import React, { Component } from 'react';
import './App.css';


import { fire, getFireDB } from './utils/Firebase';

import MainView from './components/views/MainView';

class App extends Component {
	
	// Define state
	state = {counter: 0};
	
	// Define defaults
	constructor() {
		super();
		fire();
		this.setState({counter: 0});
	}
	
	componentDidMount() {
		getFireDB();
	}
	
	// Define renderer
	render() {
		return (
			<div className="App">
				<MainView />
			</div>
		);
	};
}

export default App;
