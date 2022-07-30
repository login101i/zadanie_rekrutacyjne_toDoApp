import { useState } from "react";
import "./Input.styles.scss";

export const Input = ({ addItemToList, darkMode }) => {
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
				className={darkMode ? "darkMode input " : "input"}
			/>
			{userInput && (
				<div
					className={darkMode ? "addButton darkMode" : "addButton"}
					onClick={() => addToList(userInput)}
				>
					ADD
				</div>
			)}
		</div>
	);
};
