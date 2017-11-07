import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import InputBlock from './InputBlock';
import BtnIcon from './BtnIcon';
import ListItem from './ListItem';
import {
  addCategory,
} from '../actions/categories'
import './App.css';

const Categories = (props) => {


  const {
    addCategory,
    categoriesList,
    selectedCategory
    // data,
    // selectCategory,
    // editCategory,
    // createSubCategory,
    // saveSubCategory,
    // removeCategory,
    // addCategory,
    // saveChanges,
    // selected,
    } = props
    // const renderSubList = (itemId,hasChild) => {
    //   console.log(hasChild,'has child')
    //     console.log(itemId,'Item ID')
    //   if( hasChild ){
    //     return(
    //       <ul className="sub-menu">
    //         {data.map( (item) => {
    //           if(itemId == item.parent){
    //             return(
    //               <ListItem
    //                 key={item.id}
    //                 data={item}
    //                 selected={selected}
    //                 selectCategory={(id) => selectCategory(id)}
    //                 saveChanges={(id,data) => saveChanges(item.id,data)}
    //                 editCategory={(id) => editCategory(id)}
    //                 createSubCategory={(id) => createSubCategory(id)}
    //                 saveSubCategory={(id,data) => saveSubCategory(id,data)}
    //                 removeCategory={(id) => removeCategory( id)}>
    //                 {item.child ? renderSubList(item.id , item.child) : null}
    //               </ListItem>
    //               )
    //             }else{return }
    //         })
    //       }
    //       </ul>
    //     )
    //   }else{
    //     return
    //   }
    // }

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
                      source={categoriesList}/>
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
    addCategory: (data) => dispatch(addCategory(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Categories)
