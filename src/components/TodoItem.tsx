/* eslint-disable react/prop-types */
import React from 'react';
import './todoItem.css';

interface TodoItemProps {
  todos: Todo;
  toggleTodo: ToggleTodo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todos, toggleTodo }) => {
  const { completed, text } = todos;
  return (
    <div>
      <li className={completed ? 'completed' : ''}>
        <label className={completed ? 'completed' : ''}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleTodo(todos)}
          />
          {text}
        </label>
      </li>
    </div>
  );
};

export default TodoItem;
