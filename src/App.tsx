import React, { useState } from 'react';

import './App.css';
import TodoList from './components/TodoList';

const initialTodos: Array<Todo> = [
  { text: 'walk the dog', completed: false },
  { text: 'walk the cat', completed: false },
  { text: 'code code code ', completed: false },
  { text: 'go to the gym', completed: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
// <TodoItem todo={todos[0]} toggleTodo={toggleTodo} />
// {todos.map(t => (
//   <TodoItem key={t.id} todos={t} toggleTodo={toggleTodo} />
// ))}
