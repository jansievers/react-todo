const expect = require('expect');
const df = require('deep-freeze-strict');

const reducers = require('reducers');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('searchTextReducer', () => {
           const action = {
               type: 'SET_SEARCH_TEXT',
               searchText: 'dog'
           };
           const res = reducers.searchTextReducer(df(''), df(action));
           expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('showCompletedReducer', () => {
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
                text: 'Gym'
            };
            const res = reducers.todosReducer(df([]), df(action));
            console.log('*** res ***', res.length);
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should toggle a todo', () => {
            let todos = [{
                id: '123',
                text: 'Something',
                completed: true,
                createdAt: 123,
                completedAt: 125
            }];
            const action = {
                type: 'TOGGLE_TODO',
                id: '123'
            };
            const res = reducers.todosReducer(df(todos), df(action));
            expect(res[0].completed).toEqual(false);
            expect(res[0].completedAt).toEqual(undefined);
        });
    });
});
