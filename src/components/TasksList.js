import React, { Component } from 'react';
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
const TaskTable = (props) => {
  const updateTask = () => {
  }
  const changeTask = () => {
    props.changeTask()
  }
  const changeTaskStatus = () => {
    props.changeTaskStatus()
  }
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
                <tr className="active" key={item.id}>
                  <td>
                    <input type="checkbox"
                      checked={item.done}
                      onChange={changeTaskStatus}/>
                  </td>
                  <td>
                    <span className=''> {item.taskName} </span>
                    <p className='hidden'>{item.taskDesription}</p>
                  </td>
                  <td>
                    <BtnIcon
                      type='edit'
                      className='btn-xs'
                      action={changeTask}
                    />
                  </td>
                </tr>
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
  }
  changeTask(id,status){
    this.setState({
      // taskList.id
    })
  }
  updateTask(data){

  }
  changeTaskStatus(id){
    let list = this.state.taskList;

    // list.filter( (item) => (
    //   if(item.id === id){
    //     item.done = !item.done
    //   }
    // ))
    // console.log(list)
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
