import React, { Component } from 'react';

export default class UserSignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: 'Type your username and password',
		};

		this.usernameRef = React.createRef();
		this.passwordRef = React.createRef();
	}

	handleButtonClick = (evt) => {
		evt.preventDefault();

		let username = this.usernameRef.current.value;
		let message = `Hi, ${username}!`;

		// set the state to the given username for display
		this.setState({
			message,
		});
	};

	render() {
		return (
			<div>
				<hr />
				<h2 className='comp'>UserSignIn Comp.</h2>
				<div>
					<div>
						Username:
						<input
							type='text'
							placeholder='Enter username'
							ref={this.usernameRef}
						/>
					</div>
					<div>
						Password:
						<input
							type='password'
							placeholder='Enter password'
							ref={this.passwordRef}
						/>
					</div>
					<button onClick={this.handleButtonClick}>Sign In</button>
				</div>
				<div>
					<p style={{fontFamily: 'sans-serif', color: 'green'}}>{this.state.message}</p>
				</div>
			</div>
		);
	}
}
