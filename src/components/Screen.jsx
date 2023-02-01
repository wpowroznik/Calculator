import React from "react";

const Screen = ({ result, operation }) => {
	return (
		<div className='screen'>
			<p className="result">{result}</p>
			<p className="operation">{operation === "" ? 0 : operation}</p>
		</div>
	);
};

export default Screen;
