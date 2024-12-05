import React from 'react';

export default function SuccessStory({ stateFunction }) {
	

	let handleButtonClick = () => {

		// Generate a random number between 0 to 99
		let randomNumber = Math.floor(Math.random() * 100);

		// change the state of Success component
		stateFunction(randomNumber);
	}

	return (
		<div>
			<hr />
			<h2 className='comp'>SuccessStory Comp.</h2>
			<div>
				<button onClick={handleButtonClick}>Generate Random Number</button>
			</div>
		</div>
	);
}
