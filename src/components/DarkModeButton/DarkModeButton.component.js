import React from "react";
import "./DarkModeButton.styles.scss";
import lightModeIcon from "../../assets/icons/brightness.png";
import darkModeIcon from "../../assets/icons/lightMode.png";

export const DarkModeButton = ({ darkMode, handleDarkMode }) => {
	return (
		<>
			<div className="darkModeButton" onClick={handleDarkMode}>
				<img
					src={darkMode ? lightModeIcon : darkModeIcon}
					className="darkModeIcon"
				/>
			</div>
		</>
	);
};
