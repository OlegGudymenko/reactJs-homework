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
          taskName:'learn react',
          taskDesription:'some text',
          edit:false,
          categoryId:'1'
        },
        {
          id:'id2',
          done:false,
          taskName:'learn redux',
          taskDesription:'some text 2',
          edit:false,
          categoryId:'2'
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
    this.selectCategory = this.selectCategory.bind(this)
    this.addTask = this.addTask.bind(this);
    this.changeTask = this.changeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.changeTaskStatus = this.changeTaskStatus.bind(this);
    this.filterTask = this.filterTask.bind(this);
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
      categoriesList:[...newList]
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
        categoriesList:[...newList]
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
  selectCategory(id){
    this.setState({
      selectedCategory:id
    })
  }
addTask(data){
  this.setState({
    tasksList :[ ...this.state.tasksList, data]
  })
}
changeTask(data){
  this.setState({
    taskList :[ ...this.state.tasksList, data]
  })
}
updateTask(data){
  this.setState({
    tasksList :[ ...this.state.tasksList, data]
  })
}
changeTaskStatus(data){
  this.setState({
    taskList :[ ...this.state.tasksList, data]
  })
}

filterTask(){
  let selectedTask = this.state.tasksList.filter( (item) => {
    if( item.categoryId == this.state.selectedCategory ){
      return item
    }
  })
  console.log(selectedTask , 'selectedTask')
  console.log(this.state)
  return selectedTask
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
              selectCategory={this.selectCategory}
              data={this.state.categoriesList}
              selected={this.state.selectedCategory}
            />
          {this.state.selectedCategory
            ? <TasksList
                data={this.filterTask()}
                selected={this.state.selectedCategory}
                changeTask={this.changeTask}
                updateTask={this.updateTask}
                changeTaskStatus={this.changeTaskStatus}
                addTask={this.addTask}
            />
            : null
          }

          </div>
        </div>
      </div>
    );
  }
}
export default App;
