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
                text: 'Walk the dog'
            },
            {
                id: uuid(),
                text: 'Clean the yard'
            },
            {
                id: uuid(),
                text: 'Go to gym'
            },
            {
                id: uuid(),
                text: 'Laundry'
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
                    text: todoName
                }
            ]
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
                <TodoList todos={todos}/>
                <AddTodo onHandleAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;