import {combineReducers} from 'redux';
import todosReducer from './todos_reducer';
import React from 'react';
const rootReducer = combineReducers ({
  todos: todosReducer
})

export default rootReducer; 