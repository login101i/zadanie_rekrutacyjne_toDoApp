import React, { useState, useEffect, useRef } from "react";
import { Modal, Loader } from "../../components";
import { useFetchTasks } from "../../utils/useFetchTasks";
import { List } from "react-virtualized";

import "./ToDoList.styles.scss";

export const ToDoList = ({ toDoItems, doneItems, updateLists, darkMode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isVirtualizedList, setIsVirtualizedList] = useState(false);
	const [numberOfItems, setNumberOfItems] = useState(12);
	const newNumberOfItems = 4;
	const scrollContainer = useRef();
	const { fetchData, isLoading, countries } = useFetchTasks();

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		updateLists(
			countries
				.slice(0, isVirtualizedList ? 200 : numberOfItems)
				.map((item) => item.name.official),
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

	const handle200Items = () => {
		setIsVirtualizedList(true);
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<button className="virtualizedBtn" onClick={handle200Items}>
						Or get 200 countries at once
					</button>
					<h1 className="todo">TO DO</h1>
					<div
						className="toDoListContainer"
						onScroll={onScroll}
						ref={isVirtualizedList ? null :scrollContainer}
					>
						{!isVirtualizedList && (
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
						)}
						{isVirtualizedList && (
							<List
								width={700}
								height={500}
								rowHeight={50}
								rowCount={countries.length}
								rowRenderer={({ key, index, style, parent }) => {
									const country = countries[index];
									return (
										<ul className="toDoList" key={key}>
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
															darkMode
																? "darkMode  todoCompleted "
																: "todoCompleted"
														}
														onClick={(e) => toDoCompleted(item)}
													>
														DONE
													</button>
												</div>
											))}
										</ul>
									);
								}}
							/>
						)}
					</div>
				</>
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
