import React, { Component } from 'react'
import InputBlock from './InputBlock';
import BtnIcon from './BtnIcon';
import ListItem from './ListItem';

const Categories = (props) => {
  const {
    data,
    editCategory,
    addSubCategory,
    removeCategory,
    addCategory,
    saveChanges
    } = props
    return (
      <div className='col-md-5'>
        <div className='categories-container'>
          <InputBlock
            action={(data) => { addCategory(data) }}
            placeholder='Enter category title' />
            <ul className="list-group">
              {data.map( (item) => {
                return(
                  <ListItem
                    key={item.id}
                    id={item.id}
                    edit={item.edit}
                    name={item.name}
                    saveChanges={(id,data) => saveChanges(item.id,data)}
                    editCategory={(id) => editCategory(id)}
                    addSubCategory={(id) => addSubCategory(id)}
                    removeCategory={(id) => removeCategory( id)}
                  />
                )
              })}
            </ul>
        </div>
      </div>
    );
  }
export default Categories;
