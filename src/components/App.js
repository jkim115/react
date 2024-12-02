import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Home from './Home';
import Topic from './Topic';
import TopicDetail from './TopicDetail';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { name: 'Jay' };
	}

	render() {
		return (
			<Router>
				<Routes>
				<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/topic' element={<Topic />} />
					<Route path='/topic/:num' element={<TopicDetail />} />
				</Routes>
			</Router>
		);
	}
}

export default App;
