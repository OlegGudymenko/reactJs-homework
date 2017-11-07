import {
     ADD_CATEGORY,
     EDIT_CATEGORY,
     CREATE_SUB_CATEGORY,
     SAVE_SUB_CATEGORY,
     REMOVE_CATEGORY,
     SAVE_CATEGORY_CHANGES,
     SELECT_CATEGORY
  } from './constants'


export const addCategory = (data) => ({
    type: ADD_CATEGORY,
    payload: data
  }
)
export const editCategory = (id) => ({
    type: EDIT_CATEGORY,
    payload: id
  }
)
export const createSubCategory = (parentId) => ({
    type: CREATE_SUB_CATEGORY,
    payload: parentId
  }
)
export const saveSubCategory = (parentId,data) => ({
    type: SAVE_SUB_CATEGORY,
    payload: {
      parentId: parentId,
      data: data
    }
  }
)
export const removeCategory = (id) => ({
    type: REMOVE_CATEGORY,
    payload: id
  }
)
export const saveCategoryChanges = (id,data) => ({
    type: SAVE_CATEGORY_CHANGES,
    payload: {
      id: id,
      data: data
    }
  }
)
export const selectCategory = (id) => ({
    type: SELECT_CATEGORY,
    payload: id
  }
)
