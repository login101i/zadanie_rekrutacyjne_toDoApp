import React from "react";
import "./Input.styles.scss";

export const Input = ({ onKeyPress, onChange, userInput, addToList }) => {
	return (
		<div className="userInput">
			<input
				onKeyPress={onKeyPress}
				placeholder="ENTER TASK"
				onChange={(e) => onChange(e.target.value)}
				value={userInput}
				type="text"
				className="input"
			/>
			{userInput && (
				<div
					className="addButton"
					onClick={() => addToList(this.state.userinput)}
				>
					ADD
				</div>
			)}
		</div>
	);
};
