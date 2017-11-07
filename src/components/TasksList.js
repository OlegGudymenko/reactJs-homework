import React, { Component } from 'react';
import { connect } from 'react-redux'
// import TableRow from './TableRow';
// import TaskTable from './TaskTable';
import InputBlock from './InputBlock';



class TasksList extends Component{


  render(){
    return (
      <div className='col-md-7'>
        <div className='tasksList-container'>
          <div className='pull-right'>
            <InputBlock
                // action={addTask}
                 placeholder='Enter item title'/>
          </div>
          {/* <TaskTable
            taskData={props.data}
            updateTask={updateTask}
            changeTask={changeTask}
            changeTaskStatus={changeTaskStatus}
          /> */}
        </div>
      </div>
      )
  }
}
export default TasksList;
