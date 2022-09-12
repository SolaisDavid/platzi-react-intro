import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoCreateButton } from './components/TodoCreateButton';
//import logo from './logo.svg';
//import './App.css';

const defaultTodos = [
  { id: 1, text: "First TODO", done: false },
  { id: 2, text: "Second TODO", done: false },
  { id: 3, text: "Third TODO", done: false },
];

function App(props) {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [query, setQuery] = React.useState("");
  const doneTodos = todos.filter(i => i.done);
  let filterTodos = [];

  if (query) {
    filterTodos = todos.filter(i => i.text.toLowerCase().includes(query.toLowerCase()));
  }

  const handleDoneTodo = (id) => {
    const index = todos.findIndex(i => i.id == id);
    if (index >= 0) {
      let newTodos = [...todos];
      newTodos[index].done = true;

      setTodos(newTodos);
    }
  };

  const handleDeleteTodo = (id) => {
    const index = todos.findIndex(i => i.id == id);
    if (index >= 0) {
      let newTodos = [...todos];
      newTodos.splice(index, 1);

      setTodos(newTodos);
    }
  };

  return (
    <React.Fragment>
      <TodoCounter
        done={doneTodos.length}
        total={todos.length}
      />
      <TodoSearch
        query={query}
        setQuery={setQuery}
      />
      <TodoList
        todos={filterTodos.length ? filterTodos : todos}
        handleDoneTodo={handleDoneTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
      <TodoCreateButton />
    </React.Fragment>
  );
}

export default App;
