import {
     SELECT_CATEGORY,
     REMOVE_CATEGORY
  } from '../actions/constants'
const initialState = ''

export const selectedCategory = (state = initialState , action) => {
  switch (action.type) {
    case SELECT_CATEGORY:{
      return action.payload;
    }
    break;
    case REMOVE_CATEGORY:{
      if( action.payload === state){
          return  ''
      }else{
        return state
      }
    }
    break;
    default:
      return state
  }
}
