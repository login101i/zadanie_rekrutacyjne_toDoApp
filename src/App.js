import React, { Component } from "react";
import "./App.scss";

import { Timer, Input, ToDoList, DoneList } from "./components";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			userinput: "",
			time: setInterval(
				() => this.setState({ time: new Date().toLocaleTimeString() }),
				1000
			),
			done: [],
			temperature: 0
		};
	}

	handleChangeInput = (input) => {
		this.setState({
			userinput: input
		});
	};

	addToList = (input) => {
		if (this.state.userinput === "") {
			alert("empty input");
		} else {
			const newitems = this.state.items;
			newitems.push(input);
			this.setState({
				items: newitems,
				userinput: ""
			});
		}
	};

	deleteTask = (indexp) => {
		const newarray = this.state.items.filter((item, index) => index !== indexp);
		this.setState({
			items: newarray
		});
	};

	handleDelete = (indexp) => {
		const newarray = this.state.done.filter((item, index) => index !== indexp);
		this.setState({
			done: newarray
		});
	};

	toDoCompteted = (e) => {
		const donelist = this.state.done;
		donelist.push(e);
		this.setState({
			done: donelist
		});

		if (this.state.items.length === 1) {
			alert("Good job!", "You clicked the button!", "success");
		}
	};

	handleKeyPress = (event) => {
		if (event.key === "Enter") {
			this.addToList(this.state.userinput);
		}
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<Timer time={this.state.time} />
					<Input
						onKeyPress={this.handleKeyPress}
						onChange={this.handleChangeInput}
						userInput={this.state.userinput}
						addToList={this.addToList}
					/>
					<ToDoList
						items={this.state.items}
						toDoCompleted={this.toDoCompteted}
						deleteTask={this.deleteTask}
					/>
					<DoneList
						doneItems={this.state.done}
						handleDelete={this.handleDelete}
					/>
				</div>
			</div>
		);
	}
}
