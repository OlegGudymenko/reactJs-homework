import {
    ADD_TASK,
    CHANGE_TASK,
    UPDATE_TASK,
    CHANGE_TASK_STATUS,
    REMOVE_CATEGORY,
  } from '../actions/constants'
const initialState = []

export const taskList = (state = initialState , action) => {
  switch (action.type) {
    case ADD_TASK: {
      return state
    }
    break;
    case CHANGE_TASK: {
      return state
    }
    break;
    case UPDATE_TASK: {
      return state
    }
    break;
    case CHANGE_TASK_STATUS: {
      return state
    }
    break;
    case REMOVE_CATEGORY: {
      const  newList = state.filter( (item) => {
            if( item.categoryId !== action.payload ){
              return item
            }
          })

      return newList
    }
    break;
    default:
      return state
  }
}
  //
  // const changeTask = (id) => {
  //   let list = props.data;
  //   list.filter( (item) => (
  //     (item.id === id) ? item.edit = !item.edit : null
  //   ))
  //   props.updateTask(list)
  // }
  //
  // const updateTask = (id,data) => {
  //   let list = props.data;
  //     list.filter( (item) => (
  //       (item.id === id) ? (
  //         item.edit = !item.edit,
  //         item.taskName = data )
  //       : null
  //     ))
  //   props.updateTask(list)
  // }
  // const changeTaskStatus = (id,status) => {
  //   let list = props.data;
  //   list.filter( (item) => (
  //     (item.id === id) ? item.done = status : null
  //   ))
  //
  //   props.updateTask(list)
  // }
  // const addTask = (data) => {
  //   let prevId;
  //   let nextId;
  //
  //   if(props.data.length){
  //     prevId = props.data[props.data.length-1].id;
  //     nextId = 'id' + ( Number(prevId.replace(/\D+/g,"")) + 1 );
  //   }else{
  //     nextId = 'id1'
  //   }
  //   let newTask = {
  //     id:nextId,
  //     done:false,
  //     taskName:data,
  //     taskDesription:'',
  //     edit:false,
  //     categoryId:props.selected
  //   }
  //   props.updateTask(newTask)
  // }
