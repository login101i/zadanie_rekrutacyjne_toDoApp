import React from "react";
import "./ToDoList.styles.scss";

export const ToDoList = ({ items, toDoCompleted, deleteTask }) => {
	return (
		<>
			{items.length > 0 && (
				<>
					<h1 className="todo">TO DO</h1>

					<div className="toDoListContainer">
						<ul className="toDoList">
							{items.map((item, index) => (
								<>
									<li key={index} onClick={(e) => deleteTask(index)}>
										{item}

										<button
											className="todoCompleted"
											onClick={(e) => toDoCompleted(item)}
										>
											DONE
										</button>
									</li>
								</>
							))}
						</ul>
					</div>
				</>
			)}
		</>
	);
};
