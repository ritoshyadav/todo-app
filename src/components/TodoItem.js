import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.todo}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
