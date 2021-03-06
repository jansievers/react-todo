export const searchTextReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        case 'CLEAR_SEARCH_TEXT':
            return '';
        default:
            return state;
    }
};

export const showCompletedReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
};

export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state, // Spread operater for merging arrays easily
                action.todo
            ];
        case 'TOGGLE_TODOS':
            return [
                ...state,
                ...action.todos
            ];
        case 'UPDATE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                   return {
                       ...todo,
                       ...action.updates
                   }
                } else {
                    return todo;
                }
            });
        case 'ADD_TODOS':
            return [
                ...state,
                ...action.todos
            ];
        default:
            return state;
    }
};
