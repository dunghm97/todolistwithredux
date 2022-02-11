import filtersReducer from "../components/FiltersSlice";
import todoListReducer from "../components/TodosSlice";
import {combineReducers} from 'redux'
// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
    filters: filtersReducer, 
    todoList: todoListReducer
})

export default rootReducer;