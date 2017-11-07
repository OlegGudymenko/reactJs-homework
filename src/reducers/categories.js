import {
     ADD_CATEGORY,
     EDIT_CATEGORY,
     CREATE_SUB_CATEGORY,
     SAVE_SUB_CATEGORY,
     REMOVE_CATEGORY,
     SAVE_CATEGORY_CHANGES,
     SELECT_CATEGORY
  } from '../actions/constants'
const initialState = [
    {
      id:'1',
      name:'react',
      parent:null,
      edit:false,
      addChild:false,
      child:[]
    },
    {
      id:'2',
      name:'redux',
      parent:null,
      edit:false,
      addChild:false,
      child:['3']
    },
    {
      id:'3',
      name:'redux',
      parent:'1',
      edit:false,
      addChild:false,
      child:[]
    },
]

export const categoriesList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:{
      let itemId ;
      if( state.length ){
        itemId = state[state.length-1].id;
      }else{
        itemId = state.length
      }
      let newCategory = {
        id:Number(itemId)+1+'',
        name:action.payload,
        parent:null,
        child:[],
        edit:false,
      }
      return(
        [...state,newCategory]
      )
    }
      break;
      case EDIT_CATEGORY:{
        let newList = state.filter( (item) => {
            if( item.id === action.payload ){
                item.edit = !item.edit
                  return item
            }
          })
        return(
          [...state,...newList[0]]
        )
      }
      break;
      case CREATE_SUB_CATEGORY:{
        let itemIndex ;
        let newItem = state.filter( (item,index) => {
          if(item.id == action.payload ){
            item.addChild = !item.addChild
            item.child = true
            itemIndex = index
            return item
          }
        })
        return(
          [...state, newItem]
        )
      }
      break;
      case SAVE_SUB_CATEGORY:{
        let listState = state;
        let newId ;
        let newCategory;
        let filterList
        filterList = state.filter( (item , index) => {
            if( item.parent === action.payload[0]){
              console.log(item.parent , 'item.parent')
                  return item
            }
          })
          if( filterList.length > 0 ){
            let idArr = (filterList[filterList.length-1].id).toString().split('.')
            idArr[idArr.length - 1] = Number(idArr[idArr.length - 1]) + 1
            newId = idArr.join('.')
            newCategory = {
              id:newId+'',
              name:action.payload[1],
              parent:action.payload[0],
              edit:false,
              addChild:false,
              child:false,
            }
          }else{
              newId = action.payload[0] + '.' + 1;
              newCategory = {
                id:parseFloat(newId)+'',
                name:action.payload[1],
                parent:action.payload[0],
                edit:false,
                addChild:false,
                child:false,
              }
          }
        return(
          [...state, newCategory]
        )
      }
      break;
      case REMOVE_CATEGORY:{
        let newSelectedCategoryId;
        let newList;
        let newTaskList;
          newList = state.filter( (item) => {
              if( item.id !== action.payload ){
                return item
              }
            })
          return newList
      }
      break;
      case SAVE_CATEGORY_CHANGES:{
        let newList = state.filter( (item) => {
            if( item.id === action.payload.id ){
                item.name = action.payload.data
                item.edit = !item.edit
                return item
            }
          })
        return (
            [...state,...newList[0]]
        )
      }
      break;

    default:
      return state
      break
  }
}
