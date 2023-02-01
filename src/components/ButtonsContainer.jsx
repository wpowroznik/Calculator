import React from "react";
import Button from "./Button";
import { btnValues } from "./ButtonsValue";

const ButtonsContainer = ({handleOperator, handleNumber}) => {
	return (
		<div className='button-container'>
			{btnValues.map((item, index) => (
				<Button key={index} item={item} handleNumber={handleNumber} handleOperator={handleOperator} />
			))}
		</div>
	);
};

export default ButtonsContainer;
