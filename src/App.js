import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedInput:'',
      usersData:[]
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


handleClick(){
  const {selectedInput , usersData } = this.state;

  let userName = selectedInput;
  let key = 'user' + usersData.length
  let newUser = {id:key,name:userName}

  this.setState({usersData:[...usersData , newUser]})
}
handleChange(e){
  this.setState({
    selectedInput:e.target.value
  })
}

  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='col-md-offset-4 col-md-3'>
               <input
                 type="text"
                 className="form-control"
                 placeholder="Username"
                 onChange={this.handleChange}
               />
             <button
               className='btn btn-default btn-lg'
               onClick={this.handleClick}
               style={{width:'100%'}}
               >
               Добавить пользователя
             </button>
             <ul className="list-group">
               {this.state.usersData.map((item,index) =>
                 <li className="list-group-item" key={index}>{item.name}</li>
               )}
            </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
