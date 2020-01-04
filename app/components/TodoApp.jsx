const React = require('react');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

const TodoApp = React.createClass({
    getInitialState: function() {
      return {
        todos: [
            {
                id: 1,
                text: 'Walk the dog'
            },
            {
                id: 2,
                text: 'Clean the yard'
            },
            {
                id: 3,
                text: 'Go to gym'
            },
            {
                id: 4,
                text: 'Laundry'
            }
        ]
      };
    },
    handleAddTodo: function(todoName) {
        alert(todoName);
    },
    render: function () {
        const {todos} = this.state;
        return(
            <div>
                <TodoList todos={todos}/>
                <AddTodo onHandleAddTodo={this.handleAddTodo} />
            </div>
        );
    }
});

module.exports = TodoApp;