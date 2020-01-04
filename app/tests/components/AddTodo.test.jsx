const React = require('react');
const ReactDOM = require('react-dom');
const expect  = require('expect');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

const AddTodo = require('app/components/AddTodo.jsx');

describe('Add Todo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onHandleAddTodo prop with valid data', () => {
      const todoText = 'Check mail';
      const spy = expect.createSpy();
      const addTodo = TestUtils.renderIntoDocument(<AddTodo onHandleAddTodo={spy}/>);
      const $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoName.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onHandleAddTodo prop with empty data', () => {
    const todoText = '';
    const spy = expect.createSpy();
    const addTodo = TestUtils.renderIntoDocument(<AddTodo onHandleAddTodo={spy}/>);
    const $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoName.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
