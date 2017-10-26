import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TasksList from './components/TasksList';
import Categories from './components/Categories';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedCategoryId:'',
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
    this.updateTask = this.updateTask.bind(this);
    this.filterTask = this.filterTask.bind(this);
  }
  addCategory(data){
    let itemId ;
    if( this.state.categoriesList.length ){
      itemId = this.state.categoriesList[this.state.categoriesList.length-1].id;
    }else{
      itemId = this.state.categoriesList.length
    }
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
    console.log(newCategory.id ,'new item id')
    console.log(this.state ,'state')
  }
  editCategory(id){
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
    let newSelectedCategoryId;
    let newList;
    let newTaskList;
      newList = this.state.categoriesList.filter( (item) => {
          if( item.id !== id ){
            return item
          }
        })
      newTaskList = this.state.tasksList.filter( (item) => {
          if( item.categoryId !== id ){
            return item
          }
        })
      if( id === this.state.selectedCategoryId){
          newSelectedCategoryId = ''
      }else{
        newSelectedCategoryId = this.state.selectedCategoryId
      }
      this.setState({
        categoriesList:[...newList],
        selectedCategoryId:newSelectedCategoryId,
        tasksList :[ ...newTaskList]
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
      selectedCategoryId:id
    })
  }

updateTask(data){
  this.setState({
    tasksList :[ ...this.state.tasksList, data]
  })
}
filterTask(){
  let selectedTask = this.state.tasksList.filter( (item) => {
    if( item.categoryId == this.state.selectedCategoryId ){
      return item
    }
  })
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
              selected={this.state.selectedCategoryId}
            />
          {this.state.selectedCategoryId
            ? <TasksList
                data={this.filterTask()}
                selected={this.state.selectedCategoryId}
                updateTask={this.updateTask}
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
