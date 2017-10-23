import React, { Component } from 'react';
import BtnIcon from './BtnIcon';

const List = (props) => {
  const editCategory = () => {
    alert('edit')
  }
  const addCategory = () => {
    alert('add')
  }
  const removeCategory = () => {

  }
  return(
    <ul className="list-group">
      {props.data.map( (item) => {
        return(
          <li className="list-group-item clearfix" key={item.id}>
            <span className='task-name pull-left'>{item.name}</span>
            <div className="btn-group pull-right">
              <BtnIcon
                action={editCategory}
                type='edit'
              />
              <BtnIcon
                action={editCategory}
                type='add'
              />
              <BtnIcon
                action={editCategory}
                type='remove'
              />
            </div>
          </li>
        )
      })}
    </ul>
  )
}
export default List;
