const React = require('react');
const ReactDOM = require('react-dom');
const expect  = require('expect');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

var TodoApp = require('app/components/TodoApp.jsx');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo', () => {
    const todoText = 'test text';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('should add todo', () => {
    const todoText = 'test text';
    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    const todo = todoApp.state.todos[0];
    expect(todo.text).toBe(todoText);
    expect(todo.createdAt).toBeA('number');
  });

  it('should toggle', () => {
    const todoData = {id: 11, text: 'Test features', completed: false, createdAd: 0, completedAd: undefined};

    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(typeof todoApp.state.todos[0].completedAt === 'number').toBe(true);
  });

  it('should toggle incomplete', () => {
    const todoData = {id: 11, text: 'Test features', completed: true, createdAd: 0, completedAd: 123};

    const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos:[todoData]});

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

});
