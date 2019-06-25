import React from 'react';
import { Provider } from 'react-redux';
import TodoIndexContainer from './TodoIndexContainer';
import TodoFormContainer from './TodoFormContainer';
import allTodos from '../reducers/selectors';


const Root = (props) => (
  <Provider store={props.store}>
    <TodoFormContainer />
    <TodoIndexContainer />
  </Provider>
)

export default Root;