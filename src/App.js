import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TasksList from './TasksList';
import Categories from './Categories';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <Categories />
            <TasksList />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
