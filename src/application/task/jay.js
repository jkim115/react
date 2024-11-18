import React from "react";
import Amy from "./amy";

export default class Jay extends React.Component {
	// state is not required to do the given task, 
	// so we'll just use default constructor JavaScript provides

	render() {
		const myInfo = {
			name: "Jay",
			job: "Student",
			degree: "BA in Computer Science"
		};

		return (
			<div>
				<h3>This is from Jay component.</h3>
				{/*Pass myInfo as props to its child component*/}
				<Amy jaysData={myInfo} />
			</div>
		)
	}
}