import React, { Component } from 'react';
// import TableRow from 'TableRow';
// import BtnIcon from 'BtnIcon';
// import InputForm from './InputForm ';
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
    case 'save':
      btnClass = 'glyphicon-ok'
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
    this.addTask = this.addTask.bind(this);
  }

 inputChange(e){
   this.setState({
       text: e.target.value
    });
  }
  addTask () {
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

const TaskTable = (props) => {
  return(
    <table className="table table-bordered task-table">
      <thead>
        <tr>
          <th>Is Done</th>
          <th>Task Name</th>
          <th>icon</th>
        </tr>
      </thead>
      <tbody>
        {
          props.taskData.map( (item) => (
            <TableRow
              item={item}
              key={item.id}
              changeTask={(id,data) => { props.changeTask(id,data) }}
              updateTask={(id,data) => { props.updateTask(id, data) }}
              changeTaskStatus={(id,data) => { props.changeTaskStatus(id,data) }}
            />
          ))
        }
      </tbody>
    </table>
  )
}
class TasksList extends Component {
  constructor(props){
    super(props)
    this.state = {
      taskList:[
        {
          id:'id1',
          done:true,
          taskName:'lear react',
          taskDesription:'some text',
          edit:false
        },
        {
          id:'id2',
          done:false,
          taskName:'lear redux',
          taskDesription:'some text 2',
          edit:false
        }
      ],
      selectedtask:'id1'
    }
    this.addTask = this.addTask.bind(this);
    this.changeTask = this.changeTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.changeTaskStatus = this.changeTaskStatus.bind(this);
  }
  changeTask(id){
    let list = this.state.taskList;
    list.filter( (item) => (
      (item.id === id) ? item.edit = !item.edit : null
    ))
    this.setState({
      taskList :[...list ]
    })
  }
  updateTask(id,data){
    let list = this.state.taskList;
      list.filter( (item) => (
        (item.id === id) ? (
          item.edit = !item.edit,
          item.taskName = data )
        : null
      ))
      this.setState({
        taskList :[...list ]
      })
  }
  changeTaskStatus(id,status){
    let list = this.state.taskList;
    list.filter( (item) => (
      (item.id === id) ? item.done = status : null
    ))
    this.setState({
      taskList :[...list ]
    })
  }
  addTask(){

  }

  render() {
    return (
    <div className='col-md-7'>
      <div className='tasksList-container'>
        <div className='pull-right'>
          <InputForm  action={this.addTask} placeholder='Enter item title'/>
        </div>
        <TaskTable
          taskData={this.state.taskList}
          updateTask={this.updateTask}
          changeTask={this.changeTask}
          changeTaskStatus={this.changeTaskStatus}
        />
      </div>
    </div>
    );
  }
}
export default TasksList;
