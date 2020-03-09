const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').configure();

// Initially fill todo list...
store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// Provide CSS also via Webpack
require('style!css!sass!applicationStyles');

// 2. Wire up to HTML and store ⚙️
ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);
