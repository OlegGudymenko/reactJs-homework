import React, { Component } from 'react';
import BtnIcon from './BtnIcon';
import InputBlock from './InputBlock';

class ListItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ''
    }
    this.inputChange = this.inputChange.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }
  componentWillMount(){
    this.setState({
      inputValue:this.props.data.name
    })
  }
  saveChanges(id){
    this.props.saveChanges(id , this.state.inputValue)
  }
  inputChange(e){
    this.setState({
      inputValue : e.target.value
    })
  }
  render(){
    const {
      data,
      selectCategory,
      editCategory,
      saveSubCategory,
      createSubCategory,
      removeCategory,
      selected,
      className,
      children
    } = this.props
    return(
    <li>
      <div className={`list-item clearfix ${selected == data.id ? `selected` : `` }`}>
        {data.edit ?
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.inputChange}
          />
        :
        <span
          className='task-name pull-left'
          onClick={ () => selectCategory(data.id)}
          >{data.name}</span> }
        <div className="btn-group pull-right">
          {data.edit ?
            <BtnIcon
              action={this.saveChanges}
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
      {children}
    </li>
    )

  }
}

export default ListItem;
