import React, { Component } from 'react'
import InputBlock from './InputBlock';
import BtnIcon from './BtnIcon';
import List from './List';

class Categories extends Component {
  constructor(props){
    super(props)
    this.state = {}
    this.addCategory = this.addCategory.bind(this)
  }
  addCategory(data){
    this.props.addCategory(data)
  }

  render() {
      return (
        <div className='col-md-5'>
          <div className='categories-container'>
            <InputBlock action={this.addCategory} placeholder='Enter category title' />
          <List data={this.props.data}/>
          </div>
        </div>
      );
    }
  }
export default Categories;
