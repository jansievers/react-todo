const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export class AddTodo extends React.Component {
    constructor() {
        super(); // Needed to get all props and stuff from original React Class
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {dispatch} = this.props;
        const todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            // 👉
            dispatch(actions.startAddTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    }

    render() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
}

/*
export var AddTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        const {dispatch} = this.props;
        const todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.startAddTodo(todoText));
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});
*/

export default connect()(AddTodo); // Export and connect to store
