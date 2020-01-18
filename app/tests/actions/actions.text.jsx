const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
    it('should generate search text action', () => {
        const action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'Some search text'
        };
        const res = actions.setSearchText(action.searchText);
        expect(res).isEqual(action);
    });

    it('should generate toggle show completed action', () => {
        const action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        const res = actions.toggleShowCompleted();
        expect(res).isEqual(action);
    });

    it('should generate todo action', () => {
        const action = {
            type: 'ADD_TODO',
            searchText: 'Thing to do'
        };
        const res = actions.addTodo(action.text);
        expect(res).isEqual(action);
    });

    it('should generate toggle todo action', () => {
        const action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        const res = actions.toggleTodo(action.id);
        expect(res).isEqual(action);
    });
});
