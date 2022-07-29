import React, { Component } from 'react';
import './App.scss'

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      items: [],
      userinput: '',
      time: setInterval(() => this.setState({ time: new Date().toLocaleTimeString() }), 1000),
      done: [],
      temperature: 0
    }
  }

  changingInput = (input) => {
    this.setState({
      userinput: input
    })
  };

  addToList = (input) => {
    if (this.state.userinput === '') {
      alert('empty input')
    }
    else{
      const newitems = this.state.items;
      newitems.push(input);
      this.setState({
        items: newitems,
        userinput: ''
      })
    }
  }

  delete = (indexp) => {
    const newarray = this.state.items.filter((item, index)=> index !== indexp);
    this.setState({
      items: newarray
    })
  }

  deleteDone = (indexp) => {
    const newarray = this.state.done.filter((item, index)=> index !== indexp);
    this.setState({
      done: newarray
    });
  }

  addToDone = (e) => {
    const donelist = this.state.done;
    donelist.push(e)
    this.setState({
      done: donelist
    });

    if (this.state.items.length === 1) {
      alert("Good job!", "You clicked the button!", "success");
    }
  }

  handleKeyPress = (event, ) => {
    if (event.key === 'Enter'){
      this.addToList(this.state.userinput);
    }
  }

  render() {
    return <div className='App'>
      <div className='container'>
        <h1>{this.state.time}</h1>
        <div className='userinput'>
          <input onKeyPress={this.handleKeyPress} placeholder='ENTER TASK'
                 onChange={(e)=>this.changingInput(e.target.value)} value={this.state.userinput} type='text' />
          <div className='addbutton' onClick={()=>this.addToList(this.state.userinput)}>ADD</div>
        </div>
        <ul>
          <h1 className='todo'>TO DO</h1>
          {this.state.items.map((item, index) =>
              <li onClick={(e)=>this.delete(index)} key={index}>{item}<button className='left' onClick={(e)=>this.addToDone(item)}>DONE</button> </li>)}
        </ul>
        <ul>
          <h1 className='done'>DONE</h1>
          {this.state.done.map((item, index) =>
              <li onClick={(e)=>this.deleteDone(index)} key={index}>{item} <span>✔</span></li>)}
        </ul>
      </div>
    </div>
  }
}
