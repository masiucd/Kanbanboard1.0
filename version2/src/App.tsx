import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TodoForm from './components/TodoForm';

const initialTodos: Array<Todo> = [
  { id: 'sadas', text: 'walk the dog', completed: false },
  { id: 'sadasw2121', text: 'walk the cat', completed: false },
  { id: '21312pksa', text: 'code code code ', completed: true },
  { id: '_as_asas@12', text: 'go to the gym', completed: false },
];


const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addNewTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' && setTodos([...todos, { id: 'asdas', text: newTodo, completed: false }]);
  };

  const deleteTodo: DeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const editTodo: EditTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, text: updatedTodo } : todo));
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>App</h1>
      <TaskList todosList={todos} deleteTodo={deleteTodo} editTodo={editTodo} toggleTodo={toggleTodo} />
      <TodoForm addNewTodo={addNewTodo} />
    </div>
  );
};

export default App;
