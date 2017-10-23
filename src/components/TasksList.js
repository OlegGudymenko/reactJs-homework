import React, { Component } from 'react';
import TableRow from './TableRow';
import TaskTable from './TaskTable';
import InputBlock from './InputBlock';

class TasksList extends Component {
  constructor(props){
    super(props)
    this.state = {
      categoryName:'React',
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
  componentWillMount(){
    console.log(this.props)
  }
  // componentWillReceiveProps(nextProps){
  //   console.log(nextProps , 'task list S')
  // }
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
  addTask(data){
    let list = this.state.taskList
    let prevId = list[list.length-1].id;
    let nextId = 'id' + ( Number(prevId.replace(/\D+/g,"")) + 1 );

    let newTask = {
      id:nextId,
      done:false,
      taskName:data,
      taskDesription:'',
      edit:false,
      category:this.state.categoryName
    }
    this.setState({
      taskList :[ ...list, newTask ]
    })
    console.log(this.state)
  }

  render() {
    return (
    <div className='col-md-7'>
      <div className='tasksList-container'>
        <div className='pull-right'>
          <InputBlock  action={this.addTask} placeholder='Enter item title'/>
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
