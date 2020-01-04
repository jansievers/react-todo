const React = require('react');

const AddTodo = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        const todoName = this.refs.todoName.value;

        if (todoName.length > 0) {
            this.refs.todoName.value = '';
            this.props.onHandleAddTodo(todoName);
        } else {
            this.refs.todoName.focus();
        }
    },
    render: function () {
        return(
            <div>
                <form onSubmit={this.handleSubmit} ref="form" className="add-todo-form">
                    <input ref="todoName" type="text" placeholder="Enter todo"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;
