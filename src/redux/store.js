// import { createStore} from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composeEnhancers);

// export default store;


// Redux Toolkit Store Setup
import {configureStore} from '@reduxjs/toolkit'
import filtersSlice from "../components/FiltersSlice";
import todoSlice from "../components/TodosSlice";

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoSlice.reducer
    }
})
export default store;