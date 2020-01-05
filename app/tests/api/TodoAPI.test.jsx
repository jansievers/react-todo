const expect  = require('expect');

const TodoAPI  = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid Todos', () => {
            const todos = [{id: 23,text: 'test text', completed: false }];
            TodoAPI.setTodos(todos);
            const actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos); // Not .toBe() because of object
         });

        it('should not set invalid Todos', () => {
            const badTodos = {id: 23,text: 'test text', completed: false }; // No Array
            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array when bad locale storage data', () => {
            const actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todo if valid array in localstore', () => {
            const todos = [{id: 23,text: 'test text', completed: false }];
            localStorage.setItem('todos', JSON.stringify(todos));
            const actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos); // Not .toBe() because of object
        });
    });

});