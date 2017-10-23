import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TasksList from './components/TasksList';
import Categories from './components/Categories';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedCategory:'',
      tasksList:[
        {
          id:'id1',
          done:true,
          taskName:'lear react',
          taskDesription:'some text',
          edit:false,
          category:'react'
        },
        {
          id:'id2',
          done:false,
          taskName:'lear redux',
          taskDesription:'some text 2',
          edit:false,
          category:'react'
        }
      ],
      categoriesList:[
        {
          id:1,
          name:'react',
          parent:null
        },
        {
          id:2,
          name:'redux',
          parent:null
        }
      ]
    }
    this.addCategory = this.addCategory.bind(this)
  }
  addCategory(data){
    let itemId = this.state.categoriesList.length;
    let newCategory = {
      id:itemId+1,
      name:data,
      parent:null
    }
    this.setState({
      categoriesList:[ ...this.state.categoriesList , newCategory]
    })
    console.log(this.state,'app state')
  }


  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <Categories
              addCategory={this.addCategory}
              data={this.state.categoriesList}
            />
            <TasksList data={this.state.tasksList}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
