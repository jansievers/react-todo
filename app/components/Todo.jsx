const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
    render: function () {
        const {id, text, completed, createdAt, completedAt} = this.props;
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
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <small>{renderDate()}</small>
            </div>
        );
    }
});

module.exports = Todo;