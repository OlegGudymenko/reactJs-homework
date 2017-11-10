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
      child:['2.1']
    },
    {
      id:'2.1',
      name:'redux3',
      parent:'2',
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
            itemIndex = index
            return item
          }
        })
        return(
          [...state, ...newItem[0]]
        )
      }
      break;
      case SAVE_SUB_CATEGORY:{
        let newId, childlength, newCategory, newState
        const itemId = action.payload.itemId
        const data = action.payload.data

        newState = state.map( (item) => {
          if( item.id === itemId ){
            childlength = item.child.length + 1
            newId = (itemId + '.' + childlength ).toString()
            item.addChild = !item.addChild
          }
          return item
        })
        newCategory = {
          id: newId,
          name: data,
          parent: itemId,
          edit: false,
          addChild: false,
          child: [],
        }

       newState = [...newState, ...newCategory ]
        return (
          [...state, ...newState ]
        )
      }
      break;
      case REMOVE_CATEGORY:{
        let newList = state.filter( (item) => {
            if( item.id !== action.payload.itemId ){
              return item
            }
          }).map( (item) => {
            if( item.child.indexOf(action.payload.itemId) != -1 ){
              item.child.splice(item.child.indexOf(action.payload.itemId), 1)
            }
            return item
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
