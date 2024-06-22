import React, { useState } from 'react';
import './App.css';
import TodoForm from './Components/ToDoForm';
import TodoList from './Components/ToDoList';


const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <main>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </main>
    </div>
  );
};

export default App;
