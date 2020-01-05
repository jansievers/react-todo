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

    describe('filterTodos', () => {
        const todos = [
            {
                id: 1,
                text: 'Some text here',
                completed: true
            },
            {
                id: 2,
                text: 'Other text here',
                completed: false
            },
            {
                id: 3,
                text: 'Some text here',
                completed: true
            }
        ];

        it('should return all items if showCompleted is true', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(todos.length);
        });

        it('should return not completed items if showCompleted is false', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });


        it('should filter todos by searchText', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        });

        it('should return all todos if searchText is empty', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
});
