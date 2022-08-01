import React, { useState, useEffect, useContext } from "react";

import { Timer, Input, ToDoList, DoneList } from "./components";
import { AppContainer } from "./components";
import { AppContext } from "./context/App.context";

export const App = () => {
	const {
		appState: { toDoItems, doneItems, darkMode },
		handleDarkMode,
		addItemToList,
		updateLists
	} = useContext(AppContext);

	return (
		<>
			<AppContainer darkMode={darkMode} handleDarkMode={handleDarkMode}>
				<Timer darkMode={darkMode} />
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
