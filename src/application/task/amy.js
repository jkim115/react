import React from "react";

// functional component

// destructuring props, so we can access each properties without the object name
const Amy = ( {jaysData: {name, job, degree}} ) => {

	const myInfo = {
		name: "Amy",
		job: "Nurse",
		degree: "BS in Nursing"
	};

	return (
		<div>
			<h3>This is from Amy component</h3>
			<p>Hi, my name is <strong>{myInfo.name}</strong></p>
			<p>I have <strong>{myInfo.degree}</strong> degree.</p>
			<p>And I am currently working as a <strong>{myInfo.job.toLowerCase()}</strong>.</p>

			<p>Let me introduce my best friend, <strong>{name}</strong></p>
			<p>He has <strong>{degree}</strong>, but still is a <strong>{job}</strong>.</p>
		</div>
	)
};

export default Amy;