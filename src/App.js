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
          id:'1',
          name:'react',
          parent:null,
          child:true,
          edit:false,
          addChild:false,
        },
        {
          id:'2',
          name:'redux',
          parent:null,
          child:true,
          edit:false,
          addChild:false,
        },
        {
          id:'2.1',
          name:'redux2.1',
          parent:'2',
          child:true,
          edit:false,
          addChild:false,
        },
        {
          id:'2.2',
          name:'redux2.2',
          parent:'2',
          child:false,
          edit:false,
          addChild:false,
        },
        {
          id:'2.1.1',
          name:'redux2.2.1',
          parent:'2.1',
          child:true,
          edit:false,
          addChild:false,
        },
        {
          id:'2.1.1.1',
          name:'redux2.2.1.1',
          parent:'2.1.1',
          child:false,
          edit:false,
          addChild:false,
        },
        {
          id:'1.1',
          name:'react1.1',
          parent:'1',
          child:false,
          edit:false,
          addChild:false,
        },
        {
          id:'1.2',
          name:'react1.2',
          parent:'1',
          child:false,
          edit:false,
          addChild:false,
        }
      ]
    }
    this.addCategory = this.addCategory.bind(this)
    this.editCategory = this.editCategory.bind(this)
    this.createSubCategory = this.createSubCategory.bind(this)
    this.saveSubCategory = this.saveSubCategory.bind(this)
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
      child:false,
      addChild:false,
      edit:false,
    }
    this.setState({
      categoriesList:[ ...this.state.categoriesList , newCategory]
    })
      // console.log(this.state,'app state')
      // console.log(newCategory.id ,'new item id')
      // console.log(this.state ,'state')
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
  createSubCategory(parentId){
    debugger
    let itemIndex ;
    let newItem = this.state.categoriesList.filter( (item,index) => {
      if(item.id == parentId){
        item.addChild = !item.addChild
        item.child = true
        itemIndex = index
        return item
      }
    })
    this.setState({

      categoriesList :[...this.state.categoriesList, ...newItem[0]]
    })
    // console.log(this.state.categoriesList , 'state')
    // console.log(  newItem , '  newItemState', itemIndex , 'itemIndex')

  }
  saveSubCategory(parentId,data){
    let listState = this.state.categoriesList;
    let newId ;
    let newCategory;
    let filterList
    filterList = this.state.categoriesList.filter( (item , index) => {
        if( item.parent === parentId){
          console.log(item.parent , 'item.parent')
              return item
        }
      })
      if( filterList.length > 0 ){
        let idArr = (filterList[filterList.length-1].id).toString().split('.')
        idArr[idArr.length - 1] = Number(idArr[idArr.length - 1]) + 1
        newId = idArr.join('.')
        newCategory = {
          id:newId+'',
          name:data,
          parent:parentId,
          edit:false,
          addChild:false,
          child:false,
        }
      }else{
          newId = parentId + '.' + 1;
          newCategory = {
            id:parseFloat(newId)+'',
            name:data,
            parent:parentId,
            edit:false,
            addChild:false,
            child:false,
          }
      }
      this.createSubCategory(parentId)
      this.setState({
        categoriesList :[...this.state.categoriesList, newCategory]
      })
      console.log(newCategory,'new sub cat')
      console.log(this.state.categoriesList , 'cat kust')
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
              createSubCategory ={this.createSubCategory}
              saveSubCategory={this.saveSubCategory}
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
