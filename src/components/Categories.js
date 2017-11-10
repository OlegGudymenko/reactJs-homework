import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InputBlock from './InputBlock';
import BtnIcon from './BtnIcon';
import ListItem from './ListItem';
import {
  addCategory,
  selectCategory,
  editCategory,
  saveCategoryChanges,
  createSubCategory,
  saveSubCategory,
  removeCategory
 } from '../actions/categories'
// import * as CategoriesActions from '../actions/categories'
import './App.css';

const Categories = (props) => {
  const {
    addCategory,
    categoriesList,
    selectedCategory,
    selectCategory,
    editCategory,
    saveCategoryChanges,
    createSubCategory,
    removeCategory,
    saveSubCategory,
    } = props
    return (
      <div className='col-md-5'>
        <div className='categories-container'>
          <InputBlock
            action={(data) => {  addCategory(data) }}
            placeholder='Enter category title' />
          <ul className="main-category-list">
              {categoriesList.map( (item) => {
                if(!item.parent){
                  return(
                    <ListItem
                      key={item.id}
                      data={item}
                      source={categoriesList}
                      selectedCategory={selectedCategory}
                      selectCategory={ (id) => selectCategory(id)}
                      editCategory={(id) => { editCategory(id) }}
                      saveCategoryChanges={(id, text) => { saveCategoryChanges(id, text) }}
                      createSubCategory={(id) => { createSubCategory(id) }}
                      removeCategory={(id, parentId) => { removeCategory(id, parentId) }}
                      saveSubCategory={(id, text) => { saveSubCategory(id, text) }}
                    />
                  )
                }
              }
            )}
            </ul>
        </div>
      </div>
    )
  }


const mapStateToProps = (state) => ({
    selectedCategory: state.selectedCategory,
    categoriesList: state.categoriesList
  })



const mapDispatchToProps = (dispatch) => ({
    // CategoriesActions: bindActionCreators(CategoriesActions, dispatch)
    // addCategory: () => dispatch(addCategory(  )),
    selectCategory: (id) => dispatch(selectCategory(id)),
    editCategory: (id) => dispatch(editCategory(id)),
    saveCategoryChanges: (id, text) => dispatch(saveCategoryChanges(id, text)),
    createSubCategory: (id) => dispatch(createSubCategory(id)),
    removeCategory: (id,parentId) => dispatch(removeCategory(id,parentId)),
    saveSubCategory: (id, text) => dispatch(saveSubCategory(id, text)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
