
import * as actionsType from './constants'

export const addTask = (data, categoryId) => ({
      type: actionsType.ADD_TASK,
      payload: {
        data: data,
        categoryId: categoryId
      }
    }
  )

export const changeTask = (id) => ({
      type: actionsType.CHANGE_TASK,
      payload: id
    }
  )

export const updateTask = (id,data) => ({
      type: actionsType.UPDATE_TASK,
      payload: {
        taskId: id,
        data: data
      }
    }
  )
export const changeTaskStatus = (id) => ({
      type: actionsType.CHANGE_TASK_STATUS,
      payload: id
    }
  )

export const removeCategory = (id) => ({
    type: actionsType.REMOVE_CATEGORY,
    payload: id
    }
  )
