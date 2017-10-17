import React, { Component } from 'react';

const BtnGroup = (props) => {
  return(
    <div className="btn-group pull-right">
      <button type="button" className="btn btn-default" onClick={this.editCategory}>
        <span className="glyphicon glyphicon-pencil"></span>
      </button>
      <button type="button" className="btn btn-default" onClick={this.addCategory}>
          <span className="glyphicon glyphicon-plus"></span>
      </button>
      <button type="button" className="btn btn-default" onClick={this.removeCategory}>
          <span className="glyphicon glyphicon-remove"></span>
      </button>
    </div>
  )
};

const Input = (props) => {
  return(
    <div className="clearfix btn-input-container">
      <input type="text" className="form-control pull-left" />
      <button type="button" className="btn btn-default pull-right" onClick={this.addCategory}>
            <span className="glyphicon glyphicon-plus"></span>
      </button>
    </div>
  )
}

const List = (props) => {
  return(
    <ul className="list-group">
      <li className="list-group-item clearfix">
        <span className='task-name pull-left'>task1</span>
        <BtnGroup />
      </li>
    </ul>
  )
}

class Categories extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.editCategory = this.editCategory.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
  }

editCategory(){
  alert('edit')
};
addCategory(){

};
removeCategory(){

};

render() {
    return (
      <div className='col-md-5'>
        <div className='categories-container'>
          <Input />
          <List />
        </div>
      </div>
    );
  }
}
export default Categories;
