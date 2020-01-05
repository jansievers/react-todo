const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
    render: function () {
        const {id, text, completed, createdAt, completedAt} = this.props;
        let todoClassName = completed ? 'todo todo__completed' : 'todo';
        const renderDate = () => {
            let message = 'Created ';
            let timeStamp = createdAt;

            if (completed) {
                message = 'Completed ';
                timeStamp = completedAt;
            }

            return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
        };
        return(
            <div className={todoClassName} onClick={() => {
                this.props.onToggle(id);
            }}>
                <div>
                    <input type="checkbox" checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo_subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
});

module.exports = Todo;