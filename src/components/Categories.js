import React, { Component } from 'react'
import InputBlock from './InputBlock';
import BtnIcon from './BtnIcon';
import ListItem from './ListItem';

const Categories = (props) => {
  const {
    data,
    selectCategory,
    editCategory,
    createSubCategory,
    removeCategory,
    addCategory,
    saveChanges,
    selected,
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
                    data={item}
                    selected={selected}
                    selectCategory={(id) => selectCategory(id)}
                    saveChanges={(id,data) => saveChanges(item.id,data)}
                    editCategory={(id) => editCategory(id)}
                    createSubCategory={(id) => createSubCategory(id)}
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
