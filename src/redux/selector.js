import {createSelector} from 'reselect'

export const todoListSelector = (state) => state.todoList
export const searchTextSelector = (state) => state.filters.search
export const statusFilterSelector = (state) => state.filters.status
export const priorityFilterChange = (state) => state.filters.priorities

export const todosRemainingSelector = createSelector(todoListSelector, statusFilterSelector, searchTextSelector, priorityFilterChange,(todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
        if(status === 'All') {
            return priorities.length ? todo.name.toLowerCase().includes(searchText.toLowerCase()) && priorities.includes(todo.priority) : todo.name.toLowerCase().includes(searchText.toLowerCase())
        }
        return todo.name.toLowerCase().includes(searchText.toLowerCase()) && (status === 'Completed' ? todo.completed : !todo.completed) && (priorities.length ? priorities.includes(todo.priority) : true)
    })
} )