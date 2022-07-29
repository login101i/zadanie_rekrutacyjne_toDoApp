import React from "react";
import "./DoneList.styles.scss";

export const DoneList = ({ doneItems, handleDelete }) => {
	return (
		<>
			{doneItems.length > 0 && <h1 className="done">DONE</h1>}

			{doneItems.length > 0 && (
				<>
					<div className="doneListContainer">
						<ul className="doneList">
							{doneItems.map((item, index) => (
								<li key={index} onClick={(e) => handleDelete(index)}>
									{item} <span>✔ </span>
								</li>
							))}
						</ul>
					</div>
				</>
			)}
		</>
	);
};
