'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * action types
 */

var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var COMPLETE_TODO = exports.COMPLETE_TODO = 'COMPLETE_TODO';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBLITY_FILTER';

/*
 * other constants
 */

var VisibilityFilters = exports.VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * Action creators
 */

var addTodo = exports.addTodo = function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  };
};

var completeTodo = exports.completeTodo = function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index: index
  };
};

var setVisibilityFilter = exports.setVisibilityFilter = function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter: filter
  };
};
//# sourceMappingURL=actions.js.map