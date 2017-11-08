import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BtnIcon from './BtnIcon';
import InputBlock from './InputBlock';
import {
 selectCategory,
 editCategory,
 createSubCategory,
 saveSubCategory,
 saveCategoryChanges,
 removeCategory
} from '../actions/categories'


// import * as Actions from '../actions/categories'

class ListItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
    this.inputChange = this.inputChange.bind(this);
    this.getCatById = this.getCatById.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data.name !== this.props.data.name) {
      this.setState({
        value: nextProps.data.name
      })
    }
  }

  inputChange(e){
    this.setState({
      value : e.target.value
    })
  }
  getCatById(source, id) {
    for (let i = 0; i < source.length; i++) {
        if (source[i].id === id) {
            return source[i];
          }
      }
    }
  render() {
    console.log(this.props);
    const {
      data,
      selectCategory,
      editCategory,
      saveSubCategory,
      removeCategory,
      saveCategoryChanges,
      selectedCategory,
      createSubCategory,
      children,
      source
    } = this.props;

    // const { createSubCategory } = this.props.categoriesActions;

    const shouldRenderChildren = !!data.child.length;
    const subTree = data.child.map((item) => {
      return  this.getCatById(source, item)
    })
    return(
    <li>
      <div className={`list-item clearfix ${selectedCategory == data.id ? `selected` : `` }`}>
        {data.edit ?
          <input
            type="text"
            value={this.state.value}
            onChange={this.inputChange}
          />
        :
        <span
          className='task-name pull-left'
          onClick={ () => selectCategory(data.id)}>
            {data.name}
        </span> }
        <div className="btn-group pull-right">
          {data.edit ?
            <BtnIcon
              action={() => { saveCategoryChanges(data.id, this.state.value) }}
              type='save'
            />
          :
            <BtnIcon
              action={() => { editCategory(data.id) }}
              type='edit'
            />
          }
          <BtnIcon
            action={() => { createSubCategory(data.id) }}
            type='add'
          />
          <BtnIcon
            action={() => { removeCategory(data.id, data.parent) }}
            type='remove'
          />
        </div>
      </div>
      { data.addChild
        ? <div>
            <h4>Create new sub Category</h4>
            <InputBlock action={(text) => { saveSubCategory(data.id, text) }} />
          </div>
        : null
      }
      {
        shouldRenderChildren && (
          <ul >
              {subTree.map( (item) => {
                  return(
                    <ListItem
                      key={item.id}
                      data={item}
                      source={source}/>
                  )
              }
            )}
            </ul>
          )
      }
    </li>
    )

  }
}

const mapStateToProps = (state) => ({
    selectedCategory: state.selectedCategory,
    categoriesList: state.categoriesList,
  })
//
// const mapDispatchToProps = (dispatch) => ({
//   categoriesActions: bindActionCreators(Actions, dispatch)
// })
const mapDispatchToProps = (dispatch) => ({
    selectCategory: (data) => dispatch(selectCategory(data)),
    editCategory: (data) => dispatch(editCategory(data)),
    createSubCategory: (parentId) => dispatch(createSubCategory(parentId)),
    removeCategory: (id,parentId) => dispatch(removeCategory(id,parentId)),
    saveSubCategory: (id,data) => dispatch(saveSubCategory(id.data)),
    saveCategoryChanges: (id,data) => dispatch(saveCategoryChanges(id,data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
