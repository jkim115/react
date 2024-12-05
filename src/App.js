import './App.css';
import React from 'react';
import Success from './components/Success';
import LifeCycle from './components/LifeCycle';

let quote =
	'Successful people are not gifted; they just work hard, then succeed on purpose';

function App() {
	return (
		<div>
			<Success message={quote}/>
			<LifeCycle />
		</div>
	);
}

export default App;
