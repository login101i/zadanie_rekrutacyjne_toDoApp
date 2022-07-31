import React, { useState, useEffect, useRef } from "react";
import { Modal, Loader } from "../../components";
import { useFetchTasks } from "../../utils/useFetchTasks";

import "./ToDoList.styles.scss";

export const ToDoList = ({ toDoItems, doneItems, updateLists, darkMode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [numberOfItems, setNumberOfItems] = useState(10);
	const newNumberOfItems = 4;
	const scrollContainer = useRef();
	const { fetchData, isLoading, countries } = useFetchTasks();

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		updateLists(
			countries.slice(0, numberOfItems).map((item) => item.name.official),
			doneItems
		);
	}, [countries, numberOfItems]);

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

	const onScroll = (e) => {
		if (
			scrollContainer.current.clientHeight + e.target.scrollTop + 1 >=
			e.target.scrollHeight
		) {
			setNumberOfItems((prevState) => prevState + newNumberOfItems);
		}
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				toDoItems.length > 0 && (
					<>
						<h1 className="todo">TO DO</h1>
						<div
							className="toDoListContainer"
							onScroll={onScroll}
							ref={scrollContainer}
						>
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
												darkMode ? "darkMode  todoCompleted " : "todoCompleted"
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
					title="Good job! You have finished all your tasks!"
					setIsOpen={setIsOpen}
				/>
			)}
		</>
	);
};
