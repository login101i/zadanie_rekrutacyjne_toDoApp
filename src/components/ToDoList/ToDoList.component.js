import React from "react";
import "./ToDoList.styles.scss";

export const ToDoList = ({ toDoItems, doneItems, updateLists }) => {
	const toDoCompleted = (item) => {
		const newArray = toDoItems.filter((doDoItem) => doDoItem !== item);
		doneItems.push(item);
		updateLists(newArray, doneItems);

		if (toDoItems.length === 1) {
			alert("Good job!", "You clicked the button!", "success");
		}
	};

	const deleteTask = (item) => {
		const newArray = toDoItems.filter((doDoItem) => doDoItem !== item);
		updateLists(newArray, doneItems);
	};

	return (
		<>
			{toDoItems.length > 0 && (
				<>
					<h1 className="todo">TO DO</h1>
					<div className="toDoListContainer">
						<ul className="toDoList">
							{toDoItems.map((item, index) => (
								<div className="flex borderBottom" key={index}>
									<li onClick={(e) => deleteTask(item)}>{item}</li>
									<button
										className="todoCompleted"
										onClick={(e) => toDoCompleted(item)}
									>
										DONE
									</button>
								</div>
							))}
						</ul>
					</div>
				</>
			)}
		</>
	);
};
