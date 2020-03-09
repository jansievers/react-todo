const React = require('react');
const {connect} = require('react-redux');
import Todo from 'Todo';
const TodoAPI = require('TodoAPI');

export class TodoList extends React.Component {
    render() {
        const {todos, showCompleted, searchText} = this.props;

        const renderTodos = () => {
            const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
            if (filteredTodos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do! Well done</p>
                );
            }

            return filteredTodos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };

        // In Angular we have *ngFor. React does not have this, lists will be solved via functions
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
}

/*
export var TodoList = React.createClass({
    render: function () {

        const {todos, showCompleted, searchText} = this.props;
        const renderTodos = () => {
            const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
            if (filteredTodos.length === 0) {
                return (
                    <p className="container__message">Nothing To Do! Well done</p>
                );
            }

            return filteredTodos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});
*/

export default connect(
    // Auto-magic apply state to props
    (state) => {
        return state;
    }
)(TodoList);
