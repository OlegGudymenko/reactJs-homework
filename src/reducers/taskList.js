import {
    ADD_TASK,
    CHANGE_TASK,
    UPDATE_TASK,
    CHANGE_TASK_STATUS,
    REMOVE_CATEGORY,
  } from '../actions/constants'

const initialState = [
  {
    id:'task1',
    done:true,
    taskName:'learn react',
    taskDesription:'some text',
    edit:false,
    categoryId:'1'
  },
  {
    id:'task2',
    done:false,
    taskName:'learn reudx',
    taskDesription:'some text',
    edit:false,
    categoryId:'1'
  },
]

export const taskList = (state = initialState , action) => {
  switch (action.type) {
    case ADD_TASK: {
      const { data, categoryId } = action.payload

      let newTask = {
        id:'task' + (state.length + 1 ),
        done:false,
        taskName:data,
        taskDesription:'',
        edit:false,
        categoryId:categoryId
      }
      return [...state, newTask]
    }
    break;
    case CHANGE_TASK: {
      const task = state.find( (item) => (item.id === action.payload) )
        task.edit= !task.edit
      return [...state, ...task]
    }
    break;
    case UPDATE_TASK: {
      const { taskId, data } = action.payload
      const task = state.find( (item) => (item.id === taskId) )
        task.edit= !task.edit
        task.taskName = data
      return [...state, ...task]
    }
    break;
    case CHANGE_TASK_STATUS:  {
      const task = state.find( (item) => (item.id === action.payload) )
        task.done = !task.done
      return [...state, ...task]
    }
    break;
    case REMOVE_CATEGORY: {
      const newList = state.filter( (item) => {
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
