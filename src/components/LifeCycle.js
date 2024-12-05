import React, { Component } from 'react';

export default class LifeCycle extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currCountry: 'none',
			prevCountry: 'none',
		};
	}

	handleButtonClick = () => {
		let countries = ['Korea', 'USA', 'India', 'Japan', 'France'];

		// Pick a random country and set it to a new state
		this.setState({
			currCountry: countries[Math.floor(Math.random() * countries.length)],
		});
	};

	componentDidMount() {
		console.log('componentDidMount()');
		// we'll change the state 3 seconds after render()
		setTimeout(() => {
			this.setState({
				currCountry: 'Click the button below',
			});
		}, 3000);
	}

	shouldComponentUpdate(nextProps, nextState) {
		// if the newly generated country is the same as the current one,
		// we don't need to re-render the component
		return nextState.currCountry != this.state.currCountry;
	}

	// It's called before React updates the DOM after the state changes
	getSnapshotBeforeUpdate(prevProps, prevState) {
		return {
			prevState,
			prevProps,
		}; // not much to do
	}

	componentDidUpdate(prevProps, prevState) {
		// After the DOM gets updated, force React to update prevCountry
		// and re-render the component without calling shouldComponentUpdate()
		if (this.state.currCountry != prevState.currCountry) {
			this.state.prevCountry = prevState.currCountry;
			this.forceUpdate();	// this way of updating should definitely be avoided!
		}
	}

	// It's called when the component gets destroyed
	componentWillUnmount() {
		// we could do some cleanup here
	}

	render() {
		return (
			<div>
				<hr />
				<h2 className='comp'>LifeCycle Comp. Q9-10</h2>
				<p>
					Current Country: <strong>{this.state.currCountry}</strong>
				</p>
				<p>Previous Country: {this.state.prevCountry}</p>

				<div>
					<button onClick={this.handleButtonClick}>
						Generate Random Country
					</button>
				</div>
			</div>
		);
	}
}
