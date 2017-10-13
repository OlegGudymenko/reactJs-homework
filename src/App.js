import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Timer2  extends Component {
  constructor(props){
    super(props)

    this.state = {
      date : new Date(),
    }
  }

  componentDidMount(){
    setInterval( () => {
      this.setState({
        date : new Date()
      })
    } ,1000);
  }

  render(){
    const { showFullDate } = this.props
    
    if( showFullDate ){
      return(

        <h2> {this.state.date.toLocaleTimeString()}</h2>
      )
    }else{
      return null;
    }
  }
}


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // date : new Date(),
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Timer2 showFullDate />
      </div>
    );
  }
}

export default App;
