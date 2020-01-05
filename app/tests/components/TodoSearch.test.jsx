const React = require('react');
const ReactDOM = require('react-dom');
const expect  = require('expect');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

const TodoSearch = require('app/components/TodoSearch.jsx');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    const searchText = 'Dog';
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper checked value', () => {
    const spy = expect.createSpy();
    const todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, '');
  });
});
