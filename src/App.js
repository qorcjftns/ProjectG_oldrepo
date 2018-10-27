import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import { fire } from './Firebase'

class App extends Component {
	
	constructor() {
		super();
		fire();
	};
	
	state = {
		counter: 0
	};

	handleIncrease = () => {
		this.setState({
			counter: (this.state.counter + 1)
		});	
	};
	
	render() {
		return (
			<div className="App">
				<NavBar />
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload..!
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
						>
						Learn React
					</a>
					Counter: {this.state.counter}
					<button onClick={this.handleIncrease}>+</button>
					
				</header>
			</div>
		);
	};
}

export default App;
