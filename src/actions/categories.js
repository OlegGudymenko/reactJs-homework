import * as actionsType from './constants'


export const addCategory = (data) => ({
    type: actionsType.ADD_CATEGORY,
    payload: data
  }
)
export const editCategory = (id) => ({
    type: actionsType.EDIT_CATEGORY,
    payload: id
  }
)
export const createSubCategory = (parentId) => ({
    type: actionsType.CREATE_SUB_CATEGORY,
    payload: parentId
  }
)
export const saveSubCategory = (parentId,data) => ({
    type: actionsType.SAVE_SUB_CATEGORY,
    payload: {
      parentId: parentId,
      data: data
    }
  }
)
export const removeCategory = (id,parentId) => ({
    type: actionsType.REMOVE_CATEGORY,
    payload: {
      id:id,
      parent:parentId
    }
  }
)
export const saveCategoryChanges = (id,data) => ({
    type: actionsType.SAVE_CATEGORY_CHANGES,
    payload: {
      id: id,
      data: data
    }
  }
)
export const selectCategory = (id) => ({
    type: actionsType.SELECT_CATEGORY,
    payload: id
  }
)
