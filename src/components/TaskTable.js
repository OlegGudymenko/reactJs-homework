import React, { Component } from 'react';
import TableRow from './TableRow';

const TaskTable = (props) => {
  return(
    <table className="table table-bordered task-table">
      <thead>
        <tr>
          <th>Is Done</th>
          <th>Task Name</th>
          <th>icon</th>
        </tr>
      </thead>
      <tbody>
        {
          props.taskData.map( (item) => (
            <TableRow
              item={item}
              key={item.id}
              changeTask={(id,data) => { props.changeTask(id,data) }}
              updateTask={(id,data) => { props.updateTask(id, data) }}
              changeTaskStatus={(id,data) => { props.changeTaskStatus(id,data) }}
            />
          ))
        }
      </tbody>
    </table>
  )
}

export default TaskTable;
