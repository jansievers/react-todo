import moment from 'moment';
import firebase, {firebaseRef} from "app/firebase";

export const setSearchText = (searchText) => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};

export const clearSearchText = () => {
    return {
        type: 'CLEAR_SEARCH_TEXT'
    };
};

export const toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    };
};

export const startAddTodo = (text) => {
    return (dispatch, getState) => {
        const todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        // Update database
        const todoRef = firebaseRef.child('todos').push(todo);

        // Update UI
        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
};


export const addTodos = (todos) => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};

// Initially add all todos
export const startAddTodos = () => {
    return (dispatch, getState) => {
        const todoRef = firebaseRef.child('todos');

        return todoRef.once('value').then((snapshot) => {
            const todos = snapshot.val() || {};
            let parsedTodos = [];
            // Extract object keys and put then into an array
            Object.keys(todos).forEach((todoId) => {
                parsedTodos.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });
            dispatch(addTodos(parsedTodos));
        });
    };
};

export const updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    };
};

export const startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        const todoRef = firebaseRef.child(`todos/${id}`); // Select checked todo from firebase
        const updates = {
           completed,
           completedAt: completed ? moment().unix() : null
        };
        // Update DB then update UI...
        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates)); 
        }).catch();
    };
};
