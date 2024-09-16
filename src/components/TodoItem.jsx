import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.isComplete}
      onChange={() => onToggle(todo)}
    />
    <span style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}>
      {todo.title}
    </span>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </li>
);

export default TodoItem;