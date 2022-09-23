import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoCreateButton } from '../components/TodoCreateButton';

function AppUI({
    todos,
    doneTodos,
    filterTodos,
    handleDoneTodo,
    handleDeleteTodo,
    setQuery,
    query
}) {
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

export { AppUI };