import React, { Component } from 'react';

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
    <div class="input-group">
      <input type="text" class="form-control" />
      <span class="input-group-btn">
        <button type="button" className="btn btn-default" onClick={this.addCategory}>
            <span className="glyphicon glyphicon-plus"></span>
        </button>
      </span>
  </div>
  )
}


const List = (props) => {
  return(
    <ul className="list-group">
      <li className="list-group-item">
        <span className='task-name pull-left'>task1</span>
        <BtnGroup />
      </li>
    </ul>
  )
}

  render() {
    return (
      <div className='col-md-5'>
        <input type="text"
          className="form-control"/>
        <List />
      </div>
    );
  }
}
export default Categories;
