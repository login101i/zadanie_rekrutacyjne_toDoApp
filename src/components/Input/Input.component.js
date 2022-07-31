import { useState } from "react";
import { Modal } from "../Modal/Modal.component";
import "./Input.styles.scss";

export const Input = ({ addItemToList, darkMode }) => {
	const [userInput, setUserInput] = useState("");
	const [isOpen, setIsOpen] = useState(false);

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
			setIsOpen(true);
		} else {
			addItemToList(inputValue);
			setUserInput("");
		}
	};

	return (
		<div className="userInput">
			<input
				onKeyPress={handleKeyPress}
				placeholder="ENTER COUNTRY TO VISIT"
				onChange={(e) => handleChangeInput(e.target.value)}
				value={userInput}
				type="text"
				className={darkMode ? "darkMode input " : "input"}
				data-testid="input-component"
			/>
			{userInput && (
				<div
					className={darkMode ? "addButton darkMode" : "addButton"}
					onClick={() => addToList(userInput)}
					data-testid="div-add-element"
				>
					ADD
				</div>
			)}
			{isOpen && (
				<Modal
					title="Empty input! Plese try again"
					setIsOpen={setIsOpen}
					data-testid="modal-component"
				/>
			)}
		</div>
	);
};
