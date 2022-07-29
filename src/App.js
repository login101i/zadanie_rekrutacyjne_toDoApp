import React, { Component } from "react";
import "./App.scss";

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
	// zmieniona nazwa f

	render() {
		return (

  
			<div className="App">
				<div className="container">
					<h1>{this.state.time}</h1>
					<div className="userInput">
						<input
							onKeyPress={this.handleKeyPress}
							placeholder="ENTER TASK"
							onChange={(e) => this.handleChangeInput(e.target.value)}
							value={this.state.userinput}
							type="text"
							className="input"
						/>
						{this.state.userinput && (
							<div
								className="addButton"
								onClick={() => this.addToList(this.state.userinput)}
							>
								ADD
							</div>
						)}
					</div>
					{this.state.items.length > 0 && (
						<>
							<h1 className="todo">TO DO</h1>

							<div className="toDoListContainer">
								<ul className="toDoList">
									{this.state.items.map((item, index) => (
										<>
											<li onClick={(e) => this.deleteTask(index)} key={index}>
												{item}

												<button
													className="todoCompleted"
													onClick={(e) => this.toDoCompteted(item)}
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
					{this.state.done.length > 0 && <h1 className="done">DONE</h1>}

					{this.state.done.length > 0 && (
						<>
							<div className="doneListContainer">
								<ul className="doneList">
									{this.state.done.map((item, index) => (
										<li onClick={(e) => this.handleDelete(index)} key={index}>
											{item} <span>✔ </span>
										</li>
									))}
								</ul>
							</div>
						</>
					)}
				</div>
			</div>
		);
	}
}
