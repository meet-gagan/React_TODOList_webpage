import React from 'react';

const TodoItem = ({ todo, index, deleteTodo }) => {
  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
