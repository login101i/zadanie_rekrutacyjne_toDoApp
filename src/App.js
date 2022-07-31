import React, { Component } from "react";

import { Timer, Input, ToDoList, DoneList } from "./components";
import { AppContainer } from "./components";
import { useFetchTasks } from "./utils/useFetchTasks";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toDoItems: [],
			doneItems: [],
			fetchToDos: [],
			time: setInterval(
				() => this.setState({ time: new Date().toLocaleTimeString() }),
				1000
			),
			darkMode: "false"
		};
	}

	addItemToList = (inputValue) => {
		this.setState((prevState) => ({
			...prevState,
			toDoItems: [...prevState.toDoItems, inputValue]
		}));
	};

	updateLists = (toDoItems, doneItems) => {
		this.setState((prevState) => ({
			...prevState,
			toDoItems,
			doneItems
		}));
	};

	handleDarkMode = () => {
		this.setState((prevState) => ({
			...prevState,
			darkMode: !prevState.darkMode
		}));
	};

	render() {
		return (
			<>
				<AppContainer
					darkMode={this.state.darkMode}
					handleDarkMode={this.handleDarkMode}
				>
					<Timer time={this.state.time} darkMode={this.state.darkMode} />
					<Input
						addItemToList={this.addItemToList}
						darkMode={this.state.darkMode}
					/>
					<ToDoList
						toDoItems={this.state.toDoItems}
						doneItems={this.state.doneItems}
						updateLists={this.updateLists}
						darkMode={this.state.darkMode}
					/>

					<DoneList
						toDoItems={this.state.toDoItems}
						doneItems={this.state.doneItems}
						handleDelete={this.handleDelete}
						updateLists={this.updateLists}
						darkMode={this.state.darkMode}
					/>
				</AppContainer>
			</>
		);
	}
}
