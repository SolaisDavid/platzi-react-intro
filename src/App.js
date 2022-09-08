import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoCreateButton } from './components/TodoCreateButton';
//import logo from './logo.svg';
//import './App.css';

function App(props) {

  const todos = [
    { text: "Some todo", done: false },
    { text: "Some other todo", done: false },
    { text: "Some other other todo", done: false }
  ];
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      <TodoCreateButton />
    </React.Fragment>
  );
}

export default App;
