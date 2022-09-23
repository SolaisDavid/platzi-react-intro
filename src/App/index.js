import React from 'react';
import { AppUI } from "./AppUI";

// Todos los consumers por convenciondeben iniciar con el prefijo 'use'
function useLocalStorage(itemName, initValue) {
  let defaultItem = initValue;

  if (localStorage.getItem(itemName)) {
    defaultItem = JSON.parse(localStorage.getItem(itemName))
  } else {    
    localStorage.setItem(itemName, JSON.stringify(defaultItem));
  }

  const [item, setItem] = React.useState(defaultItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  // En este caso el consumidor del hook espera dos valores en forma de un arreglo:
  // item: Valor del recurso con la que esta trabajando.
  // saveItem: Funcion para poder actualizar el valor del recurso.
  return [item, saveItem]; 
}

function App(props) {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []); // Definimos el uso de un comsumer personalizado

  const [query, setQuery] = React.useState("");
  const doneTodos = todos.filter(i => i.done);
  let filterTodos = [];

  if (query) {
    filterTodos = todos.filter(i => i.text.toLowerCase().includes(query.toLowerCase()));
  }

  const handleDoneTodo = (id) => {
    const index = todos.findIndex(i => i.id === id);
    if (index >= 0) {
      let newTodos = [...todos];
      newTodos[index].done = true;

      saveTodos(newTodos);
    }
  };

  const handleDeleteTodo = (id) => {
    const index = todos.findIndex(i => i.id === id);
    if (index >= 0) {
      let newTodos = [...todos];
      newTodos.splice(index, 1);

      saveTodos(newTodos);
    }
  };

  return (
    <AppUI
      todos={todos}
      doneTodos={doneTodos}
      filterTodos={filterTodos}
      handleDoneTodo={handleDoneTodo}
      handleDeleteTodo={handleDeleteTodo}
      setQuery={setQuery}
      query={query}
    />
  );
}

export default App;
