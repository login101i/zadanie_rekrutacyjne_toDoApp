import React from "react";
import ReactDom from "react-dom";
import "./Modal.styles.scss";

export const Modal = ({ title, setIsOpen }) => {
	return ReactDom.createPortal(
		<>
			<div className="modalContainer">
				<h1>{title}</h1>
				<button onClick={() => setIsOpen(false)}>close </button>
			</div>
		</>,
		document.getElementById("portal")
	);
};
