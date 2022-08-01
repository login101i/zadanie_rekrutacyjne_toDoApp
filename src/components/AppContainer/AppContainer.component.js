import React from "react";
import { DarkModeButton } from "../DarkModeButton/DarkModeButton.component";
import "../AppContainer/AppContainer.styles.scss";

export const AppContainer = ({ darkMode, handleDarkMode, children }) => {
	return (
		<div className={darkMode ? "App darkMode" : "App"}>
			<div className={darkMode ? "container darkMode" : "container"}>
				{children}
			</div>
			<DarkModeButton darkMode={darkMode} handleDarkMode={handleDarkMode} />
		</div>
	);
};
