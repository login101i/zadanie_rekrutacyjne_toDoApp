import React, { useState, useEffect } from "react";
import { Modal, Loader } from "../../components";
import { useFetchTasks } from "../../utils/useFetchTasks";

import "./ToDoList.styles.scss";

export const ToDoList = ({ toDoItems, doneItems, updateLists, darkMode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const { fetchData, isLoading, countries } = useFetchTasks();

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		updateLists(
			countries.slice(0, 8).map((item) => item.name.official),
			doneItems
		);
	}, [countries]);

	const toDoCompleted = (item) => {
		const newArray = toDoItems.filter((doDoItem) => doDoItem !== item);
		doneItems.push(item);
		updateLists(newArray, doneItems);
		setIsOpen(true);
	};

	const deleteTask = (item) => {
		const newArray = toDoItems.filter((doDoItem) => doDoItem !== item);
		updateLists(newArray, doneItems);
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				toDoItems.length > 0 && (
					<>
						<h1 className="todo">TO DO</h1>
						<div className="toDoListContainer">
							<ul className="toDoList">
								{toDoItems.map((item, index) => (
									<div className="flex borderBottom" key={index}>
										<li
											onClick={(e) => deleteTask(item)}
											className={darkMode ? " darkMode" : ""}
										>
											{item}
										</li>
										<button
											className={
												darkMode ? "todoCompleted darkMode" : "todoCompleted"
											}
											onClick={(e) => toDoCompleted(item)}
										>
											DONE
										</button>
									</div>
								))}
							</ul>
						</div>
					</>
				)
			)}

			{isOpen && toDoItems.length === 0 && (
				<Modal
					title="Good job! You have finished all your task!"
					setIsOpen={setIsOpen}
				/>
			)}
		</>
	);
};
