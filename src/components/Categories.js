import React, { Component } from 'react'
// import InputForm from './InputForm '
// import BtnIcon from './BtnIcon'
const BtnIcon = (props) => {
  let btnClass ;
  switch(props.type) {
    case 'edit':
      btnClass = 'glyphicon-pencil'
        break;
    case 'add':
      btnClass = 'glyphicon-plus'
        break;
    case 'remove':
      btnClass = 'glyphicon-remove'
        break;
    default:
  }
  return(
    <button type="button" className={`btn btn-default ${props.className}`} onClick={props.action}>
      <span className={ `glyphicon ${btnClass}` }></span>
    </button>
  )
};

class InputForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      text : ''
    }
    this.inputChange = this.inputChange.bind(this);
    this.addCategory = this.addCategory.bind(this);
  }

 inputChange(e){
   this.setState({
       text: e.target.value
    });
  }
  addCategory () {
    let data = {
      id:'',
      parentId:null,
      name: this.state.text
    }
    this.props.action(data)
    this.setState({
        text: ''
     });
  }

  render(){
    return(
      <form className="clearfix btn-input-container" >
        <input
         type="text"
         onChange={this.inputChange}
         className="form-control pull-left"
         placeholder={this.props.placeholder}
         value={this.state.text}
       />
        <BtnIcon
          action={this.addCategory}
          type='add'
          className='pull-right'
        />
      </form>
    )
  }
}

const List = (props) => {
  const editCategory = () => {
    alert('edit')
  }
  const addCategory = () => {
    alert('add')
  }
  const removeCategory = () => {

  }

  return(
    <ul className="list-group">
      <li className="list-group-item clearfix">
        <span className='task-name pull-left'>task1</span>
        <div className="btn-group pull-right">
          <BtnIcon
            action={editCategory}
            type='edit'
          />
          <BtnIcon
            action={editCategory}
            type='add'
          />
          <BtnIcon
            action={editCategory}
            type='remove'
          />
        </div>
      </li>
    </ul>
  )
}

class Categories extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.addCategory = this.addCategory.bind(this)
  }
  addCategory(item){
    this.props.addCategory(item)
  }
  render() {
      return (
        <div className='col-md-5'>
          <div className='categories-container'>
            <InputForm action={this.addCategory} placeholder='Enter category title' />
            <List data={this.state}/>
          </div>
        </div>
      );
    }
  }
export default Categories;
