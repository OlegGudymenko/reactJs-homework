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

    const renderSubList = (itemId) => {
      if( itemId ){
        return(
          <ul className="sub-menu">
            {data.map( (subItem) => {
              if(itemId == subItem.parent){
                return(
                  <ListItem
                    key={subItem.id}
                    data={subItem}
                    selected={selected}
                    className={''}
                    selectCategory={(id) => selectCategory(id)}
                    saveChanges={(id,data) => saveChanges(subItem.id,data)}
                    editCategory={(id) => editCategory(id)}
                    createSubCategory={(id) => createSubCategory(id)}
                    removeCategory={(id) => removeCategory( id)}>
                    {renderSubList(subItem.id ,subItem)}
                  </ListItem>
                  )
                }else{return }
            })
          }
          </ul>
        )
      }else{
        return
      }
    }
    return (
      <div className='col-md-5'>
        <div className='categories-container'>
          <InputBlock
            action={(data) => { addCategory(data) }}
            placeholder='Enter category title' />
          <ul className="main-category-list">
              {data.map( (item) => {
                if(!item.parent){
                  return(
                    <ListItem
                      key={item.id}
                      data={item}
                      selected={selected}
                      className={''}
                      selectCategory={(id) => selectCategory(id)}
                      saveChanges={(id,data) => saveChanges(item.id,data)}
                      editCategory={(id) => editCategory(id)}
                      createSubCategory={(id) => createSubCategory(id)}
                      removeCategory={(id) => removeCategory( id)}>
                      {renderSubList(item.id ,item)}
                    </ListItem>
                  )
                }
              }
            )}
            </ul>
        </div>
      </div>
    );
  }
export default Categories;
