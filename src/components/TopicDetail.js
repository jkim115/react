import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// sparse array with no element at index 0
let methodArray = [
	,
	'componentDidMount',
	'shouldComponentUpdate',
	'getSnapshotBeforeUpdate',
	'componentDidUpdate',
	'componentWillUnmount',
];

function TopicDetail(props) {
	let params = useParams();
	let param = params && params['num'] ? params['num'] : 0;

	let [count, setCount] = useState(0);

	let handleClick = () => {
		let next = count + 1;
		setCount(next);
	};

	return (
		<div style={{ fontFamily: 'monospace' }}>
			<h2>Topic Details</h2>
			<div>
				<p>
					This page is under construction. <br />
					The details of
					<strong> {methodArray[param]}</strong>() method will be here.
				</p>
				<p>While you wait, count how many times you've clicked!</p>
				<p># Clicks : {count}</p>
			</div>
			<div>
				<button onClick={handleClick}>Click Me!</button>
			</div>
			<br />
			<div>
				<NavLink to='/topic' className='button' activeclassname='true'>
					Go back to Topic page
				</NavLink>
			</div>
		</div>
	);
}

export default TopicDetail;
