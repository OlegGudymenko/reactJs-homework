import React, { Component } from 'react';
import { connect } from 'react-redux'
import TaskTable from './TaskTable';
import InputBlock from './InputBlock';
import {
  addTask,
  changeTask,
  updateTask,
  changeTaskStatus,
  removeCategory
} from '../actions/taskList'


const TasksList = (props) => {
  const {
    addTask,
    changeTask,
    updateTask,
    changeTaskStatus,
    removeCategory,
    selectedCategory,
    taskList
  } = props
  const filterTask = (selectId) => ( taskList.filter( (item) => (
      item.categoryId === selectedCategory ))
    )
  return (
    <div className='col-md-7'>
      <div className='tasksList-container'>
        <div className='pull-right'>
          <InputBlock
               action={(data) => addTask(data,selectedCategory)}
               placeholder='Enter item title'/>
        </div>
        {selectedCategory
           ? <TaskTable
             taskData={filterTask(selectedCategory) }
             updateTask={(id,data) => updateTask(id,data)}
             changeTask={(id) => changeTask(id) }
             changeTaskStatus={(id) => changeTaskStatus(id) }
           />
         : null
        }

      </div>
    </div>
    )
}

const mapStateToProps = (state) => ({
    selectedCategory: state.selectedCategory,
    taskList: state.taskList,
  })



const mapDispatchToProps = (dispatch) => ({
  addTask: (data,categoryId) => dispatch(addTask(data,categoryId)),
  changeTaskStatus: (id) => dispatch(changeTaskStatus(id)),
  changeTask: (id) => dispatch(changeTask(id)),
  updateTask: (id,data) => dispatch(updateTask(id,data))
})

export default connect(mapStateToProps, mapDispatchToProps)(TasksList)
