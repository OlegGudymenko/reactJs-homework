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
    this.setState({
      value: nextProps.data.name
    })
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
  render(){
    const {
      data,
      selectCategory,
      editCategory,
      saveSubCategory,
      createSubCategory,
      removeCategory,
      saveCategoryChanges,
      selectedCategory,
      children,
      source
    } = this.props

    const shouldRenderChildren = !!data.child.length;
    // debugger
    console.log(data.child,'data chidl',data,'data')
    const subTree = data.child.map(id => this.getCatById(source, id));
    console.log(subTree,'subTree')
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
            action={() => { removeCategory(data.id) }}
            type='remove'
          />
        </div>
      </div>
      { data.addChild
        ? <div>
            <h4>Create new sub Category</h4>
          <InputBlock
            action={(text) => { saveSubCategory(data.id, text) }}/>
          </div>
        : null

      }
      {/* {
        shouldRenderChildren && (
          <ul className="main-category-list">
              {subTree.map( (item) => {
                  return(
                    <ListItem
                      key={item.id}
                      data={subTree}
                      source={source}/>
                  )
              }
            )}
            </ul>
          )
      } */}
    </li>
    )

  }
}

const mapStateToProps = (state) => ({
    selectedCategory: state.selectedCategory,
    categoriesList: state.categoriesList,
  })

const mapDispatchToProps = (dispatch) => ({
    selectCategory: (data) => dispatch(selectCategory(data)),
    editCategory: (data) => dispatch(editCategory(data)),
    createSubCategory: (data) => dispatch(createSubCategory(data)),
    removeCategory: (id) => dispatch(removeCategory(id)),
    saveSubCategory: (data) => dispatch(saveSubCategory(data)),
    saveCategoryChanges: (id,data) => dispatch(saveCategoryChanges(id,data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ListItem)
