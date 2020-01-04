const React = require('react');
const ReactDOM = require('react-dom');
const expect  = require('expect');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

var Todo = require('app/components/Todo.jsx');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });
});
