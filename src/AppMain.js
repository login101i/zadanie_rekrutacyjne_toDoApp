import React, { useState, useEffect, useContext } from "react";

import { Timer, Input, ToDoList, DoneList } from "./components";
import { AppContainer } from "./components";
import { useFetchTasks } from "./utils/useFetchTasks";
import { AppContext } from "./components/context/App.context";

export const AppMain = () => {
	const {
		appState: { toDoItems, doneItems, time, darkMode },
		handleDarkMode,
		addItemToList,
		updateLists
	} = useContext(AppContext);

	return (
		<>
			<AppContainer darkMode={darkMode} handleDarkMode={handleDarkMode}>
				{/* {/* <Timer time={time} darkMode={darkMode} /> */}
				<Input addItemToList={addItemToList} darkMode={darkMode} />
				<ToDoList
					toDoItems={toDoItems}
					doneItems={doneItems}
					updateLists={updateLists}
					darkMode={darkMode}
				/>

				<DoneList
					toDoItems={toDoItems}
					doneItems={doneItems}
					updateLists={updateLists}
					darkMode={darkMode}
				/>
			</AppContainer>
		</>
	);
};
