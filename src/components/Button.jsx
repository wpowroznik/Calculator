import React from "react";

const Button = ({ item , handleOperator, handleNumber}) => {
	return (
		<button className={item.class} value={item.display} onClick={item.class === "operator" ? handleOperator : handleNumber} >
         {!item.src ? item.display : <img src={item.src}/>}
		</button>

	);
};

export default Button;
