import React, { Component } from 'react';
import BtnIcon from './BtnIcon';


class TableRow extends Component {
  constructor(props){
    super(props)
    this.state = {
      value:''
    }
    this.inputChange = this.inputChange.bind(this)
  }

  componentWillMount(){
    this.setState({
      value: this.props.data.taskName
    })
  }
  inputChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render(){
    const {
      data,
      updateTask,
      changeTask,
      changeTaskStatus,
     } = this.props
    const { value } = this.state
    return(
      <tr className="active" key={data.id}>
        <td>
          <input type="checkbox"
            checked={data.done}
            onChange={ () => { changeTaskStatus( data.id ) }}/>
        </td>
        <td>
          {
            data.edit ?
            <input
              type="text"
              value={value}
              onChange={this.inputChange}
              />
           :
            <div>
              <span className={`${data.done ? 'done-task' : ''}`}>
                 {data.taskName}
               </span>
              <p className='hidden'> {data.taskDesription} </p>
            </div>
          }
        </td>
        <td>
          <BtnIcon
            type={data.edit ? 'save' : 'edit'}
            className='btn-xs'
            action={data.edit
                  ? () => ( updateTask(data.id , value) )
                  : () => ( changeTask(data.id) ) }
                />
        </td>
      </tr>
    )
  }
}

export default TableRow;
