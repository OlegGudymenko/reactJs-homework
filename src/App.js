import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TasksList from './components/TasksList';
import Categories from './components/Categories';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories:[
        {
          id:1,
          name:'item1'
        },
        {
          id:2,
          name:'item2'
        }
      ],
      selectedCategory:'',

      tasksList:[],
      // selectedtask

    }
    this.addCategory = this.addCategory.bind(this)
  }

  addCategory(data){
    let itemId;
    if(!data.parentId){
      itemId = this.state.categories.length + 1;
      data.id = itemId ;
    }
    this.setState({
      categories:[ ...this.state.categories , data]
    })
    console.log(data ,'data')
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          <div>{this.state.categories[0].name}</div>
          <div className='row'>
            <Categories addCategory={this.addCategory}/>
            <TasksList />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
