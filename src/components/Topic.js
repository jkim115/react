import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/* 
	keys will be used here for display, and values will 
	be used as params to TopicDetail Component
*/
let methodMap = new Map([
	['componentDidMount', 1],
	['shouldComponentUpdate', 2],
	['getSnapshotBeforeUpdate', 3],
	['componentDidUpdate', 4],
	['componentWillUnmount', 5],
]);


class Topic extends Component {
	constructor(props) {
		super(props);
		this.state = {
			method: 'React Lifecycle',
			prevMethod: 'none',
		};
		console.log('Constructor is called');
	}

	// Once we click on the button, we will show a lifecycle method randomly
	getRandomMethod = () => {
		let methods = [...methodMap.keys()];
		return methods[Math.floor(Math.random() * methods.length)];
	};

	handleClick = (event) => {
		console.log(methodMap.get(this.state.method))
		this.setState({
			method: this.getRandomMethod(),
		});

		event.preventDefault();
	};

	/* 
		This method is called after render(). We can here do something
		by ourselves, not depending on any user action. We will just change the state
		to "Click on the button below!" 3 seconds after the rendering.
	*/
	componentDidMount() {
		console.log('componentDidMount()');
		setTimeout(() => {
			this.setState({
				method: 'Click on the button below!',
			});
		}, 3000);
	}

	/*
		This method is called right after the state changes (by the button click).
		@nextState is the state updated by setState(). 
		If the state is the same as the current one, we don't really need to re-render 
		the component. So, we tell React not to re-render by returning false. 
	*/
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate()');
		return this.state.method != nextState.method;
	}

	/*
		This method is called after render() but before the React DOM is updated.
		It captures the props and states that have not been updated yet, allowing us
		to do something with them before the DOM gets updated. 
	*/
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('getSnapshotBeforeUpdate()');
		return null; // not much to do
	}

	/*
		This method is called after render() and the React DOM
		is updated accordingly. We will update the prevMethod state to record the
		previous method. However, our shouldComponentUpdate() may not return true
		regarless of the update, as it only compares 'method' of the current and 
		previous states, not 'prevMethod' of them.
		Thus, we will use forceUpdate() here after changing the state so that 
		in any case, it bypasses shouldComponentUpdate() and re-renders the change.
		This is not a good way to do it but just for showing it works -- Q3.
	*/
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate()');
		if (
			this.state.method != prevState.method &&
			prevState.method != 'Click on the button below!' &&
			prevState.method != 'React Lifecycle'
		) {
			this.setState(
				{
					prevMethod: prevState.method,
				},
				() => {
					this.forceUpdate();
				}
			);
		}
	}

	/*
		This method is called just before the component is destoyed. In our case,
		it will be called when we click on the go-back-to-home button. We could do
		some necessary cleanup here, but for our app, we will just log it.
	*/
	componentWillUnmount() {
		console.log('componentWillUnmount()');
	}

	render() {
		console.log('render()');
		return (
			<div style={{ fontFamily: 'monospace' }}>
				<h2 style={{ color: 'indigo' }}>React Component Lifecycle</h2>
				<div>
					<h4>{this.state.method}</h4>
				</div>
				<div>
					<h6>Previous method was {this.state.prevMethod}</h6>
				</div>
				<div>
					<button onClick={this.handleClick}>Keep Clicking Me</button>
				</div>
				<div>
					<br />
					{/* Upon clicking the link, we pass the corresponding value 
					as params to TopicDetail comp */}
					<div>
						<NavLink
							to={`/topic/${methodMap.get(this.state.method)}`}
							className='button'
							activeclassname='true'>
							See the details of this method
						</NavLink>
					</div>
					<br /><br /><br />
					<div>
						<NavLink to='/home' className='button' activeclassname='true'>
							Click here to go back Home
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
}

export default Topic;
