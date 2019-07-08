import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: [
        "Learn React",
        "Climb Old Rag",
        "Run a 5K",
        "Feed the goldfish",
        "Get lunch"
      ],
      task: ""
    }
  }

  changeHandler = (e) => {
    this.setState({task: e.target.value});
  } 

  addTask = (e) => {
    e.preventDefault();
    let tasks = [...this.state.list];
    tasks.push(this.state.task);
    this.setState({list: tasks, task: ""});
  }

  render(){
    return (
      <div classNem="App">
        <hr />
        <h1>Hello Dojo</h1>
        <fieldset><legend>Things I need to do</legend>
        <ol>
          {
            this.state.list.map( (item, i) => 
              <li key={i}>{item}</li>
            )
          }
        </ol>
        
        <form>
          <label htmlFor="thing">New task: </label>
          <input 
            className="form-control" 
            id="thing" 
            name="thing"
            placeholder="Enter Description" 
            onChange={this.changeHandler} 
            value={this.state.task}
          /><span> </span>
          <button className="btn btn-success" onClick={this.addTask}>Add to List</button>
        </form>
        </fieldset>
      </div>
    )
  }
}

export default App;
