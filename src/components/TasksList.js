import React, { Component } from 'react';
import TableRow from './TableRow';
import TaskTable from './TaskTable';
import InputBlock from './InputBlock';

const TasksList = (props) => {

  const changeTask = (id) => {
    let list = props.data;
    list.filter( (item) => (
      (item.id === id) ? item.edit = !item.edit : null
    ))
    props.updateTask(list)
  }

  const updateTask = (id,data) => {
    let list = props.data;
      list.filter( (item) => (
        (item.id === id) ? (
          item.edit = !item.edit,
          item.taskName = data )
        : null
      ))
    props.updateTask(list)
  }
  const changeTaskStatus = (id,status) => {
    let list = props.data;
    list.filter( (item) => (
      (item.id === id) ? item.done = status : null
    ))
    props.updateTask(list)
  }
  const addTask = (data) => {
    let prevId;
    let nextId;

    if(props.data.length){
      prevId = props.data[props.data.length-1].id;
      nextId = 'id' + ( Number(prevId.replace(/\D+/g,"")) + 1 );
    }else{
      nextId = 'id1'
    }
    let newTask = {
      id:nextId,
      done:false,
      taskName:data,
      taskDesription:'',
      edit:false,
      categoryId:props.selected
    }
    props.updateTask(newTask)
  }
  return (
    <div className='col-md-7'>
      <div className='tasksList-container'>
        <div className='pull-right'>
          <InputBlock  action={addTask} placeholder='Enter item title'/>
        </div>
        <TaskTable
          taskData={props.data}
          updateTask={updateTask}
          changeTask={changeTask}
          changeTaskStatus={changeTaskStatus}
        />
      </div>
    </div>
    );
}
export default TasksList;
