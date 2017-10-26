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
          parent:null,
          edit:false,
        },
        {
          id:2,
          name:'redux',
          parent:null,
          edit:false,
        }
      ]
    }
    this.addCategory = this.addCategory.bind(this)
    this.editCategory = this.editCategory.bind(this)
    this.addSubCategory = this.addSubCategory.bind(this)
    this.removeCategory = this.removeCategory.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
  }
  addCategory(data){
    let itemId = this.state.categoriesList.length;
    let newCategory = {
      id:itemId+1,
      name:data,
      parent:null,
      edit:false,
    }
    this.setState({
      categoriesList:[ ...this.state.categoriesList , newCategory]
    })
    console.log(this.state,'app state')
  }
  editCategory(id){
    console.log(id)
    let newList = this.state.categoriesList.map( (item) => {
        if( item.id === id ){
            item.edit = !item.edit
        }
        return item
      })
    this.setState({
      categoriesList:newList
    })
  }
  addSubCategory(id){
    console.log('addSub',id)
  }
  removeCategory(id){
    let newList = this.state.categoriesList.filter( (item) => {
        if( item.id !== id ){
          return item
        }
      })
      this.setState({
        categoriesList:newList
      })
  }

  saveChanges(id,data){
    let newList = this.state.categoriesList.map( (item) => {
        if( item.id === id ){
            item.name = data
            item.edit = !item.edit
        }
        return item
      })
    this.setState({
      categoriesList:newList
    })
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <Categories
              addCategory={this.addCategory}
              editCategory={this.editCategory}
              addSubCategory={this.addSubCategory}
              removeCategory={this.removeCategory}
              saveChanges={this.saveChanges}
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
