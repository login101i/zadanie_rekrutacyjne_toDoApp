import { createContext, useState } from "react";

const INITIAL_STATE = {
	toDoItems: [],
	doneItems: [],
	fetchToDos: [],
	darkMode: "false",
};

export const AppContext = createContext(INITIAL_STATE);

export const AppContextProvider = ({ children }) => {
	const [appState, setAppState] = useState(INITIAL_STATE);

	const handleDarkMode = () => {
		setAppState((prevState) => ({
			...prevState,
			darkMode: !prevState.darkMode
		}));
	};

	const addItemToList = (inputValue) => {
		setAppState((prevState) => ({
			...prevState,
			toDoItems: [inputValue, ...prevState.toDoItems]
		}));
	};

	const updateLists = (toDoItems, doneItems) => {
		setAppState((prevState) => ({
			...prevState,
			toDoItems,
			doneItems
		}));
	};

	

	return (
		<AppContext.Provider
			value={{
				appState,
				handleDarkMode,
				addItemToList,
				updateLists
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
