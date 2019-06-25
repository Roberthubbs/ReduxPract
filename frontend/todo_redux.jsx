import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import { allTodos } from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  const allOfThem = allTodos(store.getState());
  window.store = store;
  window.allTodos = allOfThem;
  ReactDOM.render(<Root store={store} />, root);
})