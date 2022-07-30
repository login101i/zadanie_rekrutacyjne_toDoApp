import React, { Component } from "react";
import "./App.scss";

import { Timer, Input, ToDoList, DoneList } from "./components";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toDoItems: [],
			doneItems: [],
			time: setInterval(
				() => this.setState({ time: new Date().toLocaleTimeString() }),
				1000
			)
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

	render() {
		return (
			<div className="App">
				<div className="container">
					<Timer time={this.state.time} />
					<Input addItemToList={this.addItemToList} />
					<ToDoList
						toDoItems={this.state.toDoItems}
						doneItems={this.state.doneItems}
						updateLists={this.updateLists}
					/>

					<DoneList
						toDoItems={this.state.toDoItems}
						doneItems={this.state.doneItems}
						handleDelete={this.handleDelete}
						updateLists={this.updateLists}
					/>
				</div>
			</div>
		);
	}
}
