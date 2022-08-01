import { useState } from "react";
import "./Timer.styles.scss";

export const Timer = ({ darkMode }) => {
	const [time, setTime] = useState(new Date().toLocaleTimeString());
	

	setTimeout(() => {
		setTime(new Date().toLocaleTimeString());
	}, 1000);

	return <h1 className={darkMode && "darkMode"}>{time}</h1>;
};
