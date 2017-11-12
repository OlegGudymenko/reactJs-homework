import React, { Component } from 'react';
import TableRow from './TableRow';

const TaskTable = (props) => {
  const {
    changeTask,
    updateTask,
    changeTaskStatus
  } = props
  return(
    <table className="table table-bordered task-table">
      <thead>
        <tr>
          <th>Done</th>
          <th>Task</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          props.taskData.map( (item) => (
            <TableRow
              data={item}
              key={item.id}
              changeTask={(id) => { changeTask(id) }}
              updateTask={(id, data) => { updateTask(id, data) }}
              changeTaskStatus={(id) => { changeTaskStatus(id) }}
            />
          ))
        }
      </tbody>
    </table>
  )
}

export default TaskTable;
