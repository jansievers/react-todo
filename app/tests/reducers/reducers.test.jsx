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
});
