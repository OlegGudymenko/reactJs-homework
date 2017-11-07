import {
    ADD_TASK,
    CHANGE_TASK,
    UPDATE_TASK,
    CHANGE_TASK_STATUS,
    SELECT_CATEGORY
  } from './constants'

  const addTask = (data) => ({
      type: ADD_TASK,
      payload: data
    }
  )

  const changeTask = (id) => ({
      type: CHANGE_TASK,
      payload: id
    }
  )

  const updateTask = (id,data) => ({
      type: UPDATE_TASK,
      payload: {
        id: id,
        data: data
      }
    }
  )

  const changeTaskStatue = (id,status) => ({
      type: CHANGE_TASK_STATUS,
      payload: {
        id: id,
        status: status
      }
    }
  )

  const removeCategory = (id) => ({
    type: REMOVE_CATEGORY,
    payload: id
    }
  )
