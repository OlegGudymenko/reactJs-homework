import { combineReducers } from 'redux';
import { taskList } from './taskList';
import { categoriesList } from './categories';
import { selectedCategory } from './others';

const rootReducer = combineReducers({
    categoriesList,
    taskList,
    selectedCategory
});

export default  rootReducer
