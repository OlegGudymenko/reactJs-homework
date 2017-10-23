import React, { Component } from 'react';
import BtnIcon from './BtnIcon';


class TableRow extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue:''
    }
    this.inputChange = this.inputChange.bind(this)
    this.inputSave = this.inputSave.bind(this)
    this.changeTaskStatus = this.changeTaskStatus.bind(this)
  }
  componentWillMount(){
    this.setState({
      inputValue: this.props.item.taskName
    })
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  inputSave(){
    this.props.updateTask( this.props.item.id , this.state.inputValue )
  }
  changeTaskStatus(){
    this.props.changeTask( this.props.item.id )
  }
  render(){
    return(
      <tr className="active" key={this.props.item.id}>
        <td>
          <input type="checkbox"
            checked={this.props.item.done}
            onChange={ () => { this.props.changeTaskStatus( this.props.item.id , !this.props.item.done ) }}/>
        </td>
        <td>
          {
            this.props.item.edit ?
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.inputChange}
              />
           :
            <div>
              <span className=''> {this.props.item.taskName} </span>
              <p className='hidden'> {this.props.item.taskDesription} </p>
            </div>
          }
        </td>
        <td>
          <BtnIcon
            type={this.props.item.edit ? 'save' : 'edit'}
            className='btn-xs'
            action={this.props.item.edit ? this.inputSave
                  : this.changeTaskStatus}/>
        </td>
      </tr>
    )
  }
}

export default TableRow;
