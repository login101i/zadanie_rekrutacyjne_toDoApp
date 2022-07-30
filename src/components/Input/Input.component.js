import { useState } from "react";
import "./Input.styles.scss";

export const Input = ({ addItemToList }) => {
	const [userInput, setUserInput] = useState("");

	const handleChangeInput = (inputValue) => {
		setUserInput(inputValue);
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			addToList(userInput);
		}
	};

	const addToList = (inputValue) => {
		if (userInput === "") {
			alert("empty input");
		} else {
			addItemToList(inputValue);
			setUserInput("");
		}
	};

	return (
		<div className="userInput">
			<input
				onKeyPress={handleKeyPress}
				placeholder="ENTER TASK"
				onChange={(e) => handleChangeInput(e.target.value)}
				value={userInput}
				type="text"
				className="input"
			/>
			{userInput && (
				<div className="addButton" onClick={() => addToList(userInput)}>
					ADD
				</div>
			)}
		</div>
	);
};
