import React from 'react';
import UserSignIn from './UserSignIn';

export default function SuccessChild({
	name,
	address,
	stateChangeFunction,
	Component,
}) {
	return (
		<div>
			<hr />
			<h2 className='comp'>SuccessChild Comp.</h2>
			<p>
				Name: {name} <br /> Address: {address}
			</p>

			{/* SuccessStory comp. has been passed down here as props */}
			<Component stateFunction={stateChangeFunction} />
		</div>
	);
}
