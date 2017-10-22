import React, { Component } from 'react';
import BtnIcon from 'BtnIcon';

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

export default InputForm
