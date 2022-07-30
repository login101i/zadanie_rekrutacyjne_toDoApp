import React from "react";
import "../AppContainer/AppContainer.styles.scss";
import { DarkModeButton } from "../DarkModeButton/DarkModeButton.component";

export const AppContainer = ({ darkMode, handleDarkMode, children }) => {
	return (
		<div className="App">
			<div className={darkMode ? "container darkMode" : "container"}>
				{children}
			</div>
			<DarkModeButton darkMode={darkMode} handleDarkMode={handleDarkMode} />
		</div>
	);
};
