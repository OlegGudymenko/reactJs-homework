import React, { Component } from 'react';
import BtnIcon from './BtnIcon';
import InputBlock from './InputBlock';

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
  render() {
    console.log(this.props);
    const {
      data,
      selectCategory,
      editCategory,
      removeCategory,
      saveCategoryChanges,
      selectedCategory,
      createSubCategory,
      saveSubCategory,
      children,
      source
    } = this.props;


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
          <InputBlock action={(text) => { saveSubCategory(data.id,  text) }} />
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
                      source={source}
                      selectedCategory={selectedCategory}
                      selectCategory={ (id) => selectCategory(id)}
                      editCategory={(id) => { editCategory(id) }}
                      saveCategoryChanges={(id, text) => { saveCategoryChanges(id, text) }}
                      createSubCategory={(id) => { createSubCategory(id) }}
                      saveSubCategory={(id, parentId, text) => { saveSubCategory(id, parentId, text) }}
                      removeCategory={(id, parentId) => { removeCategory(id, parentId) }}

                    />
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
 export default ListItem
