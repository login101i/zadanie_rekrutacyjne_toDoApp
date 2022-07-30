import React from "react";
import "./DoneList.styles.scss";

export const DoneList = ({ toDoItems, doneItems, updateLists, darkMode }) => {
	const handleDelete = (item) => {
		const newArray = doneItems.filter((doneItem) => doneItem !== item);
		updateLists(toDoItems, newArray);
	};
	return (
		<>
			{doneItems.length > 0 && <h1 className="done">DONE</h1>}

			{doneItems.length > 0 && (
				<>
					<div className="doneListContainer ">
						<ul className="doneList ">
							{doneItems.map((item, index) => (
								<div className="flex borderBottom" key={index}>
									<li
										onClick={(e) => handleDelete(item)}
										className={darkMode ? " darkMode" : ""}
									>
										{item}
									</li>
									<span>✔ </span>
								</div>
							))}
						</ul>
					</div>
				</>
			)}
		</>
	);
};
