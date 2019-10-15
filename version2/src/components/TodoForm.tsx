import * as React from 'react';

interface TodoForm {
  addNewTodo: AddTodo;
}

const TodoForm: React.FC<TodoForm> = ({ addNewTodo }) => {
  const [newTodo, setNewTodo] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit">Add new Todo 🙌</button>
    </form>
  );
};
export default TodoForm;
