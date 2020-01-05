const $ = require('jquery');
const uuid = require('node-uuid');

module.exports = {
    setTodos: function (todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function () {
        const stringTodos = localStorage.getItem('todos');
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.error('Cant convert JSON', e);
        }

        return $.isArray(todos) ? todos : [];
    }
};