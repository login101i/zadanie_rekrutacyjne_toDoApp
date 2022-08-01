import React, { useContext } from "react";
import "./Timer.styles.scss";

export const Timer = ({ time, darkMode }) => {
	return <h1 className={darkMode && "darkMode"}>{time}</h1>;
};
