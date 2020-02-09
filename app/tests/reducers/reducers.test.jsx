const expect = require('expect');
const df = require('deep-freeze-strict');

const reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            const action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            const res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });

        it('should clear the searchText', () => {
            const action = {
                type: 'CLEAR_SEARCH_TEXT'
            };
            const res = reducers.searchTextReducer(df('Entered text'), df(action));

            expect(res).toEqual('');
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle showCompleted', () => {
            const action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            const res = reducers.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            const action = {
                type: 'ADD_TODO',
                todo: {
                    id: 'abc123',
                    text: 'Something new',
                    completed: false,
                    createdAt: 93123122
                }
            };
            const res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should update todo', () => {
            const todos = [{
                id: '123',
                text: 'Something',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];
            const updates = {
                completed: false,
                completedAt: null
            };
            const action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };
            const res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
        });

        it('should add existing todos', () => {
            const todos = [{
                id: '111',
                text: 'anything',
                completed: false,
                completedAt: undefined,
                createdAt: 33000
            }];
            const action = {
                type: 'ADD_TODOS',
                todos
            };
            // const res = reducers.todosReducer(df([], df(action)));
            // expect(res.length).toEqual(1);
            // expect(res[0]).toEqual(todos[0]);
        });

    });
});
