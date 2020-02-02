const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');

// import './../playground/firebase/index'

/*
// Old local store saving
store.subscribe(() => {
    let state = store.getState();
    TodoAPI.setTodos(state.todos);
});
const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));
*/

store.dispatch(actions.startAddTodos());



// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);
