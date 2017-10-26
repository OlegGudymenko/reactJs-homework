import React, { Component } from 'react';
import BtnIcon from './BtnIcon';

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
      inputValue:this.props.name
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
      id,
      edit,
      name,
      editCategory,
      addSubCategory,
      removeCategory
    } = this.props
    return(
      <li className="list-group-item clearfix" >
        {edit ?
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.inputChange}
          />
        :
          <span className='task-name pull-left'>{name}</span> }
        <div className="btn-group pull-right">
          {edit ?
            <BtnIcon
              action={this.saveChanges}
              type='save'
            />
          :
            <BtnIcon
              action={() => { editCategory(id) }}
              type='edit'
            />
          }
          <BtnIcon
            action={() => { addSubCategory(id) }}
            type='add'
          />
          <BtnIcon
            action={() => { removeCategory(id) }}
            type='remove'
          />
        </div>
      </li>
    )

  }
}

export default ListItem;
