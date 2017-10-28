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
    saveSubCategory,
    removeCategory,
    addCategory,
    saveChanges,
    selected,
    } = props

    const renderSubList = (itemId,hasChild) => {
      console.log(hasChild,'has child')
        console.log(itemId,'Item ID')
      // debugger
      if( hasChild ){
        return(
          <ul className="sub-menu">
            {data.map( (item) => {
              if(itemId == item.parent){
                return(
                  <ListItem
                    key={item.id}
                    data={item}
                    selected={selected}
                    selectCategory={(id) => selectCategory(id)}
                    saveChanges={(id,data) => saveChanges(item.id,data)}
                    editCategory={(id) => editCategory(id)}
                    createSubCategory={(id) => createSubCategory(id)}
                    saveSubCategory={(id,data) => saveSubCategory(id,data)}
                    removeCategory={(id) => removeCategory( id)}>
                    {item.child ? renderSubList(item.id , item.child) : null}
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
                      saveSubCategory={(id,data) => saveSubCategory(id,data)}
                      removeCategory={(id) => removeCategory( id)}>
                      {renderSubList(item.id ,item.child)}
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
