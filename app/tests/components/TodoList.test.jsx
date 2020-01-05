const React = require('react');
const ReactDOM = require('react-dom');
const expect  = require('expect');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

var TodoList = require('app/components/TodoList.jsx');
var Todo = require('app/components/Todo.jsx');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo comp for each item', () => {
    const todos = [
      {id: 1, text: `Do something`},
      {id: 2, text: `Check mail`}
    ];
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should placeholder if no todos', () => {
    const todoList = TestUtils.renderIntoDocument(<TodoList todos={[]}/>);
    const $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });
});
