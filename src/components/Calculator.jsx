import React, { useState } from "react";
import Screen from "./Screen";
import ButtonsContainer from "./ButtonsContainer";
import { evaluate, log } from "mathjs";

const Calculator = () => {
	const [answer, setAnswer] = useState(false);
	const [operation, setOperation] = useState("");
	const [result, setResult] = useState("");

	const handleNumber = (e) => {
		const value = e.target.value;
		if (answer) {
			setOperation(value);
			setResult("");
			setAnswer(false);
		} else {
			setOperation((pre) => pre + value);
		}
	};

	const handleOperator = (e) => {
		const value = e.target.value;
		switch (value) {
			case "C":
				setResult("");
				setOperation("");
				break;
			case "delete":
				setOperation(operation.replace(/.$/, ""));
				break;
			case "=":
				if (Number(operation.slice(-1)) || operation.slice(-1) === "0") {
					if (result.slice(-1) === "%") {
						setResult(String(evaluate(result + "*" + operation)));
						setOperation("");
						setAnswer(true);
						break;
					} else {
						setResult(String(evaluate(result + operation)));
						setOperation("");
						setAnswer(true);
						break;
					}
				}
				break;
			case ".":
				if (!operation.includes(".") && operation.length > 0) {
					setOperation((pre) => pre + ".");
				}
				break;
			case "+ / -":
				if (operation > 0) {
					setOperation((pre) => "-" + pre);
				} else {
					setOperation((pre) => pre.replace("-", ""));
				}
				break;
			default:
				if (Number(operation.slice(-1)) || operation.slice(-1) === "0") {
					setResult((pre) => pre + operation + value);
					setOperation("");
				} else if (result.slice(-1) !== value && !answer) {
					const newLastOperator = result.replace(/.$/, value);
					setResult(newLastOperator);
				}
		}
	};
	return (
		<div className='calculator'>
			<Screen operation={operation} result={result} />
			<ButtonsContainer handleNumber={handleNumber} handleOperator={handleOperator} />
		</div>
	);
};

export default Calculator;
