const React = require('react');
const uuid = require('node-uuid');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');


const TodoApp = React.createClass({
    getInitialState: function() {
      return {
        showCompleted: false,
        searchText: '',
        todos: [
            {
                id: uuid(),
                text: 'Walk the dog',
                completed: false
            },
            {
                id: uuid(),
                text: 'Clean the yard',
                completed: true
            },
            {
                id: uuid(),
                text: 'Go to gym',
                completed: true
            },
            {
                id: uuid(),
                text: 'Laundry',
                completed: false
            }
        ]
      };
    },
    handleAddTodo: function(todoName) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: todoName,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function(id) {
        let updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({
            todos: updatedTodos
        });
    },
    handleSearch: function(showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        });
    },
    render: function () {
        const {todos} = this.state;
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onHandleAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;