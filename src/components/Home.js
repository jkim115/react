import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
	return (
		<>
				<h1>Home</h1>
				<div>
					<NavLink to='/topic' className='button' activeclassname='true'>
						Click Me!
					</NavLink>
				</div>
		</>
	);
}

export default Home;
