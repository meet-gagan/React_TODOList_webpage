import React from 'react';
import ToDoItem from '../Components/ToDoItems';

const ToDoList = ({ ToDos, deleteToDo }) => {
  return (
    <ul>
      {todos.map((ToDo, index) => (
        <ToDoItem key={index} ToDo={ToDo} index={index} deleteToDo={deleteToDo} />
      ))}
    </ul>
  );
};

export default TodoList;
